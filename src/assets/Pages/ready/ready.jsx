import React, { useState } from 'react';
import styles from './ready.module.css';

// --- SVG Icons for a Polished UI (No changes needed here) ---
const SearchIcon = ({ className }) => (
  <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
  </svg>
);

const HistoryIcon = ({ className }) => (
 <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="#636363ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
);

const Ready = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  // --- NEW STATE: To hold the selected template's data ---
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // --- UPDATED DATA: Now an array of objects with names and image URLs ---
  // Using placeholder images from picsum.photos for demonstration
  const searchData = [
    { id: "hc", name: "Health care", imageUrl: "https://picsum.photos/seed/healthcare/400/250" },
    { id: "ec", name: "E-Commerce", imageUrl: "https://picsum.photos/seed/ecommerce/400/250" },
    { id: "it", name: "IT Software", imageUrl: "https://picsum.photos/seed/itservice/400/250" },
    { id: "mfg", name: "Manufacturing", imageUrl: "https://picsum.photos/seed/manufacturing/400/250" },
    { id: "edu", name: "Edu Tech", imageUrl: "https://picsum.photos/seed/edutech/400/250" },
    { id: "fin", name: "Finance", imageUrl: "https://picsum.photos/seed/finance/400/250" },
    { id: "food", name: "Food", imageUrl: "https://picsum.photos/seed/food/400/250" },
    { id: "evt", name: "Events", imageUrl: "https://picsum.photos/seed/events/400/250" },
    { id: "spt", name: "Sports", imageUrl: "https://picsum.photos/seed/sports/400/250" },
    { id: "all", name: "All", imageUrl: "https://picsum.photos/seed/sports/400/250" }
    
  ];

  // --- UPDATED FILTER LOGIC: Access the 'name' property ---
  const filteredSuggestions = searchData.filter(suggestion =>
    suggestion.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showSuggestions = isFocused && filteredSuggestions.length > 0;

  // --- NEW HANDLER: For when the user changes the input text ---
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    // When user types again, clear the selected template
    if (selectedTemplate) {
      setSelectedTemplate(null);
    }
  };
  
  // --- NEW HANDLER: For clicking a suggestion ---
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.name);
    setSelectedTemplate(suggestion);
    setIsFocused(false); // Hide dropdown after selection
  };
  
  // --- NEW HANDLER: For the "View" button to redirect ---
  const handleViewClick = () => {
    // Replace with your actual login page URL
    window.location.href = 'https://zdotapps.com/gidER/login.php';
  };

  return (
    <div className={styles.container}>
     <h1 className="fw-bold" style={{ color: '#ffffff' }}>Pick the <span style={{ color: '#F2C94C' }}>Website </span>Template You Love</h1>
      <div className={styles.searchWrapper}>
        {/* The Search Bar */}
        <div className={`${styles.searchBar} ${showSuggestions ? styles.suggestionsActive : ''}`}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for templates"
            value={searchQuery}
            onChange={handleInputChange} // <-- Use new handler
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 150)}
            className={styles.input}
          />
          <button className={styles.searchButton}>Search</button>
        </div>

        {/* The Suggestions Dropdown */}
        <div className={`${styles.suggestions} ${showSuggestions ? styles.visible : ''}`}>
          {filteredSuggestions.map((suggestion) => (
            <div
              key={suggestion.id} // <-- Use unique ID for key
              className={styles.suggestionItem}
              // Use onMouseDown to fire before onBlur
              onMouseDown={() => handleSuggestionClick(suggestion)} // <-- Use new handler
            >
              <HistoryIcon className={styles.historyIcon} />
              <span className='ms-3'>{suggestion.name}</span> {/* <-- Access name property */}
            </div>           
          ))}
        {/* <button className={styles.allButton}>
          All
        </button> */}
        </div>  
      </div>
                   {selectedTemplate && (
    <div className={`${styles.templateDisplay} mb-5`}>

          <img 
            src={selectedTemplate.imageUrl} 
            alt={selectedTemplate.name} 
            className={styles.templateImage} 
          />
          <h3 className={styles.templateTitle}>
            {selectedTemplate.name} Template
          </h3>
          <p>A beautiful template for your {selectedTemplate.name} business.</p>
          <button 
            className={styles.viewButton}
            onClick={handleViewClick}
          >
            View
          </button>
        </div>
      )} 
    </div>
  );
};

export default Ready;