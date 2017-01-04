<template>
  <input
    :class="['r-button']"
    type="button"
    :value="value"
    />
</template>


<script>
export default {
  props:{
    value:{
      type: String,
      default: ""
    }
  }
}
</script>

<style>
.r-button{
  padding:3px;
  text-align:center;
  border:none;
  border-radius:5px;
  width:100%;
}
</style>
