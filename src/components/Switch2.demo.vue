<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="bool" disabled />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  name:'Switch2.demo',
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>

<style lang="scss" scoped>

</style>