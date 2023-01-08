<!-- eslint-disable prettier/prettier -->
<template>
  <v-app-bar
    :color="background"
    height="auto"
    class="mt-6 py-2 px-0 mx-6 border-radius-xl toolbar-content-padding-y-none"
    :class="
      navbarFixed
        ? 'position-sticky blur shadow-blur top-1 z-index-sticky py-2'
        : ''"
    flat>
    <v-row class="py-1">
      <v-col cols="12" sm="6" class="d-flex">
        <div>
          <v-breadcrumbs class="pb-0 pt-1 px-0">
            <v-breadcrumbs-item
              to="/home_checkmong"
              active-class="active-breadcrumb"
              class=" text-dark"
            >
                 <v-icon
      small
      color=""
    >
      home
    </v-icon>
            </v-breadcrumbs-item>
            <v-breadcrumbs-item
              active-class="active-breadcrumb"
              class="no-default-hover text-dark"
            >
              <template >{{ $route.name }}</template>
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </div>

      </v-col>
    </v-row>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-bar",
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
    toggleActive: Boolean,
    navbarFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawer: false,
      togglerActive: false,
    };
  },
  methods: {
    drawerClose() {
      this.togglerActive = !this.togglerActive;
      this.$emit("drawer-toggle", true);
    },
    minifyDrawer() {
      this.togglerActive = !this.togglerActive;
      this.mini = !this.mini;
      const body = document.getElementsByTagName("body")[0];

      if (body.classList.contains("drawer-mini")) {
        body.classList.remove("drawer-mini");
      } else {
        body.classList.add("drawer-mini");
      }
    },
  },
  watch: {
    toggleActive(val) {
      this.togglerActive = val;
    },
  },
};
</script>
