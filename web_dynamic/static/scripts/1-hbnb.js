$(document).read({
    let amenity_ids = {};
    $('li input').change(function() {
	if ($(this).is(':checked')) {
	    amenity_ids[$(this).attr('data-id')] = $(this).attr('data-name');
	}
	else {
	    delete amenity_ids[$(this).attr('data-id')];
	}
	$('.amenities h4').text(object.values(amenity_id));
    });
});
