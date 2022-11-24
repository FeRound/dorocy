$(function(){
  $("td").mouseover(function(){
    let thisIndex = $(this).index() + 1;
    console.log(thisIndex)
    $("td:nth-child("+thisIndex+")").addClass("hover");
  })
  .mouseout(function(){
    $("td").removeClass("hover");
  })
});
