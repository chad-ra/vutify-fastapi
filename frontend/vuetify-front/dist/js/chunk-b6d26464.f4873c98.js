(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6d26464"],{"4bd4":function(t,e,i){"use strict";var a=i("58df"),s=i("7e2b"),r=i("3206");e["a"]=Object(a["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",a=>{a&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))}):i.valid=e(t),i},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const i=this.watchers.find(t=>t._uid===e._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},"553a":function(t,e,i){"use strict";i("b5b6");var a=i("8dd9"),s=i("3a66"),r=i("d10f"),o=i("58df"),l=i("80d2");e["a"]=Object(o["a"])(a["a"],Object(s["a"])("footer",["height","inset"]),r["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...a["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...a["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(l["h"])(t),left:Object(l["h"])(this.computedLeft),right:Object(l["h"])(this.computedRight),bottom:Object(l["h"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},6077:function(t,e,i){},"8a66":function(t,e,i){"use strict";i("6077")},b5b6:function(t,e,i){},b696:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mobile,expression:"$vuetify.breakpoint.mobile"}]}),i("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mobile,expression:"!$vuetify.breakpoint.mobile"}],staticStyle:{"margin-top":"4%"}}),i("v-row",{staticClass:"align-center d-flex h-0 pb-20"},[i("v-col",{staticClass:"mx-auto",staticStyle:{padding:"0px 0px 0px 0px"},attrs:{lg:"4",sm:"6"}},[i("v-card",{},[i("v-card-title",{staticClass:"text-primary",staticStyle:{"justify-content":"center","font-weight":"600 !important","padding-bottom":"20px","font-size":"24px"}},[i("span",[t._v("เข้าสู่ระบบโรงพยาบาล/คลินิก")])]),i("v-card-subtitle",{staticStyle:{height:"23px","text-align":"center !important","background-color":"rgba(255, 201, 10, 0.082) !important",color:"#a84192"}},[i("span",[i("li",[t._v("Healthcare provider")])])]),i("v-card-text",{staticStyle:{"border-radius":"7px","padding-top":"25px"}},["user_provider"==t.user_type?i("v-row",{staticStyle:{"text-align":"center"},attrs:{dense:"",align:"center"}},[i("v-form",{ref:"form",staticStyle:{width:"100%","padding-top":"50px"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("span",{staticStyle:{"font-weight":"600",color:"#a84192 !important"}},[t._v("PASSCODE")]),i("v-text-field",{staticStyle:{"padding-top":"20px"},attrs:{counter:"6",rules:t.nameRules,label:"Passcode 6 หลัก",dense:"",outlined:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-row",[i("v-col",{staticStyle:{"text-align":"right"}},[i("a",{attrs:{href:"#"}},[t._v("ลืมรหัสผ่าน")])])],1)],1):t._e(),"user_osm"==t.user_type?i("v-row",{staticStyle:{"text-align":"center"},attrs:{dense:"",align:"center"}},[i("v-form",{ref:"form",staticStyle:{width:"100%","padding-top":"50px"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("span",{staticStyle:{"font-weight":"600",color:"#a84192 !important"}},[t._v("PASSCODE")]),i("v-text-field",{staticStyle:{"padding-top":"20px"},attrs:{counter:"6",rules:t.nameRules,label:"Passcode 6 หลัก",dense:"",outlined:"",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),i("v-row",[i("v-col",{staticStyle:{"text-align":"right"}},[i("a",{attrs:{href:"#"}},[t._v("ลืมรหัสผ่าน")])])],1)],1):t._e()],1)],1)],1)],1),i("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mobile,expression:"!$vuetify.breakpoint.mobile"}],staticClass:"align-center",staticStyle:{"padding-top":"15px"},attrs:{justify:"center"}},[i("v-btn",{staticClass:"border-radius-xl",staticStyle:{"border-color":"#d6d6d629"},attrs:{outlined:"",color:"purple"}},[i("v-icon",{attrs:{small:""}},[t._v("west")])],1),t._v("         "),i("v-btn",{staticClass:"border-radius-xl",staticStyle:{width:"250px"},attrs:{color:"bg-primary text-white"},on:{click:t.validate}},[t._v(" ยืนยันข้อมูล ")])],1),i("v-footer",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mobile,expression:"$vuetify.breakpoint.mobile"}],staticClass:"action-nav",staticStyle:{height:"60px"},attrs:{fixed:""}},[i("v-row",{staticClass:"align-center",attrs:{justify:"center"}},[i("v-btn",{staticClass:"border-radius-xl",staticStyle:{"border-color":"#d6d6d629"},attrs:{outlined:"",color:"purple"}},[i("v-icon",{attrs:{small:""}},[t._v("west")])],1),t._v("         "),i("v-btn",{staticClass:"border-radius-xl",staticStyle:{width:"250px"},attrs:{color:"bg-primary text-white"},on:{click:t.validate}},[t._v(" ยืนยันข้อมูล ")])],1)],1)],1)},s=[],r={name:"register-select-type",data(){return{activePicker:null,date:null,menu:!1,user_type:"user_osm",pdpa_accept:!1,valid:!0,name:"",nameRules:[t=>!!t||"โปรดกรอกข้อมูล",t=>t&&t.length<=10||"Name must be less than 10 characters"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+\..+/.test(t)||"E-mail must be valid"],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1,loading:!1,snackbar:!1,snackbarColor:"default",otp:"",text:"",expectedOtp:"133707"}},watch:{menu(t){t&&setTimeout(()=>this.activePicker="YEAR")}},methods:{save(t){this.$refs.menu.save(t)},validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()},onFinish(t){this.loading=!0,setTimeout(()=>{this.loading=!1,this.snackbarColor=t===this.expectedOtp?"success":"warning",this.text=`Processed OTP with "${t}" (${this.snackbarColor})`,this.snackbar=!0},3500)}}},o=r,l=(i("8a66"),i("2877")),n=i("6544"),d=i.n(n),c=i("8336"),u=i("b0af"),h=i("99d9"),p=i("62ad"),v=i("553a"),m=i("4bd4"),f=i("132d"),b=i("0fd9"),g=i("8654"),x=Object(l["a"])(o,a,s,!1,null,"63792711",null);e["default"]=x.exports;d()(x,{VBtn:c["a"],VCard:u["a"],VCardSubtitle:h["b"],VCardText:h["c"],VCardTitle:h["d"],VCol:p["a"],VFooter:v["a"],VForm:m["a"],VIcon:f["a"],VRow:b["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=chunk-b6d26464.f4873c98.js.map