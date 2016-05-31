$(function(){
	var _info_sum = $('.invite').length;
		if (_info_sum > 0) {
			$('.sum').text(_info_sum);
		}
		else {
			$('.sum').text(0);
		}
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
})