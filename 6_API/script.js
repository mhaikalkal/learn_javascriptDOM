const url = "https://dummyjson.com/products/search?q=";

async function getData(product, callback) {
  const request = new Request(`${url}${product}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer Token",
    },
  });

  console.log("Request Data");

  try {
    const response = await fetch(request);
    const data = await response.json();

    if (response.status === 200) {
      if (data.products.length <= 0) {
        // console.log(data);
        console.log("Data not found");
        throw new Error("Data not found"); // kalo data gak ada
      } else {
        // console.log(data);
        callback(data);
        console.log("Data Diterima");
      }
    } else {
      console.log("Server Error"); // url gak bener.
      throw new Error("url or server error");
    }
  } catch (err) {
    console.error(
      err,
      "Ini message dari catch. even error nya udah di throw di atas. ini message masih akan ke render"
    );
  }
}

function renderData(response) {
  const data = response.products;
  console.log(data);

  const container = document.querySelector(".container");
  // const thumbnail = document.querySelector(".product-thumbnail");
  // const name = document.querySelector(".product-name");
  // const desc = document.querySelector(".product-desc");
  // const price = document.querySelector(".product-price");
  // const rating = document.querySelector(".product-rating");

  data.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    container.appendChild(card);

    const thumbnail = document.createElement("img");
    thumbnail.classList.add("product-thumbnail");
    thumbnail.src = data.thumbnail;

    const name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = data.title;

    const desc = document.createElement("p");
    desc.classList.add("product-desc");
    desc.innerText = data.description;

    const price = document.createElement("span");
    price.classList.add("product-price");
    price.innerText = `$ ${data.price.toLocaleString()}`;

    const rating = document.createElement("span");
    rating.classList.add("product-rating");
    rating.innerText = `${data.rating}/5`;

    card.appendChild(thumbnail);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(price);
    card.appendChild(rating);
  });
}

getData("", function (data) {
  renderData(data);
});
