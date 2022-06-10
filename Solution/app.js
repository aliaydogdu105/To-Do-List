let items = [];

let list = document.getElementById("myList");

list.addEventListener("click", (item) => {
  if (item.target.tagName == "LI") {
    item.target.classList.toggle("checked");
    ToogleDeleteButton();
  }
});

document.querySelector("#deleteAll").onclick = function () {
  let elements = document.querySelectorAll(".checked");
  elements.forEach(function (item) {
    item.style.display = "none";
  });
};

function ToogleDeleteButton() {
  let checkList = document.querySelectorAll(".list-group-item.checked");
  if (checkList.length > 0) {
    document.querySelector("#deleteAll").classList.remove("d-none");
  } else {
    document.querySelector("#deleteAll").classList.add("d-none");
  }
}

document.getElementById("btn").onclick = function () {
  let item = document.getElementById("txtItem").value;
  txtItem.value = "";

  if (item === "") {
    alert("please write something");
    return;
  }
  CreateItem(item);
};

function CreateItem(item) {
  let li = document.createElement("li");
  let t = document.createTextNode(item);
  li.className = "list-group-item";
  li.appendChild(t);

  list.appendChild(li);

  let span = document.createElement("span");
  let text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  span.onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
    li.classList.remove("checked");
  };
}
