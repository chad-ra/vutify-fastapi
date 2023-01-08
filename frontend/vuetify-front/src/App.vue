<template>
  <router-view></router-view>
</template>

<script>
export default {
  
  beforeCreate() {
		// this.$store.commit('initialiseStore');
    this.$store.commit('initialiseStore');
	},
  mounted() {
    // localStorage.setItem('token', 'token1234');
    
    // // localStorage.getItem('token')
    // //console.log('start app')
    // //console.log(localStorage.getItem('token'))
    //localStorage.clear()
    // //console.log(localStorage)


  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Kanit:wght@100;300&display=swap');
html, body {
  font-family: 'Kanit', sans-serif;
  /*font-size:14px;*/
}
#app {
  font-family: 'Kanit', sans-serif;
}
.qrcode-stream-camera[data-v-35411cc1] {
    border-radius: 6px;
}
.v-label {
    font-size: 14px;
}
span{
  /*font-size: 16px;*/
}
.row + .row{
  /*margin-top:0px !important;*/
}

.v-application .pt-5 {
    padding-top: 0px !important;
}

/*
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar), .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
    align-self: center !important;
}*/
</style>
