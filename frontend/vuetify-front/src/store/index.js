import Vue from 'vue'
import Vuex from 'vuex'
  
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
    state: {

        register_form: {
            pdpa_accept:'',
            user_type:'',
            prefix:'',
            first_name:'',
            last_name:'',
            birthdate:'',
            phone_number:'',
            idcard:'',
            mdnumber:'',
            provider_list_id:'',
            reg_token:'',
            passcode:'',
            lineid:'',
            weight:'',
            height:'',
            highpressure:'',
            hyperlipidemia:'',
            alzheimer:'',
            heart:'',
            diabetes:'',
            arrhythmai:'',
            depress:'',
            postcode:'',
            location_id:'',
        },
        is_admin_login:'',
        login_detail:{
            user_id:'',
            user_type:''
        },
        user_info:{

        },
        azq_type:'',
        browser:'',
        time_count:0,
        qr_patient_id:'',
        qr_patient_info:'',
        azq_ans:{
            user_id:'',
            ans_pdpa:'',
            ans_1:'',
            ans_2:'',
            ans_3:'',
            ans_4:'',
            ans_5:'',
            ans_6:'',
            ans_7:'',
            ans_8:'',
            ans_9:'',
            ans_10:'',
            ans_11:'',
            ans_12:'',
            ans_13:'',
            ans_14:'',
            ans_15:'',
            ans_16:'',
            ans_17:'',
            ans_18:'',
            ans_19:'',
            ans_20:'',
            ans_21:'',
            point:'',
            current_s:'',
            stop_testing:'',
            voice_on:'',
            bg_sound:'',
            full_name:'',
            phonenumber:'',
            age:''

        }

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

        clearStore(state, payload){
            //console.log("clearStore")
            //console.log(payload)
           
            state.azq_ans = {},
            state.browser = {},
            state.login_detail = {},
            state.qr_patient_id = {},
            state.qr_patient_info = {},
            state.register_form = {},
            state.user_info = {}
            state.is_admin_login = {}
        

        },
        setBrowser: (state, payload) => {
            //console.log("77777777setRegisterForm77777777")
            //console.log(payload)
   
            if(payload)state.browser = payload
           
        },
        setAzq_type: (state, payload) => {
            //console.log("77777777setAzq_type77777777")
            //console.log(payload)
   
            if(payload)state.azq_type = payload
           
        },
        

        setAdminLogin: (state, payload) => {
            //console.log("setAzqAns")
            //console.log(payload)
            if(payload)state.is_admin_login = payload
           
        },
        
        
        setAzqAns: (state, payload) => {
            //console.log("setAzqAns")
            //console.log(payload)
            if(payload)state.azq_ans = payload
           
        },
        
        


        setQrPatientId: (state, payload) => {
            //console.log("77777777setQrPatientId77777777")
            //console.log(payload)
            if(payload)state.qr_patient_id = payload
           
        },
        setQrPatientInfo: (state, payload) => {
            //console.log("77777777setQrPatientInfo77777777")
            //console.log(payload)
            if(payload)state.qr_patient_info = payload
           
        },

        setTimeCount: (state, payload) => {
            //console.log("setTimeCount")
            //console.log(payload)
   
             if(payload)state.time_count = payload
           
        },

        setRegisterForm: (state, payload) => {
         //console.log("77777777setRegisterForm77777777")
         //console.log(payload)

          if(payload)state.register_form = payload
        
        },

        setUserInfo: (state, payload) => {
            //console.log("77777777setUserInfo77777777")
            //console.log(payload)
   
             if(payload)state.user_info = payload
           
           },


        setLoginDetail: (state, payload) => {
        //console.log("7777777setLoginDetail777777777")
        //console.log(payload)
        const { 
            user_id,
            user_type,
            user_token,
        } = payload
        if(user_id)state.login_detail.user_id = user_id
        if(user_type)state.login_detail.user_type = user_type
        if(user_token)state.login_detail.user_token = user_token
        }
	},
    actions: {
        change_n(context) {
            context.commit('change_n')
        }
    },
    strict: debug
})
