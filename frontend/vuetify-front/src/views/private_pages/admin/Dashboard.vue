<template>
<div>
    <!-- <v-row v-show="$vuetify.breakpoint.mobile"></v-row>
        <v-row style="margin-top: 0%" v-show="!$vuetify.breakpoint.mobile"></v-row> -->
    <waiting-modal :title="title" :status="status" :active="active_waiting" @statusdailog="update_status_wait"></waiting-modal>


    <v-row class="d-flex">
        <v-col cols="12" style="text-align: center">
            <span class="text-purple" style="font-weight: 600; font-size: 20px">Admin dashboard</span>
        </v-col>
    </v-row>
    <!-- {{tab}} -->
    <v-container style="max-width:90% !important;">
        <v-tabs show-arrows v-model="tab">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab :key="1" >main</v-tab>
            <v-tab :key="2" >AZQ Report -- no registered users -- </v-tab>
            <v-tab :key="3" >AZQ Report -- Registered users -- </v-tab>
            <v-tab :key="4" >EVENT </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item :key="1">
                <v-card>
                    <v-card-text>
                    <v-row class="align-center d-flex h-0 pb-20">
                        <v-col xl="6" lg="12" sm="8" class="mx-auto">
                            <v-row class="d-flex">
                                <v-col  xl="6" lg="6" xs="12">
                                    <v-card  style="border-radius: 15px;text-align: center; " elevation="1">
                                        <v-card-text>
            
                                            <span style="">เลือกวันที่ </span>
                                            <v-date-picker
                                            v-model="dates"
                                            range
                                            event-color="bg-teal" locale="th-th" color="bg-purple" no-title full-width
                                          ></v-date-picker>
                                          
                                        </v-card-text>
                                        <v-card-actions><v-spacer></v-spacer>จาก: &nbsp; {{dates[0]}}  &nbsp; ถึง: &nbsp; {{dates[1]}}<v-spacer></v-spacer><v-btn @click="get_chart_data_admin_main" class="bg-purple text-white mr-10">กรอง</v-btn></v-card-actions>
                                    </v-card>
                               
                                </v-col>
                                <v-col xl="6" lg="6" xs="12">
                                    <v-card class="ml-0 mr-0 mb-2" style="border-radius: 15px;text-align: center;  background-color: azure;" elevation="1">
                                        <br>
                                        <span style="">จำนวน user ที่ลงทะเบียน รวม </span>
                                        <v-card-text>
                                            <h2>{{total_user ? total_user : 0}} users</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Count</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_main_count_reg" />
                                            ประเภท user
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>  
                        </v-col>
                    </v-row>
                </v-card-text>
                </v-card>

            </v-tab-item>
            <v-tab-item :key="2">
                <v-card>
                    <v-card-text>
                    <v-row class="align-center d-flex h-0 pb-20">
                        <v-col xl="6" lg="12" sm="8" class="mx-auto">
                            <v-row class="d-flex">
                                <v-col  xl="6" lg="6" xs="12">
                                    <v-card  style="border-radius: 15px;text-align: center; " elevation="1">
                                        <v-card-text>
            
                                            <span style="">เลือกวันที่ </span>
                                            <v-date-picker
                                            v-model="dates"
                                            range
                                            event-color="bg-teal" locale="th-th" color="bg-purple" no-title full-width
                                          ></v-date-picker>
                                          
                                        </v-card-text>
                                        <v-card-actions><v-spacer></v-spacer>จาก: &nbsp; {{dates[0]}}  &nbsp; ถึง: &nbsp; {{dates[1]}}<v-spacer></v-spacer><v-btn @click="get_chart_data_admin" class="bg-purple text-white mr-10">กรอง</v-btn></v-card-actions>
                                    </v-card>
                               
                                </v-col>
                                <v-col xl="6" lg="6" xs="12">
                                    <v-card class="ml-4 mr-4 mb-4" style="border-radius: 15px;text-align: center;  background-color: darkseagreen;" elevation="1">
                                        <br>
                                        <span style="">จำนวนการทดสอบรวม </span>
                                        <v-card-text>
                                            <h2>{{total_azq_anonymous ? total_azq_anonymous : 0}} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: aliceblue;" elevation="1">
                                        <!-- graph_count {{graph_count}} -->
                                        <br>
                                        <span style="">คะแนน [0-3] Normal </span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[0] : 0 }} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: cornsilk;" elevation="1">
                              
                                        <br>
                                        <span style="">คะแนน [4-12] Mild</span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[1] : 0 }} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: bisque;" elevation="1">
                                        <br>
                                        <span style="">คะแนน [13-27] Alzheimer</span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[2] : 0}} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                </v-col>
            
            
            
                            </v-row>
            
                            <v-row>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Count</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_count_age" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Mean</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_mean" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Max</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_max" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Median</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_median" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="3">
                <v-card>
                    <v-card-text>
                    <v-row class="align-center d-flex h-0 pb-20">
                        <v-col xl="6" lg="12" sm="8" class="mx-auto">
                            <v-row class="d-flex">
                                <v-col  xl="6" lg="6" xs="12">
                                    <v-card  style="border-radius: 15px;text-align: center; " elevation="1">
                                        <v-card-text>
                                            <span style="">เลือกวันที่ </span>
                                            <v-date-picker
                                            v-model="dates"
                                            range
                                            event-color="bg-teal" locale="th-th" color="bg-purple" no-title full-width
                                          ></v-date-picker>
                                          
                                        </v-card-text>
                                        <v-card-actions><v-spacer></v-spacer>จาก: &nbsp; {{dates[0]}}  &nbsp; ถึง: &nbsp; {{dates[1]}}<v-spacer></v-spacer><v-btn @click="get_chart_data_admin_register" class="bg-purple text-white mr-10">กรอง</v-btn></v-card-actions>
                                    </v-card>
                               
                                </v-col>
                                <v-col xl="6" lg="6" xs="12">
                                    <v-card class="ml-4 mr-4 mb-4" style="border-radius: 15px;text-align: center;  background-color: darkseagreen;" elevation="1">
                                        <br>
                                        <span style="">จำนวนการทดสอบรวม </span>
                                        <v-card-text>
                                            <h2>{{total_azq_anonymous ? total_azq_anonymous : 0}} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: aliceblue;" elevation="1">
                                        <!-- graph_count {{graph_count}} -->
                                        <br>
                                        <span style="">คะแนน [0-3] Normal </span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[0] : 0 }} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: cornsilk;" elevation="1">
                              
                                        <br>
                                        <span style="">คะแนน [4-12] Mild</span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[1] : 0 }} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                    <v-card class="ma-4" style="border-radius: 15px;text-align: center; background-color: bisque;" elevation="1">
                                        <br>
                                        <span style="">คะแนน [13-27] Alzheimer</span>
                                        <v-card-text>
                                            <h2>{{graph_count ? graph_count[2] : 0}} ครั้ง</h2>
            
                                        </v-card-text>
                                    </v-card>
                                </v-col>
            
            
            
                            </v-row>
            
                            <v-row>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Count</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_count_age" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Mean</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_mean" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Max</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_max" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                                <v-col xl="4" lg="4" sm="12">
                                    <v-card style="border-radius: 15px" elevation="1">
                                        <v-card-title>Median</v-card-title>
            
                                        <v-card-text style="text-align:center;">
            
                                            <BarChart :chartData="chartData_median" />
                                            ช่วงอายุ
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item :key="4">
                
                
                    <v-row class="align-center d-flex h-0 pb-0 pt-2">
                        <v-col lg="12" sm="12" class="mx-auto">
                            <v-btn @click="$router.go()" class="bg-purple text-white ma-3">refresh</v-btn>
                            <vue-json-to-csv 
                            :json-data="event_list"
                            :labels="{
                                id:{title:'No.'},
                                date:{title:'Date'},
                                hospital:{title:'Hospital'},
                                n_of_patient:{title:'Est. No. of Participants'},
                                mr:{title:'MR'},
                                n_of_line_gain:{title:'No. of Line friends users gained'},
                                n_new_reg:{title:'No. of registered users gained'},
                                n_azq_total:{title:'จำนวนคนที่ทำ AZQ ทั้งหมด (registered + unregistered)'},
                                n_azq_4_12:{title:'จำนวนคนที่ทำ AZQ score 4-12'},
                                n_azq_13:{title:'จำนวนคนที่ทำ AZQ score 13-27'},
                                n_azq_0_3:{title:'จำนวนคนที่ทำ AZQ score 0-3'},

                            }"
                            :csv-title="'Checkmong_stats_'+new Date().toLocaleString('th-TH', { dateStyle: 'long'})"
                            >
                            </vue-json-to-csv>
                            <v-row class="d-flex">
                                <!-- <v-col cols="7" style="padding-bottom: 0px;"> <span style="font-size: 14px;">ทั้งหมด <b>{{req_list.length}}</b> คน</span></v-col> -->
                            </v-row>
                            <v-row class="d-flex">
                                <v-col cols="12" style="">
                                    <v-card elevation="1" class="ma-3">
                                        <v-text-field v-model="search" append-icon="search" label="" single-line hide-details style="padding-top: 0px;margin-top: 0px;background-color: white;border-top-left-radius: 5px;border-top-right-radius: 5px;" flat></v-text-field>
                                        <!-- <v-data-table :search="search" :disable-pagination="true" :headers="headers" :items="patient_list" :items-per-page="10" dense mobile-breakpoint @click:row="handleClick"> -->
                                        <v-data-table hide-default-footer :search="search" :disable-pagination="false" :headers="headers_event_list" :items="event_list" :items-per-page="itemsPerPage" mobile-breakpoint :page.sync="page" @page-count="pageCount = $event">
                                            <!-- <template v-slot:item.action="{ item }">
                                                <v-btn v-if="item.status == 'new'" elevation="2" color="bg-orange" x-small height="32" class="text-purple" style="box-shadow: 0px 1px 3px rgba(153, 153, 153, 0.12);border-radius: 7px;">
                                                    <span>สร้าง Token และส่ง</span>
                                                </v-btn>
            
                                                <v-btn v-else disabled color="bg-orange" x-small height="32" class="text-purple" style="box-shadow: 0px 1px 3px rgba(153, 153, 153, 0.12);border-radius: 7px;">
                                                    <span>สร้าง Token และส่ง</span>
                                                </v-btn>
            
                                            </template> -->
                                            <template v-slot:item.date="{ item }">
                                                <v-chip
                                                class="ma-2"
                                                small
                                                color="#fb8c00"
                                                
                                              >
                                                {{item.date}}
                                              </v-chip>
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
            
           
            </v-tab-item>
          </v-tabs-items> 
    </v-container>
