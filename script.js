// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var currenthour =dayjs().hour()
  for (let i = 9; i <18; i++) {
    var parentid =$("#hour-"+i)
    var textarea=parentid.children("textarea")
    if (currenthour>i){
      textarea.addClass("past")
    }
    if (currenthour<i){
      textarea.addClass("future")
    }
    if (currenthour===i){
      textarea.addClass("present")
    }
  }
  $(".saveBtn").on("click",function(){
    var textarea=$(this).siblings("textarea")
    var parentid=$(this).parent().attr("id")
    localStorage.setItem (parentid,textarea.val())
  })
});
