/********* create variables *********/
let costPerDay = 35; // Initialize with the full day cost
let totalCost = 0;
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button'); // Corrected variable name
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');

// Get all day buttons
const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

// Initialize days selected for each day
const daysSelected = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0
};

/********* colour change days of week *********/
// Function to handle click on a day button
function handleDayButtonClick(day) {
    return function() {
        const button = document.getElementById(day);
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            daysSelected[day]++;
        } else {
            button.classList.remove('clicked');
            daysSelected[day]--;
        }
        calculateTotalCost();
    };
}

// Add event listeners to each day button
mondayButton.addEventListener('click', handleDayButtonClick('monday'));
tuesdayButton.addEventListener('click', handleDayButtonClick('tuesday'));
wednesdayButton.addEventListener('click', handleDayButtonClick('wednesday'));
thursdayButton.addEventListener('click', handleDayButtonClick('thursday'));
fridayButton.addEventListener('click', handleDayButtonClick('friday'));

/********* clear days *********/
// When the clear button is clicked, remove the "clicked" class from all days and reset daysSelected, then recalculate the total cost.
clearButton.addEventListener('click', function() {
    [mondayButton, tuesdayButton, wednesdayButton, thursdayButton, fridayButton].forEach(button => {
        button.classList.remove('clicked');
    });
    for (const day in daysSelected) {
        daysSelected[day] = 0;
    }
    calculateTotalCost();
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('click', function() {
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});

// When the full-day button is clicked, set the daily rate back to $35, add the "clicked" class to the "full" element, remove it from the "half" element, and recalculate the total cost.
fullDayButton.addEventListener('click', function() {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});

/********* calculate *********/
// When a calculation is needed, calculate the total cost and update the UI.
function calculateTotalCost() {
    let totalDaysSelected = 0;
    for (const day in daysSelected) {
        totalDaysSelected += daysSelected[day];
    }
    totalCost = totalDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = `$ ${totalCost}`;
}
