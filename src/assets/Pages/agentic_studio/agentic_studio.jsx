import React from 'react';
import styles from './agentic.module.css';
import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineCpuChip,
  HiPlus,
  HiArrowUp,
} from 'react-icons/hi2'; // Using Heroicons v2 for a modern look

const AgenticStudio = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Sidebar Navigation */}
      <aside className={styles.sidebar}>
        <nav className={styles.sidebarNav}>
          <a href="#new-chat" className={styles.navItem}>
            <HiOutlineChatBubbleOvalLeft size={22} />
            <span>New Chat</span>
          </a>
          <a href="#search" className={styles.navItem}>
            <HiOutlineMagnifyingGlass size={22} />
            <span>Search</span>
          </a>
          <a href="#our-agents" className={styles.navItem}>
            <HiOutlineCpuChip size={22} />
            <span>Our Agents</span>
          </a>
        </nav>

        <div className={styles.chatsSection}>
          <h2 className={styles.chatsTitle}>Chats</h2>
          <div className={styles.chatList}>
            <a href="#chat1" className={styles.chatItem}>Z.Hire</a>
            <a href="#chat2" className={styles.chatItem}>About Z.Hire</a>
            <a href="#chat3" className={styles.chatItem}>About Z.Hire</a>
            <a href="#chat4" className={styles.chatItem}>About Z.Hire</a>
          </div>
        </div>
        <div className={styles.scrollbar}></div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>Agentic studio</h1>
          <p className={styles.subtitle}>
            Discover what our <span className={styles.highlight}>Agents</span> can do
          </p>
        </header>

        <div className={styles.inputWrapper}>
        <div className={styles.inputContainer}>
        <span className={`${styles.placeholder} ms-5`}>what you’re looking for....</span>
        <button className={styles.plusButton} aria-label="Add attachment">
          <HiPlus size={24} />
        </button>
        <button className={styles.sendButton} aria-label="Send message">
          <HiArrowUp size={20} />
        </button>
      </div>

          <div className={styles.suggestions}>
            <button className={styles.suggestionChip}>Z.Flow</button>
            <button className={styles.suggestionChip}>Z.Hire</button>
            <button className={styles.suggestionChip}>gidER</button>
            <button className={styles.suggestionChip}>Z.Qui</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgenticStudio;