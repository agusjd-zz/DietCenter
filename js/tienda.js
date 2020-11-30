/* Agregar Elementos al Carrito */

const cartButtons = document.querySelectorAll('.agregarImg');
const shopCartContainer = document.querySelector(".shopCartContainer")  

cartButtons.forEach((addToCart) => {
    addToCart.addEventListener('click', addToCartClick);
    
});

const buyButton = document.querySelector(".buyButton");

buyButton.addEventListener("click", buyButtonClick);

function addToCartClick(event){
    const but = event.target;
    const item = but.closest(".item");
    
    const itemTitle = item.querySelector(".itemTitle").textContent;
    const itemPrice = item.querySelector(".itemPrice").textContent;
    const itemImage = item.querySelector(".itemImage").src;

    addItemToCart(itemTitle,itemPrice,itemImage);
}
function addItemToCart(itemTitle,itemPrice,itemImage){
    const productTitle = shopCartContainer.getElementsByClassName("shoppingCartItemTitle");
    
    for (let i = 0; i < productTitle.length; i++) {
        if (productTitle[i].innerText === itemTitle) {
          let itemCant = productTitle[i].parentElement.parentElement.parentElement.querySelector(".shoppingCartItemCant");
          itemCant.value++;
          shopCartTotal();
          return
        }
        
    }
    
    const shopRow = document.createElement("div");
    const shopCartContent = `
    <div class="row shoppingCartItem">
    <div class="col-6">
        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <img src=${itemImage} class="shopping-cart-image">
            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
        </div>
    </div>
    <div class="col-2">
        <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
        </div>
    </div>
    <div class="col-4">
        <div
            class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
            <input class="shopping-cart-quantity-input shoppingCartItemCant" type="number"
                value="1">
            <button class="btn btn-danger buttonDelete" type="button">X</button>
        </div>
    </div>
</div>`;

    shopRow.innerHTML = shopCartContent;
    shopCartContainer.append(shopRow);

    shopRow.querySelector(".buttonDelete").addEventListener("click", removeShopCartItem);
    shopRow.querySelector(".shoppingCartItemCant").addEventListener("change", cantChange);
    
    shopCartTotal()
}

/*Funcion que actualiza total del carrito*/

function shopCartTotal(){
    let total = 0;
    const shopCartTotal = document.querySelector(".shopCartTotal");
    const shopCartItems = document.querySelectorAll(".shoppingCartItem");
    
    shopCartItems.forEach((shoppingCartItem) => {
        const shopCartItemPriceElement = shoppingCartItem.querySelector(".shoppingCartItemPrice");
        const shopCartItemPrice = Number(shopCartItemPriceElement.textContent.replace("AR$"," "));
        const shopCartItemCantElement = shoppingCartItem.querySelector(".shoppingCartItemCant");
        const shopCartItemCant = Number(shopCartItemCantElement.value);
        
        total = total + shopCartItemPrice * shopCartItemCant;
    });
    shopCartTotal.innerHTML = `AR$${total}`;
}

/*Funcion removedora de elementos del carrito */

function removeShopCartItem(event){

    const buttonClick = event.target;

    buttonClick.closest(".shoppingCartItem").remove();

    shopCartTotal();

}
/*Funcion que actualiza la cantidad de los productos*/
function cantChange(event){
    const cant = event.target;
    if (cant.value <= 0) {
        cant.value = 1;    
    }
    shopCartTotal()
}

/* Boton comprar */

function buyButtonClick(){
    shopCartContainer.innerHTML = " ";
    shopCartTotal()
}