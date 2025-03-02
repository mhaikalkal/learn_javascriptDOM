// Ambil title di haed dan diubah menjadi Javascript DOM
document.title = "Javascript DOM";

const getPlayground = document.querySelector(".playground");
console.log("ini textContent : " + getPlayground.textContent);
console.log("ini innerText : " + getPlayground.innerText);
console.log("ini innerHTML : " + getPlayground.innerHTML);

// Perbedaannya adalah :
// 1. textContent = dia ambil semua text termasuk yang ke hidden
// 2. innerText = dia cuma ambil text yang di render oleh browser
// 3. innerHTML = dia ambil semua text termasuk tag-tag html nya juga kaya <div> <span> <a> dll
// Pro Tips : kalo mau pake innerHTML, maka harus kita "purify" dulu biar gak kena XSS Injector.

// Ambil h1 di halaman HTML, dan ternyata cuma return h1 pertama di browser.
const h1 = document.querySelector("h1");
console.log("h1 : " + h1.innerText);

// Dia ambil semua tag h1, dia return HTMLCollection. berupa array (?)
// Ralat : ITS NOT AN ARRAY. You cannot use Array methods like push(), pop(), or join() on a NodeList.
const h1s = document.getElementsByTagName("h1");
console.log(h1s); // return HTMLCollection(2) [h1.title, h1]
console.log("h1s length : " + h1s.length);
console.log(h1s[0]); // dia akan return dengan tag nya juga kaya <div> <span>
console.log(h1s[1]); // dia akan return dengan tag nya juga kaya <div> <span>

// We can loop thru array with for of
for (let h1 of h1s) {
  console.log(h1.innerText);
}

// ambil semua tag h3 di browser, dia return sebagai Nodelist
// Ralat : ITS NOT AN ARRAY. You cannot use Array methods like push(), pop(), or join() on a NodeList.
const h3 = document.querySelectorAll("h3");
console.log(h3); // return Nodelist = [h3]
h3[0].innerText = "TEXT DI ELEMENT INI SUDAH DIUBAH OLEH JAVASCRIPT DOM";
// Ubah isi element menggunakan innerText

// Adding new element
const newElement = document.createElement("div");
newElement.innerHTML = "<p>I Added p tag in this text</p>";
getPlayground.append(newElement);
console.log(getPlayground.innerHTML);

// Jadi step diatas adalah :
// buat element div baru,
// karena div barunya kosong, maka kita masukin text via innerHTML di new elementnya
// sesudah diisi text, maka kita append (tambah) ke element yang dituju.

const items = document.querySelector(".items");
const listitems = document.createElement("li");
listitems.classList.add("list-item"); // menambahkan class ke element
listitems.innerHTML = "e";
items.appendChild(listitems);

// REMOVE ELEMENT
const secondaryTemp = document.querySelector(".temp-2");
getPlayground.removeChild(secondaryTemp); // dipakai untuk melenyapkan child dari parent element yang dipilih

const getRandText = document.querySelector(".rand-text");
getRandText.remove(); // dipakai untuk melenyapkan element yang dipilih

// Removed an element from Javascript DOM, the element is somewhere in the memory.
// so we can just insert it later. but idk it yet tho. lmao
