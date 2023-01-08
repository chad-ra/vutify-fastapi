<template>
<div>

    <v-dialog v-model="cf_dialog" width="300">
        <v-card>
            <v-card-text style="text-align:center">
                <br>
                <v-btn class="ma-2" small outlined fab color="red">
                    <v-icon>delete_forever</v-icon>
                </v-btn>
                <br>
                <span>ยืนยันการลบผู้ป่วยจากการดูแล</span>

                <br>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <v-btn small outlined style="color:purple" @click="cf_dialog = false">ยกเลิก</v-btn>
                <v-spacer></v-spacer>
                <v-btn small color="bg-purple text-white" @click="delCustomer">ตกลง</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="new_cm_dialog" width="300">
        <v-card>
            <v-card-text style="text-align:center">
                <br>
                <v-btn class="ma-2" small outlined fab color="red">
                    <v-icon>add</v-icon>
                </v-btn>
                <br>
                <span>Add Customer</span>
                <v-text-field
                    v-model="new_customer_name"
                    :counter="10"
                    label="Full name"
                    required
                ></v-text-field>
                
                <br>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <v-btn small outlined style="color:purple" @click="new_cm_dialog = false">ยกเลิก</v-btn>
                <v-spacer></v-spacer>
                <v-btn small color="bg-purple text-white" @click="createCustomer">ตกลง</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="token_dialog" width="300">
        <v-card>
            <v-card-title>New token</v-card-title>
            <v-card-text persistent style="text-align:center">

                <br>
                <v-chip label>{{new_token}}</v-chip>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">

                <v-spacer></v-spacer>
                <v-btn color="bg-purple text-white" @click="$router.go()">ตกลง</v-btn>

            </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog v-model="req_dialog" width="300">
        <v-card>
            <v-card-title>New token</v-card-title>
            <v-card-text persistent style="text-align:center">
                ระบบได้ทำการส่ง Token ไปยังผู้ขอผ่านช่องทางไลน์แล้ว
                <br>
                <v-chip label>{{new_token}}</v-chip>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">

                <v-spacer></v-spacer>
                <v-btn color="bg-purple text-white" @click="$router.go()">ตกลง</v-btn>

            </v-card-actions>
        </v-card>
    </v-dialog>
   
    <v-container class="">
        <v-btn
        depressed
        elevation="2"
        outlined
        @click="$router.go(-1)"
        > goBack
        </v-btn>
    </v-container>
    <v-container>
        
        <v-row class="align-center d-flex h-0 pb-0 pt-2">
            <v-col lg="10" sm="12" class="mx-auto">
                <v-btn
                
                elevation="2"
                
                @click="new_customer"
                > Create customer
                </v-btn>
                <br />
                <span> Member List</span>
                <v-row class="d-flex">
                    <v-col cols="7" style="padding-bottom: 0px;"> <span style="font-size: 14px;">ทั้งหมด <b>{{req_list.length}}</b> คน</span></v-col>

                </v-row>
                <v-row class="d-flex">
                    <v-col cols="12" style="padding-top: 0px !important;">
                        <v-card elevation="1">
                            <v-text-field v-model="search" append-icon="search" label="" single-line hide-details style="padding-top: 0px;margin-top: 0px;background-color: white;border-top-left-radius: 5px;border-top-right-radius: 5px;" flat></v-text-field>
                            <!-- <v-data-table :search="search" :disable-pagination="true" :headers="headers" :items="patient_list" :items-per-page="10" dense mobile-breakpoint @click:row="handleClick"> -->
                            <v-data-table hide-default-footer :search="search" :disable-pagination="false" :headers="headers" :items="customer_list" :items-per-page="itemsPerPage" mobile-breakpoint :page.sync="page" @page-count="pageCount = $event">
                                <template v-slot:item.action="{ item }">

                                    <v-btn v-if="item.status == 1 " elevation="2" @click="del_user(item)" color="bg-orange" x-small height="32" class="text-purple" style="box-shadow: 0px 1px 3px rgba(153, 153, 153, 0.12);border-radius: 7px;">
                                        <span>ลบ</span>
                                    </v-btn>

                                    <v-btn v-else disabled color="bg-orange" x-small height="32" class="text-purple" style="box-shadow: 0px 1px 3px rgba(153, 153, 153, 0.12);border-radius: 7px;">
                                        <span>disable</span>
                                    </v-btn>

                                </template>
                            </v-data-table>
                        </v-card>
                        <div class="text-center pt-2">
                            <v-pagination v-model="page" :length="pageCount"></v-pagination>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</div>
</template>

<script>

import {
    APIURL
} from '@/constants'
import Vue from 'vue'
export default {
    name: "calendar-patient",
    components: {
    },
    data: () => ({
        req_dialog: false,
        token_dialog: false,


        new_cm_dialog: false,
        new_customer_name: '',


        req_list: [],
        token_list: [],
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,

        page_1: 1,
        pageCount_1: 0,
        itemsPerPage_1: 10,
        new_token: '',

        cf_dialog: false,
        patient_list: [],
        active_waiting: false,
        title: '',
        status: '',
        search: '',
        search_1:'',
        attrs: "",
        on: "",
        selected_row: "",
        dialog: false,
        arrayEvents: null,
        date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),
        date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),

        headers: [{
                text: "id",
                value: "id",
            },
            {
                text: "name",
                value: "name",
            },
            {
                text: "status (random)",
                value: "status",
            },
            {
                text: "action",
                value: "action",
            }
        ],
        customer_list: []
    }),

    beforeCreate() {

    },
    mounted() {
        this.getCustomerList()
    },
    watch: {

    },
    methods: {

        del_user(val) {
            this.selected_row = val
            this.cf_dialog = true
        },

        new_customer(){
            this.new_cm_dialog = true
            // this.createCustomer()
        },

        async createCustomer() {
            //console.log('his.selected_row.user_relation_id:',this.selected_row.user_relation_id)
            console.log()
            await Vue.axios.post(APIURL + '/create_customer', {
                "name": this.new_customer_name
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.data.detail) {
                    this.token_dialog = true
                    this.new_token = response.data.detail
                }

            })
        },

        async delCustomer() {
            console.log('his.selected_row.user_relation_id:',this.selected_row.id)
            await Vue.axios.post(APIURL + '/del_customer', {
                "id": this.selected_row.id
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.data) {
                    console.log('deleted')
                    this.$router.go()
                }
            })
        },

        async getCustomerList() {


            // const customer_list = [
            //                             {
            //                                 id: 1,
            //                                 name: 'Chikun',
            //                                 status: 1,
            //                             },
            //                             {
            //                                 id: 2,
            //                                 name: 'Chija',
            //                                 status: 1,
            //                             },
            //                             {
            //                                 id: 3,
            //                                 name: 'Chddo',
            //                                 status: 0,
            //                             }
            //                         ]
            // this.customer_list = customer_list
            
            await Vue.axios.post(APIURL + '/get_customer_list', {
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(response)
                if (response.data) {
                    // this.customer_list = customer_list
                    this.customer_list = response.data.customer_list
                }

            })

        },

        update_status_wait(val) {
            this.active_waiting = val
        },
        handleClick(value) {
            this.selected_row = value;
            this.dialog = true;
        },

    },
};
</script>

<style>
.theme--light.v-pagination .v-pagination__item--active {
    color: rgb(0 0 0 / 87%) !important;
}
</style>
