<template>
  <div id="app" class="container">
    <div class="row">
      <app-nav></app-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNav from './Nav.vue';

export default {
  name: 'app',
  data () {
    return {
      logo:'Juice Shop'
    }
  },
  components:{
    'app-nav':AppNav
  }
}
</script>

<style>
</style>
