$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
  	autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 4,
    lazyLoad : true,
    navigation : true
  }); 
 
});



$(document).ready(function() {
 
  $("#owl-demo1").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});

