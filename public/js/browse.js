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
		 if (i > 7) {
		 	$(item).hide();
			$('.browse-more').css({display:'block'});
		 }
		 else {
		 	$(item).show();
		 	$('.browse-more').css({display:'none'});
		 }
	})
	$('.browse-more').click(function(){
		$('.invite').show();
	})


	$('.tuichu').click(function(){
      $('.tuichu-box').css({display:'block'});
    })
    $('.discard-t').click(function(){
      $('.tuichu-box').css({display:'none'});
    })

})