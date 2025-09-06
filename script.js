// =================================================================
// 1. GLOBAL VARIABLES & DATA
const APIKEY = '187774e2bc818aca26309836cec5f170';
// =================================================================

// Quiz Data and State
const odishaQuizData = [
    { question: "What is the classical dance form that originated in Odisha?", options: ["Kathak", "Bharatanatyam", "Odissi", "Kuchipudi"], correct: 2 },
    { question: "Which temple in Odisha is known as the 'Black Pagoda'?", options: ["Jagannath Temple", "Lingaraj Temple", "Konark Sun Temple", "Rajarani Temple"], correct: 2 },
    { question: "What is the largest coastal lagoon in India, located in Odisha?", options: ["Vembanad Lake", "Chilika Lake", "Pulicat Lake", "Sambhar Lake"], correct: 1 },
    { question: "The famous Rath Yatra (Chariot Festival) is associated with which deity?", options: ["Lord Shiva", "Lord Vishnu", "Goddess Durga", "Lord Jagannath"], correct: 3 },
    { question: "Which city in Odisha is famous for its silver filigree work (Tarakasi)?", options: ["Bhubaneswar", "Puri", "Cuttack", "Sambalpur"], correct: 2 },
    { question: "What is the staple food of Odisha?", options: ["Wheat", "Maize", "Rice", "Barley"], correct: 2 },
    { question: "The 'Pattachitra' art form is a traditional painting style from which state?", options: ["West Bengal", "Odisha", "Bihar", "Andhra Pradesh"], correct: 1 },
    { question: "Which of these is a famous sweet dish from Odisha?", options: ["Rasgulla", "Jalebi", "Petha", "Mysore Pak"], correct: 0 },
    { question: "The capital city of Odisha is:", options: ["Cuttack", "Bhubaneswar", "Puri", "Rourkela"], correct: 1 },
    { question: "Which National Park in Odisha is known for its saltwater crocodiles?", options: ["Simlipal National Park", "Bhitarkanika National Park", "Ushakothi Wildlife Sanctuary", "Satkosia Tiger Reserve"], correct: 1 },
    { question: "The ancient name of Odisha was:", options: ["Magadha", "Vanga", "Kalinga", "Anga"], correct: 2 },
    { question: "Which river is known as the 'Sorrow of Odisha'?", options: ["Ganges", "Brahmani", "Mahanadi", "Subarnarekha"], correct: 2 },
    { question: "The Hirakud Dam, one of the longest in the world, is built on which river?", options: ["Baitarani", "Mahanadi", "Rushikulya", "Indravati"], correct: 1 },
    { question: "What does 'Namaskar' mean in Odia?", options: ["Thank you", "Goodbye", "A respectful greeting", "How are you?"], correct: 2 },
    { question: "Which beach in Odisha is a major nesting site for Olive Ridley turtles?", options: ["Puri Beach", "Gopalpur Beach", "Gahirmatha Beach", "Chandrabhaga Beach"], correct: 2 },
    { question: "The Lingaraj Temple in Bhubaneswar is dedicated to which deity?", options: ["Lord Vishnu", "Lord Shiva", "Lord Brahma", "Goddess Parvati"], correct: 1 },
    { question: "Sambalpuri sarees are famous for which weaving technique?", options: ["Brocade", "Ikat (Bandha)", "Jamdani", "Zari"], correct: 1 },
    { question: "What is 'Pakhala', a popular dish in Odisha?", options: ["A spicy curry", "A type of bread", "Fermented rice with water", "A sweet dessert"], correct: 2 },
    { question: "The Udayagiri and Khandagiri caves near Bhubaneswar were carved for which religious group?", options: ["Buddhist monks", "Hindu ascetics", "Jain monks", "Sufi saints"], correct: 2 },
    { question: "Which festival in Odisha celebrates the relationship between brothers and sisters?", options: ["Raja Parba", "Nuakhai", "Kumar Purnima", "Raksha Bandhan"], correct: 3 },
    { question: "What is the main language spoken in Odisha?", options: ["Bengali", "Telugu", "Hindi", "Odia"], correct: 3 },
    { question: "The city of Puri is one of the four major Hindu pilgrimage sites known as:", options: ["Sapta Puri", "Char Dham", "Dwadasa Jyotirlinga", "Pancha Kshetras"], correct: 1 },
    { question: "Which of these is a tribal art form of Odisha?", options: ["Warli Painting", "Madhubani Painting", "Saura Art", "Gond Art"], correct: 2 },
    { question: "The 'Dhauli' peace pagoda near Bhubaneswar commemorates which historical event?", options: ["The Kalinga War", "The Battle of Plassey", "The First War of Independence", "The Gupta Empire's expansion"], correct: 0 },
    { question: "What is 'Chhena Poda'?", options: ["A spicy snack", "A roasted cheese dessert", "A type of fish curry", "A vegetable stir-fry"], correct: 1 },
    { question: "Simlipal National Park is primarily a reserve for which animal?", options: ["Lions", "Rhinoceros", "Tigers", "Elephants"], correct: 2 },
    { question: "The term 'Bhubaneswar' is often translated as:", options: ["City of Temples", "Lord of the Universe", "Land of Rivers", "Lord of the Three Worlds"], correct: 3 },
    { question: "Which district is known as the 'Rice Bowl of Odisha'?", options: ["Cuttack", "Bargarh", "Puri", "Ganjam"], correct: 1 },
    { question: "The rock edicts of which emperor are found at Dhauli and Jaugada?", options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Harshavardhana"], correct: 1 },
    { question: "What is the traditional folk theatre of Odisha called?", options: ["Nautanki", "Tamasha", "Jatra", "Bhavai"], correct: 2 },
    { question: "Gopalpur-on-Sea is a famous beach town in which district of Odisha?", options: ["Puri", "Ganjam", "Balasore", "Khurda"], correct: 1 },
    { question: "The festival of 'Nuakhai' is primarily a celebration of what?", options: ["New Year", "New Harvest", "Monsoon", "Victory"], correct: 1 },
    { question: "Which of these is NOT a part of the 'Golden Triangle' of tourism in Odisha?", options: ["Bhubaneswar", "Puri", "Konark", "Cuttack"], correct: 3 },
    { question: "The Kandhamal district is famous for producing which spice?", options: ["Cardamom", "Clove", "Turmeric", "Cinnamon"], correct: 2 },
    { question: "What is the meaning of 'Dhanyabad' in Odia?", options: ["Hello", "Please", "Sorry", "Thank you"], correct: 3 },
    { question: "The Deomali peak, the highest in Odisha, is located in which district?", options: ["Koraput", "Mayurbhanj", "Kalahandi", "Sundargarh"], correct: 0 },
    { question: "The 'Gotipua' dance is a precursor to which classical dance form?", options: ["Odissi", "Kathakali", "Manipuri", "Sattriya"], correct: 0 },
    { question: "Which freedom fighter from Odisha was popularly known as 'Utkal Gourab'?", options: ["Gopabandhu Das", "Madhusudan Das", "Biju Patnaik", "Subhas Chandra Bose"], correct: 1 },
    { question: "The Nandankanan Zoological Park is unique for being one of the few zoos in the world with:", options: ["White Tigers", "Giant Pandas", "Komodo Dragons", "Polar Bears"], correct: 0 },
    { question: "What is 'Dahi Bara Aloo Dum'?", options: ["A dessert", "A popular street food snack", "A breakfast dish", "A type of curry"], correct: 1 },
    { question: "The Rajarani Temple in Bhubaneswar is famous for its:", options: ["Large Shiva Linga", "Lack of a presiding deity", "Golden spire", "Association with royalty"], correct: 1 },
    { question: "The 'Boita Bandana' festival celebrates Odisha's ancient:", options: ["Military victories", "Literary achievements", "Maritime history", "Agricultural practices"], correct: 2 },
    { question: "Which city is known as the 'Steel City of Odisha'?", options: ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"], correct: 2 },
    { question: "The applique work of which town is famous and has a GI tag?", options: ["Puri", "Pipili", "Raghurajpur", "Baripada"], correct: 1 },
    { question: "What does 'Kemiti Achanti?' mean in Odia?", options: ["What is your name?", "Where are you from?", "How are you?", "What time is it?"], correct: 2 },
    { question: "The Barehipani Falls, one of India's highest, is located in which national park?", options: ["Bhitarkanika", "Simlipal", "Ushakothi", "Satkosia"], correct: 1 },
    { question: "The 'Chhau' dance of Mayurbhanj is a form of:", options: ["Classical dance", "Folk dance", "Martial dance", "Tribal dance"], correct: 2 },
    { question: "Which place in Odisha is believed to be the 'Shakti Peetha' where Goddess Sati's navel fell?", options: ["Konark", "Puri (Vimala Temple)", "Jajpur (Biraja Temple)", "Bhubaneswar (Lingaraj)"], correct: 2 },
    { question: "The writer of the epic 'Odia Mahabharata' was:", options: ["Fakir Mohan Senapati", "Sarala Das", "Gopabandhu Das", "Radhanath Ray"], correct: 1 },
    { question: "What is the name of the international airport in Bhubaneswar?", options: ["Netaji Subhas Airport", "Biju Patnaik Airport", "Veer Surendra Sai Airport", "Utkal Airport"], correct: 1 }
];
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

var currentCardIndex = 0;
var map = null;
var isCardFlipped = false;

var vocabulary = [
    { odia: 'Aamba (ଆମ)', english: 'Mango' },
    { odia: 'Pani (ପାଣି)', english: 'Water' },
    { odia: 'Ghara (ଘର)', english: 'House' },
    { odia: 'Bhai (ଭାଇ)', english: 'Brother' },
    { odia: 'Bhagini (ଭଗିନୀ)', english: 'Sister' }
];

let displayedPlaces = 0;
const placesPerLoad = 6;
let allPlaces = [];
let filteredPlaces = [];

// =================================================================
// 2. FUNCTION DEFINITIONS
// =================================================================

// --- General Page Functions ---
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionName).classList.add('active');

    if (sectionName === 'tour' && map === null) {
        loadMap();
    }
}

