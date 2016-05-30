<template>
  <span
    :class="['r-label']"
    v-if="value">
    {{value}}
  </span>
</template>


<script>
export default {
  props: {
    value: ''
  }
}
</script>

<style>
.r-label{
padding:3px;
font-size:20px;
}
</style>
