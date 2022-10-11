<!-- template -->
<template>
  <!-- header -->
  <header>
    <HeaderVue />
  </header>
  <!-- /header -->

  <!-- main -->
  <main class="main d-flex">
    <RouterView />
  </main>
  <!-- /main -->

  <!-- footer -->
  <footer>
  </footer>
  <!-- /footer -->

</template>
<!-- /template -->

<!-- script -->
<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'

export default {
  components: {
    HeaderVue
  }
}
</script>
<!-- /script -->

<!-- style -->
<style>

</style>
<!-- /style -->