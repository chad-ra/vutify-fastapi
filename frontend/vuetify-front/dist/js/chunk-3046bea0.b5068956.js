(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3046bea0"],{"0d10":function(t,a,e){},8702:function(t,a,e){"use strict";e("0d10")},af79:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",[e("waiting-modal",{attrs:{title:t.title,status:t.status,active:t.active_waiting},on:{statusdailog:t.update_status_wait}}),e("v-row",{staticClass:"align-center d-flex h-0 "},[e("v-col",{attrs:{xl:"3",lg:"4",sm:"8"}},[e("checkmong-home-bar",{attrs:{title:"ข้อมูลสุขภาพ"}})],1)],1),e("br"),e("v-row",{staticClass:"align-center d-flex h-0 pb-20",staticStyle:{"justify-content":"center"}},[e("v-col",{attrs:{xl:"3",lg:"4",sm:"8"}},[e("v-expansion-panels",{staticStyle:{"border-radius":"10px"}},[e("v-expansion-panel",[e("v-expansion-panel-header",{attrs:{"expand-icon":"info_outline"}},[e("v-row",{},[e("v-col",{attrs:{cols:"2"}},[e("v-icon",{attrs:{color:"purple"}},[t._v(" person ")])],1),e("v-col",{staticStyle:{"text-align":"left","padding-top":"26px"},attrs:{cols:"10"}},[e("v-row",[e("span",{staticClass:"pb-1",staticStyle:{"font-size":"16px"}},[t._v(t._s(t.res_info.fullname))])]),e("v-row",[e("span",{staticStyle:{"font-size":"11px"}},[t._v("อัพเดทล่าสุด ณ วันที่ "),e("span",{staticClass:"text-purple"},[t._v(t._s(t.display_date))])])])],1)],1)],1),e("v-expansion-panel-content",[e("v-divider"),e("br"),e("v-row",[e("v-col",{staticStyle:{"padding-left":"28px"},attrs:{cols:"12"}},[e("v-row",[e("span",{staticStyle:{"font-size":"15px"}},[t._v("เลขบัตรประจำตัวประชาชน : "),e("span",{staticClass:"text-purple"},[t._v(t._s(t.res_info.idcard))])])]),e("v-row",[e("span",{staticStyle:{"font-size":"15px"}},[t._v("วัน/เดือน/ปี เกิด : "),e("span",{staticClass:"text-purple"},[t._v(t._s(new Date(t.res_info.birthdate).toLocaleString("th-TH",{dateStyle:"long"})))])])]),e("v-row",[e("span",{staticStyle:{"font-size":"15px"}},[t._v("เบอร์โทรศัพท์ : "),e("span",{staticClass:"text-purple"},[t._v(t._s(t.res_info.phone_number))])])]),e("v-row",[e("span",{staticStyle:{"font-size":"15px"}},[t._v("ที่อยู่ : "),e("span",{staticClass:"text-purple"},[t._v(t._s(t.res_info.full_address))])])])],1)],1),e("br")],1)],1)],1)],1)],1),e("v-row",{staticClass:"align-center d-flex h-0 pb-20",staticStyle:{"justify-content":"center"}},[e("v-col",{staticStyle:{"text-align":"right","margin-bottom":"-22px"},attrs:{xl:"3",lg:"4",sm:"8"}},[e("v-btn",{staticStyle:{"background-color":"#f0f2f5"},attrs:{tile:"",depressed:"",color:"text-purple"},on:{click:function(a){return t.$router.push("/scan_add_health_record")}}},[e("v-icon",{staticStyle:{color:"#1F98BD"},attrs:{left:""}},[t._v(" post_add ")]),t._v(" เพิ่มข้อมูลสุขภาพ ")],1)],1)],1),e("v-row",{staticClass:"align-center d-flex h-0 pb-20",staticStyle:{"justify-content":"center"}},[e("v-col",{attrs:{xl:"3",lg:"4",sm:"8"}},[e("v-card",{staticStyle:{"border-radius":"15px"},attrs:{elevation:"1"}},[e("v-card-text",[e("v-row",{staticStyle:{"background-color":"#ffffff","border-radius":"10px"},attrs:{dense:""}},[e("v-col",{attrs:{cols:"12"}},[e("v-list-item-title",[t._v("โรคประจำตัว")]),e("v-list-item-subtitle",t._l(t.congenital_ds,(function(a){return e("li",[t._v(t._s(a))])})),0),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("อายุ")]),e("v-list-item-subtitle",[t._v(t._s(t.age))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("น้ำหนัก(kg)")]),e("v-list-item-subtitle",[t._v(t._s(t.weight))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("ส่วนสูง(cm)")]),e("v-list-item-subtitle",[t._v(t._s(t.height))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("BMI (kg/m2)")]),e("v-list-item-subtitle",[t._v(t._s(t.bmi))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("AZQ Score")]),e("v-list-item-subtitle",[t._v(t._s(t.score))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("ความดัน(mmHg)")]),e("v-list-item-subtitle",[t._v(t._s(t.systolic)+" / "+t._s(t.diastolic))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("ระดับน้ำตาลในเลือด(mg/dL)")]),e("v-list-item-subtitle",[t._v(t._s(t.sugar))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("ชีพจร(ครั้ง/นาที)")]),e("v-list-item-subtitle",[t._v(t._s(t.hr))]),e("v-divider")],1),e("v-col",{attrs:{cols:"6"}},[e("v-list-item-title",[t._v("ชีพจรสม่ำเสมอ")]),e("v-list-item-subtitle",[t._v(t._s(t.regular_hr))]),e("v-divider")],1)],1)],1)],1)],1)],1),e("v-row",{staticClass:"align-center d-flex h-0 pb-20",staticStyle:{"justify-content":"center"}},[e("v-col",{attrs:{xl:"3",lg:"4",sm:"8"}},[e("v-card",{staticStyle:{"border-radius":"15px",padding:"13px"},attrs:{elevation:"1"}},[e("v-tabs",{attrs:{"show-arrows":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tabs-slider",{attrs:{color:"purple lighten-5"}}),e("v-tab",{key:1},[t._v("AZQ")]),e("v-tab",{key:2},[t._v("น้ำหนัก")]),e("v-tab",{key:3},[t._v("ความดันบน")]),e("v-tab",{key:4},[t._v("ความดันล่าง")]),e("v-tab",{key:5},[t._v("ระดับน้ำตาล")]),e("v-tab",{key:6},[t._v("ชีพจร")])],1),e("v-tabs-items",{model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("v-tab-item",{key:1},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_asz}})],1)],1),e("v-tab-item",{key:2},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_weight}})],1)],1),e("v-tab-item",{key:3},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_systolic}})],1)],1),e("v-tab-item",{key:4},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_diastolic}})],1)],1),e("v-tab-item",{key:5},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_sugar}})],1)],1),e("v-tab-item",{key:6},[e("v-card",{attrs:{flat:""}},[e("LineChart",{attrs:{chartData:t.chartData_hr}})],1)],1)],1)],1)],1)],1),e("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mobile,expression:"!$vuetify.breakpoint.mobile"}],staticClass:"align-center ",staticStyle:{"padding-top":"15px"}},[e("v-col",{staticClass:"mx-auto",staticStyle:{"text-align":"left"},attrs:{lg:"3",sm:"8"}},[e("v-btn",{staticClass:"border-radius-xl",staticStyle:{"border-color":"#d6d6d629"},attrs:{outlined:"",color:"purple"},on:{click:function(a){return t.$router.go(-1)}}},[e("v-icon",{attrs:{small:""}},[t._v("west")])],1),t._v("         ")],1)],1),e("v-footer",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mobile,expression:"$vuetify.breakpoint.mobile"}],staticClass:"action-nav",staticStyle:{height:"60px"},attrs:{fixed:""}},[e("v-row",{staticClass:"align-left"},[e("v-btn",{staticClass:"border-radius-xl ml-6",staticStyle:{"border-color":"#d6d6d629"},attrs:{outlined:"",color:"purple"},on:{click:function(a){return t.$router.go(-1)}}},[e("v-icon",{attrs:{small:""}},[t._v("west")])],1)],1)],1)],1)],1)},i=[],r=e("4993"),l=e("5fb0"),o=e("2b0e"),c=e("087d"),h=e("06fb"),n={name:"calendar-patient",components:{CheckmongHomeBar:r["a"],WaitingModal:c["a"],LineChart:h["a"]},data:()=>({tab:null,display_date:"",res_info:{},update_status_wait:!1,active_waiting:!1,title:"",status:"",congenital_ds:["ไม่มี"],age:"-",patient_health_records:"-",height:"-",bmi:"-",score:"-",systolic:"-",diastolic:"-",sugar:"-",hr:"-",regular_hr:"-",health_records:{},last_update:"-",weight:"-",user_patient_id:"",chartData_asz:{labels:[],datasets:[{label:"AZQ",backgroundColor:"#f87979",data:[]}]},chartData_weight:{labels:[],datasets:[{label:"น้ำหนัก",backgroundColor:"#f87979",data:[]}]},chartData_systolic:{labels:[],datasets:[{label:"ความดันบน",backgroundColor:"#f87979",data:[]}]},chartData_diastolic:{labels:[],datasets:[{label:"ความดันล่าง",backgroundColor:"#f87979",data:[]}]},chartData_sugar:{labels:[],datasets:[{label:"ระดับน้ำตาลในเลือด",backgroundColor:"#f87979",data:[]}]},chartData_hr:{labels:[],datasets:[{label:"ชีพจร",backgroundColor:"#f87979",data:[]}]}}),created(){},mounted(){this.user_patient_id=this.$store.state.qr_patient_id,this.getPatientHealthRecords()},watch:{},methods:{async getPatientHealthRecords(){this.active_waiting=!0,this.title="กำลังอัพเดทข้อมูล",this.status="loading",await o["default"].axios.post(l["a"]+"/get_patient_health_records",{user_id:this.user_patient_id},{headers:{"Content-Type":"application/json"}}).then(t=>{t.data?(this.active_waiting=!1,this.health_records=t.data,this.res_info=this.health_records,this.res_info.height&&(this.height=this.res_info.height),this.res_info.weight&&(this.weight=this.res_info.weight),this.res_info.height&&this.res_info.weight&&(this.bmi=(this.weight/(this.height/100)**2).toFixed(2)),this.updateData(this.health_records),this.updateChartData()):this.active_waiting=!1})},updateChartData(){this.chartData_asz.labels=this.health_records.date_list_azq,this.chartData_asz.datasets[0].data=this.health_records.azq_list_azq,this.chartData_weight.labels=this.health_records.date_list_h,this.chartData_weight.datasets[0].data=this.health_records.weight_list,this.chartData_systolic.labels=this.health_records.date_list_h,this.chartData_systolic.datasets[0].data=this.health_records.systolic_list,this.chartData_diastolic.labels=this.health_records.date_list_h,this.chartData_diastolic.datasets[0].data=this.health_records.diastolic,this.chartData_sugar.labels=this.health_records.date_list_h,this.chartData_sugar.datasets[0].data=this.health_records.sugar_list,this.chartData_hr.labels=this.health_records.date_list_h,this.chartData_hr.datasets[0].data=this.health_records.hr_list},updateData(t){if(t.azq_score_records&&(this.score=t.azq_score_records[t.azq_score_records.length-1].score),t.congenital_ds&&(this.congenital_ds=t.congenital_ds),t.patient_health_records.length>0){this.last_update=t.patient_health_records[t.patient_health_records.length-1].date,this.diastolic=t.patient_health_records[t.patient_health_records.length-1].diastolic,this.regular_hr=t.patient_health_records[t.patient_health_records.length-1].regular_hr,this.sugar=t.patient_health_records[t.patient_health_records.length-1].sugar,this.systolic=t.patient_health_records[t.patient_health_records.length-1].systolic,this.weight=t.patient_health_records[t.patient_health_records.length-1].weight,this.hr=t.patient_health_records[t.patient_health_records.length-1].hr;const a={dateStyle:"long",timeStyle:"short"};this.display_date=new Date(this.last_update).toLocaleString("th-TH",a)}this.age=t.age},getUserInfo(){},save(t){this.$refs.menu.save(t)},validate(){this.$refs.form.validate()},reset(){this.$refs.form.reset()},resetValidation(){this.$refs.form.resetValidation()}}},d=n,_=(e("8702"),e("2877")),v=e("6544"),p=e.n(v),u=e("8336"),b=e("b0af"),g=e("99d9"),f=e("62ad"),m=e("a523"),y=e("ce7e"),w=e("cd55"),x=e("49e2"),C=e("c865"),D=e("0393"),k=e("553a"),S=e("132d"),V=e("5d23"),z=e("0fd9"),$=e("71a3"),L=e("c671"),T=e("fe57"),q=e("aac8"),H=e("9a96"),I=Object(_["a"])(d,s,i,!1,null,"66208784",null);a["default"]=I.exports;p()(I,{VBtn:u["a"],VCard:b["a"],VCardText:g["c"],VCol:f["a"],VContainer:m["a"],VDivider:y["a"],VExpansionPanel:w["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:C["a"],VExpansionPanels:D["a"],VFooter:k["a"],VIcon:S["a"],VListItemSubtitle:V["b"],VListItemTitle:V["c"],VRow:z["a"],VTab:$["a"],VTabItem:L["a"],VTabs:T["a"],VTabsItems:q["a"],VTabsSlider:H["a"]})}}]);
//# sourceMappingURL=chunk-3046bea0.b5068956.js.map