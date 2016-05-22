$(function(){
	var flag_login = true;
    $(".arrow-top").click(function(){
      if(flag_login){
            $('.TABLE-PANEL').removeClass('active');
            $('.APP-SEARCH li').removeClass('active');
            $('.APP-SEARCH').css({height:'auto'})
          $('.arrow-top').addClass('PortraitImg');
          $(".MainLogin").css({height:40});
          $(".MainNav").css({height:0});
          flag_login = false;
        }else{
          $('.arrow-top').removeClass('PortraitImg');
          $(".MainLogin").css({height:0});
          flag_login = true
        }
    });
    $('.bianxie').click(function(){
      $('.bianji').css({display:'block'});
    })
    $('.discard').click(function(){
      $('.bianji').css({display:'none'});
    })
    $('.tuichu').click(function(){
      $('.tuichu-box').css({display:'block'});
    })
    $('.discard-t').click(function(){
      $('.tuichu-box').css({display:'none'});
    })
})