$(document).ready(function(){
    $(".content").fadeOut(1)
    $(".main").mouseenter(function(){
        $(".main").css("height", "600px");

        $(".content").css("opacity", "1");
        $(".content").fadeIn(1000);
    });
    $(".main").mouseleave(function(){
        $(".main").css("height", "300px");
        
        $(".content").fadeOut(500);
        $(".content").css("opacity", "0");
    });
});