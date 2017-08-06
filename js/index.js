

$(document).ready(function(){
    
    if($(window).width() <= 800){
        window.location.href="mobiledevelopment.html"    
    }
    
    $(".button-collapse").sideNav();
    $('.slider').slider({height:innerHeight,indicators:false});
    $('.slied').paroller();
    setTimeout(function(){
        $(".flyintext").removeClass("hidden");
    },1000);
    $("#cstext").typeIt({
        speed:200,
        lifeLike:true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset:380
    });
    $("#main").paroller();
    $("#title , #description , #future , #attention , #poweredby").scrolla();
    
})