// vue resource
<template>
    <div class="oen-vue-table-wrapper">
        <div class="spinner-container" v-show="isLoadingData">
            <div class="spinner"></div>
        </div>
        <div class="wrapper-table-body-pagination" :class="{'nokia-table-opacity': isLoadingData}">
            <div v-if="dataTable.length > 0 || currentPage > 1">
                <table id="nokia-table-wrapper">
                    <thead>
                    <tr>
                        <th v-for="key in columns" :class="[key.attrName, key.isSorted > 0 ? '' : 'unsorted']">
                            <div v-if="key.isSorted > 0" @click="sortBy(key.attrName)">
                                <span>{{key.friendlyName | capitalize }}</span>
                                <span :class="[sortOrders[key.attrName] > 0 ? 'asc' : 'dsc', showArrow[key.attrName] > 0 ? 'arrow' : '']"></span>
                            </div>
                            <div v-else>
                                <span>{{key.friendlyName | capitalize }}</span>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody v-if="dataTable.length > 0">
                        <tr v-for="(entry, index) in dataTable" :class="{even: index%2 >0}">
                            <td v-for="key in columns">
                                <slot :data="entry" :index="index" :name="key.attrName"><span class="nokia-async-table-data"
                                                                                              :title="entry[key.attrName]">{{entry[key.attrName]}}</span>
                                </slot>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td :colspan="columns.length">
                                There is no data.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nokia-pagination @change-page="changePage" @change-item-selected="changeItemSelected"
                                  :item-per-page-modes="itemPerPageModes" :item-selected="itemSelected"
                                  :total-page="totalPage" :current-page="currentPage"></nokia-pagination>
            </div>
            <div v-if="currentPage == 1 && dataTable.length < 1">
                There is no data.
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NokiaAsyncTable',
        props: {
            columns: Array,
            itemPerPageModes: Array,
            itemPerPageModeSelected: '',
            url: '',
            paramRequest: {},
        },
        mounted() {
            this.fetchRequest();
        },
        data: function () {
            var itemSelected = this.itemPerPageModeSelected;
            var sortOrders = {}, showArrow = {}, sortColumn = '', sortType = '';
            this.columns.forEach(function (key) {
                sortOrders[key.attrName] = 1;
                showArrow[key.attrName] = 0;
                if (key.arrow) {
                    showArrow[key.attrName] = 1;
                    sortOrders[key.attrName] = key.arrow;
                    sortColumn = key.attrName;
                    sortType = key.arrow;
                }
            });
            return {
                currentPage: 1,
                totalPage: 0,
                isLoadingData: true,
                sortOrders: sortOrders,
                showArrow: showArrow,
                sortColumn: sortColumn,
                sortType: sortType,
                dataTable: Array,
                itemSelected: itemSelected,
            };
        },
        methods: {
            fetchRequest() {
                let heightTable = jQuery(".wrapper-table-body-pagination", this.$el).height();
                this.isLoadingData = true;
                jQuery(".oen-vue-table-wrapper").css('position', 'relative');
                jQuery(".spinner-container").css('height', heightTable);
                this.paramRequest.pageIdx = this.currentPage;
                this.paramRequest.pageSize = this.itemSelected;
                this.paramRequest.sortCol = this.sortColumn;
                this.paramRequest.sortType = this.sortType > 0 ? 'ASC' : 'DESC';
                this.$http.get(this.url, {params: this.paramRequest}).then(response => {
                    this.dataTable = response.data.items;
                    this.isLoadingData = false;
                    this.totalPage = response.data.totalPage;
                    this.currentPage = parseInt(response.data.currentPage);
                    this.itemSelected = response.data.pageSize;
                    this.$emit('loading-data', this.isLoadingData);
                }, err => {
                    this.isLoadingData = false;
                    this.$emit('loading-data', this.isLoadingData);
                });
            },
            changePage: function (data) {
                this.currentPage = data;
                this.fetchRequest();
            },
            changeItemSelected: function (data) {
                this.itemSelected = data;
                this.currentPage = 1;
                this.fetchRequest();
            },
            sortBy(key) {
                this.sortKey = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
                var that = this;
                this.columns.forEach(function (k) {
                    that.showArrow[k.attrName] = 0;
                    if (key == k.attrName) {
                        that.showArrow[k.attrName] = 1;
                    }
                });
                this.sortColumn = key;
                this.sortType = this.sortOrders[key];
                this.fetchRequest();
                let tableSort = {};
                tableSort = {'sortCol': key, 'sortType': this.sortType};
                this.$emit('table-sort', tableSort);
            },
          //support for search data
            fetchDataByFilter(filter) {
              this.paramRequest = filter;
              this.currentPage = 1;
              this.fetchRequest();
            }
        }
    }
</script>
