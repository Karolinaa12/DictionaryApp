const greetingHeader = document.querySelector("#greeting");
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
const btn = document.querySelector("#search");
const result = document.getElementById("result");

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
      result.innerHTML = `<div class="word">
        <h3>${inputWord}</h3>
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
    })
    .catch((data) => {
      result.innerHTML = `<h3 class="error" >Error</h3>`;
    });

  document.querySelector("#inp-word").value = "";
});

greetingHandler();
