
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

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(images);

images.forEach(image => {
    $('.main-gallery').append('<img' + ' class="' + image.type + '"' + 'src="./img/gallery/'+ image.name + '.jpg">');
});




$("#illustration").click(()=>{
    $(".character").fadeOut();
    $(".comic").fadeOut();
    $(".Illustration").fadeIn();
    
});

$("#comic").click(()=>{
    $(".character").fadeOut();
    $(".Illustration").fadeOut();
    $(".comic").fadeIn();

});

$("#character").click(()=>{
    $(".comic").fadeOut();
    $(".Illustration").fadeOut();
    $(".character").fadeIn();

});

$("#all").click(()=>{
    $(".character").fadeIn();
    $(".Illustration").fadeIn();
    $(".comic").fadeIn();
});
