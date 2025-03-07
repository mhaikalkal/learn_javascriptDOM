// https://dummyjson.com/products/search?q=phone

// ketika kita melakukan ini, jika kita tidak nge set aturan lainnya.
// const response = fetch("pokoknya-ini-server-api")

// dibelakang layar berjalan seperti ini.
// const request = new Request("pokoknya-ini-server-api", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// const response = fetch(request);

// const url = "https://dummyjson.com/products/";
const url = "https://dummyjson.com/products/search?q=apple";

async function getData() {
  const response = await fetch(url); // return Response, yang isinya banyak method. salah satunya json() yang biasanya datanya ada disitu
  // maka kita panggil/ pake methodnya
  const data = await response.json();
  // kalo gak pake await, dia return Promise
  // kalo pake await dia return Data-nya

  // di kasus ini si datanya ada didalam object products
  // console.log(typeof response);
  console.log(typeof data);
  console.log(data.products[0]);
}

getData();

// nah biasanya API itu punya access token, kita bisa passing parameter. TAPIII
// Itu gak secure sama sekali. jadi kita masukan token di header
// contoh :
const url_ = "https://dummyjson.com/products/";
async function fetchData() {
  const request = new Request(url_, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_ACCESS_TOKEN", // ganti "YOUR_ACCESS_TOKEN" dengan token yang kamu miliki
    },
    // kalo kita passing disini, gak akan bocor acess tokennya. harusnya.
  });

  const response = await fetch(request);
  const data = await response.json();

  console.log(data.products[0]);
}

// kita juga bisa pake .then().then().catch() buat fetch data. Contoh :
// Global
// const _url = "https://dummyjson.com/products/5000";
const _url = "https://blabla.kuvukiland";
const request = new Request(_url, {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
  },
});

// fetch(request)
//   .then((response) => response.json())
//   .then((data) => console.log("Success : ", data))
//   .catch((error) => console.log(error));

// diatas kita dapet error, tapi success nya ada. Kenapa (?)
// karena, di fetch, menerima data/return = sukses, even itu dia return error.
// error handling, kita pake request diatas.

async function _fetchData() {
  try {
    const response = await fetch(request);
    const data = await response.json();

    // status 200 == OK
    if (response.status === 200) {
      console.log("Success : ", data);
    } else {
      // server error
      throw new Error(`${data.message}. Error Code : ${response.status}`);
    }
  } catch (error) {
    // fetch error
    console.log(error); // failed to fetch
  }
}

_fetchData();
