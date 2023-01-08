<template>
<v-dialog v-model="dialog" persistent max-width="330">

    <div class="text-center">

        <v-card v-if="status == 'loading'" color="primary">
            <v-card-text style=" text-align: center;">
                <v-progress-circular :size="50" :width="7" color="purple" indeterminate></v-progress-circular>
                <br>
                <br>
                <span v-html="title"></span>
            </v-card-text>
        </v-card>

        <v-card v-if="status == 'info'" color="primary">

            <v-card-text style=" text-align: center;">
                <v-icon :size="80" x-large color="blue darken-2">
                    info
                </v-icon>
                <br>
                <br>
                <span v-html="title"></span>
            </v-card-text>
            
            <v-card-actions>
                <v-spacer></v-spacer>
                 <v-btn color="#A84292" class="text-white"  @click="emit">
                    ตกลง
                </v-btn>
            </v-card-actions>
        </v-card>

        <v-card v-if="status == 'done'" color="primary">
            <v-card-text style=" text-align: center;">
                <v-icon :size="80" x-large color="green darken-2">
                    check_circle_outline
                </v-icon>
                <br>
                <br>

                <span v-html="title"></span>
            </v-card-text>
        </v-card>

        <v-card v-if="status == 'fail'" color="primary">

            <v-card-text style="text-align: center;">
                <v-icon x-large color="red darken-2">
                    block
                </v-icon>
                <br>
                <br>
                <span v-html="title"></span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                 <v-btn color="#A84292" class="text-white"  @click="emit">
                    ตกลง
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="status == 'success'" color="primary">
            <v-card-text style="text-align: center;">
                <v-icon :size="140" x-large color="green darken-2">
                    check_circle_outline
                </v-icon>
                <br>
                <br>
                <span v-html="title"></span>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#A84292" class="text-white"  @click="emit">
                    ตกลง
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</v-dialog>
</template>

<script>
export default {
    name: "WaitingModel",
    components: {},
    props: {
        title: String,
        status: String,
        active: Boolean
    },
    data() {
        return {
            dialog: false,
        }
    },
    mounted() {

    },
    methods: {
        emit() {
            this.dialog = false,
                this.$emit('statusdailog', false);
        }
    },

    watch: {
        //   dialog (val) {
        //     if (!val) return
        //     setTimeout(() => (this.dialog = false), 4000)
        //   },
        active(val) {

            this.dialog = val
        }

    },
};
</script>
