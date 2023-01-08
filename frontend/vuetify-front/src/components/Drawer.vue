<template>
<v-navigation-drawer width="100%" height="calc(100% - 2rem)" fixed app floating :expand-on-hover="mini" :value="drawer" class="my-4 ms-4 border-radius-xl" :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'" :data-color="sidebarColor" :data-theme="sidebarTheme">
    <v-container style="text-align: -webkit-left;">
        <div class="">
            <v-img src="@/assets/logo.png" class="navbar-brand-img ms-3" width="50">
            </v-img>
            <!-- <span class="ms-2 text-purple text-sm">Checkmong.com</span> -->
        </div>
    </v-container>
    <hr class="horizontal my-4" :class="sidebarTheme == 'dark' ? 'light' : 'dark'" />
    <!-- <v-list-item-title v-text="this.menu_title" class="text-purple" style="padding-left:22px; font-size:16px"></v-list-item-title> -->
    <v-row>
        <v-col cols="9">
            <v-btn @click="$router.push('/home_checkmong')" depressed style="margin-left:22px; font-size:16px; background-color: rgba(168, 65, 146, 0.11) !important; color: rgb(168, 65, 146);">
                {{menu_title}}
            </v-btn>
        </v-col>
        <v-col cols="3">
            <v-btn outlined class="mt-1" @click="$router.push('/user_info')" elevation="4" icon small color="primary" style="color:#a84192;">
                <v-icon color="#a05c92">person</v-icon>
            </v-btn>
        </v-col>
    </v-row>

    <v-list-item-group>
        <div v-for="(item, i) in itemsDocs" :key="i">
          <v-card @click="item.path == 'goHHC' ? goHHC() : $router.push(item.path)" >
            <v-list-item class="pb-1 mx-2 no-default-hover py-2 left-menu" :ripple="false" active-class="item-active">
                <v-list-item-icon class="me-2 align-center">
                    <v-img :src="item.src" width="65px"></v-img>
                </v-list-item-icon>
                <v-list-item-content>
                    <span style="font-size:14px;white-space: pre-line;">{{item.title}}</span>
                </v-list-item-content>
            </v-list-item>
            </v-card>
        </div>
    </v-list-item-group>
</v-navigation-drawer>
</template>

