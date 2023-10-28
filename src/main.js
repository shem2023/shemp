let shop = document.getElementById("shop");

let shopitemsdata = [
  {
    id: "wdwd",
    name: " DELL Laptop",
    price: 40005,
    desc: "500GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image1.jpg",
  },
  {
    id: "wdfd",
    name: "Hp revollve 810",
    price: 60000,
    desc: "500GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image2.jpg",
  },
  {
    id: "wwerdwd",
    name: "LENOVO THINK PAD ",
    price: 40000,
    desc: "1TB hhd, 16gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image3.jpg",
  },
  {
    id: "wdyuwfgd",
    name: "LENOVO",
    price: 90000,
    desc: "500GB SSd, 16gb RAM,TOUCH SCREEN",
    img: "images/image4.jpg",
  },
  {
    id: "wdyufwfgd",
    name: "HP Laptop",
    price: 65000,
    desc: "256GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image4.jpg",
  },
  {
    id: "wdfdf",
    name: "Hp revollve 810",
    price: 56000,
    desc: "500GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image5.jpg",
  },
  {
    id: "wdfdd",
    name: "TESLA ",
    price: 16000,
    desc: "5PB hhd, 128gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image6.jpg",
  },
  {
    id: "wdfdj",
    name: "MOTOROLA",
    price: 35000,
    desc: "500GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image7.jpg",
  },
  {
    id: "wdfdl",
    name: "NOKIA",
    price: 30000,
    desc: "500GB hhd, 8gb RAM,TOUCH SCREEN, HAS A BACKLIGHT KEYBOARD",
    img: "images/image8.jpg",
  },
];

let basket = JSON.parse(localStorage.getItem("shem")) || [];

let generateshop = () => {
  return (shop.innerHTML = shopitemsdata
    .map((x) => {
      let { id, name, price, img, desc } = x;
      let search = basket.find((x) => x.id === id) || [];

      return `
    <div id=product-id-${id} class="item">
                <img width="220" src=${img} alt="">
           <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                    </div>
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                </div>
            </div>
           </div>
            </div>
    
    `;
    })
    .join(""));
};

generateshop();

let increment = (id) => {
  let selecteditem = id;

  let search = basket.find((x) => x.id === selecteditem.id);

  if (search === undefined) {
    basket.push({
      id: selecteditem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  //   console.log(basket);
  update(selecteditem.id);
  localStorage.setItem("shem", JSON.stringify(basket));
};
let decrement = (id) => {
  let selecteditem = id;

  let search = basket.find((x) => x.id === selecteditem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selecteditem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);

  localStorage.setItem("shem", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let carticon = document.getElementById("cartamount");
  carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
