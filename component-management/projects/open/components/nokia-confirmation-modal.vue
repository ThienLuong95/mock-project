<template>
    <transition name="modal" >
        <div class="modal-mask oen-nip-service-confirmation-modal" v-show="showModal">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div v-for="key in modalContent">
                        <div class="modal-header">
                            <slot name="header">
                                <span class="header-content" :style="{color: colorHeader}">{{ key.modalHeader }}</span>
                                <!--<hr>-->
                            </slot>
                        </div>

                        <div class="modal-body">
                            <div class="oen-vue-table-wrapper">
                                <span class="confirm-message">{{ key.modalBody }}</span>
                                <div v-if="modalType === 'nip-service-confirmation' ">
                                    <form method="post" class="nip-service-request-action">
                                        <input type="hidden" id="service_request" :value="key.entityId"/>
                                        <input type="hidden" name="action" :value="key.action">
                                        <div v-if="key.action === 'reject' "  class="reject-info">
                                            <span class="reject-note">{{ key.rejectNote }}</span>
                                            <textarea class="reject-message" name="rejectMessage" maxlength="1000"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div v-if="modalType === 'nip-service-create-asset' ">
                                    <form method="post" class="nip-service-create-asset">
                                        <input type="hidden" name="serviceId" :value="key.entityId"/>
                                        <span class="asset-name">Asset name *</span>
                                        <input type="text" name="assetName" :value="key.entityName"/>
                                    </form>
                                </div>

                                <div v-if="modalType === 'my-nip-account-modal' ">
                                    <form method="post" class="nip-service-create-asset">
                                        <span class="asset-name">Username *</span>
                                        <input type="text" name="modal-username" :value="key.username" />
                                        <span class="asset-name">Password *</span>
                                        <input type="password" name="modal-password" :value="key.password" />
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                            <span v-if="modalType === 'nip-service-confirmation' ">
                                <button class="btn modal-agree-button"
                                        @click="nipServiceConfirmationSubmitEvent()" >
                                    Yes
                                </button>
                            </span>
                                <span v-if="modalType === 'nip-service-create-asset'">
                                <button class="btn modal-agree-button"
                                        @click="createNipServiceAssetEvent()" >
                                    Ok <img id="loader" class="ajax-loader" style="margin-left: 5px;"  src='/themes/custom/nokiavue/images/ajax-loader.gif'>
                                </button>
                            </span>

                                <span v-if="modalType === 'my-nip-account-modal' ">
                                <button class="btn modal-agree-button"
                                        @click="myNipAccountSubmitEvent()" >
                                    Save <img id="loader" class="ajax-loader" style="margin-left: 5px;"  src='/themes/custom/nokiavue/images/ajax-loader.gif'>
                                </button>
                            </span>

                                <span>
                                <button class="modal-default-button"
                                        @click="showModal = false">
                                    <span v-if="modalType == 'error-modal' || modalType === 'nip-service-create-asset' || modalType === 'my-nip-account-modal' ">Close</span>
                                    <span v-else>No</span>
                                </button>
                            </span>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                showModal: false,
                colorHeader: '#000',
                modalType: "",
                modalContent: []
            }
        },
        methods: {
            nipServiceConfirmationSubmitEvent: function(){
                this.showModal = false;
                var serviceRequestId = $('#service_request').val();
                var action = $('input[name="action"]').val();
                var dataRequest = {
                    action: action
                };
                if(action === 'reject'){
                    var rejectMessage = $('.reject-message').val();
                    dataRequest = {
                        action: action,
                        rejectMessage : rejectMessage
                    }
                }
                var that = this;
                $.ajax({
                    url: '/nip/service-request/' + serviceRequestId,
                    method: 'POST',
                    type: 'JSON',
                    data: dataRequest,
                    success: function(response){
                        if(response.success === false){
                            that.showModal = true;
                            that.colorHeader = '#f31515';
                            that.modalType = 'error-modal';
                            that.modalContent = [{
                                modalHeader: 'ERROR',
                                modalBody: response.message
                            }];
                        }
                        else{
                            if(response.urlRedirect && response.urlRedirect !== ""){
                                window.location.href = response.urlRedirect;
                            }else{
                                window.location.reload();
                            }
                        }
                    }
                });
            },

            createNipServiceAssetEvent: function(){
                $('.mandatory-error').remove();
                $('.asset-name-error').remove();
                $('.modal-body').css('text-align','unset');
                $("input[name='assetName']").removeClass('input-error');
                var assetName = $("input[name='assetName']").val();
                var serviceId = $("input[name='serviceId']").val();
                var that= this;
                if(assetName != '') {
                    $.ajax({
                        url: '/nip/create-asset',
                        method: 'POST',
                        type: 'JSON',
                        data: {assetName: assetName, serviceId: serviceId},
                        beforeSend: function(){
                            $("#loader").removeClass('ajax-loader');
                        },
                        success: function (response) {
                            if (response.success === true) {
                                that.showModal = false;
                                if (response.urlAsset != '') {
                                    var buttonCreate = $('#nip-create-asset-button-' + serviceId);
                                    var footer = buttonCreate.parent();
                                    buttonCreate.remove();
                                    footer.append('<span>You have created an asset from this service. Click <a href="' + response.urlAsset + '" target="_blank">here</a> to go to asset details.</span>');
                                }
                            }
                            else {
                                var errorExists = $('.asset-name-error').length;
                                if (errorExists == 0 && response.message !== "") {
                                    $('.nip-service-create-asset').append('<span class="asset-name-error">' + response.message + '</span>');
                                    $("input[name='assetName']").addClass('input-error');
                                    $("input[name='assetName']").focus();
                                }
                            }
                        },
                        complete: function(){
                            $('#loader').addClass('ajax-loader');
                        }
                    });
                }
                else{
                    if($('.mandatory-error').length == 0) {
                        $('.nip-service-create-asset').append('<div class="mandatory-error">* mandatory</div>');
                        $("input[name='assetName']").addClass('input-error');
                        $("input[name='assetName']").focus();
                    }
                }
            },

            myNipAccountSubmitEvent: function(){
                $('.asset-name-error').remove();
                var that = this;
                var userName = $("input[name='modal-username']").val();
                var password = $("input[name='modal-password']").val();

                $.ajax({
                    url: '/nip/my-nip-service-account',
                    method: 'POST',
                    type: 'JSON',
                    data: {userName: userName, password: password},
                    beforeSend: function(){
                        $("#loader").removeClass('ajax-loader');
                    },
                    success: function (response) {
                        if (response.success === true) {
                            if(response.url != ''){
                                that.showModal = false;
                                window.location.href = response.url;
                            }
                        }
                        else {
                            var errorExists = $('.asset-name-error').length;
                            if (errorExists == 0 && response.message != '') {
                                $('.nip-service-create-asset').append('<div class="asset-name-error">' + response.message + '</div>');
                            }
                        }
                    },
                    complete: function(){
                        $('#loader').addClass('ajax-loader');
                    }
                });
            }
        },
        mounted: function () {
            var that = this;
            bus.$on('approve-nip-service-request', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
                that.callback = data.callback;
            });
            bus.$on('reject-nip-service-request', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
                that.callback = data.callback;
            });
            bus.$on('stop-nip-service-instance', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            });
            bus.$on('terminate-nip-service-instance', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            });
            bus.$on('restart-nip-service-instance', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            });
            bus.$on('remove-nip-service-instance', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            });
            bus.$on('create-nip-service-asset', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            });
            bus.$on('my-nip-account-modal', function (data) {
                that.showModal = true;
                that.colorHeader = '#000';
                that.modalType = data.modalType;
                that.modalContent = data.modalContent;
            })
        }
    }
</script>

