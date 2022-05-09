<template>
  <div class="flex flex-wrap">
    <div class="head w-full text-left p-5">
      <h1 class="text-5xl">
        {{ title }}
      </h1>
      <h2 class="text-2xl ml-1 mt-4">
        {{ subtitle }}
      </h2>
    </div>
    <div class="nav w-full">
      <div class="nav-item float-left py-3 ml-5 text-xl">Projects</div>
      <div class="nav-item float-left py-3 ml-3 text-xl">About</div>
    </div>
    <div>
      <div class="box rounded-2xl m-4">
        <div class="content p-4 pb-7 flex flex-row">
          <div class="left w-auto max-w-sm">
            <div class="text-3xl text-left">Header</div>
            <div class="text-left w-full">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="tagrow flex flex-row">
              <div class="bubble rounded-full px-4 mr-1">tag1</div>
              <div class="bubble rounded-full px-4">tag2</div>
            </div>
          </div>
          <div class="right w-auto max-w-lg">
            <div class="codebox text-left p-5 ml-5 rounded-tr-lg">
              <code>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </code>
            </div>
          </div>
        </div>
        <div class="footer rounded-b-2xl h-8 pl-4 flex flex-row">
          <div class="icon rounded-full w-8 h-8 border-2 mr-1">
            <div class="icon-text">a</div>
          </div>
          <div class="icon rounded-full w-8 h-8 border-2 mr-1">
            <div class="icon-text">a</div>
          </div>
          <div class="icon rounded-full w-8 h-8 border-2 mr-1">
            <div class="icon-text">a</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: 'Closing the GAP',
      subtitle: 'in Non-Latin Script Data',
    }
  }
}
</script>

<style>
body {
  background-color: #2E4A61;
}

.head {
  color: #fff;
  font-family: 'Comfortaa', cursive;
}

.nav {
  background-color: #F29559;
  color: #202C39;
}

.box {
  background-color: #B8B08D;
}

.box .footer {
  background-color: #202C39;
}

.icon {
  background-color: #F29559;
  position: relative;
  top: -50%;
  border-color: #202C39;
}

.icon-text {
}

.bubble {
  background-color: #F2D492;
}

.codebox {
  background-color: #000;
  color: #fff;
}

.nav-item {
}
.nav-item:hover {
  color: #F2D492;
  cursor: pointer;
}

#app {
  font-family: Noto Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
