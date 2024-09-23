const profileData = {
    // Name of the profile holder
    name: document.querySelector('button[data-modal="public_profile_top-card_title-modal-id"] h1.top-card-layout__title')?.innerText?.trim() || 'N/A',
    
    // About section under the summary
    about: document.querySelector('section[data-section="summary"] .core-section-container__content p')?.innerText?.trim() || 'N/A',
    
    // Bio section
    bio: document.querySelector('.text-body-medium.break-words')?.innerText?.trim() || 'N/A',
    
    // Location, using a more flexible selector in case of slight variations
    location: document.querySelector('.not-first-middot > span:nth-child(1)')?.innerText?.trim() || 'N/A',
    
    // Follower count, extracted from the "followers" span
    followerCount: document.querySelector('.not-first-middot > span:nth-child(1)')?.innerText?.match(/\d+/)?.[0] || '0',
    
    // Connection count, extracted from the "connections" span
    connectionCount: document.querySelector('.not-first-middot > span:nth-child(2)')?.innerText?.match(/\d+/)?.[0] || '0',
};

// Send the scraped data to the background script
chrome.runtime.sendMessage({ action: "sendProfileData", data: profileData });
