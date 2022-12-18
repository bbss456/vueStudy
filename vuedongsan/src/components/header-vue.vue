<template>
  <h1>안녕하세요 </h1>
</template>

<script>
import header from './header.vue';
export default {
  components: { header },
  methods: {
    removeItem(num) {
      this.$emit('remove', num);
    }
  }
}
</script>