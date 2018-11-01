<template>
    <v-navigation-drawer
            persistent
            v-model="isDrawer"
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
                v-on:change="onProjectSelected"
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
</template>

<script>
    export default {
        name: "cm-navigation",
        props: {
            projects: {
                type: Array,
                required: true
            }
        },
        data: function () {
            return {
                isDrawer: false,
                keyword: '',
                listResult: [],
                selectedProject: null,

            }

        },
        methods: {
            onProjectSelected() {
                this.onSearch();

            },
            onSearch(keyword) {
                if (keyword=== null || keyword=== undefined || keyword === '') {
                    return this.listResult = this.selectedProject.listComponents
                }
                this.listResult = this.selectedProject.listComponents.filter(
                    function (component) {
                        let titleLowerCase = component.name.toLowerCase();
                        let keyLowerCase = keyword.toLowerCase();
                        return titleLowerCase.indexOf(keyLowerCase) > -1
                    })
            },
            onComponentSelected() {
                localStorage.selectedProjectId = this.selectedProject.projectId;
                this.$eventBus.$emit('onProjectSelectedId', this.selectedProject.projectId);
            },
            onNavDrawer() {
                this.isDrawer = !this.isDrawer;
            },


        },
        created() {
            this.$eventBus.$on('onNavDrawer', this.onNavDrawer);

            if (this.projects.length > 0) {
                this.selectedProject = this.projects[0];
                this.onSearch();
                if (typeof(Storage) !== "undefined") {
                    if (localStorage.selectedProjectId === 'null' ||
                        localStorage.selectedProjectId === 'undefined' ||
                        localStorage.selectedProjectId === '') {
                        localStorage.setItem("selectedProjectId", this.selectedProject.projectId);
                    }
                } else {
                    console.log('local storage not support')
                }
            }

        },
        watch:{
            isDrawer (){
                this.$emit('onDrawer', this.isDrawer);
            }
        },
        destroyed() {
            this.$eventBus.$off('onNavDrawer', this.onNavDrawer)
        }

    }
</script>

<style scoped>

</style>
