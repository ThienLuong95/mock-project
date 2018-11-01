<template>
    <div class="modal-container" v-bind:class="classWrap">

        <div class="modal-header" v-if="headerHtml" v-html="header"></div>
        <div class="modal-header" v-else>
            <h3>{{ header }}</h3>
        </div>

        <div class="modal-body" style="text-align: center">
            <div>
                <div v-html="content">

                </div>
            </div>

        </div>

        <div class="modal-footer" style="display: flex; justify-content: center">
            <button class="modal-primary-button" @click="okModal();">
                {{buttonText}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MessageModal',
        mounted(){
            let modalData = this.$store.state.nokiaModal.modalData;
            this.classWrap = modalData.confirmationClass ? modalData.confirmationClass : this.classWrap;
            this.headerHtml = modalData.confirmationTitleHtml ? modalData.confirmationTitleHtml : this.headerHtml;
            this.header = modalData.confirmationTitle ? modalData.confirmationTitle : this.header;
            this.content = modalData.confirmationMessage;
            this.buttonText = modalData.confirmationBtnText ? modalData.confirmationBtnText : this.buttonText;
        },
        data(){
            this.content = this.$store.state.nokiaModal.modalData.confirmationMessage;
            return {
                classWrap: [],
                content: '',
                headerHtml: false,
                header: 'Confirmation Message',
                buttonText: 'Ok'
            }
        },
        methods:{
            okModal(){
                this.$store.dispatch('nokiaModal/closeModalWithOk', {dataSendBack: 'OK confirm modal'});
            }
        }
    }
</script>