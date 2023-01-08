import Vue from 'vue'
import Vuex from 'vuex'
  
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state: {

    },
    mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},

	},
    actions: {
        change_n(context) {
            context.commit('change_n')
        }
    },
    strict: debug
})
