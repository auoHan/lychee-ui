<template>
  <article class="markdown-body" v-html="md">
  </article>
</template>

<script lang="ts">
import md from '../markdown/intro.md';
export default {
  name:'Intro.vue',
  data() {
    return {
      md
    }
  }
}
</script>

<style lang="scss" scoped>

</style>