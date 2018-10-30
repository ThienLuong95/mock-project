<template>
    <v-layout row wrap style="padding: 12px">
        <v-flex xs12 lg4 v-for="(item, index) in cmItems" :key="index">
            <v-card>
                <v-card-actions class="cm-action-bar">
                    <v-btn icon @click="onSetting(item.name)" class="cm-icon-grey">
                        <v-icon>settings</v-icon>
                    </v-btn>
                    <strong class="subheading"
                            style=" margin: 0 4px; ">{{item.name}}</strong>
                    <v-spacer></v-spacer>
                </v-card-actions>

                <codemirror
                        v-model="item.value"
                        :options="getCodeMirrorOption(item.name)"
                ></codemirror>
            </v-card>
        </v-flex>

        <v-card-actions>
            <v-btn color="primary" dark @click="onRun">Run
                <v-icon dark right>play_arrow</v-icon>
            </v-btn>
        </v-card-actions>
        <cm-setting-frame>
        </cm-setting-frame>
    </v-layout>
</template>

<script>
    import 'codemirror/theme/monokai.css'
    import 'codemirror/mode/vue/vue.js'
    import 'codemirror/mode/css/css.js'
    import 'codemirror/mode/htmlembedded/htmlembedded.js'
    import CmSettingFrame from "./cm-setting-frame";

    export default {
        name: "cm-view-code-panel",
        components: {CmSettingFrame},
        props: {
            html: {
                type: String,
                default: '',
            },
            css: {
                type: String,
                default: '',
            },
            js: {
                type: String,
                default: '',
            },

        },

        data: function () {
            return {
                dialog: false,
                cmItems: [
                    {name: 'HTML', value: this.html},
                    {name: 'CSS', value: this.css},
                    {name: 'JS', value: this.js}
                ],
            }
        },
        methods: {
            getCodeMirrorOption(item) {
                let _mode = 'text/x-vue';
                switch (item) {
                    case 'HTML':
                        _mode = 'text/html';
                        break;
                    case 'CSS':
                        _mode = 'text/css';
                        break;
                    case 'JS':
                        _mode = 'text/typescript';
                        break;
                }
                return {
                    mode: _mode,
                    tabSize: 4,
                    theme: 'monokai',
                    lineNumbers: true,
                    line: true,
                }
            },
            onRun() {
                let html = this.cmItems[0].value;
                let css = this.cmItems[1].value;
                let js = this.cmItems[2].value;
                this.$eventBus.$emit('onRun', html, css, js);
            },
            onSetting(name) {
                this.$eventBus.$emit('onFrameSetting', name);
            },
        },

        watch: {
            html: function () {
                this.cmItems[0].value = this.html;
            },
            css: function () {
                this.cmItems[1].value = this.css;
            },
            js: function () {
                this.cmItems[2].value = this.js;
            }
        },

    }
</script>

<style scoped>

</style>
