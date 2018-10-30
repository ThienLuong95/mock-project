<template>
    <v-container fluid grid-list-lg>

        <v-layout row wrap>
            <v-flex xs12>
                <h1 class="display-1 cm-title"> {{componentData.name}}</h1>
                <p class="body-1" style="margin-bottom: 8px">Component description</p>
            </v-flex>

            <v-flex xs12 lg12>
                <h2 id="localLinkUsage" class="headline cm-title">Usage</h2>
                <p class="body-1">You can change below code to make effect</p>
                <v-card style="background-color: #BDBDBD">
                    <v-card-actions class="cm-action-bar">
                        <v-btn icon medium href="#localLinkUsage" class="cm-icon-grey">
                            <v-icon medium>mdi-pound-box</v-icon>
                        </v-btn>
                        <strong class="title" style="margin: 0px 4px;">Demo</strong>
                        <v-spacer></v-spacer>

                        <v-tooltip top>
                            <v-btn slot="activator" icon medium @click="isShowCode =!isShowCode" class="cm-icon-grey">
                                <v-icon medium>code</v-icon>
                            </v-btn>
                            <span>View Source</span>
                        </v-tooltip>

                    </v-card-actions>

                    <v-divider></v-divider>

                    <v-slide-y-transition>
                        <cm-view-code-panel
                                v-if="isShowCode"
                                ref="cmViewCodePanel"
                                :html="getCode('html')"
                                :css="getCode('css')"
                                :js="getCode('js')"

                        ></cm-view-code-panel>

                    </v-slide-y-transition>

                    <v-divider></v-divider>

                    <cm-view-demo-panel
                            :componentData="componentData"
                    ></cm-view-demo-panel>
                    <v-divider></v-divider>
                    <v-card-title></v-card-title>
                </v-card>

            </v-flex>
            <v-flex xs12>
                <h2 class="headline cm-title">API</h2>
                <p>Component API</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    import CmViewCodePanel from "./cm-view-code-panel";
    import CmViewDemoPanel from "./cm-view-demo-panel";

    export default {
        name: "cm-component-detail",
        components: {CmViewDemoPanel, CmViewCodePanel},
        data: function () {
            return {
                isShowCode: false,
                componentData: null,
            }
        },
        methods: {

            getCode(type) {
                let codeText = '';
                switch (type) {
                    case 'html':
                        codeText = this.componentData.template;
                        break;
                    case 'css':
                        codeText = this.componentData.style;
                        break;
                    case 'js':
                        codeText = this.componentData.script;
                        break;
                }
                return codeText;
            }
        },
        computed: {},
        watch: {
            '$route'(to, from) {
                this.componentData = this.$route.params.data;
            }
        },
        created() {
            let routeData = this.$route.params.data;
            if (routeData == null || routeData === 'undefined') {
                let project = this.$store.getters.getProjectById(localStorage.selectedProjectId);
                for (let component of project.listComponents) {
                    if (component.id === this.$route.params.id) {
                        this.componentData = component;
                        return;
                    }
                }
            } else {
                this.componentData = routeData;
            }
        }

    }
</script>

<style scoped>

</style>
