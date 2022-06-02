$(document).ready(function(){
  $(".btnFixedBottom").click( function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
  });        
});