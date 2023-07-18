const greetingHeader = document.querySelector("#greeting");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

const btn = document.querySelector("#search");

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

btn.addEventListener("click", function (e) {
  e.preventDefault;
  let inputWord = document.querySelector("#word").value;

  console.log(`${url}${inputWord}`);
});

greetingHandler();
