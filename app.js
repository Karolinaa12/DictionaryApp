const greetingHeader = document.querySelector("#greeting");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const btn = document.querySelector("#search");
const wordDisplay = document.querySelector(".word");

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
  let inputWord = document.querySelector("#inp-word").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      wordDisplay.innerHTML = data[0].word;
      document.querySelector(".meaning").innerHTML =
        data[0].meanings[0].definitions[0].definition;
    });

  document.querySelector("#inp-word").value = "";
});

greetingHandler();
