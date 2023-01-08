<template lang="">

<div v-resize="onResize">
    <v-container class="">
        <v-btn
        depressed
        elevation="2"
        outlined
        @click="goTokenManagement"
        >
            Go ->  /TokenManagement
        </v-btn>
    </v-container>

</div>
</template>

<script>
import {
    
}
from '@/constants'
export default {
    data() {

        return {
            windowSize: {
                x: 0,
                y: 0,
            },
        };
    },

    methods: {
        onResize() {
            this.windowSize = {
                x: window.innerWidth,
                y: window.innerHeight
            }
        },

        goTokenManagement() {
                this.$router.push('/token_management')
        }
    },
    beforeCreate() {

    },
    mounted() {

    },
    created() {

    },
    beforeUpdate() {

    },
    updated() {
        //console.log('updated')

    }

};
</script>

<style scoped>
.zoom {
    transition: transform 0s;
}

.zoom:hover {
    transform: scale(1.007);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.footer-sm {
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
