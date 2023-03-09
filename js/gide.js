$(function(){
    $(window).scroll(function(){
        let pos = $(this).scrollTop();
        if(pos>0){
           $('.intr_pic1').css('animation-name','gide1')
        }else if(pos<10) {
            $('.intr_pic1').css('animation-name','none')
        }
        if(pos>500){
            $('.intr_pic2').css('animation-name','gide2')
            $('.intr_pic3').css('animation-name','gide2')
         }else if(pos<600) {
             $('.intr_pic2').css('animation-name','none')
             $('.intr_pic3').css('animation-name','none')
         }
    })
});