//--------
<template>
  <div class="socials">
      <a class="social-facebook" :href="'https://www.facebook.com/sharer/sharer.php?u=' + this.getUrl() " target="_blank">FB</a>
      <a class="social-twitter" :href="'https://twitter.com/home?status='+this.getUrl()" target="_blank">TW</a>
      <a class="social-linkedIn" :href="'https://www.linkedin.com/shareArticle?mini=true&url=' +this.getUrl() +'&title='+ title +'&summary=&source='" target="_blank">LI</a>
  </div>
</template>

<script>
  module.exports = {
      props: { title: ''},

    methods: {
      getUrl: function() {
        return encodeURIComponent(window.location.href);
      }
    }
  }
</script>
