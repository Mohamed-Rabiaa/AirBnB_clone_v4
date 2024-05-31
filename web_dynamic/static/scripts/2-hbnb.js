$(document).ready(function() {
    const dct = {};
    $('input:checkbox').change(function() {
	if ($(this).is(':checked')) {
	    dct[$(this).attr('data-id')] = $(this).attr('data-name');
	    console.log($(this).attr('data-name'));
	}
	else {
	    delete dct[$(this).attr('data-id')];
	}
	$('.amenities h4').text(Object.values(dct).join(', '));
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function(response) {
	if response.status == "OK" &&
	    $('div#api_status').hasClass('available'); {
		$('div#api_status').addClass('available');
	}
	else {
	    $('div#api_status').removeClass('available');
	}
    });	
});
