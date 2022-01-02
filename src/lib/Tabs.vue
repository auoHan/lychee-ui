<template>
  <div class="lychee-tabs">
    <div class="lychee-tabs-nav" ref="container">
      <div class="lychee-tabs-nav-item"
           :class="{selected:t===selected}"
           v-for="(t,index) in titles"
           :key="index"
           @click="select(t)"
           :ref="el => { if (el) navItems[index] = el }">{{ t }}
      </div>
      <div class="lychee-tabs-nav-indicator"  ref="indicator"></div>
    </div>
    <div class="lychee-tabs-content">
      <component class="lychee-tabs-content-item"
                 :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref, onMounted, onUpdated} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const navItems = ref < HTMLDivElement[] > ([])
    const indicator = ref < HTMLDivElement > (null)
    const container = ref < HTMLDivElement > (null)
    const x = () => {
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      console.log(result)
      const {
        width
      } = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
      const {
        left: left1
      } = container.value.getBoundingClientRect()
      const {
        left: left2
      } = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)

    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是Tab');
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    console.log(defaults);
    return {defaults, titles, select, current,navItems, indicator, container};
  }
};
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>