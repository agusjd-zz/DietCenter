const storeButton = $('.storeButton'); /*Boton comprar del inicio y boton tienda del navbar*/
const containerIndex = $('#containerIndex') /*Pantalla Inicio*/
const searchMenu = $('#searchMenu')/* Menu buscar y categorias*/
const catStore = $('#catStore') /*Menu Categorias*/
const allItems = $('#allItems')/*Seccion todos los productos*/
const almaItems = $('#almaItems');/*Seccion Almacen */
const buttonAll = $('#buttonAll')/*Boton todas los productos*/
const buttonCat = $('#buttonCat');
const snackButton = $('.snackButton');/* Boton para ingresar seccion snack */
const almaButton = $('#almaButton') /* Boton almacen */


$(searchMenu).hide();
$(catStore).hide();
$(allItems).hide()
$(almaItems).hide();  
/*Funcion que muestra la tienda*/
$(storeButton).click(function(){
  $(containerIndex).hide()
  $(searchMenu).show();
  $(catStore).show();
  if ($(buttonCat)){
    $(buttonCat).addClass("btn-success");
  }

})
/*Boton todos los productos*/
$(buttonAll).click(function(){
  $(catStore).hide();
  $(allItems).show();
  $(buttonCat).removeClass("btn-success");
  $(buttonAll).addClass("btn-success");
})

/*Boton categorias*/
$(buttonCat).click(function(){
  $(catStore).show();
  $(buttonAll).removeClass("btn-success");
  $(buttonCat).addClass("btn-success");
  if (($(allItems))) {
    $(allItems).hide();
    
  }
})

$(almaButton).click(function(){
  $(catStore).hide();
  $(almaItems).show();

})