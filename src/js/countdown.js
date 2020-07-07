var endDate = new Date('2020-09-01 0:0:0');
var end = endDate.getTime();

setInterval(countdown, 1000);

countdown();

function countdown() {
	var nowDate = new Date();
	var now = nowDate.getTime();

	var leftTime = end - now;
	leftTime /= 1000;


	var day = parseInt(leftTime / 60 / 60 / 24);
	var hour = doubleNum(parseInt(leftTime / 60 / 60 % 24));
	var minute = doubleNum(parseInt(leftTime / 60 % 60));
	var second = doubleNum(parseInt(leftTime % 60));

	$('.hour').html(hour);
	$('.minute').html(minute);
	$('.second').html(second);
	

}


function doubleNum(n) {
	if (n > 9) {
		return n
	} else {
		return '0' + n;
	}
}
