<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="data in userData" v-bind:key="data">{{ data }}</li>
  </ul>
</template>

<script>
export default {
  props: {
   userData: Object
  }
};
</script>