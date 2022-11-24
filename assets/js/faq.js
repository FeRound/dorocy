$(function(){
  $("dd:not(:first)").css("display","none");
  $("dt").click(function(){
    if($("+dd",this).css("display") == "none"){
      $("dd").slideUp({duration : "10000"});
      $("+dd",this).slideDown({duration : "10000"});
    }
  })
  
  // animate method 를 사용하여 위와 같은 로직을 구현하시오
  // $("dd:not(:first)").css("display","none");
  // $("dt").click(function(){
  //   if($("+dd",this).css("display") == "none"){
  //     $("+dd",this).animate({"display:block"});
  //     $("dd").animate({"display:block"})
  //   }
  // })

  // let initialDdHeight = $(".faq dd").css("height")
  // console.log(initialDdHeight)
  // $(".faq dd:not(:first)").css({
  //   "display" : "none",
  //   "height" : 0
  // });
  // $(".faq dl dt").on("click",function(i){
  //   let thisElem = $(this);
  //   if($("+dd",thisElem).css("display") == "none"){//dt의 바로 뒤에 오는 dd를 선택함
  //     let isAni = $("dd").is(":animated") //dd가 애니메이션이 작동중이면 true 반환
  //     if(!isAni){
  //       $(".faq dd").each(function(){
  //         if(parseInt($(this).css("height")) == parseInt(initialDdHeight)){
  //           $(this).animate({height: 0},400,function(){
  //             $(this).css("display","none");
  //           })
  //         }
  //       })
  //       $("+dd",thisElem).css("display","block").animate({height: parseInt(initialDdHeight)},400);
  //     }
  //   } 
  // })
});

// , easing : "easeOutBounce"