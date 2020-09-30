<template>
  <div>
    <h2>Data Binding</h2>
    <div class="container">
      <p class="jumbotron">I am : <input type="text" v-model="user"></p>
      <br>
      <p class="jumbotron" v-if="user != null">Welcome {{ user }} !</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  props: {
    user: String
  }
}
</script>

<style>
  
</style>
