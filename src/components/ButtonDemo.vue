<template>
  <div>
    Button 示例
  </div>
  <h1>实例1</h1>
  <div>
    <Button theme="button">hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  name:'SwitchDemo',
  components: {Button},
  setup(){
    const onClick = ()=>{
    }
    return {onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>