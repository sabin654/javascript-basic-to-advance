const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event);

    console.log(event.target.id);

    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "red") {
      body.style.backgroundColor = event.target.id;
    }

    switch (event.target.id) {
      // case "grey":
      //   body.style.backgroundColor = event.target.id;
      //   break;
      case "purple":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
      case "orange":
        body.style.backgroundColor = event.target.id;
        break;
      case "green":
        body.style.backgroundColor = event.target.id;
        break;
      case "pink":
        body.style.backgroundColor = event.target.id;
        break;
      case "red":
        body.style.backgroundColor = event.target.id;
        break;
      case "brown":
        body.style.backgroundColor = event.target.id;
        break;
      case "black":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "cyan":
        body.style.backgroundColor = event.target.id;
        break;
      case "magenta":
        body.style.backgroundColor = event.target.id;
        break;
      case "lime":
        body.style.backgroundColor = event.target.id;
        break;
      case "indigo":
        body.style.backgroundColor = event.target.id;
        break;
      case "violet":
        body.style.backgroundColor = event.target.id;
        break;
      case "navy":
        body.style.backgroundColor = event.target.id;
        break;
      case "maroon":
        body.style.backgroundColor = event.target.id;
        break;
      case "olive":
        body.style.backgroundColor = event.target.id;
        break;
      case "silver":
        body.style.backgroundColor = event.target.id;
        break;
      case "teal":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});

const button = document.querySelectorAll(".btn");
const bulb = document.querySelector(".bulb");

button.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.id === "on") {
      bulb.style.backgroundColor = "green";
    }
    if (event.target.id === "off") {
      bulb.style.backgroundColor = "transparent";
    }
  });
});
