<template>
    <div class="pagination" style="border: 1px solid #e3e3e3">
        <div class="rows-per-page-wrapper">
            <span>Rows per page</span>
            <div class="item-per-page-mode-wrapper">
                <select v-model="itemSelected" @change="changeItemSelected(itemSelected)">
                    <option v-for="itemPerPageMode in itemPerPageModes"
                            v-bind:value="itemPerPageMode">{{itemPerPageMode}}
                    </option>
                </select>
            </div>
        </div>
        <div class="select-page-wrapper">
            <div style="margin: 0"
                 class="oen-storage-file-revision-table-paging-control">
                <button @click="changePage(1)" type="button"
                        class="fa fa-angle-double-left paging-control"
                        :disabled="currentPage == 1"></button>
                <button @click="changePage(currentPage - 1)"
                        style="font-size: 1em; font-weight: 100" type="button"
                        class="paging-control" :disabled="currentPage == 1">Prev
                </button>
                <select v-model="currentPage" class="paging-current-page" @change="changePage(currentPage)">
                    <option v-for="(item, index) in totalPage" v-bind:value="index + 1">
                        {{index + 1}}
                    </option>
                </select>
                <span id="numOfPage"> of {{totalPage}}</span>
                <button @click="changePage(currentPage + 1)"
                        style="font-size: 1em; font-weight: 100" type="button"
                        class="paging-control" :disabled="currentPage == totalPage">Next
                </button>
                <button @click="changePage(totalPage)" type="button"
                        class="fa fa-angle-double-right paging-control"
                        :disabled="currentPage == totalPage"></button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NokiaPagination',
        props: {
            itemPerPageModes: Array,
            itemSelected: '',
            totalPage: 0,
            currentPage: 0
        },
        methods: {
            changePage: function (index) {
              this.$emit('change-page', index);
            },
            changeItemSelected: function (index) {
                this.$emit('change-item-selected', index);
            }
        },
    }
</script>