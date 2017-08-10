

$(document).ready(function(){
    
    
    $(".button-collapse").sideNav();
    $('.slider').slider({height:innerHeight,indicators:false});
    $('.slied').paroller();
    setTimeout(function(){
        $(".flyintext").removeClass("hidden");
    },1000);
    $("#cstext").typeIt({
        speed:150,
        lifeLike:true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset:380
    });
    $("#main").paroller();
    $("#title , #description , #future , #attention , #poweredby").scrolla({
        mobile:true
    });
    
})