<script>
export default {
    name: "drawer",
    props: {
        drawer: {
            type: Boolean,
            default: null,
        },
        sidebarColor: {
            type: String,
            default: "success",
        },
        sidebarTheme: {
            type: String,
            default: "white",
        },
    },
    data: () => ({
        user_type: "",
        menu_title: "",
        mini: false,
        togglerActive: false,
        thirdLevelSimple: [
            "Third level menu",
            "Just another link",
            "One last link",
        ],
        itemsDocs: [],
    }),
    mounted() {
        //console.log('home---')
        //console.log(this.$store.state)
        this.user_type = this.$store.state.login_detail.user_type
        this.getHomeTitle()
        this.getCardMenu()
    },
    methods: {
        goHHC() {
            window.open("https://hhcthailand.com/category/health/brain/");
        },
        getCardMenu() {
            const user_provider_card = [{
                    title: "ทดสอบภาวะสมองเสื่อม\nให้ผู้ป่วย",
                    src: require("@/assets/img/checkmong/clipboard-checkazq.png"),
                    path: "/scan_azq",
                }, {
                    title: "สรุปข้อมูลผู้ป่วย",
                    src: require("@/assets/img/checkmong/Vectordab.png"),
                    path: '/dashboard_summary'
                },
                {
                    title: "ดูข้อมูลผู้ป่วย",
                    src: require("@/assets/img/checkmong/folderacc.png"),
                    path: "/scan_accessdata",
                },
                {
                    title: "ปฏิทินรายการนัดหมาย",
                    src: require("@/assets/img/checkmong/calendar-checkca.png"),
                    path: "/calendar_provider",
                },
                {
                    title: "แบบบันทึกประวัติสุขภาพ",
                    src: require("@/assets/img/checkmong/file-earmark-texts.png"),
                    path: "/scan_add_health_record",
                },
                {
                    title: "แหล่งข้อมูลภาวะสมองเสื่อม",
                    src: require("@/assets/img/checkmong/pending_actionsmeds.png"),
                    path: "goHHC",
                },
                {
                    title: "VDO สอนการตรวจประเมิน",
                    src: require("@/assets/img/checkmong/filmvdo.png"),
                    path: "/video_training",
                },
            ]
            const user_osm_card = [{
                    title: "ทดสอบภาวะสมองเสื่อม\nให้ผู้ป่วย",
                    src: require("@/assets/img/checkmong/clipboard-checkazq.png"),
                    path: "/scan_azq",
                },
                {
                    title: "สรุปข้อมูลผู้ป่วย",
                    src: require("@/assets/img/checkmong/Vectordab.png"),
                    path: '/dashboard_summary'
                },
                {
                    title: "ดูข้อมูลผู้ป่วย",
                    src: require("@/assets/img/checkmong/folderacc.png"),
                    path: "/scan_accessdata",
                },
                {
                    title: "แบบบันทึกประวัติสุขภาพ",
                    src: require("@/assets/img/checkmong/file-earmark-texts.png"),
                    path: "/scan_add_health_record",
                },
                {
                    title: "แหล่งข้อมูลภาวะสมองเสื่อม",
                    src: require("@/assets/img/checkmong/pending_actionsmeds.png"),
                    path: "goHHC",
                },
                {
                    title: "VDO สอนการตรวจประเมิน",
                    src: require("@/assets/img/checkmong/filmvdo.png"),
                    path: "/video_training",
                },
            ]

            const user_patient_card = [{
                    title: "ทดสอบภาวะสมองเสื่อมให้ผู้ป่วย",
                    src: require("@/assets/img/checkmong/clipboard-checkazq.png"),
                    path: "/azq",
                },
                {
                    title: "ปฏิทินนัดพบหมอ",
                    src: require("@/assets/img/checkmong/Vectormet.png"),
                    path: "/calendar_patient",
                },
                {
                    title: "ดูข้อมูลผู้ป่วย",
                    src: require("@/assets/img/checkmong/folderacc.png"),
                    path: "/patient_health_record",
                },
                {
                    title: "นัดหมอ",
                    src: require("@/assets/img/checkmong/person-badgebo.png"),
                    path: "/book_doctor_list",
                },
                {
                    title: "เตือนกินยา",
                    src: require("@/assets/img/checkmong/pending_actionsmed.png"),
                    path: "/medicine_alert",
                },
                {
                    title: "แหล่งข้อมูลภาวะสมองเสื่อม",
                    src: require("@/assets/img/checkmong/pending_actionsmeds.png"),
                    path: "goHHC",
                },
                {
                    title: "คิวอาร์ของฉัน",
                    src: require("@/assets/img/checkmong/qr-code.png"),
                    path: "/qr_gen"
                }
            ]
            if (this.user_type === 'user_provider') {
                this.itemsDocs = user_provider_card
            }
            if (this.user_type === 'user_osm') {
                this.itemsDocs = user_osm_card
            }
            if (this.user_type === 'user_patient') {
                this.itemsDocs = user_patient_card
            }
        },

        getHomeTitle() {
            if (this.user_type === 'user_provider') {
                this.menu_title = 'เมนูหลัก รพ./คลินิก'
            }
            if (this.user_type === 'user_osm') {
                this.menu_title = 'เมนูหลัก อสม.'
            }
            if (this.user_type === 'user_patient') {
                this.menu_title = 'เมนูหลักผู้ใช้งาน/ผู้ป่วย'
            }
        },
        listClose(event) {
            let items;
            let headers;
            let groups;
            let currentEl;

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link.item-active"
                )
            ) {
                items = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link.item-active"
                );
            }

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                )
            ) {
                headers = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
                );
            }

            if (
                document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                )
            ) {
                groups = document.querySelectorAll(
                    ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
                );
            }

            if (
                event.target.closest(
                    ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                )
            ) {
                currentEl = event.target.closest(
                    ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
                );
            }

            if (items != null) {
                for (var i = 0; i < items.length; i++) {
                    items[i].classList.remove("item-active");
                }
            }

            if (headers != null) {
                for (var j = 0; j < headers.length; j++) {
                    headers[j].classList.remove(
                        "v-list-item--active",
                        "item-active",
                        "primary--text"
                    );
                    headers[j].setAttribute("aria-expanded", false);
                }
            }

            if (groups != null) {
                for (var k = 0; k < groups.length; k++) {
                    groups[k].classList.remove("v-list-group--active", "primary--text");
                }
            }

            if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
                event.target
                    .closest(".mb-0.v-list-item.v-list-item--link")
                    .classList.add("item-active");
            }

            if (currentEl != null) {
                currentEl
                    .querySelector(".v-list-group__header")
                    .classList.add("v-list-item--active", "item-active");
            }
        },
    },
};
</script>

<style scoped>
.left-menu:hover {
    background-color: #FFC90A15 !important;
    border-radius: 10px !important;
}

.v-navigation-drawer__content .item-active {
    background-color: #FFC90A15 !important;
    border-radius: 10px !important;
}

.wrap-text {
    -webkit-line-clamp: unset !important;
}
</style>
