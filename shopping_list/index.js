const list = document.querySelector("#list");
const input = document.querySelector("#item");
const button1 = document.querySelector("#button1");

input.addEventListener("input", () => {
    // Check if the input field has any text
    if (input.value.length > 0) {
      // If there's text, enable the button
      button1.disabled = false;
    } else {
      // If there's no text, disable the button
      button1.disabled = true;
    }
  });

function buttonClick(){
    currentValue = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button2 = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(button2);

    span.textContent = currentValue;
    button2.textContent = "Delete";
    list.appendChild(listItem);

    button2.addEventListener('click', () => {
        list.removeChild(listItem);
      });
      button1.disabled = true;
      input.focus();
    };
    
button1.addEventListener("click", buttonClick);

/* button1.addEventListener('click', () => {
    currentValue = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const button2 = document.createElement("button");

    listItem.appendChild(span);
    listItem.appendChild(button2);

    span.textContent = currentValue;
    button2.textContent = "Delete";
    list.appendChild(listItem);

    button2.addEventListener('click', () => {
        list.removeChild(listItem);
      });
      input.focus();
    });
    */
   