function loadMap() {
    map = L.map('map').setView([20.2961, 85.8245], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    touristLocations.forEach(place => {
        const marker = L.marker([place.coords.lat, place.coords.lng]).addTo(map);
        const popupContent = `
            <b>${place.name}</b><br>
            <button class="btn popup-learn-more-btn" data-id="${place.id}" style="margin-top: 10px;">Learn More</button>
        `;
        marker.bindPopup(popupContent);
    });
}
    
    function displayPlaces() {
        const placesGrid = document.getElementById('places-grid');
        const placesToRender = filteredPlaces.slice(displayedPlaces, displayedPlaces + placesPerLoad);

        placesToRender.forEach(location => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <div class="place-card-img" style="background-image: url('${location.images[0]}'); background-size: cover; background-position: center;">
                    <!-- Image is now a background -->
                </div>
                <div class="place-info">
                    <h3>${location.name}</h3>
                    <p>${location.short_desc}</p>
                    <button class="btn" data-id="${location.id}">Learn More</button>
                </div>
            `;
            placesGrid.appendChild(card);
        });

        displayedPlaces += placesToRender.length;
        const viewMoreBtn = document.getElementById('view-more-btn');
        if (displayedPlaces >= filteredPlaces.length) {
            viewMoreBtn.style.display = 'none';
        } else {
            viewMoreBtn.style.display = 'block';
        }
    }

    function filterPlaces() {
        const searchBar = document.getElementById('search-bar');
        const searchTerm = searchBar.value.toLowerCase();

        filteredPlaces = allPlaces.filter(place => 
            place.name.toLowerCase().includes(searchTerm) ||
            place.short_desc.toLowerCase().includes(searchTerm)
        );
        displayedPlaces = 0;
        document.getElementById('places-grid').innerHTML = ''; // Clear existing content
        displayPlaces();
    }

    function initTourGuide() {
        allPlaces = [...touristLocations]; // Initialize allPlaces with all locations
        filterPlaces(); // Initial display with no filter
    }
    
    function openTourModal(locationId) {
        const location = touristLocations.find(loc => loc.id === locationId);
        if (!location) return;
    
        document.getElementById('tour-modal-image').src = location.images[0];
        document.getElementById('tour-modal-title').textContent = location.name;
        document.getElementById('tour-modal-history').textContent = location.details.history;
        document.getElementById('tour-modal-importance').textContent = location.details.importance;
        document.getElementById('tour-modal-nature').textContent = location.details.nature;
        document.getElementById('tour-modal-heritage').textContent = location.details.heritage;
        document.getElementById('tour-modal-wiki-link').href = location.wiki_link;

        const modalFooter = document.querySelector('.tour-modal-footer');
        const existingButton = modalFooter.querySelector('.view-more-btn');
        if (existingButton) {
            existingButton.remove();
        }

        if (location.images && location.images.length > 1) {
            const viewMoreBtn = document.createElement('button');
            viewMoreBtn.textContent = 'View More Images';
            viewMoreBtn.className = 'btn view-more-btn';
            viewMoreBtn.addEventListener('click', () => openGalleryModal(location.images));
            modalFooter.appendChild(viewMoreBtn);
        }
    
        document.getElementById('tour-modal-overlay').classList.add('visible');
    }
    
    function closeTourModal() {
        document.getElementById('tour-modal-overlay').classList.remove('visible');
    }

    function openGalleryModal(images) {
        const galleryImages = document.getElementById('gallery-modal-images');
        galleryImages.innerHTML = '';
        images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            galleryImages.appendChild(img);
        });
        document.getElementById('gallery-modal-overlay').classList.add('visible');
    }

    function closeGalleryModal() {
        document.getElementById('gallery-modal-overlay').classList.remove('visible');
    }
    
function initCultureSection() {
    const heritageGrid = document.getElementById('heritage-arts-grid');
    const foodGrid = document.getElementById('food-grid');

    if (!heritageGrid || !foodGrid) return;

    heritageGrid.innerHTML = '';
    foodGrid.innerHTML = '';

    // Populate Heritage & Arts
    heritageAndArts.forEach(item => {
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <div class="art-image">${item.image_placeholder}</div>
            <div class="art-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Origin:</strong> ${item.origin}</p>
                <p><strong>Specialty:</strong> ${item.specialty}</p>
            </div>
        `;
        heritageGrid.appendChild(card);
    });

    // Populate Famous Dishes
    famousDishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'art-card'; // Reusing the same card style
        card.innerHTML = `
            <div class="art-image">${dish.image_placeholder}</div>
            <div class="art-info">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p><strong>Type:</strong> ${dish.type}</p>
                <p><strong>Key Ingredients:</strong> ${dish.key_ingredients}</p>
            </div>
        `;
        foodGrid.appendChild(card);
    });
}

    function speakWord(word) {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(word);
        speech.lang = 'hi-IN'; // Closest available to Odia
        speechSynthesis.speak(speech);
    } else {
        alert('Audio: ' + word);
    }
}

