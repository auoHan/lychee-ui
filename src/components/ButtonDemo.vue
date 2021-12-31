<template>
  <div>
    Button 示例
  </div>
  <h1>实例1</h1>
  <div>
    <Button @click="onClick"
      @focus="onClick"
      @mouseover="onClick"
      size="small">hello</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  name:'SwitchDemo',
  components: {Button},
  setup(){
    const onClick = ()=>{
      console.log('hi');
    }
    return {onClick}
  }
}
</script>

<style lang="scss" scoped>

</style>