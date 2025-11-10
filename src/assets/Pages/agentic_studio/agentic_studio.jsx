import React, { useState, useRef, useEffect } from "react";
import styles from "./agentic.module.css";
import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineCpuChip,
  HiPlus,
  HiArrowUp,
  HiTrash,
} from "react-icons/hi2";

const defaultFirstMessage = {
  id: 1,
  text: "Hello! I'm your AI assistant. How can I help you today?",
  sender: "ai",
  timestamp: new Date().toISOString(),
};

const makeNewConversation = () => ({
  id: Date.now(),
  title: "New Chat",
  messages: [],
});

const AgenticStudio = () => {
  // Load saved or ensure at least one conversation
  const [conversations, setConversations] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("agentic_conversations") || "null");
      if (!saved || !Array.isArray(saved) || saved.length === 0) return [makeNewConversation()];
      return saved;
    } catch {
      return [makeNewConversation()];
    }
  });

  // Ensure a default active conversation exists
  const [activeConvId, setActiveConvId] = useState(() => {
    return (conversations && conversations[0] && conversations[0].id) || makeNewConversation().id;
  });

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const chatWindowRef = useRef(null);
  const activeConversation = conversations.find((c) => c.id === activeConvId) || conversations[0];

  // persist
  useEffect(() => {
    localStorage.setItem("agentic_conversations", JSON.stringify(conversations));
  }, [conversations]);

  // one-time migration: remove old default AI seed message in saved conversations
  useEffect(() => {
    setConversations((prev) =>
      prev.map((c) => {
        if (
          Array.isArray(c.messages) &&
          c.messages.length === 1 &&
          c.messages[0]?.sender === "ai" &&
          c.messages[0]?.text === defaultFirstMessage.text
        ) {
          return { ...c, messages: [] };
        }
        return c;
      })
    );
  }, []);

  // auto-scroll whenever messages change
  useEffect(() => {
    const container = chatWindowRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  }, [conversations, activeConvId, isTyping]);

  // typing simulation helper (letter by letter)
  const typeTextIntoLastAiMessage = (fullText, speed = 18) =>
    new Promise((resolve) => {
      let i = 0;
      const id = setInterval(() => {
        setConversations((prev) => {
          const copy = prev.map((c) => ({ ...c }));
          const idx = copy.findIndex((c) => c.id === activeConvId);
          if (idx === -1) return prev;
          const conv = { ...copy[idx], messages: [...copy[idx].messages] };
          const last = conv.messages.length - 1;
          if (last >= 0 && conv.messages[last].sender === "ai") {
            conv.messages[last] = { ...conv.messages[last], text: fullText.slice(0, i) };
          }
          copy[idx] = conv;
          return copy;
        });
        i++;
        if (i > fullText.length) {
          clearInterval(id);
          resolve();
        }
      }, speed);
    });

  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    // append user msg
    setConversations((prev) =>
      prev.map((c) => (c.id === activeConvId ? { ...c, messages: [...c.messages, userMsg] } : c))
    );

    // update title if it's default
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConvId && c.title === "New Chat"
          ? { ...c, title: userMsg.text.slice(0, 25) + (userMsg.text.length > 25 ? "..." : "") }
          : c
      )
    );

    const snapshot = inputValue.trim();
    setInputValue("");
    setIsLoading(true);
    setIsTyping(true);

    // generate response
    setTimeout(async () => {
      let responseText = "I'm your AI assistant. How can I help you?";
      const lower = snapshot.toLowerCase();
      if (lower.includes("z.hire") || lower.includes("hire")) {
        responseText = "Z.Hire is our recruitment platform. Would you like to go to Z.Hire now?";
      } else if (lower.includes("z.flow")) {
        responseText = "Z.Flow is our workflow automation tool. Would you like to learn more about it?";
      } else if (lower.includes("z.qui")) {
        responseText = "Z.Qui is our quiz and assessment platform. How can I assist you with it?";
      } else if (lower.includes("gider")) {
        responseText = "gidER is our expense management solution. What would you like to know?";
      }

      const aiPlaceholder = { id: Date.now() + 1, text: "", sender: "ai", timestamp: new Date().toISOString() };

      setConversations((prev) =>
        prev.map((c) => (c.id === activeConvId ? { ...c, messages: [...c.messages, aiPlaceholder] } : c))
      );

      await new Promise((r) => setTimeout(r, 400)); // slight pause
      await typeTextIntoLastAiMessage(responseText, 18);

      setIsTyping(false);
      setIsLoading(false);
    }, 400);
  };

  const handleNewChat = () => {
    const newConv = makeNewConversation();
    setConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
    setInputValue("");
  };

  const deleteConversation = (id) => {
    if (!window.confirm("Delete this chat?")) return;
    setConversations((prev) => {
      const next = prev.filter((c) => c.id !== id);
      if (next.length === 0) {
        const fresh = [makeNewConversation()];
        setActiveConvId(fresh[0].id);
        return fresh;
      }
      // ensure activeConvId remains valid
      if (id === activeConvId) setActiveConvId(next[0].id);
      return next;
    });
  };

  const toggleAgents = () => setAgentsOpen((s) => !s);
  const toggleSearch = () => {
    setSearchOpen((s) => !s);
    setSearchQuery("");
  };
  const closeMobileSidebar = () => setMobileSidebarOpen(false);

  const filteredConversations = conversations.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSuggestionClick = (s) => {
    if (s === "Z.Hire") {
      window.location.href = "https://zdotapps.com/zdotHire/login.php";
      return;
    }
    setInputValue(`Tell me about ${s}`);
  };

  // RENDER MESSAGE - adjusted widths so nothing crosses input column
  const renderMessage = (msg) => {
    const isUser = msg.sender === "user";
    return (
      <div
        key={msg.id}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          width: "100%",
          marginBottom: 8,
        }}
      >
        <div
          style={{
            background: isUser ? "#f5c518" : "transparent",
            color: isUser ? "#000" : "#e0e0e0",
            borderRadius: isUser ? "14px" : "0px",
            padding: isUser ? "8px 12px" : "2px 0px",
            maxWidth: "100%",                      // allow natural wrapping
            width: "fit-content",
            // constrain bubble to the width of the input column by using CSS calc against viewport padding
            // the input column is centered with max-width in CSS — we reproduce safe max here:
            maxWidth: "min(720px, 78%)",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            lineHeight: 1.5,
            textAlign: "left",
          }}
        >
          {msg.text}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.pageContainer}>
      {/* Sidebar */}
      {mobileSidebarOpen && (
        <div className={styles.mobileBackdrop} onClick={closeMobileSidebar} />
      )}
      <aside
        className={styles.sidebar}
        style={
          mobileSidebarOpen
            ? {
                display: 'block',
                position: 'fixed',
                top: 56,
                left: 0,
                bottom: 0,
                width: '82vw',
                maxWidth: 320,
                backgroundColor: '#212121',
                overflowY: 'auto',
                zIndex: 60,
                padding: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
              }
            : undefined
        }
      >
        <nav className={styles.sidebarNav}>
          <button
            className={styles.navItem}
            onClick={() => { handleNewChat(); closeMobileSidebar(); }}
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: 8 }}
          >
            <HiOutlineChatBubbleOvalLeft size={20} />
            <span>New Chat</span>
          </button>
          <button
            className={styles.navItem}
            onClick={toggleSearch}
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: 8 }}
          >
            <HiOutlineMagnifyingGlass size={20} />
            <span>Search</span>
          </button>
          <button
            className={styles.navItem}
            onClick={toggleAgents}
            style={{ background: "transparent", border: "none", display: "flex", alignItems: "center", gap: 8 }}
            aria-expanded={agentsOpen}
          >
            <HiOutlineCpuChip size={20} />
            <span>Our Agents</span>
          </button>
        </nav>

        {searchOpen && (
          <div style={{ padding: "0.75rem 1rem" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chats..."
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "transparent",
                color: "#e0e0e0",
                outline: "none",
              }}
            />
          </div>
        )}

        {agentsOpen && (
          <div style={{ padding: "0.6rem 0.8rem" }}>
            {["Z.Flow", "Z.Hire", "gidER", "Z.Qui"].map((a) => (
              <button
                key={a}
                onClick={() => handleSuggestionClick(a)}
                className={styles.chatItem}
                style={{
                  textAlign: "left",
                  padding: "6px 8px",
                  borderRadius: 8,
                  background: "transparent",
                  border: "none",
                  color: "#e0e0e0",
                  cursor: "pointer",
                }}
              >
                {a}
              </button>
            ))}
          </div>
        )}

        <div style={{ padding: "0.75rem 1rem", color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
          Chats
        </div>

        <div style={{ padding: "0 0.5rem", display: "flex", flexDirection: "column", gap: 6 }}>
          {filteredConversations.map((conv) => (
            <div key={conv.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button
                onClick={() => { setActiveConvId(conv.id); closeMobileSidebar(); }}
                className={styles.chatItem}
                style={{
                  flex: 1,
                  textAlign: "left",
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: conv.id === activeConvId ? "rgba(245,197,24,0.12)" : "transparent",
                  color: "#e0e0e0",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {conv.title}
              </button>
              {conv.title !== "New Chat" && (
                <button
                  onClick={() => { deleteConversation(conv.id); closeMobileSidebar(); }}
                  style={{ background: "transparent", border: "none", cursor: "pointer", color: "#888", padding: "4px" }}
                >
                  <HiTrash size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className={styles.mainContent}>
        {/* Mobile top bar (ChatGPT-like) */}
        <div className={styles.mobileTopBar}>
          <button className={styles.topBarBtn} aria-label="Menu" onClick={() => setMobileSidebarOpen(true)}>≡</button>
          <button className={styles.upgradeBadge}>Upgrade for free</button>
          <button className={styles.topBarBtn} aria-label="Refresh">↻</button>
        </div>
        <header className={styles.header}>
          <h1 className={styles.title}>Agentic Studio</h1>
          <p className={styles.subtitle}>
            Discover what our <span className={styles.highlight}>Agents</span> can do
          </p>
        </header>

        {/* Empty state placeholder for new chat */}
        {!activeConversation?.messages?.length && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 220,
              color: '#ffffff',
              fontSize: '1.6rem',
              textAlign: 'center',
              marginBottom: 12,
            }}
          >
            What's on your mind today?
          </div>
        )}

        {/* Centered chat inner column → aligns with input area */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div
            ref={chatWindowRef}
            id="chat-window"
            style={{
              width: "100%",
              maxWidth: 750,            // matches your input area max-width
              minHeight: 260,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              padding: "1rem 0",
            }}
          >
            {activeConversation?.messages.map((m) => renderMessage(m))}
            {isTyping && (
              <div style={{ color: "#999", fontSize: 13, marginLeft: 8, marginBottom: 6 }}>AI is typing…</div>
            )}
          </div>
        </div>

        {/* Input area (keeps your styles exactly) */}
        <div className={styles.inputWrapper} style={{ padding: "0 4rem" }}>
          <div className={styles.inputContainer} style={{ alignItems: "center" }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
              placeholder="what you're looking for...."
              className={`${styles.placeholder} ms-5`}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                color: "#e0e0e0",
                outline: "none",
                fontSize: "1rem",
              }}
            />
            <button className={styles.plusButton}>
              <HiPlus size={20} />
            </button>
            <button className={styles.sendButton} onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading}>
              <HiArrowUp size={18} />
            </button>
          </div>

          <div className={styles.suggestions} style={{ marginTop: 12 }}>
            {["Z.Flow", "Z.Hire", "gidER", "Z.Qui"].map((s) => (
              <button key={s} className={styles.suggestionChip} onClick={() => handleSuggestionClick(s)} type="button" style={{ marginRight: 8 }}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgenticStudio;