function flipCard() {
    const cardText = document.getElementById('flashcard-text');
    const currentCard = vocabulary[currentCardIndex];
    isCardFlipped = !isCardFlipped;
    cardText.textContent = isCardFlipped ? currentCard.english : currentCard.odia;
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % vocabulary.length;
    const cardText = document.getElementById('flashcard-text');
    cardText.textContent = vocabulary[currentCardIndex].odia;
    isCardFlipped = false;
}

// --- Quick Quiz Functions ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    shuffleArray(odishaQuizData);
    quizQuestions = odishaQuizData.slice(0, 5);
    currentQuestionIndex = 0;
    quizScore = 0;
    displayQuizQuestion();
}

function displayQuizQuestion() {
    const questionData = quizQuestions[currentQuestionIndex];
    const quizArea = document.getElementById('quiz-area');
    
    let optionsHtml = '<div class="quiz-options">';
    questionData.options.forEach((option, index) => {
        optionsHtml += `<div class="quiz-option" data-index="${index}">${option}</div>`;
    });
    optionsHtml += '</div>';

    quizArea.innerHTML = `
        <p><strong>${currentQuestionIndex + 1}. ${questionData.question}</strong></p>
        ${optionsHtml}
    `;
    document.getElementById('quiz-navigation').style.display = 'none';
}

