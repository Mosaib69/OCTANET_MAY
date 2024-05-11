const inputField = document.querySelector(".input-field");

const taskContainer = document.querySelector("#task-container");

function addTask() {
  if (inputField.value === "") {
    alert("Yoy must write something!");
  } else {
    let li = document.createElement("li");

    taskContainer.appendChild(li);

    let div = document.createElement("div");

    div.setAttribute("class", "check-input");

    li.appendChild(div);

    let checkBox = document.createElement("input");

    checkBox.type = "checkbox";

    div.appendChild(checkBox);

    let para = document.createElement("p");

    para.innerHTML = inputField.value;

    div.appendChild(para);

    let spanCross = document.createElement("span");

    spanCross.innerHTML = "\u00d7";

    li.appendChild(spanCross);
  }
  inputField.value = "";
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    e.target.parentElement.style.textDecoration = "line-through";
    e.target.disabled = true;
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
