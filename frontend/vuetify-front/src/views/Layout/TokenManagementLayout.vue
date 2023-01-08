<template>
  <v-app >
    <v-main :class="{ not_mobile: !$vuetify.breakpoint.mobile }" >
      <app-bar
        v-show="!$vuetify.breakpoint.mobile"
        background=""
        linkColor="rgba(0,0,0,.6)"
      >
      </app-bar>

        <v-row class="min-vh-100" >
            <v-container class="pb-0 position-relative" style="max-width:100% !important;">
              <router-view></router-view>
            </v-container>
        
        </v-row>
        

      
    </v-main>
  </v-app>
</template>
<script>
// /* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}



export default {
  components: {

  },
  data() {
    return {
      page:1,
      url:'',
      drawer: null,
      sidebarColor: "success",
      sidebarTheme: "white",
      navbarFixed: false,
      search: '',
      pageCount: 0,
      itemsPerPage: 10,
    };
  },
  methods: {
    goRoyyak(){
            window.open("https://royyak.com/");
    },
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },

    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
    updateSidebarTheme(value) {
      let siblings = event.target.closest("button").parentElement.children;
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove("bg-gradient-default");
        siblings[i].classList.add("btn-outline-default");
      }
      event.target.closest("button").classList.add("bg-gradient-default");
      event.target.closest("button").classList.remove("btn-outline-default");
      this.sidebarTheme = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
  },
  mounted() {
    // this.initScrollbar();
  },
};
</script>
<style scoped>
.not_mobile{
  padding-left: 277px !important;
}
.theme--light.v-pagination .v-pagination__item--active {
  color: rgb(0 0 0 / 87%) !important;
}
</style>
