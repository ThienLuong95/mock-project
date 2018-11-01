<template>
  <div class="nokia-header has-video" :style="{ backgroundImage: this.getImage() }">
    <div id="nokia-header-video" v-if="this.video == 1">
      <div class="nokia-header__video-wrapper">
        <!--  :class="{'has-video': this.video}" - add this to nokia-header -->
        <video playsinline autoplay muted loop poster="/static/open/images/video_cover.jpg" id="bgvid" style="position: absolute;left: 0;top: 0;">
            <source src="/static/open/videos/oen_home.mp4" type="video/mp4">
            <source src="/static/open/videos/oen_home.webm" type="video/webm">
        </video>
        <!-- <iframe id="mainVideo" src="https://player.vimeo.com/video/194351502?title=0&amp;byline=0&amp;portrait=0&amp;color=3a6774&amp;autoplay=1&amp;loop=1&amp;background=1" width="960" height="540" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
      </div>
    </div>
    <div :class="'nokia-header__content '+content_color">
        <h1 class="heading--huge" v-html="title"></h1>
        <div class="nokia-header__intro sub-heading"  v-html="subtitle"></div>

        <div v-if="this.loggedin == true" class="nokia-header__body" v-html="authcontent"></div>

        <div v-if="this.loggedin == false" class="nokia-header__body" v-html="anoncontent"></div>

        <div v-if="this.page == 'challenge'" class="nokia-header__meta">
            <div>
              <div>Challenge by <a v-bind:href="meta_1_url" target="_blank">{{ meta_1 }}</a></div>
            </div>
            <div>
                <div>Started <span>{{ meta_2 }}</span></div>
            </div>
            <div>
              <div>Ends <span>{{ meta_3 }}</span></div>
            </div>
        </div>

        <div v-if="this.page == 'asset'" class="nokia-header__meta">
            <div>
              <div>Owning partner <a  v-bind:href="meta_1_url" target="_blank">{{ meta_1 }}</a></div>
            </div>
            <div>
                <div>Added <span>{{ created }}</span></div>
            </div>
        </div>

        <div v-if="this.page == 'article'" class="nokia-header__meta">
            <!-- <div>
              <div>{{ author }}</div>
            </div> -->
            <div>
                <div>{{ created }}</div>
            </div>
            <div class="socials">
                <a class="socials__facebook" :href="'https://www.facebook.com/sharer/sharer.php?u='+ this.getUrl()" target="_blank">FB</a>
                <a class="socials__twitter" :href="'https://twitter.com/home?status='+this.getUrl()" target="_blank">TW</a>
                <a class="socials__linkedIn" :href="'https://www.linkedin.com/shareArticle?mini=true&url='+ this.getUrl() +'&title='+ title +'&summary=&source='" target="_blank">LI</a>
            </div>
            <!-- <nokia-socials></nokia-socials> -->
        </div>

        <div v-html="authbuttons" v-if="this.video == 1 && this.loggedin == true" class="nokia-header__buttons">

        </div>

        <div v-html="anonbuttons" v-if="this.video == 1 && this.loggedin == false" class="nokia-header__buttons">
        </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
        props: ['title',
            'subtitle',
            'image',
            'created',
            'page',
            'meta_1',
            'meta_1_url',
            'meta_2',
            'meta_3',
            'url',
            'video',
            'content_color',
            'author',
            'loggedin',
            'authcontent',
            'authbuttons',
            'anoncontent',
            'anonbuttons',],
      mounted: function() {
      //console.log(this.buttons);
      this.positionVideo();
      if(this.video){
        this.initVideo();
      }
    },
    data: function() {
        return {
            styles: {
                backgroundColor: this.image
            }
        }
    },
    methods: {
      getImage: function() {
        if (typeof this.image !== 'undefined') {
          return "url('" + this.image + "')"
        }
        //return 'http://lorempixel.com/1400/1000/abstract/'
        return ''
      },
      play: function() {
        jQuery('.modal').show();
      },
      getUrl: function() {
        return encodeURIComponent(window.location.href);
      },
      positionVideo: function() {
        // position the background video centered vertically if present
        if(jQuery('.nokia-header__video-wrapper').length) {

          // wait 200ms before triggering the video resize
          jQuery(window).resize(function() {
              if(this.resizeTO) clearTimeout(this.resizeTO);
              this.resizeTO = setTimeout(function() {
                  jQuery(this).trigger('resizeEnd');
              }, 100);
          });

          function checkHeight() {
            var windowHeight = 601;
            var videoHeight = jQuery('.nokia-header__video-wrapper').outerHeight();
            if (videoHeight > 601) {
            var topMargin = ((videoHeight - windowHeight) / 2) * -1;
              jQuery('.nokia-header__video-wrapper').css('margin-top', topMargin);
            }
          } //checkHeight()

          // fix the height before we set up the listener
          checkHeight();

          // listener on window resize
          jQuery(window).bind('resizeEnd', function() {
            checkHeight();
          });
        }
      },
      initVideo: function() {
        /* var iframe = document.getElementById('mainVideo');
        var player = new Vimeo.Player(iframe);
        var header = jQuery('.nokia-header');

        // once we know the video has started, we can show it
        player.on('play', function() {
            header.addClass('has-video');
        });

        player.on('pause', function() {
            header.removeClass('has-video');
        });

        player.on('error', function() {
            header.removeClass('has-video');
        });

        player.on('ended', function() {
            header.removeClass('has-video');
        }); */
        setTimeout(function(){
          document.getElementById("bgvid").play();
          // console.log('bgvid played');
        }, 500);
      }
    }
  }
</script>
