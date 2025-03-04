// get element with class
const firstText = document.querySelector(".first-text");

// classList.add()
firstText.classList.add("texted");
firstText.classList.add("texted", "bold", "italic"); // Bisa banyak sekaligus

console.log(firstText.classList.contains("texted"));

// remove class
const cadetBlue = document.querySelector(".cadetblue-bg");
cadetBlue.classList.remove("cadetblue-bg", "italic");
cadetBlue.classList.remove("bold");

// karena kita pakai querySelector
// add class dan remove class ini hanya berlaku untuk element pertama yang memiliki class yang dipilih.
// misal, ada 2 element dari cadetblue-bg, maka ketika kita remove via classList.remove, maka class yang dihapus hanya element pertama, yang kedua tidak terhapus.

// Multiple Elements
// className
const firstTextAll = document.querySelectorAll(".items");
// console.log(firstTextAll);

// banyak cara
firstTextAll.forEach((x) => x.classList.add("salmon-bg"));

// for (text of firstTextAll) {
//   // text.classList.add("salmon-bg");
//   text.className += " salmon-bg";
// }

// for (let x = 0; x < firstTextAll.length; x++) {
//   // firstTextAll[x].classList.add("salmon-bg");
//   firstTextAll[x].className += " salmon-bg";
// }

// Menggunakan setAttribute dan ID
const thirdText = document.querySelector(".third-text");
console.log(thirdText);

thirdText.setAttribute("id", "grey-bg");
thirdText.removeAttribute("id"); // dia langsung hapus si "id" nya bukan "isi id" nya

// setAttribute dan Class
const tagP = document.querySelectorAll("p");
console.log(tagP);
let tagPLast = tagP[tagP.length - 1];
console.log(tagPLast);
// select last Element

// cara lain, ambil parentnya
const wrapper = document.querySelector(".wrapper");
// console.log(wrapper);
let lastP = wrapper.lastElementChild;
console.log(lastP);

// cara lain lagi
const p = document.querySelector("p:last-child");
console.log(p);
p.setAttribute("class", "cadetblue-bg");