function checkQuizAnswer(selectedOption, selectedIndex) {
    const correctIndex = quizQuestions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.quiz-option');

    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === correctIndex) {
            option.classList.add('correct');
        }
    });

    if (selectedIndex !== correctIndex) {
        selectedOption.classList.add('incorrect');
    } else {
        quizScore++;
    }

    const navButton = document.querySelector('#quiz-navigation .btn');
    navButton.textContent = (currentQuestionIndex === quizQuestions.length - 1) ? 'Show Results' : 'Next Question';
    document.getElementById('quiz-navigation').style.display = 'block';
}

function nextQuizQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuizQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const quizArea = document.getElementById('quiz-area');
    let emoji = '🤔';
    if (quizScore >= 4) emoji = '🎉';
    else if (quizScore >= 2) emoji = '😊';

    quizArea.innerHTML = `
        <h3>Quiz Complete!</h3>
        <p style="font-size: 1.5rem; margin: 1rem 0;">You scored ${quizScore} out of ${quizQuestions.length} ${emoji}</p>
    `;
    const navButton = document.querySelector('#quiz-navigation .btn');
    navButton.textContent = 'Play Again';
}

// --- Weather Function ---
async function updateWeather() {
    const apiKey = APIKEY; // <-- IMPORTANT: Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    const weatherDisplay = document.getElementById('weather-display');

    if (!city) {
        weatherDisplay.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    weatherDisplay.innerHTML = '<p>Refreshing weather data...</p>';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            let errorMessage = `Error: ${response.status}`;
            if (response.status === 401) errorMessage = 'Invalid API Key.';
            else if (response.status === 404) errorMessage = 'City not found.';
            throw new Error(errorMessage);
        }

        const data = await response.json();
        const { main, weather, wind, name } = data;
        const temp = Math.round(main.temp);
        const condition = weather[0].main;
        const description = weather[0].description;
        const windSpeed = Math.round(wind.speed * 3.6);
        const humidity = main.humidity;

        const weatherIcons = {
            Clouds: '☁️', Clear: '☀️', Rain: '🌧️', Drizzle: '🌦️',
            Mist: '🌫️', Smoke: '🌫️', Haze: '🌫️', Dust: '🌫️', Fog: '🌫️', Sand: '🌫️', Ash: '🌫️', Squall: '🌫️', Tornado: '🌪️',
            Snow: '❄️', Thunderstorm: '⛈️'
        };
        const weatherIcon = weatherIcons[condition] || '🌤️';
        const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);

        weatherDisplay.innerHTML = `
            <div class="weather-card-display">
                <div class="weather-main">
                    <div class="weather-icon">${weatherIcon}</div>
                    <div class="weather-temp">${temp}°C</div>
                    <div class="weather-city">${name}</div>
                    <div class="weather-desc">${capitalizedDescription}</div>
                </div>
                <div class="weather-details">
                    <div class="weather-detail-item">
                        <span class="detail-icon">💧</span>
                        <div>
                            <div class="detail-value">${humidity}%</div>
                            <div class="detail-label">Humidity</div>
                        </div>
                    </div>
                    <div class="weather-detail-item">
                        <span class="detail-icon">💨</span>
                        <div>
                            <div class="detail-value">${windSpeed} km/h</div>
                            <div class="detail-label">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>`;

    } catch (error) {
        console.error("Error fetching weather:", error);
        weatherDisplay.innerHTML = `<p>Unable to fetch weather data. ${error.message}</p>`;
    }
}

