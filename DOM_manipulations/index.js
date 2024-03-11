const myButton = document.querySelector("#myButton");

myButton.addEventListener("click", function (e) {
    console.log(e);
  });

  myButton.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });