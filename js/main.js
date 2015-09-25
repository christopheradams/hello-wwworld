
$(document).ready(function() {
	var options = {
		utc: true,
		format: '%Y-%m-%d %H:%M:%S' // 24-hour
	}

	$('.clock').jclock(options);
	$('.host').text(location.host);

});
