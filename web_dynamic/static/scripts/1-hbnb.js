// scripts/1-hbnb.js

$(document).ready(function () {
  const selectedAmenities = {};

  function updateAmenities() {
    const amenitiesList = Object.values(selectedAmenities).join(', ');
    $('.Amenities h4').text(`Checked Amenities: ${amenitiesList}`);
  }

  $(document).on('change', '.amenity', function () {
    const amenityId = $(this).data('id');

    if ($(this).is(':checked')) {
      selectedAmenities[amenityId] = 'Amenity ' + amenityId;
    } else {
      delete selectedAmenities[amenityId];
    }

    updateAmenities();
  });
});
