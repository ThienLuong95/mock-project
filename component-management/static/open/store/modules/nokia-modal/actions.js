const actions = {
    showModal(context, modalOptions){
        context.commit('setModalData', modalOptions.data); //set modal data
        context.commit('changeModalStatus', true); // open modal
        context.commit('changeModalOptions', modalOptions);
    },
    closeModalWithCancel(context, dataSendBack){
        context.commit('setModalData', undefined);
        context.commit('changeModalStatus', false);
        if(context.state.modalOptions.cancelFunc){
            context.state.modalOptions.cancelFunc(dataSendBack); // invoke cancel function
        }
        context.commit('changeModalOptions', {});
    },
    closeModalWithOk(context, dataSendBack){
        context.commit('setModalData', undefined);
        context.commit('changeModalStatus', false);
        if(context.state.modalOptions.okFunc){
            context.state.modalOptions.okFunc(dataSendBack); // invoke ok callback function
        }
        context.commit('changeModalOptions', {}); // set modal option to default value
    }
};

export default actions;