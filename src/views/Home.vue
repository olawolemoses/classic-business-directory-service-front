<template>

    <div class="row" v-if="businesses" >
        <Business v-for="(business, index) in businesses" v-bind:key="index" :business="business" />
    </div>
</template>

<script>
import config from '@/config';
import Axios from 'axios';
import Business from '@/components/Business';

export default {
    mounted(){
        console.log("is it mounted");
        // this.getBusinessList();
    },
    created(){
        console.log("is it created");
    },
    components: { Business },
    data(){
        return {

        }
    },  
    asyncComputed: {
        businesses() {
            if (this.searchString) {
                return Axios.post(`${config.apiUrl}/search`, {q: this.searchString})
                            .then( response => response.data.businesses);
            } else {
                return Axios.get(`${config.apiUrl}/search`)
                        .then( response => response.data.businesses);
            }

        }     
    },    
    props: ["searchString"],
    methods: {
        getBusinessList() {
            this.loading = true;
            console.log("config", config);
            if(this.searchString){
                Axios.post(`${config.apiUrl}/search`, {q: this.searchString}).then((response) => {
                    console.log("searching", response);
                    this.businesses = response.data.businesses;
                });                
            } else {
                Axios.get(`${config.apiUrl}/search`).then((response) => {
                    console.log(response);
                    this.businesses = response.data.businesses;
                });
            }
        }      
    }
}
</script>