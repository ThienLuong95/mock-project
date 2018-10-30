<template>
    <iframe
            src="../../static/cm/iframe/demo-frame.html"
            id="cmDemoFrame"
            width="100%"
            scrolling="no"
            frameborder="no"
            v-on:load="resizeFrame()"

    ></iframe>
</template>

<script>
    export default {
        name: "cm-view-demo-panel",
        props: {
            componentData: {
                type: Object,
                require: true
            }
        },
        data() {
            return {
                isFrameLoaded: false,
                frame: null,
            }
        },
        methods: {
            writeExternalSource(){
              //write head
              // write links
              // write script
            },
            onRun(html, css, js) {
                let frameWindow = this.frame.contentWindow;
                if (frameWindow == null || frameWindow === undefined) {
                    throw new Error("No frame founded!");
                }
                if (this.isFrameLoaded) {
                    frameWindow.cmInnerElementByType('html', html);
                    frameWindow.cmInnerElementByType('css', css);
                    frameWindow.cmEvalComponentByScript(js);
                } else {
                    console.log('frame not loaded yet')
                }
            },
            resizeFrame() {
                this.frame.style.height = this.frame.contentWindow.document.body.scrollHeight + 'px';

            }
        },
        mounted() {
            this.frame = document.getElementById('cmDemoFrame');
            let frameWindow = this.frame.contentWindow;
            frameWindow.onload = () => {
                this.isFrameLoaded = true;
                this.onRun(this.componentData.template, this.componentData.style, this.componentData.script);
            };
            this.resizeFrame();
        },
        created() {
            this.$eventBus.$on('onRun', this.onRun);
        },
        destroyed() {
            this.$eventBus.$off('onRun', this.onRun);
        },
        watch: {
            componentData: function () {
                this.onRun(this.componentData.template, this.componentData.style, this.componentData.script);
                this.resizeFrame();
            }
        }
    }
</script>

<style scoped>

</style>
