$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			animation: 'jello',
		});
		$('.target:odd').anisview({
			animation: 'slideInRight',
			direction: 'up'
		});
		$('.target:even').anisview({
			animation: 'slideInLeft',
			direction: 'up'
		});
		$('.target6').anisview({
			animation: 'tada',
		});
		$('.target4, .target7, .target8').anisview({
			repeat: false
		});
	});
});