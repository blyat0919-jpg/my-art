
// --- REQUIREMENT: ALERT BOX & DOM MANIPULATION (BUY BUTTONS) ---
const buyButtons = document.querySelectorAll('.buy-btn');
const statusBanner = document.getElementById('status-banner');

buyButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        // Trigger Alert
        alert("⚠️ PLEASE WAIT: The artist is currently busy on another artwork!");
        
        // Trigger DOM Manipulation (Only if the banner exists on this page)
        if (statusBanner) {
            statusBanner.innerHTML = "<span>🛑 <strong>STATUS UPDATE:</strong> The queue is currently full! Please check back next month.</span>";
            statusBanner.className = "status-visible";
        }
    });
});

// --- REQUIREMENT: LOCATION-BASED FUNCTIONALITY (ABOUT LINK) ---
const aboutLink = document.getElementById('about-link');


if (aboutLink) {
    aboutLink.addEventListener('click', function() {
        aboutLink.innerHTML = "Redirecting... ✈️";
        aboutLink.style.color = "#f4b8e4"; 
        
        setTimeout(function() {
            window.location.href = "welcome.html";
        }, 500);
    });
}

// --- REQUIREMENT: LOCATION & DOM MANIPULATION (WELCOME PAGE BUTTON) ---
const redirectBtn = document.getElementById('portfolio-redirect-btn');

if (redirectBtn) {
    redirectBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        redirectBtn.innerHTML = "Opening Portfolio... 🎨";
        redirectBtn.style.backgroundColor = "#7fa99b"; 
        redirectBtn.style.transform = "scale(0.95)"; 
        
        setTimeout(function() {
            window.location.href = "index.html"; 
        }, 500);
    });
}

// --- REQUIREMENT: DOM MANIPULATION & CSS TOGGLING (FAQ ACCORDION) ---
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        this.classList.toggle("active-acc");
        const panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});