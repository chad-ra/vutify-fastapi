(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-162cc2de"],{"8bba":function(s,e,t){},e887:function(s,e,t){"use strict";t.r(e);var n=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("fullscreen",{model:{value:s.fullscreen,callback:function(e){s.fullscreen=e},expression:"fullscreen"}},[t("Transition",{attrs:{name:"fade",mode:"out-in"}},[t(s.activeComponent,{tag:"component",attrs:{score:s.final_score}})],1)],1)},i=[],a=t("03cd"),o=t.n(a),_=t("2b0e"),c=t("f385"),l=t("99f7"),h=t("75bc"),r=t("ffef"),f=t("31fd"),p=t("eace"),u=t("83c9"),m=t("c040"),d=t("0e84"),v=t("596d"),C=t("c5a4"),g=t("3e97"),b=t("5ba2"),w=t("6d58"),$=t("607c"),z=t("0097"),q=t("a401"),y=t("1fa9"),A=t("697b"),S=t("400a"),T=t("3d5f"),k=t("2a47"),x=t("cc96"),B=t("2bb7"),E=t("ab45"),I=t("f6fa"),J=t("af3d"),L=t("e316"),P=t("a9f5"),R=t("5b0f"),j=t("e876"),H=t("56ff"),O=t("edd0"),W=t("03d8");_["default"].use(o.a);var D={components:{s_pdpa:c["a"],s_1:l["a"],s_2:h["a"],s_3:r["a"],s_4:f["a"],s_5:p["a"],s_5_6:u["a"],s_6:m["a"],s_6_5:d["a"],s_7:v["a"],s_8:C["a"],s_9:g["a"],s_10:b["a"],s_11:w["a"],s_12:$["a"],s_13:z["a"],s_14:q["a"],s_15:y["a"],s_16:A["a"],s_17:S["a"],s_18:T["a"],s_19:k["a"],s_20:x["a"],s_21:B["a"],s_22:E["a"],s_23:I["a"],s_24:J["a"],s_25:L["a"],s_26:P["a"],s_27:R["a"],s_score_1:j["a"],s_score_2:H["a"],s_table:O["a"],s_30:W["a"]},data(){return{current_scene_w:0,windowSize:{x:0,y:0},show_close:!1,dialog:!1,image:{backgroundImage:`url(${t("fa3f")})`},bg_sound:new Audio(t("6f02")),final_score:20,hidden:!1,azq_ans:{},activeComponent:"s_pdpa",fullscreen:!1,show:!0}},mounted(){this.onResize(),this.$store.commit("setAzq_type",{azq_type:"azq"})},watch:{show_close(s){},"$store.state.azq_ans.stop_testing"(s){1==s&&this.stopTesting()},"$store.state.azq_ans.bg_sound"(s){1==s&&this.stopTesting()},"$store.state.azq_ans.current_s"(s){if("s_pdpa"==s)this.activeComponent="s_1",this.toggleApi(),this.setBgSound();else if("s_1"==s)this.activeComponent="s_2";else if("s_2"==s)this.activeComponent="s_3";else if("s_3"==s)this.activeComponent="s_4";else if("s_4"==s)this.activeComponent="s_5";else if("s_5"==s)this.activeComponent="s_6";else if("s_5_6"==s)this.activeComponent="s_6";else if("s_6"==s)this.activeComponent="s_6_5";else if("s_6_5"==s)this.activeComponent="s_7";else if("s_7"==s)this.activeComponent="s_8";else if("s_8"==s)this.activeComponent="s_9";else if("s_9"==s)this.activeComponent="s_10";else if("s_10"==s)this.activeComponent="s_11";else if("s_11"==s)this.activeComponent="s_12";else if("s_12"==s)this.activeComponent="s_13";else if("s_13"==s)this.activeComponent="s_14";else if("s_14"==s)this.activeComponent="s_15";else if("s_15"==s)this.activeComponent="s_16";else if("s_16"==s)this.activeComponent="s_17";else if("s_17"==s)this.activeComponent="s_18";else if("s_18"==s)this.activeComponent="s_19";else if("s_19"==s)this.activeComponent="s_20";else if("s_20"==s)this.activeComponent="s_21";else if("s_21"==s)this.activeComponent="s_22";else if("s_22"==s)this.activeComponent="s_23";else if("s_23"==s)this.activeComponent="s_24";else if("s_24"==s)this.activeComponent="s_25";else if("s_25"==s)this.activeComponent="s_26";else if("s_26"==s)this.activeComponent="s_27";else if("s_27"==s){const s=this.cal_ans();this.final_score=s,this.activeComponent="s_score_1"}else if("s_score_1"==s)this.activeComponent="s_score_2";else if("s_score_2"==s)this.activeComponent="s_table";else if("s_table"==s)this.activeComponent="s_30";else if("s_30"==s)this.pause(this.bg_sound),this.$fullscreen=!1;else if("pdpa_cancle"==s){this.pause(this.bg_sound);const s=this.$store.state.azq_ans;this.$store.commit("setAzqAns",{...s,stop_testing:"1"}),this.$router.push("/home")}}},methods:{setBgSound(){const s=this.$store.state.azq_ans;this.$store.commit("setAzqAns",{...s,bg_sound:this.bg_sound,full_name:this.$store.state.user_info.fullname,phone_number:this.$store.state.user_info.phone_number,age:this.$store.state.user_info.age,user_id:this.$store.state.user_info.user_id}),this.play(this.$store.state.azq_ans.bg_sound)},onResize(){this.windowSize={x:window.innerWidth,y:window.innerHeight},this.current_scene_w=this.windowSize.y},enter(){this.show_close=!0},leave(){this.show_close=!1},onImgLoad(){},stopTesting(){const s=this.$store.state.azq_ans;this.$store.commit("setAzqAns",{...s,stop_testing:"1"}),this.pause(this.bg_sound),this.$fullscreen=!1,this.dialog=!1,this.$router.push("/home")},play(s){s.isPlaying=!0,"boolean"==typeof s.loop?s.loop=!0:s.addEventListener("ended",(function(){this.currentTime=0,this.play()}),!1),s.play()},pause(s){s.isPlaying=!1,s.pause(),s.currentTime=0},cal_ans(){const s=this.$store.state.azq_ans;var e=0;return s.ans_1&&(e+=1),s.ans_2&&(e+=1),s.ans_3&&(e+=2),s.ans_4&&(e+=1),s.ans_5&&(e+=1),s.ans_6&&(e+=1),s.ans_7&&(e+=2),s.ans_8&&(e+=1),s.ans_9&&(e+=1),s.ans_10&&(e+=1),s.ans_11&&(e+=2),s.ans_12&&(e+=1),s.ans_13&&(e+=1),s.ans_14&&(e+=1),s.ans_15&&(e+=1),s.ans_16&&(e+=1),s.ans_17&&(e+=2),s.ans_18&&(e+=1),s.ans_19&&(e+=1),s.ans_20&&(e+=2),s.ans_21&&(e+=2),this.$store.commit("setAzqAns",{...s,point:e}),e},playSound(){var s=new Audio(t("6f02"));s.loop=!0,s.volume=1,s.play()},call(){},toggleApi(){this.$fullscreen.toggle(),this.hidden=!this.hidden}}},F=D,G=(t("ec38"),t("2877")),K=Object(G["a"])(F,n,i,!1,null,null,null);e["default"]=K.exports},ec38:function(s,e,t){"use strict";t("8bba")}}]);
//# sourceMappingURL=chunk-162cc2de.f5e48dd0.js.map