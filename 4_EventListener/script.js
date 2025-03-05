const btnRed = document.querySelector(".btn-red");
const textChange = document.querySelector(".text-change");

btnRed.addEventListener("click", () => {
  let randText = [
    "Magician",
    "Homeless",
    "Prisoner",
    "CEO",
    "Employed",
    "Trash",
    "Normal",
    "Married",
    "Dead",
  ];

  let Index = Math.floor(Math.random() * randText.length);
  textChange.innerText = randText[Index];
});

const btnColor = document.querySelector(".btn-color");

btnColor.addEventListener("mouseover", () => {
  rgbRand1 = Math.floor(Math.random() * 256);
  rgbRand2 = Math.floor(Math.random() * 256);
  rgbRand3 = Math.floor(Math.random() * 256);
  btnColor.style.backgroundColor = `rgb(${rgbRand1}, ${rgbRand2}, ${rgbRand3})`;
});

const toDoList = document.querySelector(".to-do-list");
const toDoInput = document.querySelector(".todo-input");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");

function todoAdd() {
  const li = document.createElement("li");

  if (toDoInput.value !== "") {
    li.innerText = toDoInput.value;
  }

  toDoList.appendChild(li);
  toDoInput.value = "";
  toDoInput.focus();
}

toDoInput.addEventListener("keydown", (e) =>
  e.code === "Enter" ? todoAdd() : ""
);
add.addEventListener("click", todoAdd);

reset.addEventListener("click", () => {
  // ketika masih punya child, maka hapus child pertama,
  // tapi kan berarti masih dianggp ada child dong?
  // artinya hapus semua ampe gaada child pertama
  while (toDoList.hasChildNodes()) {
    toDoList.removeChild(toDoList.firstChild);
  }
});
