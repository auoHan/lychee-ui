<template>
  <div class="top-nav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-lychee"></use>
      </svg>
      <h4 v-if="route.name!=='home'">首页</h4>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import {inject,Ref} from 'vue'
import { useRoute } from "vue-router"
export default {
  name:'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () =>{
      asideVisible.value = !asideVisible.value
    }
    const route = useRoute();
    return {toggleAside,route}
  }
}
</script>

<style lang="scss" scoped>
$color: #007974;
.top-nav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  color: $color;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
      display: inline-block;
      vertical-align:bottom;
    }
    >h4{
      display: inline-block;
      vertical-align:middle;
      transform: translateY(-2px);
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);

  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
