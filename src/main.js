const productList = document.getElementById("productList");
const cartCount = document.getElementById("cartCount");

// API call
fetch("https://fakestoreapi.com/products")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    showProducts(data);
  });

// show products
function showProducts(products) {
  productList.innerHTML = "";

  products.forEach(function(item) {
    productList.innerHTML += `
      <div class="card" style="width:200px; margin:10px; padding:10px;">
        <img src="${item.image}" width="100%">
        <h5>${item.title}</h5>
        <p>₹ ${item.price}</p>
        <button onclick="addToCart()">Add to Cart</button>
      </div>
    `;
  });
}

// cart
window.addToCart = function () {
  let count = document.getElementById("cartCount");
  count.innerText = Number(count.innerText) + 1;

}