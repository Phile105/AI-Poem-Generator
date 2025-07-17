function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function genaratePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3obe42b49d05c38f1dc5c35a8d7ft064";
  let context =
    "You are a romantic Poem expect and love to write short poems. Your mission is to generate a 4 line poem and separate each line with a <br/>. Make sure to follow the user instuctions.Do not include a title. Sign the poem with <br/> - <i><strong> AI Poem Generator </strong></i>";
  let prompt = `User instruction: Genarate a poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⌛ Generating poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", genaratePoem);
