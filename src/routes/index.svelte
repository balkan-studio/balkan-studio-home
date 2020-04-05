<script>
  import Video from "$components/Video.svelte";
  import ScrollContainer from "$components/ScrollContainer.svelte";
  import Menu from "$components/Menu.svelte";
</script>

<style>
  .wrap {
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <title>Balkan</title>
</svelte:head>

<Menu />

<div class="wrap">
  <h1>
    A web design studio based in Reykjavík, Iceland. We design and code
    websites.
  </h1>

  <div style="position: relative">
    <p>contact</p>
    <Video />
  </div>
</div>
