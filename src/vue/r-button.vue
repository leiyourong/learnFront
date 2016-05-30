<template>
  <input
    :class="['r-button']"
    type="button"
    @click="_buttonClick(this.value)"
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
  },
  methods:{
    _buttonClick(buttonName){
      this.$dispatch("_buttonClick",buttonName)
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
