<template>
  <div class="nokia-header" :style="{ backgroundImage: this.getImage() }">
    <div :class="'nokia-header__content '+content_color">
      <div v-if="this.showCategory()" class="nokia-header__category heading--smallest">{{ category }}</div>
      <h1 class="heading--larger">{{ title }}</h1>
      <div class="nokia-header__intro sub-heading--light">{{ subtitle }}</div>
      <div v-if="this.title == 'Collaboration Workspace'" class="nokia-header__icons">
        <div class="nokia-header__icon">
          <div class="nokia-header__icon__icon"><img :src="'/'+ directory +'/images/tool_Trello_col.svg'" /></div>
          <div class="nokia-header__icon__title">Project management</div>
        </div>
        <div class="nokia-header__icon">
          <div class="nokia-header__icon__icon"><img :src="'/'+ directory +'/images/tool_Slack_col.svg'" /></div>
          <div class="nokia-header__icon__title">Messaging</div>
        </div>
        <div class="nokia-header__icon">
          <div class="nokia-header__icon__icon"><img :src="'/'+ directory+'/images/tool_Video Chatroom_col.svg'" /></div>
          <div class="nokia-header__icon__title">Video chat</div>
        </div>
        <div class="nokia-header__icon">
          <div class="nokia-header__icon__icon"><img :src="'/'+ directory +'/images/tool_Github_col.svg'" /></div>
          <div class="nokia-header__icon__title">Cloud repositories</div>
        </div>
        <div class="nokia-header__icon">
          <div class="nokia-header__icon__icon"><img :src="'/'+ directory +'/images/tool_Skype_col.svg'" /></div>
          <div class="nokia-header__icon__title">Voice calls</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: ['category', 'title', 'subtitle', 'image', 'content_color', 'directory'],
      mounted: function() {
      //console.log(this.buttons);
    },
    methods: {
      showCategory: function() {
        if (typeof this.category !== 'undefined') {
          return this.category
        }
        return false;
      },
      getImage: function() {
        if (typeof this.image !== 'undefined') {
          return "url('" + this.image + "')"
        }
        //return 'http://lorempixel.com/1400/1000/abstract/'
        return ''
      }
    }
  }
</script>
