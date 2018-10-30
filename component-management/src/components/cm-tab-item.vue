<template>
    <div>
        <div style="padding: 12px 0">
            <h2 class="headline cm-title">Add External {{type}}</h2>
            <p class="body-1">Any URL's added here will be added as tag <code> <{{getTag}}></code> in order, and before
                the {{type}} in the editor</p>
        </div>
        <draggable v-model="tempUrls" :options="{group: type}" @start="drag=true" @end="drag=false">
            <div style="display: flex" v-for="(element, index) in tempUrls" :key="index">

                <v-text-field
                        outline
                        single-line
                        placeholder="https://www.cdn.com/abc/zc"
                        v-model="tempUrls[index]"
                        clearable
                        type="url"
                        prepend-icon="mdi-arrow-all"
                ></v-text-field>

                <div>
                    <v-btn class="tinyButton" small icon :href="element" target="_blank" style="padding: 6px 0">
                        <v-icon small>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn class="tinyButton" small icon @click="removeURL(index)">
                        <v-icon small>mdi-delete</v-icon>
                    </v-btn>
                </div>

            </div>

        </draggable>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small outline color="accent" @click="addUrl">
                <v-icon small left>add</v-icon>
                add
            </v-btn>
        </v-card-actions>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "cm-tab-item",
        components: {draggable},
        props: {
            type: '',
            urls: {
                type: Array,
                require: true,
            },
        },
        data: function () {
            return {
                tempUrls: [],
            };
        },
        computed: {
            getTag: function () {
                if (this.type === 'CSS') return 'link';
                if (this.type === 'JS') return 'script';
                return '';
            },
        },
        created: function () {
            this.tempUrls = this.urls;
        },

        methods: {
            addUrl: function () {
                this.tempUrls.push('');
            },
            removeURL: function (index) {
                if (index > -1) {
                    this.tempUrls.splice(index, 1);
                }
            },
        },
        watch: {
            urls() {
                this.tempUrls = this.urls;
            }
        }

    }
</script>
<style scoped>
    .tinyButton {
        display: block;
        margin: 0 0 0 8px;
        color: #757575;
    }
</style>
