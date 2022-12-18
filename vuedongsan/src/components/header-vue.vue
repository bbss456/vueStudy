<template>
  <ul>
    <todo-item @remove="removeItem"></todo-item>
  </ul>
</template>

<script>
export default {
  methods: {
    removeItem(num) {
      this.$emit('remove', num);
    }
  }
}
</script>