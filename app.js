const touristPlaces = {
    'Andaman and Nicobar Islands': ['Cellular Jail', 'Radhanagar Beach', 'Baratang Island'],
    'Andhra Pradesh': ['Tirupati Temple', 'Charminar', 'Araku Valley'],
    'Arunachal Pradesh': ['Tawang Monastery', 'Ziro Valley', 'Nuranang Falls'],
    'Assam': ['Kaziranga National Park', 'Kamakhya Temple', 'Manas National Park'],
    'Bihar': ['Bodh Gaya', 'Nalanda University', 'Patna Sahib'],
    'Chandigarh': ['Rock Garden', 'Sukhna Lake', 'Rose Garden'],
    'Chhattisgarh': ['Chitrakote Falls', 'Barnawapara Wildlife Sanctuary', 'Sirpur'],
    'Dadra and Nagar Haveli and Daman and Diu': ['Daman Beaches', 'Diu Fort', 'Silvassa'],
    'Delhi': ['Red Fort', 'Qutub Minar', 'India Gate'],
    'Goa': ['Basilica of Bom Jesus', 'Dudhsagar Falls', 'Calangute Beach'],
    'Gujarat': ['Somnath Temple', 'Gir Forest National Park', 'Rann of Kutch'],
    'Haryana': ['Sultanpur National Park', 'Leisure Valley Park', 'Kurukshetra'],
    'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
    'Jammu and Kashmir': ['Dal Lake', 'Vaishno Devi Temple', 'Gulmarg'],
    'Jharkhand': ['Ranchi Lake', 'Hundru Falls', 'Baidyanath Temple'],
    'Karnataka': ['Mysore Palace', 'Hampi', 'Coorg'],
    'Kerala': ['Backwaters of Alleppey', 'Munnar', 'Athirappilly Falls'],
    'Ladakh': ['Pangong Lake', 'Nubra Valley', 'Shanti Stupa'],
    'Lakshadweep': ['Agatti Island', 'Minicoy Island', 'Kavaratti'],
    'Madhya Pradesh': ['Khajuraho Temples', 'Bandhavgarh National Park', 'Gwalior Fort'],
    'Maharashtra': ['Gateway of India', 'Ajanta and Ellora Caves', 'Lonavala'],
    'Manipur': ['Loktak Lake', 'Ima Keithel', 'Manipur Zoological Gardens'],
    'Meghalaya': ['Cherrapunji', 'Living Root Bridges', 'Shillong'],
    'Mizoram': ['Aizawl', 'Durtlang Hills', 'Reiek Tlang'],
    'Nagaland': ['Kohima War Cemetery', 'Nagaland Zoological Park', 'Dzukou Valley'],
    'Odisha': ['Konark Sun Temple', 'Puri Beach', 'Chilika Lake'],
    'Puducherry': ['Auroville', 'Promenade Beach', 'Paradise Beach'],
    'Punjab': ['Golden Temple', 'Wagah Border', 'Jallianwala Bagh'],
    'Rajasthan': ['Jaipur', 'Udaipur', 'Jaisalmer'],
    'Sikkim': ['Gangtok', 'Nathula Pass', 'Gurudongmar Lake'],
    'Tamil Nadu': ['Chennai', 'Madurai', 'Ooty'],
    'Telangana': ['Hyderabad', 'Golconda Fort', 'Ramoji Film City'],
    'Tripura': ['Ujjayanta Palace', 'Neermahal', 'Unakoti'],
    'Uttar Pradesh': ['Taj Mahal', 'Varanasi', 'Fatehpur Sikri'],
    'Uttarakhand': ['Rishikesh', 'Nainital', 'Jim Corbett National Park'],
    'West Bengal': ['Kolkata', 'Darjeeling', 'Sundarbans National Park']
};

const stateForm = document.getElementById('stateForm');
const touristPlacesSection = document.getElementById('touristPlaces');

stateForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const stateInput = document.getElementById('stateInput').value.trim();
    displayTouristPlaces(stateInput);
});

function displayTouristPlaces(state) {
    const places = touristPlaces[state];
    if (places) {
        const placesHTML = places.map(place => `<div class="tourist-place">${place}</div>`).join('');
        touristPlacesSection.innerHTML = `<h2>Tourist Places in ${state}</h2>${placesHTML}`;
    } else {
        touristPlacesSection.innerHTML = `<p>No tourist places found for ${state}</p>`;
    }
}
