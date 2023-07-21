const greetingHeader = document.querySelector("#greeting");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const btn = document.querySelector("#search");
const result = document.getElementById("result");
const sound = document.getElementById("sound");

function greetingHandler() {
  let hour = new Date().getHours();
  if (hour < 12) {
    greetingHeader.innerHTML = "Good morning!";
  } else if (hour < 18) {
    greetingHeader.innerHTML = "Good afternoon!";
  } else if (hour < 24) {
    greetingHeader.innerHTML = "Good evening!";
  } else {
    greetingHeader.innerHTML = "Welcome";
  }
}

btn.addEventListener("click", () => {
  let inputWord = document.querySelector("#inp-word").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].phonetics[0].audio);
      result.innerHTML = `<div class="word">
        <h3>${inputWord}</h3>
        <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>${data[0].phonetic || data[0].phonetics[1].text}</p>
      </div>
      <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
      sound.setAttribute(
        "src",
        `${
          data[0].phonetics[0].audio ||
          data[0].phonetics[1].audio ||
          data[0].phonetics[2].audio
        }`
      );
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error" >No Definitions Found...</h3><h4 class="error-sub">Try a different word</h4>`;
    });

  document.querySelector("#inp-word").value = "";
});

function playSound() {
  sound.play();
}

greetingHandler();
