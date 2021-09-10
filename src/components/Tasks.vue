<template lang="pug">
div 
  button.btn(@click="res.AddTask") Add Task
div
  Task(
    v-for="task in res.results",
    :key="task.key",
    :data="task",
    @delete="res.Delete($event)"
  )
</template>
<script>
import { defineComponent, onMounted, reactive } from "vue";
import axios from "axios";
import Task from "./Task";

export default defineComponent({
  components: {
    Task,
  },
  setup() {
    const res = reactive({
      endpoint: "https://ikamai-sandbox.firebaseio.com/vue/sample",
      results: [],

      //-- add new
      AddTask: () => {
        axios
          .post(`${res.endpoint}/tasks.json`, {
            title: "new",
            desc: "",
          })
          .then(() => {
            // after
            res.GetAll();
          });
      },

      //- get all
      GetAll: async () => {
        const { data } = await axios.get(
          `${res.endpoint}/tasks.json?shallow=true`
        );
        if (data) {
          //- ubah ke KeyValue
          res.results = Object.keys(data).map((k) => ({
            key: k,
            value: data[k],
          }));
        }
      },

      //- delete
      Delete: (id) => {
        axios.delete(`${res.endpoint}/tasks/${id}.json`).then(() => {
          //- =================================
          //- diganti splice ben gak fetch meneh
          //  res.GetAll();
          //- =================================
          const findId = res.results.findIndex((x) => x.key === id);
          res.results.splice(findId, 1);
        });
      },
    });

    //- pas mounted
    onMounted(() => {
      res.GetAll();
    });
    return { res };
  },
});
</script>
<style lang="css" scoped>
.btn {
  border: solid 1px #ccc;
  padding: 10px 15px;
  margin: 0 0 10px 0;
  cursor: pointer;
}
</style>