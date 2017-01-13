<template>
  <input
    type = "text"
    :id = "id"
    :class = "['r-input']"
    :placeholder = "placeholder"
    :value = "value"
    @input = "changeValue"
    />
</template>


<script>
export default {
  props: {
    placeholder:{
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: "",
      required: true
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeValue: function(e){
      this.$emit('input', e.target.value)
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
