const mutations = {
    increase(state, step){
        state.count += step;
    },
    setModalData(state, data){
        state.modalData = data;
    },
    changeModalStatus (state, status){
        state.modalStatus = status;
    },
    changeModalOptions (state, options){
        state.modalOptions = options
    }
};

export default mutations;