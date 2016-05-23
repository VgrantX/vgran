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

	$.each($('.invite'), 
		function (i, item){
		 if (i > 3) {item.hide();}
		 else {
		 	item.show();
		 }
	})
	var _info_sum = $('.invite').length;
	if (_info_sum > 8) {
		$('.browse-more').css({display:'block'});
	}
	else {
		$('.browse-more').css({display:'none'});
	}
	$('.tuichu').click(function(){
      $('.tuichu-box').css({display:'block'});
    })
    $('.discard-t').click(function(){
      $('.tuichu-box').css({display:'none'});
    })

})