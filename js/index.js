$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.slider').slider({height:innerHeight,indicators:false});
    $('.slied').paroller();
    setTimeout(function(){
        $(".flyintext").removeClass("hidden");
    },1000)
})