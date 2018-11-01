<template>
  <a v-bind:href="link" class="user-avatar">
    <div class="user-avatar__image" :style="{ backgroundImage: this.getImage() }"></div>
    <div class="user-avatar-wrapper-information">
      <span class="user-avatar__name"> <span class="user-name">{{name}}</span><span class="user-leader"></span></span>
      <span class="user-avatar__mail">{{mail}}</span>
      <span class="user-avatar__title">{{title}}</span>
      <span class="user-avatar__title">{{location}}</span>
      <span class="user-avatar__notification"></span>
    </div>
  </a>
</template>

<script>
    module.exports = {
        props: ['name', 'title', 'link', 'image', 'directory', 'mail','location'],
        mounted: function() {
          //console.log(this.image);
        },
        methods: {
          getImage: function() {
            if (this.image && this.image != '/') {
              return "url('" + this.image + "')"
            }
            return "url('/" + this.directory + "/images/avatar.png')"
          }
      }
    }
</script>
