$(document).ready(function(){
    function prev(atual, final, slide){
      for(i=0;i<20;i++){
        if($('.materia'+i).is(':visible')){
          let next = i + 1;
          $('.materia'+i).removeClass('fadeIn')
          $('.materia'+i).addClass('fadeOut')
          setTimeout(function(){$('.materia'+i).addClass('mySlides')},500)
          setTimeout(function(){$('.materia'+next).removeClass('mySlides');$('.materia'+next).addClass('fadeIn');$('.materia'+i).removeClass('fadeOut');},500)
          break;
        }
    }

    $('.next').click(function(){
      for(i=0;i<20;i++){
        if($('.materia'+i).is(':visible')){
          let next = i + 1;
          $('.materia'+i).removeClass('fadeIn')
          $('.materia'+i).addClass('fadeOut')
          setTimeout(function(){$('.materia'+i).addClass('mySlides')},500)
          setTimeout(function(){$('.materia'+next).removeClass('mySlides');$('.materia'+next).addClass('fadeIn');$('.materia'+i).removeClass('fadeOut');},500)
          break;
        }
      }
      // if($('.materia1').is(':visible')){
      //   $('.materia1').removeClass('fadeIn')
      //   $('.materia1').addClass('fadeOut')
      //   setTimeout(function(){$('.materia1').addClass('mySlides')},500)
      //   setTimeout(function(){$('.materia2').removeClass('mySlides');$('.materia2').addClass('fadeIn');$('.materia1').removeClass('fadeOut');},500)
      // }else if($('.materia2').is(':visible')){
      //   $('.materia2').removeClass('fadeIn')
      //   $('.materia2').addClass('fadeOut')
      //   setTimeout(function(){$('.materia2').addClass('mySlides')},500)
      //   setTimeout(function(){$('.materia3').removeClass('mySlides');$('.materia3').addClass('fadeIn');$('.materia2').removeClass('fadeOut')},500)
      // }else if($('.materia3').is(':visible')){
      //   $('.materia3').removeClass('fadeIn')
      //   $('.materia3').addClass('fadeOut')
      //   setTimeout(function(){$('.materia3').addClass('mySlides')},500)
      //   setTimeout(function(){$('.materia1').removeClass('mySlides');$('.materia1').addClass('fadeIn');$('.materia3').removeClass('fadeOut')},500)
      // }

    })

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