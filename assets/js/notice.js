$(function(){
  $("td").mouseover(function(){
    let thisIndex = $(this).index() + 1;
    console.log(thisIndex)
    $("td:nth-child("+thisIndex+")").addClass("hover");
  })
  .mouseout(function(){
    $("td").removeClass("hover");
  })
  $("td:nth-child(2) , .gbtn.right").on("click",function () {
    alert("아직 구현 되지않았습니다.")
  });
});
