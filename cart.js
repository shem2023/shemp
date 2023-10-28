let label = document.getElementById("label");
let shoppingcart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("shem")) || [];

let calculation = () => {
  let carticon = document.getElementById("cartamount");
  carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generatecartitems = () => {
  if (basket.length !== 0) {
    return (shoppingcart.innerHTML = basket
      .map((x) => {
        console.log(x);
        let { id, item } = x;
        let search = shopitemsdata.find((y) => y.id === id) || [];
        return `
  <div class="cart-item">
  <img width="100" src=${search.img} alt="" />
  <div class="details">
  <div class"title-price-x"></div>
  <div class"cartbuttons"></div>
<h3></h3>
  </div>
  </div>
  
  `;
      })
      .join(" "));
  } else {
    shoppingcart.innerHTML = ``;
    label.innerHTML = `
  <h2>Cart Is Empty </h2>
  <a href="index.html">
  <button class="HomeBtn">Back to Home</button>
  </a>
  
  `;
  }
};

generatecartitems();
