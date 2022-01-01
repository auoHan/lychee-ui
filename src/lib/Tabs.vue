<template>
  <div class="lychee-tabs">
    <div class="lychee-tabs-nav">
      <div class="lychee-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
    </div>
    <div class="lychee-tabs-content">
      <component class="lychee-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
export default {
  name:'Tabs',
  setup(props,context){
    const defaults = context.slots.default()
    defaults.forEach((tag)=>{
      if (tag.type!==Tab){
        throw new Error('Tabs 子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag)=>{
      return tag.props.title
    })
    console.log(defaults);
    return {defaults,titles}
  }
}
</script>

<style lang="scss" scoped>
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lychee-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>