
$( document ).ready(function() {
    
    $(".circle-img").css(
        {"width": "0px",
        "height": "0px"}
        ).animate(
            {"width": "150px",
            "height": "150px"},
        800); 

    setTimeout( function(){
        $("#subtitle, #title-button, .nav-container").css({
            "opacity": "0"
        }).animate({
            "opacity": "1"

        },800);
        
        
},1000);

});

$(".nav-container li").hover(function(){

 $(this).css(
     {"border-bottom": "0px solid #51d287",}
    ).animate(
     {'borderWidth': '4px',}
     ,400);
}, function(){
    $(this).css(
        {"border-bottom": "4px solid #51d287",}
        ).animate(
            {'borderWidth': '0px'}
            ,200);
});

$