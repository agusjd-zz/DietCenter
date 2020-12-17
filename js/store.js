const storeButton = $('.storeButton'); /*Boton comprar del inicio y boton tienda del navbar*/
const containerIndex = $('#containerIndex') /*Pantalla Inicio*/
const searchMenu = $('#searchMenu')/* Menu buscar y categorias*/
const catStore = $('#catStore') /*Menu Categorias*/
const allItems = $('#allItems')/*Seccion todos los productos*/
const almaItems = $('#almaItems');/*Seccion Almacen */
const buttonAll = $('#buttonAll')/*Boton todas los productos*/
const buttonCat = $('#buttonCat');
const btnCategory = $('.btnCategory')/*Boton de categorias*/
const btnDrinks = $('#drinkButton');
const btnSnacks = $('#snackButton');
const btnTe = $('#teButton');

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
  $(".btn[category='snacks']").removeClass("btn-success");
  $(".btn[category='drinks']").removeClass("btn-success");
  $(".btn[category='almacen']").removeClass("btn-success");
  $(".btn[category='sinGluten']").removeClass("btn-success");
  $(buttonCat).addClass("btn-success");
  if ($(allItems)){
    $(allItems).hide();
  }
})

$(btnCategory).click(function(){
  let cat = $(this).attr('category');
  $(btnCategory).removeClass("btn-success");
  $(buttonAll).removeClass("btn-success");
  $(this).addClass("btn-success");
  $(".item").hide();
  $('.item[category="'+cat+'"]').show();
})

$(".btn[category='all'").click(function(){
  $(".item").show();
  $(".btn[category='snacks']").removeClass("btn-success");
  $(".btn[category='drinks']").removeClass("btn-success");
  $(".btn[category='almacen']").removeClass("btn-success");
  $(".btn[category='sinGluten']").removeClass("btn-success");
})

$(btnDrinks).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(".btn[category='drinks'").addClass("btn-success")
  $(allItems).show()
  $(".item").hide();
  $('.item[category="drinks"]').show();

})

$(btnSnacks).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(".btn[category='snacks'").addClass("btn-success")
  $(allItems).show();
  $(".item").hide();
  $('.item[category="snacks"]').show();

})

$(btnTe).click(function(){
  $(catStore).hide();
  $(buttonCat).removeClass("btn-success");
  $(allItems).show()
  $(".item").hide();
  $('.item[category="te"]').show();

})