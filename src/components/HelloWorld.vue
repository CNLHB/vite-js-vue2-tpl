<!--  -->
<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="addCount">count is {{ count }}</button>
      <p>
        Edit

        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the
      official Vue + Vite starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank"
        >Vue Docs Scaling up Guide</a
      >.
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello World',
      count: 0
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    addCount() {
      this.count++;
    }
  }
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
