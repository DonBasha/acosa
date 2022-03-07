require('../css/app.css');
require('../scss/style.scss');

/********** Paste your code here! ************/

$(window).on("scroll",()=>{
  const scroll=$(window).scrollTop()
  if(scroll>0){
    $("header").addClass("iScrolling")
  }else{
    $("header").removeClass("iScrolling")
  }
})
$(window).on("load",()=>{
  $("#loader").fadeOut()
$(window).on("scroll", () => {
    const scroll = $(window).scrollTop()
    console.log(scroll)
    if (scroll > 0) {
        $("header").addClass("isScrolling")
    } else {
        $("header").removeClass("isScrolling")
    }
})