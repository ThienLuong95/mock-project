<template>
    <v-app>
        <!--<v-toolbar app>something</v-toolbar>-->

        <v-container fluid pa-0>
            <v-layout row wrap>
                <!--code panel-->
                <v-flex xs12 sm4 md4 lg4 xl4 v-for="(item, i) in codePanels" :key="i">
                    <div style="margin: 16px 0 8px 0; display: flex">
                        <div style="width: 8px; height: inherit; display: block; background-color: darkgrey">
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
                <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-card-actions>
                        <v-btn color="primary" dark @click="onRun">Run
                            <v-icon dark right>play_arrow</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-flex>
                <!--iFrame panel-->
                <iframe id="iframe" src="../static/iframe.html"
                        style="margin: 8px; background-color: darkgray; flex-grow: 1"></iframe>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
    import 'codemirror/theme/monokai.css'
    import 'codemirror/mode/vue/vue.js'
    import 'codemirror/mode/css/css.js'
    import 'codemirror/mode/htmlembedded/htmlembedded.js'

    export default {
        name: 'App',
        components: {},
        data: function () {
            return {
                codePanels: [
                    {name: 'HTML', value: '<div id="app">\n' +
                            '  <v-app id="inspire">\n' +
                            '    <div>\n' +
                            '      <v-btn color="success">Success</v-btn>\n' +
                            '      <v-btn color="error">Error</v-btn>\n' +
                            '      <v-btn color="warning">Warning</v-btn>\n' +
                            '      <v-btn color="info">Info</v-btn>\n' +
                            '    </div>\n' +
                            '  </v-app>\n' +
                            '</div>'},
                    {name: 'CSS', value: ''},
                    {name: 'JS', value: 'new Vue({\n' +
                            '  el: \'#app\',\n' +
                            '  \n' +
                            '})'}
                ],
            }
        },
        methods: {
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
            onSetting: function () {
                console.log('setting')
            },
            onRun: function () {
                let frameDoc = document.getElementById('iframe').contentWindow;
                frameDoc.editHTML(this.codePanels[0].value);
                frameDoc.editStyle(this.codePanels[1].value);
                frameDoc.evalScript(this.codePanels[2].value);
            }
        }
    }
</script>
