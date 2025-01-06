document.addEventListener('DOMContentLoaded', () => {
    const findDestinationBtn = document.getElementById('findDestination');
    const surpriseMeBtn = document.getElementById('surpriseMe');
    const shuffleBtn = document.getElementById('shuffle');
    const destinationContainer = document.querySelector('.destination-container');
    
    let currentDestinations = [];
    
    function getSelectedActivities() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => cb.value);
    }
    
    function filterDestinations() {
        console.log('Filtering destinations...'); // Debug log
        const budget = document.getElementById('budget').value;
        const climate = document.getElementById('climate').value;
        const activities = getSelectedActivities();
        
        console.log('Selected filters:', { budget, climate, activities }); // Debug log
        
        const filtered = destinations.filter(dest => {
            const budgetMatch = !budget || dest.budget === budget;
            const climateMatch = !climate || dest.climate === climate;
            const activityMatch = !activities.length || 
                activities.some(activity => dest.activityTypes.includes(activity));
            
            return budgetMatch && climateMatch && activityMatch;
        });
        
        console.log('Filtered destinations:', filtered); // Debug log
        return filtered;
    }
    
    function displayDestination(destination) {
        console.log('Displaying destination:', destination); // Debug log
        
        if (!destination) {
            destinationContainer.style.display = 'none';
            return;
        }
        
        // Make sure the container is visible first
        destinationContainer.style.display = 'block';
        
        const image = document.getElementById('destinationImage');
        const name = document.getElementById('destinationName');
        const climate = document.getElementById('destinationClimate');
        const budget = document.getElementById('destinationBudget');
        const activities = document.getElementById('destinationActivities');
        const funFact = document.getElementById('destinationFunFact');
        
        // Check if all elements exist
        if (!image || !name || !climate || !budget || !activities || !funFact) {
            console.error('Some DOM elements are missing!');
            return;
        }
        
        image.src = destination.imageUrl;
        name.textContent = destination.name;
        climate.innerHTML = `<i class="fas fa-thermometer-half"></i> Climate: <span>${capitalizeFirst(destination.climate)}</span>`;
        budget.innerHTML = `<i class="fas fa-wallet"></i> Budget: <span>${capitalizeFirst(destination.budget)}</span>`;
        
        activities.innerHTML = '<p><i class="fas fa-hiking"></i> Activities:</p>';
        const activitiesList = document.createElement('div');
        activitiesList.className = 'activities-list';
        destination.activityTypes.forEach(activity => {
            const activitySpan = document.createElement('span');
            activitySpan.className = 'activity-tag';
            activitySpan.textContent = capitalizeFirst(activity);
            activitiesList.appendChild(activitySpan);
        });
        activities.appendChild(activitiesList);
        
        const randomFact = destination.funFacts[Math.floor(Math.random() * destination.funFacts.length)];
        funFact.textContent = randomFact;
    }
    
    function capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    function getRandomDestination(destinationsArray) {
        if (!destinationsArray.length) return null;
        return destinationsArray[Math.floor(Math.random() * destinationsArray.length)];
    }
    
    // Event Listeners
    findDestinationBtn.addEventListener('click', () => {
        console.log('Find Destination clicked!'); // Debug log
        
        currentDestinations = filterDestinations();
        
        if (currentDestinations.length === 0) {
            alert('No destinations match your preferences. Try adjusting your criteria!');
            return;
        }
        
        const randomDestination = getRandomDestination(currentDestinations);
        displayDestination(randomDestination);
    });
    
    surpriseMeBtn.addEventListener('click', () => {
        console.log('Surprise Me clicked!'); // Debug log
        
        // Reset all form inputs
        document.getElementById('budget').value = '';
        document.getElementById('climate').value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        
        currentDestinations = destinations;
        const randomDestination = getRandomDestination(currentDestinations);
        displayDestination(randomDestination);
    });
    
    shuffleBtn.addEventListener('click', () => {
        const newDestination = getRandomDestination(currentDestinations);
        displayDestination(newDestination);
    });
});
