$(function(){
  $("#navi a").click(function(){ // srcipt영역 gallery script 만들기 예
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
  })

  const marginNumber = 600;
  let pageLeng = $("#navi .page-wrap .page").length; //페이지 개수
  let pageElem = $("#navi .page-wrap .page")
  let pwElem = $("#navi .page-wrap")
  pwElem.css("width",parseInt(pageElem.css("width")) * pageLeng)

  function pageBtnFunc(el){
    el.click(function(){
      let marginLeftPw = parseInt(pwElem.css("margin-left"))
      let isAni = pwElem.is(":animated"); //애니메이션 진행여부
          if($(el).hasClass("next") && marginLeftPw > -(marginNumber * 2)){
            pwElem.animate({marginLeft: `${marginLeftPw - marginNumber}`},"fast")
          }else if($(el).hasClass("prev") && marginLeftPw < 0){
            pwElem.animate({marginLeft: `${marginLeftPw + marginNumber}`},"fast")
          }else if(marginLeftPw == -(marginNumber * 2) || marginLeftPw == 0){
            alert("더 이상 이미지가 없습니다.");
          }
    })
  }

  $("img.btn").each(function(){
    pageBtnFunc($(this))
    console.log($(this))
    console.log(this)
  })
  
});