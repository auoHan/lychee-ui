<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="lychee-dialog-overlay" @click="closeOnClickOverlay"></div>
      <div class="lychee-dialog-wrapper">
        <div class="lychee-dialog">
          <header><slot name="title"/> <span @click="close" class="lychee-dialog-close"></span></header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue';

export default {
  name: 'Dialog',
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    ok:{
      type:Function,
    },
    cancel:{
      type:Function,
    },
  },
  setup(props,context) {
    const close = () => {
      context.emit('update:visible',!props.visible);
    };
    const closeOnClickOverlay = ()=>{
      if (props.closeOnClickOverlay){
        close()
      }
    }
    const ok = () =>{
      const result = props.ok()
      if (result){
        close()
      }
    }
    const cancel = () =>{
      props.cancel?.()
      close()
    }
    return {close,closeOnClickOverlay,ok,cancel}
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.lychee-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
