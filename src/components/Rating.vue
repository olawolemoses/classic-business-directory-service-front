<template>
  <div class="rating">
    <div class="list">
      <span @click="rate(star)" v-for="star in maxStars" :class="{ 'active': star <= stars }" :key="star.stars" class="star">
         <star-icon size="1.5x"  :stroke="star <= stars ? 'Gold' : 'Black'" class="custom-class"></star-icon>
      </span>
    </div>
    <div v-if="hasCounter" class="info counter">
        {{ stars }} <span class="divider">/</span> <span class="score-max">{{ maxStars }}</span> 
         <br /><a href="#" @click="sendRating()">Rate</a>

    </div>
  </div>
</template>
<script>
import { StarIcon } from 'vue-feather-icons';

export default {
  name: 'Rating',
  props: ['grade', 'maxStars', 'hasCounter'],
  components: {StarIcon},
  mounted(){
      console.log("rating coming in", this.grade);
  },
  data() {
    return {
      stars: this.grade
    }
  },
  methods: {
    rate(star) {
      if (typeof star === 'number' && star <= this.maxStars && star >= 0) {
        this.stars = this.stars === star ? star - 1 : star
      }
    },
    sendRating(){
      this.$emit("business-rated", this.stars);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->