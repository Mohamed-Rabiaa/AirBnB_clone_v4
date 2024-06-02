$(document).ready(function () {
  const dct = {};
  $('input:checkbox').change(function () {
    if ($(this).is(':checked')) {
	    dct[$(this).attr('data-id')] = $(this).attr('data-name');
	    console.log($(this).attr('data-name'));
    } else {
	    delete dct[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(dct).join(', '));
  });
});
