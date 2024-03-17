document.addEventListener("DOMContentLoaded", function () {
  let message = document.getElementById("message");
  let error = document.getElementById("error");

  if (message) {
    setTimeout(() => {
      message.classList.add("hidden");
    }, 1000);
  } else if (error) {
    setTimeout(() => {
      error.classList.add("hidden");
    }, 1000);
  }
});

const lineNumbers = document.querySelector(".line-numbers");
const codigo = document.getElementById("codigo");


codigo.addEventListener("keyup", (event) => {
  const numberOfLines = event.target.value.split("\n").length;
  lineNumbers.innerHTML = Array(numberOfLines).fill("<span></span>").join("");
});

codigo.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault(); // Evita que el foco cambie al siguiente elemento
    const tabCharacter = "    "; // 4 espacios para simular un tabulador
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value =
      this.value.substring(0, start) + tabCharacter + this.value.substring(end);
    this.selectionStart = this.selectionEnd = start + tabCharacter.length;
  }
});
