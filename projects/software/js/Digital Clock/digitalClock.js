//Digital Clock Program

function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000); //Works like setTimeout, except it repeats the callback every x ms.

function updateClockMeridiem(){

    const now = new Date();
    
    //Gets the hours and determines Maridiem
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";//checks if it's afternoon or before noon.
    hours = hours % 12 || 12; //makes the clock 12, or the remainder of 12
    hours = hours.toString().padStart(2, 0); //To get 2 digits back
    
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock-meridiem").textContent = timeString;
}

updateClock();
updateClockMeridiem();
setInterval(updateClock, 1000); //Works like setTimeout, except it repeats the callback every x ms.
setInterval(updateClockMeridiem, 1000);