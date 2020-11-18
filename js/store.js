const storeButton = $(".storeButton");
const container = $("#container");
const containerStore = $("#containerStore");
const containerIndex = $("#containerIndex");
const sectionSnack = $("#sectionSnack");
const snackButton = $("#snackButton");
const catButton = $("#catButton");
let addcart = $(".agregarImg");

$(containerStore).hide();
$(sectionSnack).hide();

$(storeButton).click(function(){
    $(containerStore).show();
    $(containerIndex).hide();
    if ($(sectionSnack).is(':visible')) {
      $(sectionSnack).hide();     
    }
  });

$(snackButton).click(function(){
  $(containerStore).hide();
  $(sectionSnack).show();
  

})

$(catButton).click(function(){
  $(containerStore).show();
  $(catButton).removeClass("buttonCat");
  $(catButton).addClass("btn-success");
  if ($(sectionSnack).is(":visible")){
    $(sectionSnack).hide();
  }
   
  }
  
)