var $proj, $para, totalHeight;

function showPara() {
	totalHeight = 0;

	$para = $(this).find('p');

	// Measure required height to display all inner text of para.
	totalHeight = (parseInt($para.text().length) / 48) * 16

	$para
		.css({
			"height": 0,
			"max-height": 250,
			"opacity": 0
		})
		.show()
		.animate({
			"height": totalHeight, 
			"opacity": 1
		}, 300);
}

function hidePara() {
	$para = $(this).find('p');
	$para
		.animate({
			"height": 0,
			"opacity": 0
		}, 300);
}

$(document).ready(function () {
	$('.project').hoverIntent(showPara, hidePara);
})