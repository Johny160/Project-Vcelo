(function($){
    $(function(){
        /* Scroll to sections */
            
        $(".jq--scroll-about-us").click(function(){
         $("html, body").animate({scrollTop: $(".jq--about-us").offset().top}, 500);
        });  
        
         $(".jq--scroll-OZ-vcelarenie").click(function(){
           $("html, body").animate({scrollTop: $(".jq--OZ-vcelarenie").offset().top}, 1000);
        });
           
        $(".jq--scroll-sale").click(function(){
            $("html, body").animate({scrollTop: $(".jq--sale").offset().top}, 1500);
         });
         
         $(".jq--scroll-contact").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact").offset().top}, 1500);
         });
           
    }); 
 })(jQuery);

