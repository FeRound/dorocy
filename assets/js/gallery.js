$(function(){
  // srcipt영역 gallery script 만들기 예
  $("#navi a").click(function(){
    let imgSrc = $(this).attr("href");

    let checkAni = $("#main img:last").is(":animated");
    console.log(checkAni)
    if(!checkAni){
      $("#main img:last").animate({opacity: 0},
        {duration : 1000, easing: "swing", start: function(){
          $("#main img").before(`<img src=${imgSrc} alt="">`)
        },
        complete : function(){
          $(this).remove()
        }})                                      
    }
    return false
    // 웹 브라우가 우선으로 작동 되기떄문에 스크립트로 실행시킬려면 넣어야함
  })

  // const pwMargin = ($("#navi .page-wrap").css("margin-left"));
  // console.log(parseInt(pwMargin));
  // parseInt : string 또는 다른 자료형을 정수형으로 변환해주는 함수

  // Prev, next 버튼으로 작동하는 스크립트
  const marginNumber = 600;
  let pageLeng = $("#navi .page-wrap .page").length; //페이지 개수
  let pwElem = $("#navi .page-wrap")
  let pageElem = $("#navi .page-wrap .page")

  pwElem.css("width",parseInt(pageElem.css("width")) * pageLeng)
  function pageBtnFunc(el){
    el.click(function(){

      let marginLeftPw = parseInt(pwElem.css("margin-left"))
      let isAni = pwElem.is(":animated"); //애니메이션 진행여부
      
          if($(el).hasClass("next") && marginLeftPw > -(marginNumber * 3)){
            pwElem.animate({marginLeft: `${marginLeftPw - marginNumber}`},"fast")
          }else if($(el).hasClass("prev") && marginLeftPw < 0){
            pwElem.animate({marginLeft: `${marginLeftPw + marginNumber}`},"fast")
          }else if(marginLeftPw == -(marginNumber * 3) || marginLeftPw == 0){
            alert("더 이상 이미지가 없습니다.");
          }
      console.log(marginLeftPw)
    })
  }
    
  $("img.btn").each(function(){
    pageBtnFunc($(this))
    console.log($(this))
    console.log(this)
  })
  
});