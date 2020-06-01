<template>
<div class="col-12 col-lg-6">
    <!-- Card -->
    <div class="card">
        <div class="card-body text-center">
            <!-- Dropdown -->
            <div class="dropdown card-dropdown">
                <a href="#" class="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fe fe-more-vertical"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a href="#!" class="dropdown-item">
                        View More
                    </a>
                    <a href="#!" class="dropdown-item">
                        Rate
                    </a>
                </div>
            </div>
            <!-- Avatar -->
             <router-link :to="`/business/${business.id}`" href="team-overview.html" class="card-avatar avatar avatar-lg mx-auto">
                <img width="500" :src="imageUrl" alt="" class="avatar-img rounded">
            </router-link>
            <!-- Title -->
            <h2 class="card-title">
                <router-link  :to="`/business/${business.id}`">{{ business.name }}</router-link>
            </h2>
            <!-- Text -->
            <p class="card-text text-muted" v-html="business.description.substring(0, 100)">
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

            <router-link :to="`/business/${business.id}`" class="btn btn-primary">View more</router-link>
        </div>
    </div>
</div>
</template>


<script>
import { EyeIcon , StarIcon } from 'vue-feather-icons';

export default {
    props: {
        business: {
            type: Object
        }
    }, 
    
    components: {EyeIcon, StarIcon},
    
    computed: {
        imageUrl(){
            return `${this.business.default_image}`;
        }
    },
    data(){
        return {}
    },    
    methods: {
    
    }
}
</script>