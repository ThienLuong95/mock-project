<template>
    <div>

        <v-progress-linear
                :indeterminate="isProcess"
                :active="isProcess"
                color="info"
        ></v-progress-linear>
        <iframe
                src="../../static/cm/iframe/iframe-9539.html"
                id="cmDemoFrame"
                width="100%"
                scrolling="no"
                frameborder="no"
                v-on:load="resizeFrame()"
                class="iframe"
        ></iframe>
    </div>

</template>

<script>
    export default {
        name: "cm-view-demo-panel",
        props: {
            componentData: {
                type: Object,
                require: true,
            }
        },
        data() {
            return {
                isFrameLoaded: false,
                isProcess: true,
                frame: null,
                selectedProject: null,
            }
        },
        methods: {
            writeExternalSource(headText, links, scripts) {
                this.frame.contentWindow.cmWriteExternalSource(headText, links, scripts)
                setTimeout(() => {
                    this.isFrameLoaded = true;
                    this.isProcess = false;
                    this.onRun(this.componentData.template, this.componentData.style, this.componentData.script);

                }, 3000)
            },
            onRun(html, css, js) {
                let frameWindow = this.frame.contentWindow;
                if (frameWindow == null || frameWindow === undefined) {
                    throw new Error("No frame founded!");
                }
                if (this.isFrameLoaded) {
                    frameWindow.cmOnRun(html, css, js)

                } else {
                    console.log('frame not loaded yet')
                }
                this.resizeFrame();

            },
            resizeFrame() {
                this.frame.style.height = this.frame.contentWindow.document.body.scrollHeight + 'px';

            },
            onProjectSelected(projectId) {
                this.selectedProject = this.$store.getters.getProjectById(projectId);
            }
        },
        mounted() {
            this.frame = document.getElementById('cmDemoFrame');
            let frameWindow = this.frame.contentWindow;

            frameWindow.onload = () => {
                this.writeExternalSource(this.selectedProject.projectHeadTag, this.selectedProject.projectLinks, this.selectedProject.projectScripts);
            };

            this.resizeFrame();
        },
        created() {
            this.$eventBus.$on('onRun', this.onRun);
            this.$eventBus.$on('onProjectSelectedId', this.onProjectSelected);
            this.$eventBus.$on('onSaveSetting', this.writeExternalSource);
            this.selectedProject = this.$store.getters.getProjectById(localStorage.selectedProjectId);
        },
        destroyed() {
            this.$eventBus.$off('onRun', this.onRun);
            this.$eventBus.$off('onProjectSelectedId', this.onProjectSelected);
            this.$eventBus.$off('onSaveSetting', this.writeExternalSource);
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
