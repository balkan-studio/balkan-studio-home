<script>
  import Showreel from "$components/Showreel.svelte";
</script>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <title>Balkan</title>
</svelte:head>

<div class="wrap">
  <h1>
    A web design studio based in Reykjavík, Iceland.
    <br />
    We design and code websites.
  </h1>
  <div style="position: relative">
    <Showreel />
  </div>
</div>
