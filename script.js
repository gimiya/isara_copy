jQuery(function ($) {
    // $(".lineanswer").css("display", "none");
    // 質問の答えをあらかじめ非表示
  
    $(".lineaccordion").click(function () {
      
      $(".lineaccordion").not(this).removeClass("open");
      //クリックしたquestion以外の全てのopenを取る
  
      $(".lineaccordion").not(this).next().slideUp(300);
      //クリックされたquestion以外のanswerを閉じる
      
      $(this).toggleClass("open");
      //thisにopenクラスを付与
      
      $(this).next().slideToggle(300);
      //thisのcontentを展開、開いていれば閉じる
    
    });
});

jQuery(function ($) {
    $('.con').on('click', function () {
      /*クリックでコンテンツを開閉*/
      $(this).next().slideToggle(200);
      /*矢印の向きを変更*/
      $(this).toggleClass('open', 200);
    });  
});

jQuery(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});
