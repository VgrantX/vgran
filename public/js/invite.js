$(function(){
	var _info = $('.invite .qiye-info').text();
	if (_info!=="") {
		$('.invite').css({display:'inlin-block'});
		$('._p_invite_n').css({display:'none'});
	}
	else {
		$(".invite").css({display:'none'});
		$('._p_invite_n').css({display:'inline-block'});
	}

	var _info_sum = $('.invite').length;
	if (_info_sum > 0) {
		$('.sum').text(_info_sum);
	}
	else {
		$('.sum').text(0);
	}
	$('.tuichu').click(function(){
      $('.tuichu-box').css({display:'block'});
    })
    $('.discard-t').click(function(){
      $('.tuichu-box').css({display:'none'});
    })
   })
