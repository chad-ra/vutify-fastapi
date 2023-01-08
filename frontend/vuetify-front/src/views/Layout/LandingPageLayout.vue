<template>
  <v-app>
    <v-main class="">
      <div>
        <v-container >
          <v-row class="min-vh-100">
              <v-container fluid>
                <router-view></router-view>
              </v-container>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>
<script>



export default {
  name: "page-layout",
  components: {
  },
  data() {
    return {
      paragraphs: "",
      tab: null,
    };
  },
  methods: {
    headerTitle() {
      switch (this.$route.name) {
        case "SignUpBasic":
          this.paragraphs =
            "Use these awesome forms to login or create new account in your project for free.";
          return "Welcome!";
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
.imgbox_2 {
background-size: cover;
/* background-position: 50%;
*/
background-position: right bottom; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */
}

.img_mobile {
background-size: cover;
/* background-position: 50%;
*/
background-position: right bottom; /* Center the image */
background-repeat: no-repeat; /* Do not repeat the image */

}
</style>