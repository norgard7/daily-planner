let containerEl = document.querySelector(".container");
let currentDayEl = document.querySelector("#currentDay");
let contentEl = document.querySelectorAll(".content"); 
let allEvents =["","",""];
// get current date and time from luxon
let DateTime = luxon.DateTime;
let today = DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });

let time = DateTime.now().hour;


function loop() {
    $('table > tbody > tr').each(function(index,tr) {
    if(time > index + 9) {
        contentEl[index].classList.add("past")
        console.log("too early");
    }
    else if (time === index + 9) {
        containerEl[index].classList.add("present");
        console.log("right now");
    }
    else {
        contentEl[index].classList.add("future");
    }
        
    });
} 
// store all events to local storage
function storeEvents() {
    localStorage.setItem("allEvents", JSON.stringify(allEvents));
}
//pull all eventes from local storage and dipslay them
function renderEvents() {
    let showAllEvents = JSON.parse(localStorage.getItem("allEvents"));
    if(showAllEvents !== null) {
        for( let i = 0; i < contentEl.length; i++) {
            allEvents = showAllEvents;
            contentEl[i].textContent = showAllEvents[i];
        }
    }
}


// display current day and date. Pull events from local storage and color code the time block.
function init() {
    currentDayEl.textContent=today; 
    loop();  
    renderEvents();
}
$("button").click(function(){
    let reminder = $(this).attr("data-index");
    let event = contentEl[reminder].textContent;
    allEvents.splice(reminder, 1, event);
    storeEvents();
})

init();
    




// Luxon: need current time to highligh the current hour in the timeblock. 


// .container is where timeblock will go
    // when we hit save there is no refresh and content stays(local storage)

    // on page load events are pulled from local storage




   
  