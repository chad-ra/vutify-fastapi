<template>
<div v-show="$vuetify.breakpoint.mobile">
  <v-row  class="d-flex h-0 pb-20 pt-0">
    <v-col cols="10">
      <span style="font-size: 20px; font-weight: 600; color: #a84192">{{title}}</span>
    </v-col>
    <v-col cols="2" >
      <v-btn style="background-color:#E8E0EA;" elevation="4" icon small color="primary" @click="goHome">
        <v-icon color="#a05c92">home</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</div>
</template>
<script>
export default {
  name: "CheckmongHomeBar",
  components: {},
  props: {
    title: String,
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    goHome(){
      this.$router.push('/home_checkmong')
    }
  },
};
</script>
