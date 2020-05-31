<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" :to="`/`">
                    <svg viewBox="0 0 512 512" height="25" class="text-center"
                style="enable-background:new 0 0 512 512;"> <path style="fill:#52D6C6;"
                d="M398.723,512H42.428c-7.797,0-14.176-6.379-14.176-14.176V50.953V14.176
                C28.252,6.379,34.631,0,42.428,0h85.04H384.53h85.04c7.797,0,14.176,6.379,14.176,14.176v483.647
                c0,7.797-6.379,14.176-14.176,14.176h-25.119h-45.728V512z"/> <path
                style="opacity:0.1;enable-background:new    ;"
                d="M469.571,0h-43.578v440.069c0,7.797-6.379,14.177-14.176,14.177h-25.119
                H340.97H28.252v43.577c0,7.797,6.379,14.177,14.177,14.177h356.296h45.729h25.119c7.797,0,14.176-6.379,14.176-14.177V14.176
                C483.747,6.379,477.368,0,469.571,0z"/> <rect x="95.195" y="88.952" style="fill:#FFFFFF;"
                width="64.023" height="64.023"/> <rect x="95.195" y="215.335" style="fill:#F597C6;" width="64.023"
                height="64.023"/> <g> <rect x="95.195" y="341.718" style="fill:#FFFFFF;" width="64.023"
                height="64.023"/> <rect x="206.933" y="88.952" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> <rect x="206.933" y="215.335" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> <rect x="206.933" y="341.718" style="fill:#FFFFFF;" width="216.544"
                height="64.023"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g>
                </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <input class="form-control mr-sm-2" type="search" v-model="form.q"  placeholder="Search" aria-label="Search">
                <router-link :to="'/search/'+form.q" tag="button">search</router-link>
            </div>

        </nav>        
    </div>    
</template>

<script>
import config from '@/config';
import Axios from 'axios';

export default {
    data(){
        return {
            form: {}
        }
    },    
     methods: {
        async submit() {
            this.loading = true;
            console.log("sending form", this.form);
            console.log("config", config);
             Axios.post(`${config.apiUrl}/search`, this.form).then((response) => {
                console.log(response);
                const businesses = response.data.businesses;
                // this.businessCategories = response.data.businessCategories;
                const path = `/`;
                if (this.$route.path !== path) 
                    this.$router.push(path);
                else 
                    this.$emit('search-results', businesses);
                // await this.$inertia.post(this.route('search'), this.form);
            });     

        }, 
     }
}
</script>