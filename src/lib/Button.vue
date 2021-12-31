<template>
  <button class="lychee-button"
          :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  name:'Button',
  props:{
    theme:{
      type:String,
      default:'button'
    }
  },
}
</script>

<style lang="scss" scoped>

</style>