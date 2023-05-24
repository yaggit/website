$(document).ready(function () {
   $("#name").css("opacity", "1"); 
});

$("#menu-icon").click(function (e) {
    $("#aside").css("width", "250px"); 
    $("#overlay").css("width", "100%"); 
});
$("#overlay").click(function (e) {
    $("#aside").css("width", "0px"); 
    $("#overlay").css("width", "0%"); 
})

