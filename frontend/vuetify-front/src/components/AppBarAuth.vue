<template>
  <v-app-bar
    absolute
    :color="background"
    height="auto"
    class="py-4 px-2 toolbar-content-padding-y-none"
    flat
  >
        <v-dialog
      v-model="dialog_ask"
      width="500"
    ><v-card>
        <v-card-title class="lighten-2">
          ลงทะเบียน/เข้าใช้งานด้วยไลน์
        </v-card-title>
            
        <v-card-text>
        <v-col><v-img style="display: block;margin-left: auto;margin-right: auto;" src="@/assets/img/checkmong/LINE_logo.svg" width="100px"></v-img></v-col>
        
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="goLogin"
          >
            ตกลง
          </v-btn>
        </v-card-actions>
      </v-card>
      
      </v-dialog>
    <v-container>
      <v-row>
        <v-col cols="3" class="d-flex align-center">
          <p
            class="font-weight-bolder ms-lg-0 ms-4 mb-0 text-gray-dark text-sm"
          >
            Checkmong.com
          </p>
        </v-col>

        <v-col cols="6" class="mx-auto text-center text-gray-dark">
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-menu
              v-for="item in links"
              :key="item.name"
              offset-y
              min-width="360"
              max-width="600"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  :ripple="false"
                  color="transparent"
                  :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
                  class="
                    text-dark
                    font-weight-light
                    text-capitalize
                    ls-0
                    align-center
                  "
                  depressed
                  @click="close_menu(item)"
                >
                  {{ item.name }}
                </v-btn>
              </template>
            </v-menu>
          </template>
        </v-col>

        <!-- <v-col cols="3" class="text-right">
          <template v-if="!$vuetify.breakpoint.mobile">
            <v-btn
              elevation="0"
              color="#fff"
              class="font-weight-bolder py-4 px-4 ms-2"
              :class="
                this.$route.name == 'SignUpBasic'
                  ? 'btn-success bg-gradient-success'
                  : 'btn-primary bg-gradient-primary'
              "
              href="javascript:;"
              small
            >
              Buy Now
            </v-btn>
          </template> -->

        <v-btn
          v-show="$vuetify.breakpoint.mobile"
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-600
            text-capitalize
            drawer-toggler
            btn-toggler-hover
            py-3
            px-6
            rounded-sm
          "
          color="transparent"
          @click="dialog = true"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line" :class="{ 'bg-dark': hasBg }"></i>
            <i class="drawer-toggler-line" :class="{ 'bg-dark': hasBg }"></i>
            <i class="drawer-toggler-line" :class="{ 'bg-dark': hasBg }"></i>
          </div>
        </v-btn>

        <v-dialog
          v-model="dialog"
          content-class="position-absolute top-0"
          width="95%"
        >
          <v-card class="card-shadow card-padding">
            <v-card-title
              class="
                pt-0
                px-4
                card-padding
                text-h6
                font-weight-bold
                text-typo
                justify-space-between
                border-bottom
              "
            >
              Checkmong.com
              <v-btn icon width="31" :ripple="true" @click="dialog = false">
                <v-icon size="18" class="text-typo">fas fa-times</v-icon>
              </v-btn>
            </v-card-title>
            <v-card-text
              class="card-padding pb-0 d-flex flex-column px-0 text-gray-dark"
            >
              <v-btn
                @click="close_menu(item)"
                value
                v-for="item in links"
                :key="item.name"
                :ripple="true"
                text


              >
                {{ item.name }}
                <v-spacer></v-spacer>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>
export default {
  name: "app-bar",
  components: {},
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
  },
  data() {
    return {
      dialog: false,
      dialog_ask: false,
      links: [
        {
          name: "หน้าหลัก",
          link: "/home",
        },
        {
          name: "หาหมอใกล้บ้าน",
          link: "/find_provider",
        },
        {
          name: "ความรู้สมองเสื่อม ",
          link: "/dementia_knowledge",
          // link: "https://www.eisai.com/index.html"
        },
        {
          name: "ลงทะเบียน/เข้าใช้งานระบบ",
          link: "/login",
        },
      ],
    };
  },
  watch: {},
  methods: {
    close_menu(item) {
      //console.log(item)
      this.dialog = false;
      if(item.link === '/login'){
        this.dialog_ask = true  
      }
      else{
        this.$router.push(item.link)
      }
      
    },
    goLogin(){
      this.dialog_ask = false
      this.$router.push('/login')
    }
  },
};
</script>
