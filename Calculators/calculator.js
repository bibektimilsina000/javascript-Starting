let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          display.style.lineHeight = "90px";
          display.style.textAlign = "right";
        } catch {
          display.innerText = "Ma Error!";
        }
        break;
      case "Del":
        display.innerText = display.innerText.slice(0, -1);
        break;
      default:
        display.innerText += e.target.innerText;
        display.style.lineHeight = "20px";
        display.style.textAlign = "left";
    }
  });
});
