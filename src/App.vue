<template>
  <div class="app">
    <Header />
    <div class="content">
      <router-view class="contentBox" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/HeaderBox.vue'
</script>
