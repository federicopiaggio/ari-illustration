
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

slide();

});


 function slide() {
     let currentSlide = 1;
     let $slidesContainer = $(".slides");
     let $slides = $slidesContainer.find(".slide");
     setInterval(() => {
        $slidesContainer.animate(
            {"margin-left": "-=1700px"},1500, ()=>{
                currentSlide ++;
                if (currentSlide === $slides.length){
                    currentSlide = 1;
                    $slidesContainer.css('margin-left', '-40px' );
                }
            });
         
     }, 4000);
 }






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

//NAV SLIDING ANCHOR

$(".slide-anchor").click(function(e) {
    e.preventDefault();
    var actual = $(this).attr("href");
    $('html,body').animate({scrollTop: $(actual).offset().top},1500,"swing");
});



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(images);

images.forEach(image => {
    $('.main-gallery').append('<img' + ' class="' + image.type + '"' + 'src="./img/gallery/'+ image.name + '.jpg">');
});




$("#illustration").click(()=>{
    $(".character").fadeOut("slow","swing");
    $(".comic").fadeOut("slow","swing");
    $(".Illustration").fadeIn("slow","swing");
    
});

$("#comic").click(()=>{
    $(".character").fadeOut("slow","swing");
    $(".Illustration").fadeOut("slow","swing");
    $(".comic").fadeIn("slow","swing");

});

$("#character").click(()=>{
    $(".comic").fadeOut("slow","swing");
    $(".Illustration").fadeOut("slow","swing");
    $(".character").fadeIn("slow","swing");

});

$("#all").click(()=>{
    $(".character").fadeIn("slow","swing");
    $(".Illustration").fadeIn("slow","swing");
    $(".comic").fadeIn("slow","swing");
});
