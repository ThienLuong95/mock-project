<template>
    <v-dialog v-model="dialog" max-width="412px">
        <v-card style="padding: 4px;">
            <v-card-title style="height: 88px;" class="back-ground-dark">
                <h1 class="display-2" style="color: #FFFFFF">Setting</h1>
                <v-spacer></v-spacer>
                <v-btn color="accentDark" style="color: #FFFFFF" @click="onSettingSave">Save</v-btn>
            </v-card-title>
            <v-tabs dark color="secondary" grow v-model="activeTab" slider-color="accent">

                <v-tab class="tab subheading" href="#tabHtml">Html</v-tab>
                <v-tab class="tab subheading" href="#tabCss">Css</v-tab>
                <v-tab class="tab subheading" href="#tabJs">Js</v-tab>
            </v-tabs>

            <v-tabs-items v-model="activeTab" class="config-scrollbar">

                <v-tab-item value="tabHtml" class="tab-item">

                    <div style="padding: 12px 0">
                        <h2 class="headline cm-title">Stuff for tag head</h2>

                        <p class="body-1">Any tag like:
                            <span v-for="item in items" :key="item"><code
                                    style="margin-left: 8px"><{{item}}></code> ,</span>
                            ... will be added in tag <code style="margin: 8px 0"><{{headItem}}></code></p>
                    </div>
                    <v-textarea
                            v-model="textArea"
                            placeholder="<code> <meta>, <link>, <style>, <script>... </code>"
                            outline
                            clearable
                            auto-grow
                    >
                    </v-textarea>

                </v-tab-item>

                <v-tab-item value="tabCss" class="tab-item" >
                    <cm-tab-item type="CSS" :urls="listLinkAppend" @onUrlsChange="onLinksChange"></cm-tab-item>
                </v-tab-item>

                <v-tab-item value="tabJs" class="tab-item">
                    <cm-tab-item type="JS" :urls="listScriptAppend" @onUrlsChange="onScriptChange"></cm-tab-item>
                </v-tab-item>

            </v-tabs-items>
        </v-card>
    </v-dialog>
</template>

<script>
    import CmTabItem from "./cm-tab-item";

    export default {
        name: "cm-setting-frame",
        components: {CmTabItem},

        data: function () {
            return {

                dialog: false,
                activeTab: 'tabHtml',
                items: ['meta', 'link', 'script', 'style'],
                headItem: 'head',
                selectedProject: null,
                textArea: '',
                listLinkAppend: [],
                listScriptAppend: [],
            }

        },
        methods: {
            onSettingSave() {
                this.$eventBus.$emit('onSaveSetting', this.textArea, this.listLinkAppend, this.listScriptAppend);
                this.dialog = !this.dialog;
            },
            onFrameSetting(activeTab) {
                this.setActiveTab(activeTab);
                this.dialog = !this.dialog;
            },
            onLinksChange(urls){
               this.listLinkAppend=urls;
            },
            onScriptChange(urls){
              this.listScriptAppend=urls;
            },
            setActiveTab(name) {
                switch (name) {
                    case 'HTML':
                        this.activeTab = 'tabHtml';
                        break;
                    case 'CSS':
                        this.activeTab = 'tabCss';
                        break;
                    case 'JS':
                        this.activeTab = 'tabJs';
                        break;
                    default:
                        this.activeTab = 'tabHtml';
                        break;
                }
            },
            onProjectSelected(projectId) {
                this.selectedProject = this.$store.getters.getProjectById(projectId);
            }
        },

        created: function () {
            this.$eventBus.$on('onFrameSetting', this.onFrameSetting);
            this.$eventBus.$on('onProjectSelectedId', this.onProjectSelected);
            this.selectedProject = this.$store.getters.getProjectById(localStorage.selectedProjectId);

        },

        destroyed: function () {
            this.$eventBus.$off('onFrameSetting', this.onFrameSetting);
            this.$eventBus.$off('onProjectSelectedId', this.onProjectSelected);
        },
        watch: {
            selectedProject() {
                this.textArea = this.selectedProject.projectHeadTag;
                this.listLinkAppend = this.selectedProject.projectLinks;
                this.listScriptAppend = this.selectedProject.projectScripts;
            }
        },

    }

</script>

<style scoped>

</style>
