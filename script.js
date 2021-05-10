let currentDayEl = document.querySelector("#currentDay");    

// get current date and time from luxon
let DateTime = luxon.DateTime;
let today = DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });
let time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE);


// display current day and date. Pull events from local storage and color code the time block.
function init() {
    currentDayEl.textContent=today;   
}

init();
    




// Luxon: need current time to highligh the current hour in the timeblock. 


// .container is where timeblock will go
    // when we hit save there is no refresh and content stays(local storage)

    // on page load events are pulled from local storage




