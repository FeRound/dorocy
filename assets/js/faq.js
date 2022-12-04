$(function(){
  $("dd:not(:first)").css("display","none");
  $("dt").click(function(){
    if($("+dd",this).css("display") == "none"){
      $("dd").slideUp({duration : "10000"});
      $("+dd",this).slideDown({duration : "10000"});
    }
  })
});

