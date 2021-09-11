<template lang="pug">
TinyMCE
Tasks
</template>

<script>
// @ is an alias to /src
import TinyMCE from "@/components/TinyMce";
import Tasks from "@/components/Tasks";

export default {
  name: "Home",
  components: {
    TinyMCE,
    Tasks,
  },
};
</script>
