const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
let prevTimeRange = document.querySelectorAll(".previous-time-range");

daily.style.color = "white";

let currentHoursWork = document.querySelector(".current-hours-work");
let previousHoursWork = document.querySelector(".previous-hours-work");

let currentHoursPlay = document.querySelector(".current-hours-play");
let previousHoursPlay = document.querySelector(".previous-hours-play");

let currentHoursStudy = document.querySelector(".current-hours-study");
let previousHoursStudy = document.querySelector(".previous-hours-study");

let currentHoursExercise = document.querySelector(".current-hours-exercise");
let previousHoursExercise = document.querySelector(".previous-hours-exercise");

let currentHoursSocial = document.querySelector(".current-hours-social");
let previousHoursSocial = document.querySelector(".previous-hours-social");

let currentHoursSelfCare = document.querySelector(".current-hours-self-care");
let previousHoursSelfCare = document.querySelector(".previous-hours-self-care");

daily.addEventListener("click", () => {
    daily.style.color = "white";
    weekly.style.color = "hsl(236, 100%, 87%)";
    monthly.style.color = "hsl(236, 100%, 87%)";

    for (let i = 0; i < prevTimeRange.length; i++) {
        prevTimeRange[i].innerHTML = "Yesterday";
    }

    currentHoursWork.innerHTML = "5hrs";
    previousHoursWork.innerHTML = "7hrs";

    currentHoursPlay.innerHTML = "1hr";
    previousHoursPlay.innerHTML = "2hrs";

    currentHoursStudy.innerHTML = "0hrs";
    previousHoursStudy.innerHTML = "1hr";

    currentHoursExercise.innerHTML = "1hr";
    previousHoursExercise.innerHTML = "2hrs";

    currentHoursSocial.innerHTML = "1hr";
    previousHoursSocial.innerHTML = "3hrs";

    currentHoursSelfCare.innerHTML = "0hrs";
    previousHoursSelfCare.innerHTML = "1hr";
});

weekly.addEventListener("click", () => {
    daily.style.color = "hsl(236, 100%, 87%)";
    weekly.style.color = "white";
    monthly.style.color = "hsl(236, 100%, 87%)";

    for (let i = 0; i < prevTimeRange.length; i++) {
        prevTimeRange[i].innerHTML = "Last Week";
    }

    currentHoursWork.innerHTML = "32hrs";
    previousHoursWork.innerHTML = "36hrs";

    currentHoursPlay.innerHTML = "10hrs";
    previousHoursPlay.innerHTML = "8hrs";

    currentHoursStudy.innerHTML = "4hrs";
    previousHoursStudy.innerHTML = "7hrs";

    currentHoursExercise.innerHTML = "4hrs";
    previousHoursExercise.innerHTML = "5hrs";

    currentHoursSocial.innerHTML = "5hrs";
    previousHoursSocial.innerHTML = "10hrs";

    currentHoursSelfCare.innerHTML = "2hrs";
    previousHoursSelfCare.innerHTML = "1hrs";
});

monthly.addEventListener("click", () => {
    daily.style.color = "hsl(236, 100%, 87%)";
    weekly.style.color = "hsl(236, 100%, 87%)";
    monthly.style.color = "white";

    for (let i = 0; i < prevTimeRange.length; i++) {
        prevTimeRange[i].innerHTML = "Last Month";
    }

    currentHoursWork.innerHTML = "103hrs";
    previousHoursWork.innerHTML = "128hrs";

    currentHoursPlay.innerHTML = "23hrs";
    previousHoursPlay.innerHTML = "29hrs";

    currentHoursStudy.innerHTML = "13hrs";
    previousHoursStudy.innerHTML = "19hrs";

    currentHoursExercise.innerHTML = "11hrs";
    previousHoursExercise.innerHTML = "18hrs";

    currentHoursSocial.innerHTML = "21hrs";
    previousHoursSocial.innerHTML = "23hrs";

    currentHoursSelfCare.innerHTML = "7hrs";
    previousHoursSelfCare.innerHTML = "11hrs";
});