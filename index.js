let home = document.getElementById("home-team");
let guest = document.getElementById("guest-team");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");


let homeScore = 0;
let guestScore = 0;
let secondsCounter = 0;
let minutesCounter = 0;


function goalHomeTeam () {
    homeScore += 1;
    home.textContent = homeScore;
}

function goalGuestTeam () {
    guestScore += 1;
    guest.textContent = guestScore;
}


function timeStart () {
    secondsCounter ++;
    if (secondsCounter <= 9) {
        seconds.innerHTML = "0" + secondsCounter;
    }
    if (secondsCounter > 9) {
        seconds.innerHTML = secondsCounter;
    }
    if (secondsCounter > 59) {
        minutesCounter ++;
        minutes.innerHTML = "0" + minutesCounter;
        secondsCounter = 0;
        seconds.innerHTML = "0" + secondsCounter;
    }
    if (minutesCounter > 9) {
        minutes.innerHTML = minutesCounter;
    }
}

function reset() {
    homeScore = 0;
    home.textContent = homeScore;
    guestScore = 0;
    guest.textContent = guestScore;
    secondsCounter = "00";
    seconds.textContent = secondsCounter;
    minutesCounter = "00";
    minutes.textContent = minutesCounter
}

