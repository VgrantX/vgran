$(function(){
	var _info_sum = $('.invite').length;
		if (_info_sum > 0) {
			$('.sum').text(_info_sum);
		}
		else {
			$('.sum').text(0);
		}
})