// --- Safety Hub Functions ---
function showDistrictInfo(districtName) {
    const districtInfoData = {
        khordha: '<strong>Emergency Center:</strong> Bhubaneswar<br><strong>Contact:</strong> 0674-2345678<br><strong>Evacuation Centers:</strong> 15 locations<br><strong>Nearest Hospital:</strong> AIIMS Bhubaneswar',
        cuttack: '<strong>Emergency Center:</strong> Cuttack<br><strong>Contact:</strong> 0671-2234567<br><strong>Evacuation Centers:</strong> 12 locations<br><strong>Nearest Hospital:</strong> SCB Medical College',
        puri: '<strong>Emergency Center:</strong> Puri<br><strong>Contact:</strong> 06752-223456<br><strong>Evacuation Centers:</strong> 8 locations<br><strong>Nearest Hospital:</strong> District Headquarters Hospital',
        ganjam: '<strong>Emergency Center:</strong> Berhampur<br><strong>Contact:</strong> 0680-2234567<br><strong>Evacuation Centers:</strong> 20 locations<br><strong>Nearest Hospital:</strong> MKCG Medical College'
    };

    const infoDiv = document.getElementById('district-info');
    if (districtName && districtInfoData[districtName]) {
        infoDiv.innerHTML = districtInfoData[districtName];
        infoDiv.style.display = 'block';
    } else {
        infoDiv.innerHTML = '';
        infoDiv.style.display = 'none';
    }
}

