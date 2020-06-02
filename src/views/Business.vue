<template>
   <div class="row" v-if="business">
      <div class="col-12 col-xl-8">
         <!-- Card -->
         <div class="card">
            <div class="card-body">
               <!-- Header -->
               <div class="row align-items-center">
                  <div class="col ml-n2">
                     <!-- Title -->
                     <h4 class="mb-1">
                        {{ business.name }}
                     </h4>
                  </div>
               </div>

               <hr />

               <!-- Image -->
               <p class="text-center mb-3">
                  <img :src="imageUrl" alt="..." class="img-fluid rounded">
               </p>
               <div class="mb-3">
                  <div class="row">
                     <div class="col">
                        <!-- Buttons -->
                        <a href="#!" class="btn btn-sm btn-white">
                           <eye-icon size="1.5x" class="custom-class"></eye-icon> {{ business.views}}
                        </a>
                        <a href="#!" class="btn btn-sm btn-white">
                        <star-icon size="1.5x" class="custom-class" stroke="Gold"></star-icon> {{  business.ratings }}
                        </a>
                        
                     </div>
                     <div class="col-auto mr-n3">
                        <!-- Avatar group -->
                     </div>
                     <div class="col-auto">
                        <!-- Button -->
                        <!-- <a href="#!" class="btn btn-sm btn-white">
                        Share
                        </a> -->
                     </div>
                  </div>
                  <!-- / .row -->
               </div>
               <!-- Divider -->
               <hr>
               <div class="card-body">
                  <!-- Text -->
                  <p class="mb-3" v-html="business.description">
                     I've spent a lot of time thinking about our design process and trying to figure out a better order for us to tackle things. Right now it feels like we're everywhere with tools and process, so here's my suggestion:
                  </p>
                  

                  <!-- Comments -->
               </div>
            </div>
         </div>
      </div>
      <div class="col-12 col-xl-4">
         <!-- Card -->
         <div class="card">
            <div class="card-body">
               <table class="table table-sm table-striped my-4">
                  <tbody>
                     <tr>
                        <th scope="col">Business Name</th>
                        <td>{{ business.name }}</td>
                     </tr>
                     <tr>
                        <th scope="col">Business contact</th>
                        <td>{{ business.contact }}</td>
                     </tr>
                     <tr>                                
                        <th scope="col">Business email</th>
                        <td>{{ business.email }}</td>
                     </tr>
                     <tr>                                
                        <th scope="col">Business URL</th>
                        <td>{{ business.url }}</td>
                     </tr>
                     <tr>
                        <th scope="col">Business Phone</th>
                        <td>{{ business.phones }}</td>
                     </tr>
                     <tr>
                        <th scope="col">Views</th>
                        <td>{{ business.views }}</td>
                     </tr>
                     <tr>
                        <th scope="col">Rating</th>
                        <td>
                           <Rating v-on:business-rated="sendRating" v-if="typeof business.ratings !== 'undefined'" :grade="business.ratings" :maxStars="5" :hasCounter="true" />
                        </td>
                     </tr>
                     </tbody>
               </table>
            </div>
         </div>
         <!-- Weekly Hours -->
         <div class="card">
            <div class="card-header">
               <!-- Title -->
               <h4 class="card-header-title">
                 Portfolio
               </h4>
            </div>
            <div class="card-body">
                  <div v-for="(image, index) in images" v-bind:key="index">
                     <img width="50px" :src="image" />
                </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import config from '@/config';
import Axios from 'axios';
import { EyeIcon , StarIcon } from 'vue-feather-icons';
import Rating from '@/components/Rating';

export default {
    mounted(){
       console.log("it;s mounted")
        this.getBusiness();
        console.log( this.$root.ipAddress);
    },
    computed: {
        images: function () {
           this.business.images
            let images = [];
            if (this.business && this.business.images){
               images = JSON.parse(this.business.images)
                                 .map( image => image);
            }
            return images;
        },
        imageUrl(){
            return `${this.business.default_image}`;
        }
    },
    props: {
       id: {
          type: String,
          required: true
       }
    },    
    components: {EyeIcon, StarIcon, Rating},
    data(){
        return {
            business: null,
            businessCategories: []            
        }
    },
    methods: {
        getBusiness() {
            this.loading = true;
            console.log("config", config), this.id;
            Axios.get(`${config.apiUrl}/business/${this.id}`).then((response) => {
                console.log(response);
                if(response.data.success){
                   this.business = response.data.business;
                   this.businessCategories = response.data.businessCategories;
                } else {
                   window.alert("Business does not exist");
                }
            });            
        },
        sendRating($event){
           console.log("rated business", this.business.id, $event, this.$root.ipAddress);
            Axios.post(`${config.apiUrl}/business/${this.business.id}/rate`, {ipAddress: this.$root.ipAddress, rate: $event})
                  .then( response => {
                     this.business = response.data.business;
                     window.alert("business has been rated!");
                  });           
        }
    }
}
</script>