<template>
    <div class="carousel-wrapper" @mouseover="onMouseHover()" @mouseleave="onMouseLeave()">
        <slot v-if="!renderCarousel"></slot>
        <div v-else :style="{ transition: duration + 's', animationTimingFunction: 'linear', width: slideWidth * groups.length + 'px', transform: 'translate(' + translateDistance + 'px,0)' }">
            <div v-for="group in groups" class="carousel-page" :style="{ width: slideWidth + 'px' }">
                <div v-for="item in group" v-html="item.innerHTML">
                </div>
            </div>
        </div>
        <div v-show="isShowLeftButton" @click="decreaseGroup()" class="btn-carousel" style="left: 0;">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div v-show="isShowRightButton" @click="increaseGroup()" class="btn-carousel" style="right: 0;">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
    </div>
</template>
<style>
    .carousel-wrapper {
        display: block;
        overflow: hidden;
        position: relative;
    }
    .carousel-page {
        float: left;
    }
    .btn-carousel {
        width: 50px;
        height: 50px;
        text-align: center;
        align-items: center;
        display: flex;
        justify-content: center;
        border: 2px solid #c3c3c3;
        border-radius: 50%;
        z-index: 1000;
        background-color: #ffffff;
        box-shadow: 0 2px #5555;
        line-height: 60px;
        cursor: pointer;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
    .btn-carousel i{
        font-size: 35px;
        color: #757575;
    }
</style>
<script>
    export default {
        props:{
            groupNumber: Number,
            duration: Number,
            type: {
                type: String,
                default: 'default'
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
        },
        data: function () {
            return {
                groups: [],
                groupIndex: 0,
                renderCarousel: false,
                translateDistance: 0,
                slideWidth: 0,
                onAnimation: false,
                isShowLeftButton: false,
                isShowRightButton: false,
                interval: null
            }
        },
        mounted: function() {
            const items = [];
            const carouselItems = this.$el.querySelectorAll('.views-row.carousel-item');
            if(carouselItems.length > 0){
                this.slideWidth = carouselItems[0].offsetWidth;
                for(let i = 0; i< carouselItems.length; i++){
                    items.push(carouselItems[i].cloneNode(true));
                }
            }
            let groups = [];
            for (let index = 0; index < items.length; index += this.groupNumber) {
                groups.push(items.slice(index, index + this.groupNumber));
            }
            this.groups = groups;
            this.renderCarousel = true;
            this.interval = setInterval(() => {
                this.increaseGroup();
            }, this.duration * 1000);
        },
        methods: {
            decreaseGroup: function() {
                if (this.onAnimation) return;
                this.onAnimation = true;
                switch (this.type) {
                    case 'bounce':
                        this.groupIndex -= 1;
                        this.groupIndex = this.groupIndex === -1 ? 0 : this.groupIndex;
                        break;
                    default:
                        this.groupIndex += this.groups.length - 1;
                        this.groupIndex %= this.groups.length;
                        break;
                }
                this.translateDistance = this.groupIndex * -1 * this.slideWidth;
                setTimeout(() => { this.onAnimation = false; }, this.duration * 1000);
            },
            increaseGroup: function() {
                if (this.onAnimation) return;
                this.onAnimation = true;
                switch (this.type) {
                    case 'bounce':
                        this.groupIndex += 1;
                        this.groupIndex = this.groupIndex === this.groups.length ? this.groups.length - 1 : this.groupIndex;
                        break;
                    default:
                        this.groupIndex += 1;
                        this.groupIndex %= this.groups.length;
                        break;
                }
                this.translateDistance = this.groupIndex * -1 * this.slideWidth;
                setTimeout(() => { this.onAnimation = false; }, this.duration * 1000);
            },
            onMouseHover: function () {
                switch (this.type) {
                    case 'bounce':
                        if (this.groupIndex < this.groups.length - 1) {
                            this.isShowRightButton = true;
                        }
                        if (this.groupIndex > 0) {
                            this.isShowLeftButton = true;
                        }
                        break;
                    default:
                        this.isShowLeftButton = true;
                        this.isShowRightButton = true;
                        break;
                }
                clearInterval(this.interval);
            },
            onMouseLeave: function () {
                this.isShowLeftButton = false;
                this.isShowRightButton = false;
                this.interval = setInterval(() => {
                    this.increaseGroup();
                }, this.duration * 1000);
            },
        }
    }
</script>