function saveChecklist() {
    const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    alert(`Progress saved! You have completed ${checkedCount} out of ${checkboxes.length} safety preparations.`);
}

function updateProgress(percentage) {
    document.getElementById('progress').style.width = percentage + '%';
}

function toggleMobileMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
}

// --- Animation Functions ---
function createFirefly(container, config) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';

    const size = config.minSize + Math.random() * (config.maxSize - config.minSize);
    firefly.dataset.size = size;
    firefly.style.width = `${size}px`;
    firefly.style.height = `${size}px`;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    firefly.style.transform = `translate(${x}px, ${y}px)`;

    const hue = 30 + Math.random() * 20;
    const saturation = 80 + Math.random() * 20;
    const lightness = 70 + Math.random() * 20;
    const alpha = config.minOpacity + Math.random() * (config.maxOpacity - config.minOpacity);

    firefly.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
    firefly.style.boxShadow = `
        0 0 10px 2px hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 2}),
        0 0 20px 5px hsla(${hue - 10}, ${saturation - 10}%, ${lightness - 10}%, ${alpha / 3})
    `;

    container.appendChild(firefly);
    return firefly;
}

function initFireflies() {
    const config = {
        firefliesCount: 40,
        minOpacity: 0.2, maxOpacity: 0.9,
        minSize: 2, maxSize: 6,
        containerSelector: '.fireflies-container',
        mouseInfluenceRadius: 200,
        mouseAttractionStrength: 0.1
    };

    const container = document.querySelector(config.containerSelector);
    if (!container) return;
    container.innerHTML = '';

    const fireflies = [];
    for (let i = 0; i < config.firefliesCount; i++) {
        const firefly = createFirefly(container, config);
        firefly.dataset.baseX = Math.random() * window.innerWidth;
        firefly.dataset.baseY = Math.random() * window.innerHeight;
        firefly.dataset.x = firefly.dataset.baseX;
        firefly.dataset.y = firefly.dataset.baseY;
        firefly.dataset.vx = Math.random() * 2 - 1;
        firefly.dataset.vy = Math.random() * 2 - 1;
        fireflies.push(firefly);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isMouseActive = false;
    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseActive = true;
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => { isMouseActive = false; }, 3000);
    });

    function animateFireflies() {
        fireflies.forEach((firefly, index) => {
            let x = parseFloat(firefly.dataset.x);
            let y = parseFloat(firefly.dataset.y);
            let vx = parseFloat(firefly.dataset.vx);
            let vy = parseFloat(firefly.dataset.vy);
            const baseX = parseFloat(firefly.dataset.baseX);
            const baseY = parseFloat(firefly.dataset.baseY);

            vx += (Math.random() - 0.5) * 0.3;
            vy += (Math.random() - 0.5) * 0.3;
            vx *= 0.95;
            vy *= 0.95;

            if (isMouseActive) {
                const dx = mouseX - x;
                const dy = mouseY - y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseInfluenceRadius) {
                    const attractionFactor = config.mouseAttractionStrength * (1 - distance / config.mouseInfluenceRadius);
                    vx += dx * attractionFactor;
                    vy += dy * attractionFactor;
                    const glowIntensity = 1 - (distance / config.mouseInfluenceRadius);
                    firefly.style.opacity = 0.4 + glowIntensity * 0.6;
                    firefly.style.boxShadow = `
                        0 0 ${5 + glowIntensity * 15}px ${1 + glowIntensity * 4}px rgba(255, 217, 179, ${0.3 + glowIntensity * 0.7}),
                        0 0 ${10 + glowIntensity * 20}px ${2 + glowIntensity * 6}px rgba(255, 179, 102, ${0.2 + glowIntensity * 0.4})`;
                    firefly.style.transform = `translate(${x}px, ${y}px) scale(${1 + glowIntensity * 0.5})`;
                } else {
                    firefly.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                }
            } else {
                vx += (baseX - x) * 0.005;
                vy += (baseY - y) * 0.005;
                const pulseFactor = Math.sin(Date.now() / 1000 + index) * 0.3 + 0.7;
                firefly.style.opacity = 0.2 + pulseFactor * 0.3;
                firefly.style.boxShadow = `
                    0 0 5px 1px rgba(255, 217, 179, ${pulseFactor * 0.3}),
                    0 0 10px 2px rgba(255, 179, 102, ${pulseFactor * 0.2})`;
                firefly.style.transform = `translate(${x}px, ${y}px) scale(${0.8 + pulseFactor * 0.2})`;
            }

            x += vx;
            y += vy;

            if (x < 0 || x > window.innerWidth) vx *= -0.5;
            if (y < 0 || y > window.innerHeight) vy *= -0.5;

            firefly.dataset.x = Math.max(0, Math.min(window.innerWidth, x));
            firefly.dataset.y = Math.max(0, Math.min(window.innerHeight, y));
            firefly.dataset.vx = vx;
            firefly.dataset.vy = vy;

            firefly.style.transform = `translate(${firefly.dataset.x}px, ${firefly.dataset.y}px)`;
        });
        requestAnimationFrame(animateFireflies);
    }

    animateFireflies();

    window.addEventListener('resize', () => {
        fireflies.forEach(firefly => {
            firefly.dataset.baseX = Math.random() * window.innerWidth;
            firefly.dataset.baseY = Math.random() * window.innerHeight;
        });
    });
}

