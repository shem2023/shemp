let basket = JSON.parse(localStorage.getItem("shem")) || [];

let calculation = () => {
    let carticon = document.getElementById("cartamount");
    carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();

  let generatecartitems = ()=>{
if(basket.length !==0){
 
}

else{
  
}

  };

  generatecartitems();