</div>
</template>

    
    
<script>

import VueJsonToCsv from 'vue-json-to-csv'
import {
    APIURL
} from '@/constants'
import Vue from 'vue'
export default {
    name: "calendar-patient",
    components: {

        VueJsonToCsv
    },
    data: () => ({
        page:1,
        search: '',
        pageCount: 0,
        itemsPerPage: 10,
        event_list:[],
        tab:null,
        graph_count:[0,0,0],
        total_user: 0,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        dates: [],
        total_azq_anonymous: 0,
        res_info: {},
        dialog: false,
        title: '',
        status: '',
        active_waiting: false,
        req_list: '',
        token_list: '',
        chartData_count: {
            labels: [
                'Normal',
                'Mild',
                'Alzheimer',
            ],
            datasets: [{
                label: 'จำนวนครั้งในการทำ AZQ ต่อกลุ่มคะแนน',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0]
            }]
        },
        chartData_count_age: {
            labels: [
                'Null',
                '< 60',
                '60-69',
                '70-80',
                '> 80',
            ],
            datasets: [{
                label: 'จำนวนครั้งในการทำ AZQ ต่อช่วงอายุ',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0, 0, 0, 27]
            }]
        },
        chartData_mean: {
            labels: [
                'Null',
                '< 60',
                '60-69',
                '70-80',
                '> 80',
            ],
            datasets: [{
                label: 'คะแนนเฉลี่ยที่ได้ต่อช่วงอายุ (Mean)',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0, 0, 0, 27]
            }]
        },
        chartData_max: {
            labels: [
                'Null',
                '< 60',
                '60-69',
                '70-80',
                '> 80',
            ],
            datasets: [{
                label: 'คะแนนสูงสุดได้ต่อช่วงอายุ (Max)',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0, 0, 0, 27]
            }]
        },
        chartData_median: {
            labels: [
                'Null',
                '< 60',
                '60-69',
                '70-80',
                '> 80',
            ],
            datasets: [{
                label: 'คะแนนค่ากลางที่ได้ต่อช่วงอายุ (Median)',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0, 0, 0, 27]
            }]
        },
        chartData_main_count_reg: {
            labels: [
                'คลินิก/รพ.',
                'อสม.',
                'ผู้ป่วย/ผู้ดูแล'
            ],
            datasets: [{
                label: 'จำนวนผู้ลงทะเบียนใช้งาน',
                backgroundColor: '#f87979',
                // data: [5, 5, 10, 15, 20, 20, 0, 30]
                data: [0, 0, 0]
            }]
        },
        headers_event_list: [{
                text: "No.",
                value: "id",
            },
            {
                text: "Date",
                value: "date",
            },
            {
                text: "Hospital",
                value: "hospital",
            },
            {
                text: "Est. No of Participants",
                value: "n_of_patient",
            },
            {
                text: "MR",
                value: "mr",
            },
            {
                text: "No. of Line friends gained",
                value: "n_of_line_gain",
            },
            {
                text: "No of registered users gained",
                value: "n_new_reg",
            },
            {
                text: "จำนวนคนที่ทำ AZQ ทั้งหมด (registered + unregistered)",
                value: "n_azq_total",
            },
            
            {
                text: "จำนวนคนที่ทำ AZQ score 4-12",
                value: "n_azq_4_12",
            },
            
            {
                text: "จำนวนคนที่ทำ AZQ score 13-27",
                value: "n_azq_13",
            },

        ],

    }),
    created() {

        

    },
    beforeCreate() {
        if (!this.$store.state.is_admin_login.is_admin_login) {
            this.$router.push('/token_management_login')

        }
    },
    mounted() {
        this.setIniDate()
        this.get_chart_data_admin()
        this.get_chart_data_admin_main()
    },
    watch: {
        // dates(){
        //     this.get_chart_data_admin()
        // }
        tab(val){
            // console.log('tab(val):',val)
            if (val == 0){
                this.get_chart_data_admin_main()
            }
            if (val == 1){
                this.get_chart_data_admin()
            }
            if (val == 2){
                this.get_chart_data_admin_register()
            }
            if (val == 3){
                this.get_chart_data_admin_main()
            }
        }
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },
    methods: {

        setIniDate(){
            const now = new Date();
            const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().substr(0, 10)
            console.log('firstDay:',firstDay); // 👉️ Sat Oct 01 2022 ...

            this.dates = [
                (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)

                ,
                (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
            ]
            console.log('this.setIniDate:', this.dates)

        },

        update_status_wait(val) {
            this.active_waiting = val
        },
       
        updateChartData() {
            console.log('this.chartData:', this.chartData)
            if (this.chartData){
            this.total_azq_anonymous = this.chartData.total_azq_anonymous
            this.graph_count = this.chartData.graph_count
            this.chartData_count_age.datasets[0].data = this.chartData.graph_count_age
            this.chartData_mean.datasets[0].data = this.chartData.chart_data_max
            this.chartData_max.datasets[0].data = this.chartData.chart_data_mean
            this.chartData_median.datasets[0].data = this.chartData.chart_data_median
            this.chartData_main_count_reg.datasets[0].data = this.chartData.chart_count_reg
            this.total_user = this.chartData.total_user,
            this.event_list = this.chartData.event_list
            //console.log('zzz', this.chartData_a)
            }
        },
        async get_chart_data_admin() {
            if(!this.dates[1]){
                this.dates[1] = this.dates[0]
            }
            console.log('this.dates:', this.dates)
            await Vue.axios.post(APIURL + '/get_chart_data_admin', {
                "start_date": this.dates[0],
                "end_date": this.dates[1],
                // "start_date": '2022-09-01',
                // "end_date": '2022-09-18',
            }, {
            headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log('get_chart_data', response)
                if (response.data) {

                    this.active_waiting = false
                    this.chartData = response.data
                    this.updateChartData()
                } else {
                    this.active_waiting = false
                }
            })
        },
        async get_chart_data_admin_register() {
            if(!this.dates[1]){
                this.dates[1] = this.dates[0]
            }
            console.log('this.dates:', this.dates)
            await Vue.axios.post(APIURL + '/get_chart_data_admin_register', {
                "start_date": this.dates[0],
                "end_date": this.dates[1],
                // "start_date": '2022-09-01',
                // "end_date": '2022-09-18',
            }, {
            headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log('get_chart_data', response)
                if (response.data) {

                    this.active_waiting = false
                    this.chartData = response.data
                    this.updateChartData()
                } else {
                    this.active_waiting = false
                }
            })
        },
        async get_chart_data_admin_main() {
            if(!this.dates[1]){
                this.dates[1] = this.dates[0]
            }
            console.log('this.dates:', this.dates)
            await Vue.axios.post(APIURL + '/get_chart_data_admin_main', {
                "start_date": this.dates[0],
                "end_date": this.dates[1],
                // "start_date": '2022-09-01',
                // "end_date": '2022-09-18',
            }, {
            headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log('get_chart_data', response)
                if (response.data) {

                    this.active_waiting = false
                    this.chartData = response.data
                    this.updateChartData()
                } else {
                    this.active_waiting = false
                }
            })
        },
        save(date) {
            this.$refs.menu.save(date);
        },
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>
    
    

<style scoped>
    .v-card {
        display: flex !important;
        flex-direction: column;
    }
    
    .v-card__text {
        flex-grow: 1;
        overflow: auto;
    }
    
    .action-nav {
        background: #ffffff !important;
        box-shadow: 0px -2px 4px rgba(207, 202, 202, 0.25) !important;
        border-top-left-radius: 18px !important;
        border-top-right-radius: 18px !important;
        height: 77 px !important;
    }
    
    .v-menu__content .v-list-item__title {
        font-size: 0.875rem;
        color: #ffffff;
        color: gray;
    }
    
    .custom-field {
        border-radius: 6px;
    }
    
    .v-picker__title {
        color: #ffffff;
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
        padding: 16px;
        background-color: #a84192;
    }
    
    .v-main__wrap {
        padding-bottom: 90px;
    }
    
    .position-relative {
        position: relative;
    }
    
    .v-date-picker-table .v-btn.v-btn--active {
        color: #ffffff;
        background-color: #a84192;
    }
    
    .theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus) {
        color: #a84192 !important;
    }
    
    .theme--light.v-btn.v-btn--icon {
        color: #a84192 !important;
    }
    .theme--light.v-pagination .v-pagination__item--active {
        color: rgb(0 0 0 / 87%) !important;
    }
    </style>
    
