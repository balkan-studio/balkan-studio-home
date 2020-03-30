<script>
  import Logo from "$components/Logo.svelte";
  let items = [{ title: "Home", slug: "/" }];
</script>

<style lang="scss">

</style>

<svelte:head>
  <script src="js/anime.min.js"></script>
</svelte:head>
<Logo />
<main>
  <slot/>
</main>
