$(function(){
  var amenityIds = {};

  $('.amenities input[type="checkbox"]').on('change', function() {
      var $checkbox = $(this);
      var amenityId = $checkbox.data('id');
      var amenityName = $checkbox.data('name');

      if ($checkbox.prop('checked')) {
          amenityIds[amenityId] = amenityName;
      } else {
          delete amenityIds[amenityId];
      }

      updateAmenitiesList();
  });

  function updateAmenitiesList() {
      var amenitiesList = Object.values(amenityIds).join(', ');
      $('.amenities h4').text(amenitiesList);
  }

});
