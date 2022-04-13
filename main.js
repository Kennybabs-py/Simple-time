const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

const showAmPm = true;

// Show Time
showTime = () => {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // Setting am or Pm
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 hour format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${amPm}`;

  setTimeout(showTime, 1000);
};

// Add Zeros
const addZero = (n) => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// Change background image
const backImg = () => {
  let today = new Date();
  hour = today.getHours();
  if (hour < 6) {
    // Midnight
    document.body.style.backgroundImage = "url('midn4.jpg')";
    greeting.textContent = "It's Midnight! Get some off screen time, ";
    document.body.style.color = "white";
  } else if (hour >= 6 && hour < 12) {
    // Morning daybreak
    document.body.style.backgroundImage = "url('daytime2.jpg')";
    greeting.textContent = "Top of the morning! Good Morning, ";
  } else if (hour <= 17) {
    // afternoon
    document.body.style.backgroundImage = "url('noon3.jpg')";
    greeting.textContent = "Hey, it's noon. Take a nap and just chill out, ";
  } else {
    // evening
    document.body.style.backgroundImage = "url('even3.jpg')";
    greeting.textContent = "Long day, right? Good Evening, ";
    document.body.style.color = "white";
  }
};

//
const setName = (e) => {
  if (e.type === "keypress") {
    // Making sure Enter key is pressed
    if (e.which == 13 || e.keycode == 13) {
      // 13 is unique code for the 'Enter' keypad
      localStorage.setItem("name", e.target.innerText);
      // blur is clicking action done anywhere on the screen.
      //This is called, too whenever a name is entered and you click the screen.
      name.blur();
    } else {
      localStorage.setItem("name", e.target.innerText);
    }
  }
};

// Get name and store it
const getName = () => {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Enter name";
  } else {
    name.textContent = localStorage.getItem("name");
  }
};

// Setting focus
const setFocus = (e) => {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    } else {
      localStorage.setItem("focus", e.target.innerText);
    }
  }
};
// Get focus and store it
const getFocus = () => {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "Enter focus";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
};

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
backImg();
getName();
getFocus();
