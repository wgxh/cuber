<template>
  <div class="cuber">
    <div class="stage">
      <Surface v-for="(surface, index) in surfaces" :key="index" :name="surface.name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';
import { useCuber } from '../hooks/Cuber';
import { Names } from '../hooks/Surface';
import Surface from './Surface.vue'

export default defineComponent({
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    depth: {
      type: Number,
    },
    name: {
      type: String,
    }
  },
  setup(props) {
    const { surfaces } = useCuber(props.name!, props.width!, props.height!, props.depth!)
    for (let v of surfaces) {
      provide(v.name, v)
    }
    return {
      surfaces,
      width: props.width + 'px',
      height: props.height + 'px',
    }
  },
  components: {
    Surface,
  }
})
</script>

<style lang="scss">
.cuber {
  perspective: 3000px;
  width: v-bind(width);
  height: v-bind(height);
  .stage {
    transform: rotateX(0deg) rotateY(0deg);
    transform-style: preserve-3d;
    width: inherit;
    height: inherit;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: rotate 10s infinite linear;
  }
}
@keyframes rotate {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
</style>
