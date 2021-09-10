<template>
  <div id="nav"><router-link to="/">Home</router-link> |</div>
  <router-view />
</template>

<style>
.task {
  width: 400px;
  padding: 10px;
  margin: 0 0 10px 0;
  border: solid 1px #ececec;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 400px;
  margin: 0 auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
