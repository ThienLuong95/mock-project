<template>
  <header class="site-navigation" data-headroom>

    <!-- <div class="search-bar">
      <div class="search-bar__inner">
        <form class="" action="" method="post">
          <input type="text" name="search" value="">
          <input type="submit" name="name" value="Search">
        </form>
      </div>
    </div> -->

    <div class="site-navigation__inner">
      <div class="site-logo">
        <a href="/">
        <span>Open</span>
        <span>Ecosystem</span>
        <span>Network</span>
        </a>
      </div>
      <slot name="primary"></slot>
      <span class="toggle-nav icon-burger" v-on:click="toggleNav"></span>
    </div>
    <div class="js-menu-screen sliding-panel-fade-screen" v-on:click="killNav"></div>
  </header>
</template>

<script>
    module.exports = {
      data: function() {
        return {
          innerWrap: jQuery('body')
        }
      },
        mounted: function() {
        // console.log("navigation");
      },
      methods: {
        toggleNav: function() {
          this.innerWrap.toggleClass('navigation-is-visible');
        },
        toggleSearch: function() {
          // this.innerWrap.toggleClass('search-is-visible');
        },
        killNav: function() {
          // this.innerWrap.removeClass('search-is-visible');
          this.innerWrap.removeClass('navigation-is-visible');
        }
      }
    }
</script>
