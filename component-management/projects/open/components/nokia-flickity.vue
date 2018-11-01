
<template>
    <div></div>
</template>

<script>
    module.exports = {
        mounted: function() {

        jQuery(window).load(function() {

          // Flickity
          var carousel = jQuery('.flickity');
          var isFlickity = false;


          // only initialise flickity if we are under 1024
          if(jQuery(window).width() < 1025) {
            console.log('flickety run');
            carousel.flickity();
            isFlickity = true;
            jQuery(carousel).find('.card').css('height', '100%');
          }

          // destroy flickity if we are over 1024, otherwise initialise it
          jQuery(window).on('resize', function(event){
            // get the width
            var windowWidth = jQuery(window).width();
            // check our dimensions
            if(windowWidth > 1024 && isFlickity){
              jQuery('.flickity').flickity('destroy');
              isFlickity = false;
              jQuery(carousel).find('.card').css('height', 'auto');
            } else if (windowWidth < 1025 && !isFlickity) {
              jQuery('.flickity').flickity();
              isFlickity = true;
              jQuery(carousel).find('.card').css('height', '100%');
            }
          }); // window on resize

        }); // window load

      } // ready
    }
</script>
