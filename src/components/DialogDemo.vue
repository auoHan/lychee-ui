<template>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false"
      :ok="ok" :cancel="cancel">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>123</p>
      <p>456</p>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref,h} from 'vue'
import {openDialog} from '../lib/openDialog'
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
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {x,toggle,ok ,cancel,showDialog}
  }
}
</script>

<style lang="scss" scoped>

</style>