$(document).ready(function () {
  const selectedAmenities = {};

  function updateAmenities() {
    const amenitiesList = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(`Checked Amenities: ${amenitiesList}`);
  }

  $(document).on('change', '.amenities input[type="checkbox"]', function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    updateAmenities();
  });

  function checkApiStatus() {
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
  }

  checkApiStatus();
  setInterval(checkApiStatus, 5000);
});
