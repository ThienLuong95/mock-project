<template>
    <iframe
            src="../../static/iframe/demo-frame.html"
            id="cmDemoFrame"
            width="100%"
            scrolling="no"
            frameborder="no"

    ></iframe>
</template>

<script>
    export default {
        name: "cm-view-demo-panel",
        data() {
            return {
                frame: null,
                frameWindow: null,
                frameDoc: null,
            }
        },
        methods: {
            onRun(cmItems) {

                this.frameWindow.innerElement('html',cmItems[0].value);
                this.frameWindow.innerElement('css',cmItems[1].value)
                this.frameWindow.evalScript(cmItems[2].value)

            },

        },
        mounted(){
            this.frame = document.getElementById('cmDemoFrame');
            this.frameWindow = this.frame.contentWindow;
            this.frameDoc= this.frameWindow.document;
        },
        created() {
            this.$eventBus.$on('onRun', this.onRun);

        },
        destroyed() {
            this.$eventBus.$off('onRun', this.onRun);
        }
    }
</script>

<style scoped>

</style>
