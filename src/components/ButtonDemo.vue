<template>
  <div>
    Button 示例
  </div>
  <h1>实例1</h1>
  <div>
    <Button>hello</Button>
    <Button theme="button">hello</Button>
    <Button theme="link">hello</Button>
    <Button theme="text">hello</Button>
  </div>
  <h1>实例2</h1>
  <div>
    <Button size="big">hello</Button>
    <Button>hello</Button>
    <Button size="normal">hello</Button>
    <Button size="small">hello</Button>
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