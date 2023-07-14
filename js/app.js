
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const randomWorldEl = document.getElementById("random-word");
const inputEl = document.getElementById("user-word");
const scoreEl = document.querySelector("#score");
const timeEl = document.querySelector("#time");
const inputContainer = document.querySelector(".input-container");
const restartBtn = document.querySelector(".restart-btn");

inputEl.focus();

let randomWorld;
let userScore = 0;
let userTime = 10;


const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const changeWord = () => {
  const randomNumber = Math.trunc(Math.random() * words.length);
  randomWorld = words[randomNumber];
  randomWorldEl.textContent = randomWorld;
};

changeWord();

inputEl.addEventListener("input", () => {
  const userWord = inputEl.value;

  if (userWord == randomWorld) {
    changeWord();
    userScore++;
    userTime += 3;
    scoreEl.textContent = userScore;
    inputEl.value = "";
  }
});

const timeInterval = setInterval(() => {
  if (userTime > 0) {
    userTime--;
    timeEl.textContent = `${userTime}s`;
  } else if (userTime == 0) {
    removeHidden();
    inputContainer.classList.add("hidden");
  } else {
    clearInterval(timeInterval);
  }
}, 1000);


restartBtn.addEventListener("click", () => {
  window.location.reload();
});


document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});
