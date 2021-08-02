$(function(){

     $(window).scroll(function () {
        
        if($(window).scrollTop() >= 400){
        
            
            if($('.scroll').is(':hidden'))
                {
                    
                      $('.scroll').fadeIn(200) ; 
                }
            }
        
        
               else{
                   $('.scroll').fadeOut(200) ;  
                   
               };
        
              $('.scroll').click(function (event) {
                 event.preventDefault(); 
                  
                  $('html , body').animate({
                     scrollTop : 0 
                  } , 500);
                  event.stop() ; 
         });
   
    }); 
    
    $('.menu').click(function () {
        
        $('nav').animate({
            
          right : 0  
            
        },800)
 
    })
        $('.exit').click(function () {
        
        $('nav').animate({
            
          right : '-50%'  
            
        },800)
 
    })
    
 setTimeout(function(){
     $('.popup').fadeIn() ; 
     
 } , 3000);    
    
    $('.cl-btn').click(function (e) {
        e.preventDefault() ; 
       $('.popup').fadeOut() ; 
        
    }) ;
    
    $('.setting-box .icon').click(function(){
        
       $('.setting-box').toggleClass('open') ; 
       
        
    });
        $('.setting-box .icon i').click(function(){
        
          $(this).toggleClass('fa-spin'); 
       
        
    });
    $('.moon').click(function (){
         $('body').toggleClass('dark') ;  
        $(this).toggleClass('sun') ; 
    });

    

});
