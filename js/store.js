const storeButton = $('.storeButton'); /*Boton comprar del inicio y boton tienda del navbar*/
const containerIndex = $('#containerIndex') /*Pantalla Inicio*/
const searchMenu = $('#searchMenu')/* Menu buscar y categorias*/
const catStore = $('#catStore') /*Menu Categorias*/
const allItems = $('#allItems')/*Todos los productos*/
const buttonAll = $('#buttonAll')/*Boton todas los productos*/
const buttonCat = $('#buttonCat');


$(searchMenu).hide();
$(catStore).hide();
$(allItems).hide()

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