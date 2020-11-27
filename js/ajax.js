$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            url:"https://github.com/agusjd/DietCenter/blob/master/js/productos.json",
            type:"GET",
            dataType: "json",
            success: function(datos){
                console.log(datos);  
            }
        });
    });
});