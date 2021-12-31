<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
      :ok="ok" :cancel="cancel"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue'
export default {
  name:'SwitchDemo',
  components: {Button, Dialog},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const ok = ()=>{
      return false
    }
    const cancel = ()=>{
    }
    return {x,toggle,ok ,cancel}
  }
}
</script>

<style lang="scss" scoped>

</style>