function next(final, slide){
    // if(final){
    //   let proximo = 1;
    // }
    // else{
    //   let proximo = atual + 1;
    // }      

    $('.materia'+atual).removeClass('fadeIn')
    $('.materia'+atual).addClass('fadeOut')
    setTimeout(function(){$('.materia'+atual).addClass('mySlides')},500)
    setTimeout(function(){$('.materia'+proximo).removeClass('mySlides');$('.materia'+proximo).addClass('fadeIn');$('.materia'+atual).removeClass('fadeOut');},500);
}


$(document).ready(function(){
    $(".btnFixedBottom").click( function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
    });  

    $('.prev').click(function(){
      if($('.materia1').is(':visible')){
        $('.materia1').addClass('fadeOut')
        setTimeout(function(){$('.materia1').addClass('mySlides')},100)
        setTimeout(function(){$('.materia3').removeClass('mySlides');$('.materia3').addClass('fadeIn')},100)
      }else if($('.materia2').is(':visible')){
        $('.materia2').addClass('fadeOut')
        setTimeout(function(){$('.materia2').addClass('mySlides')},100)
        setTimeout(function(){$('.materia1').removeClass('mySlides');$('.materia1').addClass('fadeIn')},100)
      }else if($('.materia3').is(':visible')){
        $('.materia3').addClass('fadeOut')
        setTimeout(function(){$('.materia3').addClass('mySlides')},100)
        setTimeout(function(){$('.materia2').removeClass('mySlides');$('.materia2').addClass('fadeIn')},100)
      }

    })        
  });