import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For React Router navigation if needed
import styles from "./z.qui.module.css";
import quiLogo from "../../../images/qui.png"; // Your logo

function QuizCard({ title, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setIsFinished(true);
      }
    }, 800);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.quizTitle}>{title}</h2>
      {!isFinished ? (
        <>
          <h3 className={styles.question}>{questions[currentQuestion].question}</h3>
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`${styles.option} ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? styles.correct
                      : styles.wrong
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
          <p className={styles.progress}>
            Question {currentQuestion + 1} / {questions.length}
          </p>
        </>
      ) : (
        <div className={styles.result}>
          <p>
            ✅ You scored <strong>{score}</strong> / <strong>{questions.length}</strong>
          </p>
          <button
            className={styles.restartBtn}
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setIsFinished(false);
              setSelectedOption(null);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default function ZQui() {
  const navigate = useNavigate(); // For internal navigation if needed
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [selectedCategory, setSelectedCategory] = useState("web"); // default category

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted:\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  // Redirect to Gider login
  const handleLoginRedirect = () => {
    window.location.href = "https://gider.com/login"; // Replace with actual Gider login URL
    // If you want internal route: navigate("/login");
  };

  // Quiz Data
  const quizData = {
    web: [
      {
        title: "HTML Basics",
        questions: [
          {
            question: "Which tag creates a hyperlink?",
            options: ["<a>", "<link>", "<href>", "<p>"],
            answer: "<a>",
          },
          {
            question: "Which tag is used for largest heading?",
            options: ["<h6>", "<h1>", "<head>", "<title>"],
            answer: "<h1>",
          },
        ],
      },
      {
        title: "CSS Basics",
        questions: [
          {
            question: "Which property changes text color?",
            options: ["font-color", "color", "text-color", "background"],
            answer: "color",
          },
          {
            question: "Which symbol is used for id selector?",
            options: [".", "#", "*", "&"],
            answer: "#",
          },
        ],
      },
      {
        title: "JavaScript Basics",
        questions: [
          {
            question: "What is 2 + '2'?",
            options: ["22", "4", "NaN", "Error"],
            answer: "22",
          },
          {
            question: "Which keyword declares a constant?",
            options: ["var", "let", "const", "define"],
            answer: "const",
          },
        ],
      },
    ],
    android: [
      {
        title: "Android Basics",
        questions: [
          {
            question: "Which language is officially used for Android?",
            options: ["Java", "Kotlin", "C#", "Swift"],
            answer: "Kotlin",
          },
          {
            question: "Which file has app permissions?",
            options: ["MainActivity.java", "strings.xml", "AndroidManifest.xml", "build.gradle"],
            answer: "AndroidManifest.xml",
          },
        ],
      },
      {
        title: "Android UI",
        questions: [
          {
            question: "Which layout arranges items vertically/horizontally?",
            options: ["RelativeLayout", "LinearLayout", "FrameLayout", "TableLayout"],
            answer: "LinearLayout",
          },
          {
            question: "Default language for Android XML layouts?",
            options: ["HTML", "JSON", "XML", "YAML"],
            answer: "XML",
          },
        ],
      },
      {
        title: "Android Advanced",
        questions: [
          {
            question: "Which database is used in Android?",
            options: ["MySQL", "SQLite", "Postgres", "MongoDB"],
            answer: "SQLite",
          },
          {
            question: "Which is a background service in Android?",
            options: ["Activity", "BroadcastReceiver", "Service", "Fragment"],
            answer: "Service",
          },
        ],
      },
    ],
    ios: [
      {
        title: "iOS Basics",
        questions: [
          {
            question: "Main language for iOS development?",
            options: ["Swift", "Java", "Kotlin", "C++"],
            answer: "Swift",
          },
          {
            question: "Which company develops iOS?",
            options: ["Google", "Apple", "Microsoft", "Samsung"],
            answer: "Apple",
          },
        ],
      },
      {
        title: "iOS UI",
        questions: [
          {
            question: "Which framework is used for UI in iOS?",
            options: ["SwiftUI", "UIKit", "Jetpack Compose", "React"],
            answer: "SwiftUI",
          },
          {
            question: "Which design file ends with .storyboard?",
            options: ["UIFile.swift", "Main.storyboard", "View.json", "Layout.xml"],
            answer: "Main.storyboard",
          },
        ],
      },
      {
        title: "iOS Advanced",
        questions: [
          {
            question: "Which architecture is popular in iOS?",
            options: ["MVC", "MVP", "MVVM", "All of these"],
            answer: "All of these",
          },
          {
            question: "Which store hosts iOS apps?",
            options: ["Google Play", "App Store", "Windows Store", "Samsung Store"],
            answer: "App Store",
          },
        ],
      },
    ],
  };

  return (
    <section className={styles.quizContainer}>
      <div className={`mt-5 ${styles.header}`}>
        <h1>Z.Qui – Quick Quizzes</h1>
        <p>Select a category to see 3 quizzes</p>

        {/* Category Buttons */}
        <div className={styles.categoryButtons}>
          <button
            className={selectedCategory === "web" ? styles.activeBtn : ""}
            onClick={() => setSelectedCategory("web")}
          >
            Web
          </button>
          <button
            className={selectedCategory === "android" ? styles.activeBtn : ""}
            onClick={() => setSelectedCategory("android")}
          >
            Android
          </button>
          <button
            className={selectedCategory === "ios" ? styles.activeBtn : ""}
            onClick={() => setSelectedCategory("ios")}
          >
            iOS
          </button>
        </div>
      </div>

      <div className={styles.layout}>
        {/* LEFT SIDE: Show 3 cards for chosen category */}
        <div className={styles.grid}>
          {quizData[selectedCategory].map((quiz, index) => (
            <QuizCard key={index} title={quiz.title} questions={quiz.questions} />
          ))}
            {/* Login Button at the top */}
            <button
              type="button"
              className={`btn btn-warning fw-semibold ${styles.loginBtnTop}`}
              onClick={() => {
                window.location.href = "login";
              }}
            >
              Login to Z.Qui
            </button>
        </div>
        
        {/* RIGHT SIDE: Contact Form */}
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h5 style={{ textAlign: 'center' }}>Create Engaging Quizzes for Anyone, in Minutes.</h5>
            <img src={quiLogo} alt="logo" className={styles.logo} style={{ width: "150px", alignItems: "center" }} />
            
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" style={{ width: '50%', borderRadius: '50px', alignSelf: 'center' }}>Submit</button>
          </form>
        </div>
      </div>


    </section>
  );
}
