console.log("Hello, Thank you for visit our company.");


  // main slide
  let slide1 = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
    },
    pagination: {
      el: '.swiper-pagination' ,
      type: 'fraction',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    effect: "fade",
  });
  //main side end


  
  // sub 
  $(".sub").hide();

  $(".gnb > li").mouseenter(function(){
    $(this).children(".sub").stop().fadeIn();
    $(this).siblings().children(".sub").stop().fadeOut();
  });

  $(".gnb > li").mouseleave(function(){
    $(".sub").stop().fadeOut();
  });
  /* sub end */

  
  
  //m_btn_lnb 메뉴 
  $(".m_btn").click(function(){
    $(".m_btn_lnb").animate().show("slide",{direction:"right"},300,null);
    });
  $(".m_btn_lnb > .img2").click(function(){
    $(".m_btn_lnb").animate().hide("slide",{direction:"right"},300,null);
    });
  // m_btn_lnb 메뉴 end


  //m_btn 메뉴
  $(document).ready(function() {
    // 아코디언메뉴 
    $("ul.submenu").hide();
    $("div.title").click(function(){
      if($(this).next().css("display")=="none"){
       $(".submenu").slideUp("fast");
      } 
       $(this).next().slideDown("fast");
    });
  });




//스크롤탑 icon
$(document).ready(function(){
  $(".return-top").hide(); 
 
   $(function () {
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) { 
               $('.return-top').fadeIn();
               $('#header_wrap .header').css({'height':'5rem'});
               $('#header_wrap').css({'background':'#fff'});
               $('#header_wrap').css({'border-bottom':'none'});
               $('.h_logo > a > img:first-child').css({'display':'none'});
               $('.h_logo > a > img:last-child').css({'display':'block'});
               $('.gnb > li').css({'color':'#333'});
               $('.sub').css({'top':'70px'});
               $('.contact').css({'color':'#000'});
           } else {
               $('.return-top').fadeOut();
               $('#header_wrap .header').css({'height':'6rem'});
               $('#header_wrap').css({'background':'none'});
               $('#header_wrap').css({'border-bottom':'1px solid #888'});
               $('.h_logo > a > img:first-child').css({'display':'block'});
               $('.h_logo > a > img:last-child').css({'display':'none'});
               $('.gnb > li').css({'color':'#fff'});
               $('.sub').css({'top':'75px'});
               $('.contact').css({'color':'#d1d1d1'});
           }
       });
       $('.return-top').click(function () {
           $('body,html').animate({
               scrollTop: 0
           }, 500);  
           return false;
       });
   });
 
  });

/* 스크롤탑 icon 끝 */


/* sub main_txt */
$(document).ready(function(){
  $(".main_txt").addClass("main_txt_active");

  $(".main_txt").click(function(){
    $(this).addClass("main_txt_active");
    $(".main_txt2,.main_txt3,.main_txt4").removeClass("main_txt_active");
  });
  $(".main_txt2").click(function(){
    $(this).addClass("main_txt_active");
    $(".main_txt,.main_txt3,.main_txt4").removeClass("main_txt_active");
  });
  $(".main_txt3").click(function(){
    $(this).addClass("main_txt_active");
    $(".main_txt,.main_txt2,.main_txt4").removeClass("main_txt_active");
  });
  $(".main_txt4").click(function(){
    $(this).addClass("main_txt_active");
    $(".main_txt,.main_txt2,.main_txt3").removeClass("main_txt_active");
  });
});
/* sub main_txt 끝 */