function createPageReveal() {
    const pageReveal = document.createElement('div');
    pageReveal.className = 'page-reveal';

    for (let i = 0; i < 5; i++) {
        const panel = document.createElement('div');
        panel.className = 'reveal-panel';
        pageReveal.appendChild(panel);
    }

    const revealLogo = document.createElement('div');
    revealLogo.className = 'reveal-logo';
    revealLogo.innerHTML = `<div class="logo-text"><div class="red-part">Odisha</div><div class="iva-part">Explorer</div></div>`;
    pageReveal.appendChild(revealLogo);
    document.body.prepend(pageReveal);

    ['header', '.home'].forEach((selector, index) => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('content-reveal');
            el.dataset.revealIndex = index;
        });
    });
}

function revealPage() {
    const pageReveal = document.querySelector('.page-reveal');
    if (pageReveal) {
        pageReveal.classList.add('active');
        setTimeout(() => {
            pageReveal.style.pointerEvents = 'none';
            setTimeout(() => pageReveal.remove(), 1000);
        }, 1500);
    }
}

// =================================================================
// 3. EVENT LISTENERS
// =================================================================

document.addEventListener('DOMContentLoaded', function () {
    // Initialize animations that can run once the DOM is ready
    initFireflies();
    createPageReveal();
    initTourGuide();
    initCultureSection();

    // --- Event Listeners Setup ---

    // Navigation
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelector('a.logo').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
        // Close menu if open on mobile
        if (hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionName = e.target.dataset.section;
            if (sectionName) {
                showSection(sectionName);
                // Close menu after clicking a link on mobile
                if (hamburgerMenu.classList.contains('active')) {
                    hamburgerMenu.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Home CTA
    document.querySelector('.cta-button').addEventListener('click', () => showSection('tour'));

    // Tour Guide Search and View More
    document.getElementById('search-bar').addEventListener('input', filterPlaces);
    document.getElementById('view-more-btn').addEventListener('click', displayPlaces);

    // Tour Guide Modal
    document.getElementById('places-grid').addEventListener('click', function(e) {
        if (e.target && e.target.matches('button.btn')) {
            const locationId = e.target.dataset.id;
            if (locationId) {
                openTourModal(locationId);
            }
        }
    });
    // Add a delegated event listener for map popups
    document.getElementById('map').addEventListener('click', function(e) {
        if (e.target && e.target.matches('button.popup-learn-more-btn')) {
            const locationId = e.target.dataset.id;
            if (locationId) {
                openTourModal(locationId);
            }
        }
    });
    const modalOverlay = document.getElementById('tour-modal-overlay');
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeTourModal();
        }
    });
    document.getElementById('tour-modal-close').addEventListener('click', closeTourModal);

    const galleryModalOverlay = document.getElementById('gallery-modal-overlay');
    galleryModalOverlay.addEventListener('click', (e) => {
        if (e.target === galleryModalOverlay) {
            closeGalleryModal();
        }
    });
    document.getElementById('gallery-modal-close').addEventListener('click', closeGalleryModal);

    // Learn Odia Section
    document.getElementById('speak-btn').addEventListener('click', () => speakWord('namaskar'));
    document.getElementById('flip-card-btn').addEventListener('click', flipCard);
    document.getElementById('next-card-btn').addEventListener('click', nextCard);

    // Quiz
    document.getElementById('quiz-area').addEventListener('click', function(e) {
        if (e.target && e.target.matches('.quiz-option')) {
            const selectedIndex = parseInt(e.target.dataset.index, 10);
            checkQuizAnswer(e.target, selectedIndex);
        }
    });
    document.querySelector('#quiz-navigation .btn').addEventListener('click', () => {
        const btn = document.querySelector('#quiz-navigation .btn');
        if (btn.textContent === 'Play Again') {
            startQuiz();
        } else {
            nextQuizQuestion();
        }
    });

    // Safety Hub
    document.getElementById('weather-btn').addEventListener('click', updateWeather);
    document.getElementById('save-checklist-btn').addEventListener('click', saveChecklist);
    document.getElementById('district-selector').addEventListener('change', (e) => showDistrictInfo(e.target.value));
});

window.addEventListener('load', function () {
    // Initialize app logic that should run after all resources (images, etc.) are loaded
    updateProgress(45);
    startQuiz();
    updateWeather();
    console.log('Welcome to Odisha Explorer! Discover the serene beauty of Odisha.');

    // Trigger the page reveal animation after a short delay
    setTimeout(() => {
        revealPage();
        setTimeout(() => {
            document.body.classList.add('page-loaded');
        }, 1500);
    }, 800);
});