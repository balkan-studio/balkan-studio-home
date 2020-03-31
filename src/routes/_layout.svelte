<script>
  import Header from "$components/Header.svelte";
  let items = [{ title: "Home", slug: "/" }];
</script>

<style lang="scss">

</style>

<svelte:head>
  <script src="js/anime.min.js">

  </script>
</svelte:head>
<main>
  <Header />
  <slot />
</main>
