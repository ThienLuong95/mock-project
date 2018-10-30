import state from './state';
import mutations from './mutations';
import actions from  './actions';

const namespaced = true;

const nokiaModal = { //nokiaModal module which will be registerd when open nokia modal.
    namespaced,
    state,
    mutations,
    actions
};

export default nokiaModal;
