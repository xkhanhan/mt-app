import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    position : '江西',
}

const mutation = {
    setPosition (state ,value) {
        state.position = value;
    }
}

const actions = {
    setPosition ({commit} , val){
        commit('setPosition', val);
    } 
}

export default new Vuex.Store({
    state,
    mutation,
    actions
})