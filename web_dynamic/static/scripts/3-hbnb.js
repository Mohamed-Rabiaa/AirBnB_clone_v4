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

    $.ajax({
	type: 'POST',
	url: 'http://0.0.0.0:5001/api/v1/places_search/',
	data: JSON.stringify({}),
	contentType: 'application/json',
	success: function(data) {
	for (let i = 0; i < data.length; i++) {
	    const place = data[i];
	    const article = `<article> <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">\$${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest} Guests</div>
            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
          </div>
          <div class="user">
            <b>Owner:</b> None None
          </div>
          <div class="description">
            ${place.description}
          </div>
         </article>`;
	   
	    $('section.places').append(article);
	}}});
    
});
