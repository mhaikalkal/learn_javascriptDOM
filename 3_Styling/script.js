const body = document.querySelector("body");
const container = document.querySelector(".container");
const wrapper = document.querySelector(".wrapper");
const title = document.querySelector(".title");
const items = document.querySelector(".items");
const listItems = document.querySelectorAll(".list-item");

// start body
body.style.backgroundColor = "cadetblue";
body.style.height = "1vh";

// start container
// container.style.border = "solid 1px red";
container.style.margin = "1rem";
container.style.display = "flex";
container.style.justifyContent = "center";

// start wrapper
wrapper.style.border = "2px solid white";
wrapper.style.borderRadius = "15px";
wrapper.style.width = "80%";
wrapper.style.padding = "0.7rem";

wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.justifyContent = "center";

// start title
title.style.fontSize = "2rem";
title.style.fontWeight = "bold";
title.style.color = "whitesmoke";
title.style.textAlign = "center";
title.style.marginBottom = "1.2rem";

// start items
items.style.display = "flex";
items.style.flexDirection = "column";
items.style.gap = "0.2rem";

// start list-items
for (let item of listItems) {
  item.style.listStyleType = "none";
  item.style.listStylePosition = "inside";
  item.style.textDecoration = "none";
  item.style.backgroundColor = "white";
  item.style.padding = "0.5rem";
  item.style.width = "100%";
  item.style.textAlign = "center";
}

if (listItems[0]) {
  listItems[0].style.borderRadius = "15px 15px 0 0";
}

if (listItems[listItems.length - 1]) {
  listItems[listItems.length - 1].style.borderRadius = "0 0 15px 15px";
}

const itemsEl = document.querySelector(".items");
const newItems = document.createElement("li");

newItems.setAttribute("class", "list-item list-item-css");
newItems.innerText = "added Sherlock via JS";
// console.log(newItems);
// console.log(itemsEl);
itemsEl.append(newItems);
