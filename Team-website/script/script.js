$(document).ready(function(){
    $('#firstCarousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:3000
  }); 
  $("#ortaslider").owlCarousel({
      center:true,
      items:3,
      loop:true,
      autoplay:true,
      dots:false,
        autoplayTimeout:6000,
        smartSpeed:2500,
       responsiveClass:true,
        responsive : {
    // breakpoint from 0 up
    0 : {
        items:1
        
    },
    // breakpoint from 480 up
    480 : {
        items:2
    },
    // breakpoint from 768 up
    768 : {
        items:3
    }
}
      
    });
    
    
    
    $("#altslider").owlCarousel({
      center:true,
      items:6,
      loop:true,
      margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1500,
        dots:false,
        responsiveClass:true,
        responsive : {
    // breakpoint from 0 up
    0 : {
        items:2
        
    },
    // breakpoint from 480 up
    480 : {
        items:4
    },
    // breakpoint from 768 up
    768 : {
        items:6
    }
}
        
        
    });
    
    
    
});