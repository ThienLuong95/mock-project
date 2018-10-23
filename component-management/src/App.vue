<template>
    <v-app>
        <!--Navigation-->
        <v-navigation-drawer
                persistent
                v-model="drawer"
                fixed
                app
        >
            <v-select
                    :items="projects"
                    item-text="projectName"
                    item-value="projectName"
                    v-model="selectedProject"
                    return-object
                    label="Selected"
                    v-on:change="onProjectSelection"
                    style="padding: 24px 16px 0 16px"
                    outline

            ></v-select>

            <!--Search box search component-->
            <v-text-field
                    v-model="keyword"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                    v-on:change="onSearch(keyword)"
                    v-on:blur="onSearch(keyword)"
                    style="padding: 0 16px"
                    outline
            ></v-text-field>

            <!--Show list Component after search, default return all list-->
            <v-list>
                <v-list-tile
                        v-for="(item) in listResult"
                        :key="item.id"
                        :to="{ name: 'component', params: { id: item.id, data: item }}"
                        active-class="primary--text"
                        @click="onComponentSelected"
                >
                    <v-list-tile-content style="padding: 0 8px">
                        <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

        </v-navigation-drawer>

        <!--Toolbar-->
        <v-toolbar
                dark
                app

        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <!--Toolbar items-->
            <v-toolbar-items style="margin: 0 24px;">
                <v-menu offset-y>
                    <v-btn
                            large
                            style="border-radius: 0;border-width: 0 1px; border-style: solid; border-color: darkgrey; font-weight: 500!important;; font-size: 18px !important;"
                            flat
                            slot="activator"
                    >
                        <v-icon medium left dark>add</v-icon>
                        Add
                        <v-icon medium right dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-tile
                                v-for="(item, index) in menuItems"
                                :key="index"
                                @click=""
                        >
                            <v-list-tile-title>{{ item }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>

            </v-toolbar-items>

            <!--Avatar-->
            <v-avatar v-on:click="rightDrawer = !rightDrawer" style=" cursor: pointer "
                      size='40px'
            >
                <img src="/static/asset/avatar.svg" alt="avatar">
            </v-avatar>
        </v-toolbar>

        <!--Content-->
        <v-content>
            <router-view/>
        </v-content>
        <v-navigation-drawer
                temporary
                :right="right"
                v-model="rightDrawer"
                fixed
                app
        >
            User profile coming soon
        </v-navigation-drawer>

        <!--Footer-->
        <v-footer >
            <span>&copy; ATM</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                menuItems: ['New Project', 'New Component', 'New User'],
                drawer: true,
                projects: [],
                keyword: '',
                selectedProject: null,
                listResult: [],
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                right: true,
                rightDrawer: false,
                title: 'Component Management'
            }
        },
        name: 'App',
        methods: {
            onProjectSelection: function () {

            },
            onSearch(){

            },
            onComponentSelected(){

            }
        }
    }
</script>
<style scoped>
    .v-menu__content {
        border-radius: 0 !important;
    }
</style>
