

$(document).ready(function(){
    
    
    $(".button-collapse").sideNav();
    $('.slider').slider({height:innerHeight,indicators:false});
    $('.slied').paroller();
    $("#cstext").typeIt({
        speed:100,
        lifeLike:true
    });
    $('.scrollspy').scrollSpy({
        scrollOffset:380
    });
    $("#main").paroller();
    $("#title , #description , #future , #attention , #poweredby , #titletext , #titlepulse").scrolla({
        mobile:true
    });
    
})