const currentDayElement = document.getElementById("currentDayOfTheWeek");
const currentTimeElement = document.getElementById("currentUTCTime");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateClock() {
  const currentDate = new Date();
  const gmtPlus1Offset = 60;
  currentDate.setMinutes(currentDate.getMinutes() + gmtPlus1Offset);

  const currentDayIndex = currentDate.getUTCDay();
  const currentDay = daysOfWeek[currentDayIndex];
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
  const currentUTCTime = `${hours}:${minutes}:${seconds}`;

  currentDayElement.textContent = currentDay;
  currentTimeElement.textContent = currentUTCTime;
}

// Initial update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
