const greetingHeader = document.querySelector("#greeting");

function greetingHandler() {
  let hour = new Date().getHours();
  if (hour < 12) {
    greetingHeader.innerHTML = "Good morning";
  } else if (hour < 18) {
    greetingHeader.innerHTML = "Good afternoon";
  } else if (hour < 24) {
    greetingHeader.innerHTML = "Good evening";
  } else {
    greetingHeader.innerHTML = "Welcome";
  }
}

greetingHandler();
