function capitalizeWord(sentence) {
  const splitted = sentence.trim().split(" ");
  const emptyArray = [];
  for (let i = 0; i < splitted.length; i++) {
    let word = splitted[i].toString();

    let result = word.charAt(0).toUpperCase() + word.slice(1);

    emptyArray.push(result);
  }
  return emptyArray;
}

const submitButton = document.getElementById("submitButton");
const userInput = document.getElementById("userInput");

const divElement = document.createElement("div");
document.body.appendChild(divElement);
divElement.style.fontSize = "3rem";

submitButton.addEventListener("click", () => {
  userValue = userInput.value;
  const capitalText = capitalizeWord(userValue);
  divElement.innerHTML = capitalText.join(" ");
  userInput.value = "";
});
