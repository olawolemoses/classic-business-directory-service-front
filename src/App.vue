<template>
  <div id="app">
    <Navbar />
    <div class="container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Axios from 'axios';

export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted(){
    this.getIpAddress();
  },
  methods: {
    getIpAddress(){
      Axios.get(`https://ipinfo.io/ip`).then((response) => {
          console.log(response);
          this.$root.ipAddress = response.data;
      });              
    }
  }
}
</script>

<style>
  * {
    font-family: 'Roboto';
  }

  body {
    background-color:#ccdef5;
  }
</style>