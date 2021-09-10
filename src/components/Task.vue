<template lang="pug">
.task Task: {{ data.key }} &nbsp;
  button(@click="$emit('delete', data.key)") Delete
</template>
<script>
import { onMounted } from "vue";

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    onMounted(() => {
      console.count("Komponen Mounted");
    });
  },
};
</script>