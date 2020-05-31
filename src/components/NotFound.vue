<template>
  <div id="app">
    <Navbar />
    <div class="container">
        <h4>Error 404</h4>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    
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