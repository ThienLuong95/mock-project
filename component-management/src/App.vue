<template>
    <v-app>
        <!--Navigation-->
        <cm-navigation :projects="projects" style="z-index: 999">

        </cm-navigation>

        <!--Toolbar-->
        <v-toolbar
                dark
                app
                color="secondary"
                style="z-index: 998"
        >
            <v-toolbar-side-icon @click.stop="onNavDrawer"></v-toolbar-side-icon>
            <img src="@/assets/cm-logo2.svg" alt="logo" width="128"  >
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
                <img src="@/assets/avatar.svg" alt="avatar">
            </v-avatar>
        </v-toolbar>

        <!--Content-->
        <v-content>
            <router-view/>
        </v-content>
        <v-navigation-drawer
                temporary
                right
                v-model="rightDrawer"
                fixed
                app
                style="z-index: 999"
        >
            <img src="@/assets/user-profile.png">

        </v-navigation-drawer>

        <!--Footer-->
        <v-footer>
            <span>&copy; ATM</span>
        </v-footer>
    </v-app>
</template>

<script>
    import CmNavigation from "./components/cm-navigation";
    import projects from "./util/demo-data"
    export default {
        name: 'App',
        components: {CmNavigation},
        data() {
            return {
                menuItems: ['New Project', 'New Component', 'New User'],
                projects: projects,
                rightDrawer: false,
                title: 'Component Management'
            }
        },
        methods: {
            onNavDrawer(){
                this.$eventBus.$emit('onNavDrawer')
            }
        },
        created: function () {
            this.$store.commit('setProjects', this.projects)





        }
    }
</script>
<style scoped>
    .v-menu__content {
        border-radius: 0 !important;
    }
</style>
