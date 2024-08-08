<template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class ="sidenav" id ="sidenav">
  <div id ="selection">
    <a v-bind:class="isNavBarOpen ? 'sidebar_item_open' : 'sidebar_item_closed'" href="/">Home</a>
    <a v-bind:class="isNavBarOpen ? 'sidebar_item_open' : 'sidebar_item_closed'" href="/about">About me</a>
    <a v-bind:class="isNavBarOpen ? 'sidebar_item_open' : 'sidebar_item_closed'" href="/projects">Projects</a>
    <a v-bind:class="isNavBarOpen ? 'sidebar_item_open' : 'sidebar_item_closed'" href="/blog">Blog</a>
  </div>
  <div id = "toggle" @click="toggleNav">
    <i style="display: block; top: 50%; margin-left: 2px; color: white;" v-bind:class="isNavBarOpen ? 'glyphicon glyphicon-chevron-left' : 'glyphicon glyphicon-chevron-right'"></i>
  </div>
</div>

<div id="main">
  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      isNavBarOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavBarOpen = !this.isNavBarOpen;
      if (this.isNavBarOpen) {
        document.getElementById("sidenav").style.width = "250px";
        document.getElementById("selection").style.width = "100%";
        document.getElementById("toggle").style.width = "20px";
        document.getElementById("main").style.marginLeft= "250px";
      } else {
        document.getElementById("sidenav").style.width = "20px";
        document.getElementById("selection").style.width = "0";
        document.getElementById("toggle").style.width = "100%";
        document.getElementById("main").style.marginLeft= "20px";
      }
    },
  }
}

</script>

<style>
@import url('https://fonts.cdnfonts.com/css/terminal');

#app {
  height: 100vh;
}

.sidenav {
  height: 100%;
  position: fixed;
  width: 20px;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: #111;
  transition: 0.5s;
  display: flex;
}

.sidebar_item_open {
  padding: 8px 8px 8px 32px;
  font-size: 25px;
  color: #818181;
  display: block;
  font-family: 'Terminal', sans-serif;
}

.sidebar_item_open:hover {
  color: greenyellow;
  text-decoration: none;
}

.sidebar_item_closed {
  display: none;
}

#selection {
  width: 0%; 
  padding-top: 20px;
  transition: 0.5s;
}

#toggle {
  width: 100%;
  height: 100%;
  margin-right: 0;
  background-color: #333333;
  transition: 0.5s;
}

#main {
  margin-left: 10px;
  height: 100vh;
  transition: margin-left .5s;
}
</style>
