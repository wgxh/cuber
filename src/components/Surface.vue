<template>
  <div :class="['surface', name]"></div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { Surface } from '../hooks/Surface'

export default defineComponent({
  props: {
    name: {
      type: String,
    }
  },
  setup(props) {
    const { width, height, rotateX, rotateY, translateZ } = inject<Surface>(props.name!)!

    return {
      width: width + 'px',
      height: height + 'px',
      rotateX: rotateX + 'deg',
      rotateY: rotateY + 'deg',
      translateZ: translateZ + 'px',
    }
  }
})
</script>

<style lang="scss">
.surface {
  width: v-bind(width);
  height: v-bind(height);
  position: absolute;
  left: 0;
  top: 0;
  transform: rotateX(v-bind(rotateX)) rotateY(v-bind(rotateY)) translateZ(v-bind(translateZ));
  border: 1px solid #000;
}
</style>
