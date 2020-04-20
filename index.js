
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

//evento de la galeria y el lightbox


});


 function slide() {
     let currentSlide = 1;
     let $slidesContainer = $(".slides");
     let $slides = $slidesContainer.find(".slide");
     setInterval(() => {
        $slidesContainer.animate(
            {"margin-left": "-=1920px"},1500, ()=>{
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

shuffle(galleryImages);


//Creo los divs de cada imagen de la galeria

galleryImages.forEach(image => {
    
    $("#container-gallery").append('<a class="'+ image.type + '" href="./img/gallery/' + image.name + '.jpg" data-lightbox="All-lb'+'" data-title=" All ">'
         + '<img src="./img/gallery/' + image.name + '.jpg">'
    + '</a>'
    );
});



function addClassClick(active , remove_1, remove_2, remove_3){
    $(active).addClass("active");
    $(remove_1).removeClass("active");
    $(remove_2).removeClass("active");
    $(remove_3).removeClass("active");

}


function fadeInImages (imagesCategory){
    $(imagesCategory).fadeIn("slow","swing");   
}



$("#illustration").click(()=>{

    $("#container-gallery a").fadeOut("slow","swing");

    setTimeout(() => {
        fadeInImages(".Illustration");
    }, 550);
    addClassClick("#illustration", "#character", "#all", "#comic");

    $('.Illustration').attr("data-lightbox", "Illustration");
    $('.Illustration').attr("data-title", "Illustration");


    
});

$("#comic").click(()=>{
    $("#container-gallery a").fadeOut("slow","swing");

    
    setTimeout(() => {
        fadeInImages(".comic");
    }, 550);

    addClassClick("#comic", "#character", "#all", "#illustration");

    
    $('.comic').attr("data-lightbox", "comic");
    $('.comic').attr("data-title", "Comic");

});

$("#character").click(()=>{
    $("#container-gallery a").fadeOut("slow","swing");

    
    setTimeout(() => {
        fadeInImages(".character");
    }, 550);

    
    addClassClick("#character", "#comic", "#all", "#illustration");

    
    $('.character').attr("data-lightbox", "character");
    $('.character').attr("data-title", "Character");

});

$("#all").click(()=>{
    $("#container-gallery a").fadeOut("slow","swing");


    setTimeout(() => {
        fadeInImages("#container-gallery a");
    }, 550);

    addClassClick("#all", "#comic", "#character", "#illustration");

    
    $("#container-gallery a").attr("data-lightbox", "all");
    $("#container-gallery a").attr("data-title", "All");

});
