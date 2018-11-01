<template>
  <span>
    <slot></slot>
  </span>
</template>

<script>
    module.exports = {
        mounted: function() {

        jQuery('.select2').select2({
          placeholder: 'Select',
          minimumResultsForSearch: Infinity
        });

      }
    }
</script>
