<script>
  import Logo from "$components/logo/index.svelte";
  let items = [{ title: "Home", slug: "/" }];
</script>

<style lang="scss">

</style>

<svelte:head>
  <script src="js/anime.min.js">

  </script>
</svelte:head>

<div>
  <slot />
</div>
