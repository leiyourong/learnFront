<template>
  <input
    :id="id"
    :class="['r-input']"
    type="text"
    @blur="_blur(this)"
    :placeHolder="placeHolder"
    />
</template>


<script>
export default {
  props:{
    placeHolder:{
      type: String,
      default: ""
    },
    id:{
      type: String,
      default: ""
    }
  },
  methods:{
    _blur (input) {
      this.$dispatch("_blur",input)
    }
  }
}
</script>

<style>
.r-input{
border:1px #000 solid;
padding:3px;
font-size:20px;
}
</style>
