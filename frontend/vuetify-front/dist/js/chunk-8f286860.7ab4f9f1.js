(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f286860"],{1623:function(t,a,e){"use strict";e("ce1e")},"99d9":function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return l})),e.d(a,"d",(function(){return r}));var n=e("b0af"),s=e("80d2");const i=Object(s["j"])("v-card__actions"),o=Object(s["j"])("v-card__subtitle"),l=Object(s["j"])("v-card__text"),r=Object(s["j"])("v-card__title");n["a"]},ce1e:function(t,a,e){},ecd1:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[n("v-card",[n("v-card-title"),n("v-card-text",{staticClass:"mt-2 ",staticStyle:{"text-align":"center"}},[n("h3",[t._v("เริ่มการดาวน์โหลด")])]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"bg-purple text-white darken-1"},on:{click:t.goDownload}},[t._v(" ตกลง ")]),n("v-spacer")],1)],1)],1),n("div",[n("vue-html2pdf",{ref:"html2Pdf",attrs:{"html-to-pdf-options":t.htmlToPdfOptions,image:{type:"jpg",quality:1},"show-layout":t.layout,"float-layout":!0,"enable-download":!0,"preview-modal":!1,"paginate-elements-by-height":1800,filename:t.filename?t.full_name:t.filename,"manual-pagination":!1,"pdf-format":"a4","pdf-content-width":"100%"}},[n("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[n("v-row",{staticClass:"align-center flex-column my-auto mx-auto",staticStyle:{margin:"10px"}}),n("v-col",{staticStyle:{"text-align":"-webkit-center","background-color":"white"},attrs:{lg:"12",md:"12",sm:"12",xs:"12"}},[n("div",[n("h2",{staticClass:"text-purple"},[t._v("ผลการทดสอบ")]),n("span",[t._v("แบบคัดกรองหาผู้มีภาวะสมองเสื่อมสำหรับญาติและผู้ดูแล Thai Alzheimer's Questionnaire (Thai-AZQ)")]),n("br"),n("br"),n("v-card",{staticStyle:{"border-radius":"7px"},attrs:{outlined:""}},[n("v-card-text",[n("v-simple-table",{staticClass:"overflow-y-auto",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v(" คำถาม ")]),n("th",{staticClass:"text-center"},[n("span",[t._v("ตอบ")])]),n("th",{staticClass:"text-center"},[t._v(" คะแนน ")])])]),n("tbody",t._l(t.dataset,(function(a){return n("tr",{key:a.name,staticStyle:{"font-size":"10px"}},[n("td",[t._v(t._s(a.name))]),n("td",{staticClass:"text-right"},[t._v(t._s("true"==a.ans?"ใช่":"ไม่ใช่"))]),n("td",{staticClass:"text-right"},[t._v(t._s("true"==a.ans?a.a_point:0))])])})),0)]},proxy:!0}])})],1)],1),n("br"),n("v-row",{staticStyle:{"margin-top":"-25px"}},[n("v-col",[n("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",{staticStyle:{transform:"translate(7%,0%)"}},[n("v-card-text",{staticClass:"overflow-y-auto",staticStyle:{height:"110px",padding:"0px"}},[n("span",{domProps:{innerHTML:t._s(t.total_point_detail.mean)}}),n("br"),n("br"),n("span",{domProps:{innerHTML:t._s(t.total_point_detail.suggest)}})])],1),n("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"white"}},[n("h3",{staticClass:"text-black text-right"},[n("b",[n("h2",[t._v(t._s(t.total_point))])]),t._v(" คะแนน")])])],1)],1)],1)],1),n("div",[n("v-row",[n("v-col",{staticStyle:{transform:"translate(40%,-7%)"},attrs:{cols:"2"}},[n("v-img",{attrs:{eager:"",contain:"",width:"70px",src:e("4ade")}})],1),n("v-col",{staticStyle:{transform:"translate(7%,0%)","padding-right":"0px","padding-left":"0px","font-size":"13px"},attrs:{cols:"7"}},[t._v(" ทดสอบเมื่อ : "+t._s((new Date).toLocaleString("th-TH",{dateStyle:"long"}))+" "),n("br"),t._v(" ผู้ทำแบบทดสอบ : "+t._s(t.full_name)+t._s(" ")+" "+t._s(" ")+"    อายุ : "+t._s(t.age)+" "+t._s(" ปี ")+" "+t._s(" ")+"    เบอร์โทรศัพท์ : "+t._s(t.phone_number)+" ")]),n("v-col",{staticStyle:{"max-width":"20%",transform:"translate(20%,0%)"},attrs:{cols:"3"}},[n("v-img",{attrs:{eager:"",contain:"",width:"1000px",src:e("143f")}})],1)],1)],1)],1)])],1)])],1)],1)},s=[],i=e("6480"),o={props:["score"],components:{VueHtml2pdf:i["a"]},data(){return{layout:!1,dialog:!1,filename:"",modalAddname:!1,phone_number:"",prefix:"",full_name:"",age:"",total_point:0,dataset:[],total_point_detail:{},query:"",htmlToPdfOptions:{margin:0,filename:"",image:{type:"jpeg",quality:1},enableLinks:!1,html2canvas:{scale:2,useCORS:!1},jsPDF:{unit:"in",format:"a4",orientation:"portrait"}}}},Create(){},mounted(){this.getValueFrom(),this.setDataset(),this.setTotalPointDetail(),this.setFileName(),this.dialog=!0},methods:{goDownload(){this.dialog=!1,this.layout=!0,setTimeout(()=>{this.generateReport()},1e3)},setFileName(){this.full_name.length<=0?(this.filename=(new Date).toLocaleString("th-TH",{dateStyle:"long"})+"_ผลทดสอบ AZQ",this.htmlToPdfOptions.filename=this.filename):(this.filename=this.full_name+"_"+(new Date).toLocaleString("th-TH",{dateStyle:"long"})+"_ผลทดสอบ AZQ",this.htmlToPdfOptions.filename=this.filename)},getValueFrom(){this.query=this.$route.query},onProgress(t){},setTotalPointDetail(){this.total_point<=3&&(this.total_point_detail={range:"คะแนน 0-3",mean:"ภาวะความจำปกติ <br> (Normal cognition)",suggest:"ท่านมีความจำปกติ ควรหลีกเลี่ยงและควบคุมปัจจัยเสี่ยง"}),this.total_point>=4&&this.total_point<=12&&(this.total_point_detail={range:"คะแนน 4-12",mean:"สงสัยมีภาวะผิดปกติทางพุทธิปัญญาเล็กน้อย <br> (Mild cognitive impairment)",suggest:"ท่านเริ่มมีความผิดปกติของสมอง<br>เพียงเล็กน้อย ควรค้นหาปัจจัยเสี่ยง และควบคุม ติดตามอาการ หากมีคะแนนที่เพิ่มมากขึ้น ควรพบแพทย์"}),this.total_point>=13&&(this.total_point_detail={range:"คะแนนตั้งแต่ 13",mean:"สงสัยมีภาวะสมองเสื่อมอัลไซเมอร์ <br>(Alzheimer's disease)",suggest:"ควรพบแพทย์เพื่อตรวจหาสาเหตุ และทำการรักษา"})},setDataset(){const t=this.query;this.total_point=t.total_point,this.full_name=t.full_name,this.age=t.age,this.phone_number=t.phone_number,this.dataset=[{name:"1. คนที่คุณดูแลเป็นคนขี้ลืมหรือไม่",ans:t.ans_1,a_point:1},{name:"2. ถ้าใช่ เขามีอาการขี้ลืมมากขึ้นภายใน 2-3 ปีที่ผ่านมาหรือไม่",ans:t.ans_2,a_point:1},{name:"3. คนที่คุณดูแล ชอบถามซ้ำหรือพูดซ้ำประโยคเดิมหรือเรื่องเดิมๆ หลายครั้งในวันเดียวหรือไม่",ans:t.ans_3,a_point:2},{name:"4. คุณต้องคอยเตือนย้ำเรื่องต่างๆ เช่น เรื่องนัด หรือผู้ป่วยลืมนัดบ่อยๆ",ans:t.ans_4,a_point:1},{name:"5. เขาวางของผิดที่มากกว่า 1 ครั้งต่อเดือน",ans:t.ans_5,a_point:1},{name:"6. เขาจะสงสัยว่า มีใครซ่อนหรือขโมยของ ถ้าหาของนั้นไม่พบ",ans:t.ans_6,a_point:1},{name:"7. เขามักจําวัน วันที่ เดือน ปี และเวลาไม่ได้ หรือ เช็คดูวันที่ มากกว่า 1 ครั้งต่อวัน",ans:t.ans_7,a_point:2},{name:"8. เขารู้สึกหลงเมื่อไปสถานที่ที่ไม่คุ้นเคย",ans:t.ans_8,a_point:1},{name:"9. เมื่ออยู่นอกบ้านหรือขณะเดินทางเขาจะรู้สึกสับสนมากกว่าอยู่ที่บ้าน",ans:t.ans_9,a_point:1},{name:"10. ถ้าไม่นับขีดจํากัดด้านร่างกาย เขามีปัญหาด้านการการรับ-จ่ายเงิน (การใช้จ่ายเงินสด, การคํานวณเงินทอน)",ans:t.ans_10,a_point:1},{name:"11. เขามีปัญหาการจ่ายบิลค่าใช้จ่าย หรือการจัดการเรื่องการเงิน (บิลค่าไฟฟ้า, ค่าโทรศัพท์, ค่าบัตรเครดิต)",ans:t.ans_11,a_point:2},{name:"12. เขาลืมกินยาหรือกินยาไม่สม่ำเสมอ",ans:t.ans_12,a_point:1},{name:"13. เขาขับรถหลงทาง หรือทําให้คุณกังวลเกี่ยวกับการขับรถของเขา",ans:t.ans_13,a_point:1},{name:"14. เขาใช้เครื่องมืออุปกรณ์ที่เคยทําทุกวันได้ยากขึ้น เช่น เตาหุงต้ม, โทรศัพท์, รีโมทคอนโทรล",ans:t.ans_14,a_point:1},{name:"15. ถ้าไม่นับขีดจํากัดด้านร่างกายเขาทําความสะอาดบ้าน หรือซ่อมแซมของใช้ในบ้านได้ลําบากกว่าเดิม",ans:t.ans_15,a_point:1},{name:"16. ถ้าไม่นับขีดจํากัดด้านร่างกาย เขาเลิกเล่นกีฬา หรืองานอดิเรกที่ทําเป็นประจํา",ans:t.ans_16,a_point:1},{name:"17. เขาเริ่มหลงทางในพื้นที่ๆคุ้นเคย เช่นในละแวกบ้าน",ans:t.ans_17,a_point:2},{name:"18. เขาไม่เข้าใจทิศหรือจําทางไม่ได้",ans:t.ans_18,a_point:1},{name:"19. เขามีปัญหาในการนึกคําเรียกสิ่งต่างๆ นอกจากชื่อคน",ans:t.ans_19,a_point:1},{name:"20. เขาสับสนในการเรียกชื่อสมาชิกในครอบครัว หรือในกลุ่มเพื่อนสนิท",ans:t.ans_20,a_point:2},{name:"21. เขามีปัญหาในการจำชื่อคนที่คุ้นเคย",ans:t.ans_21,a_point:2}]},generateReport(){this.modalAddname=!1,this.full_name.length<=0?(this.filename=(new Date).toLocaleString("th-TH",{dateStyle:"long"})+"_ผลทดสอบ AZQ",this.htmlToPdfOptions.filename=this.filename,this.$refs.html2Pdf.generatePdf()):(this.filename=this.full_name+"_"+(new Date).toLocaleString("th-TH",{dateStyle:"long"})+"_ผลทดสอบ AZQ",this.htmlToPdfOptions.filename=this.filename,this.$refs.html2Pdf.generatePdf())}}},l=o,r=(e("1623"),e("2877")),d=e("6544"),m=e.n(d),_=e("8336"),c=e("b0af"),p=e("99d9"),h=e("62ad"),f=e("169a"),u=e("adda"),g=e("da13"),v=e("8270"),b=e("5d23"),x=e("0fd9"),y=e("1f4f"),w=e("2fa4"),S=Object(r["a"])(l,n,s,!1,null,"e47ed514",null);a["default"]=S.exports;m()(S,{VBtn:_["a"],VCard:c["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:h["a"],VDialog:f["a"],VImg:u["a"],VListItem:g["a"],VListItemAvatar:v["a"],VListItemContent:b["a"],VRow:x["a"],VSimpleTable:y["a"],VSpacer:w["a"]})}}]);
//# sourceMappingURL=chunk-8f286860.7ab4f9f1.js.map