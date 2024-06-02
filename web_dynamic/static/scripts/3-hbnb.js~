$(document).ready(function() {
    const dct = {};
    
    $('input:checkbox').change(function() {
        if ($(this).is(':checked')) {
            dct[$(this).attr('data-id')] = $(this).attr('data-name');
            console.log($(this).attr('data-name'));
        } else {
            delete dct[$(this).attr('data-id')];
        }
        $('.amenities h4').text(Object.values(dct).join(', '));
    });

    $.get('http://0.0.0.0:5001/api/v1/status/', function(data, status) {
        if (status === "success") {
            if (data.status === "OK") {
                $('div#api_status').addClass('available');
		$('div#api_status').css('background-color', '#ff545f');
            } else {
                $('div#api_status').removeClass('available');
            }
            console.log(data.status);
        } else {
            $('div#api_status').removeClass('available');
            console.log('Failed to get API status');
        }
    }); 
});
