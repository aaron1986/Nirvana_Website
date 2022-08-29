jQuery(document).ready(function(){
    var navmenu = jQuery('nav').offset().top;
        
        jQuery(window).scroll(function() {
            var scrollpos = jQuery(window).scrollTop();
                if(scrollpos >= navmenu) {
                    jQuery("nav").addClass("fixed");
                } else {
                    jQuery("nav").removeClass("fixed");
                }
        });
            
});