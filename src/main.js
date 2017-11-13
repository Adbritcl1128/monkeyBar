$(document).ready(function(){

    $(".accordian-header").click(function(){
        $(".bottom-sub-body-three").toggle(3500);
    });
    $(".accordian-header").click(function(){
        $(".bottom-sub-body-two").toggle(3500);
    });
    $(".accordian-header").click(function(){
        $(".top-sub-body-two").toggle(3500);
    });
    $(".accordian-header").click(function(){
        $(".top-sub-body-three").toggle(3500);
    });
    $(".accordian-header-long").click(function(){
        $(".top-sub-body-one").toggle(3500);
    });
    $(".accordian-header-long").click(function(){
        $(".bottom-sub-body-one").toggle(3500);
        $(".accordian-header-long").toggle(3500);
    });

    $(".pieces").click(function(){
        $(".pieces").animate({left: '500px'});
        $(".pieces").animate({top: '500px'});
        $(".pieces" ).fadeOut( "slow", function() {
    });



    $(".trieces").click(function(){
      $(".trieces").animate({left: '500px'});
      $(".trieces").animate({top: '500px'});
      $(".trieces" ).fadeOut( "slow", function() {
    });



      });


    });


});
