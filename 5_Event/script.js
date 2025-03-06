// Jadi daripada kita harus addEventListener ke semua elementnya yang mana itu gak sesuai DRY.
// maka kita assign addEventListener-nya ke parentnya aja sekalian.
// ini disebut event delegation

document.querySelector(".sports").addEventListener("click", function (e) {
  let target = e.target;
  console.log(target.innerText + " is clicked!");
  // console.log(e.type);

  // jadi matches() ini buat make sure si element merupakan apa
  // ini kalo si target merupakan element li, maka
  // kalo ternyata elementnnya div, dia gaakan berubah.
  if (target.matches("li")) {
    target.style.backgroundColor = "whitesmoke";
    target.style.color = "rgb(54, 90, 78)";
  }
  // kalo di assign ke si childnya, gausah kita pake matches segala, tinggal styling targetnya aja langsung.
  // dan hasilnya sama aja. lebih clean dan DRY
});

// keunggulan event delegation.
// jika kita add element baru sesudah browser merender element.
const sports = document.querySelector(".sports");
const newSport = document.createElement("li");
newSport.innerText = "F1";
newSport.classList.add("f1");
sports.appendChild(newSport);
// dia otomatis sudah bisa merasakan langsung effect dari eventListener-nya atau event delegationnya.
// yang mana kalo kita tidak menggunakan event delegation, si element yang baru diinput setelah browser render,
// dia gak bisa merasakan langsung effect yang sudah ada.

// contoh kalo kudu masing-masing element
document.querySelector(".football").addEventListener("mouseover", function (e) {
  let target = e.target;
  console.log(target.innerText + " is clicked!");

  // gausah matches() kan?
  target.style.backgroundColor = "rgb(54, 90, 78)";
  target.style.color = "whitesmoke";
});

// document.querySelector(".tennis").addEventListener("click", function (e) {
//   let target = e.target;
//   console.log(target.innerText + " is clicked!");
//   if (target.matches("li")) {
//     target.style.backgroundColor = "whitesmoke";
//     target.style.color = "rgb(54, 90, 78)";
//   }
// });

// document.querySelector(".badminton").addEventListener("click", function (e) {
//   let target = e.target;
//   console.log(target.innerText + " is clicked!");
//   if (target.matches("li")) {
//     target.style.backgroundColor = "whitesmoke";
//     target.style.color = "rgb(54, 90, 78)";
//   }
// });

// document.querySelector(".basketball").addEventListener("click", function (e) {
//   let target = e.target;
//   console.log(target.innerText + " is clicked!");
//   if (target.matches("li")) {
//     target.style.backgroundColor = "whitesmoke";
//     target.style.color = "rgb(54, 90, 78)";
//   }
// });

// document.querySelector(".mma").addEventListener("click", function (e) {
//   let target = e.target;
//   console.log(target.innerText + " is clicked!");
//   if (target.matches("li")) {
//     target.style.backgroundColor = "whitesmoke";
//     target.style.color = "rgb(54, 90, 78)";
//   }
// });
