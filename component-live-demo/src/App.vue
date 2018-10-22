<template>
    <v-app>
        <v-navigation-drawer app  v-model="isDrawer" >

        </v-navigation-drawer>

        <v-toolbar app dark color="primary" flat >
            <v-toolbar-side-icon @click="setDrawer"></v-toolbar-side-icon>
            <v-toolbar-title> Component name</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid pa-0>
                <div style=" height: 8px; display: block; background-color: darkgrey"></div>
                <v-layout row wrap>
                    <!--code panel-->

                    <v-flex xs4 v-for="(item, i) in codePanels" :key="i">
                        <div style="display: flex">
                            <div style="width: 16px; height: inherit; display: block; background-color: darkgrey">
                            </div>
                            <div style="flex-grow: 1; overflow: auto">

                                <v-card-actions class="cm-action-bar" style="background-color: white">
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
                            </div>
                        </div>
                    </v-flex>
                    <div style=" width: 100%; height: 16px; display: block; background-color: darkgrey"></div>
                    <v-flex xs12 style="padding: 8px">
                        <v-card-actions>
                            <v-btn color="primary" dark @click="onRun">Run
                                <v-icon dark right>play_arrow</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-flex>
                    <div style="width: 100% ;height: 1px; background-color: #cccccc"></div>
                    <!--iFrame panel-->
                    <iframe id="iframe" src="../static/iframe.html"
                            frameborder="no"
                            style="padding: 16px;flex-grow: 1; min-height: 400px"
                            v-on:load="onFrameLoaded"
                    >

                    </iframe>
                    <div style="width: 100% ;height: 1px; background-color: #cccccc"></div>
                </v-layout>
            </v-container>
        </v-content>

    </v-app>
</template>

<script>
    import 'codemirror/theme/monokai.css'
    import 'codemirror/mode/vue/vue.js'
    import 'codemirror/mode/css/css.js'
    import 'codemirror/mode/htmlembedded/htmlembedded.js'
    import VSelect from "vuetify/lib/components/VSelect/VSelect";

    export default {
        name: 'App',
        components: {VSelect},
        data: function () {
            return {
                isDrawer: true,
                codePanels: [
                    {
                        name: 'HTML', value: '<div id="app">\n' +
                            '  <v-app id="inspire">\n' +
                            '    <div>\n' +
                            '      <v-btn color="success">Success</v-btn>\n' +
                            '      <v-btn color="error">Error</v-btn>\n' +
                            '      <v-btn color="warning">Warning</v-btn>\n' +
                            '      <v-btn color="info">Info</v-btn>\n' +
                            '    </div>\n' +
                            '  </v-app>\n' +
                            '</div>'
                    },
                    {name: 'CSS', value: ''},
                    {
                        name: 'JS', value: 'new Vue({\n' +
                            '  el: \'#app\',\n' +
                            '  \n' +
                            '})'
                    }
                ],
            }
        },
        methods: {
            setDrawer: function(){
              this.isDrawer= !this.isDrawer
            },
            getCodeMirrorOption: function (item) {
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
            onFrameLoaded: function(){
                // let frame= document.getElementById('iframe');
                // let frameDoc=frame.contentDocument || frame.contentWindow.document;
                // frame.style.height= frameDoc.body.scrollHeight + 'px';
            },
            onSetting: function () {
                console.log('setting')
            },
            onRun: function () {
                let frame= document.getElementById('iframe');
                let frameWindow =frame.contentWindow;
                let framDoc=frameWindow.document;
                frameWindow.editHTML(this.codePanels[0].value);
                frameWindow.editStyle(this.codePanels[1].value);
                frameWindow.evalScript(this.codePanels[2].value);



            }
        }
    }
</script>
