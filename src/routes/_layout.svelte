<script>
  import Primary from "$components/Primary.svelte";
  import Sidebar from "$components/Sidebar/Index.svelte";
  import MobileHeader from "../components/MobileHeader.svelte";

  import { platform } from "$stores";
  import { MARGINS } from "$shared/constants";

  let width;
  $: width, platform.detect(width);
</script>

<style>
  main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    box-sizing: border-box;
    padding: var(--medium);
  }
  @media (min-width: 1600px) {
    main {
      padding-bottom: var(--large);
    }
  }

  /* mobile work below */
  @media (max-width: 900px) {
    main {
      padding: var(--small);
      grid-template-columns: 1fr;
      grid-template-rows: 85px 1fr 85px;
    }
  }
</style>

<svelte:head>
  <title>Balkan Studio</title>
  <script src="js/anime.min.js">

  </script>
</svelte:head>

<svelte:window bind:innerWidth={width} />

<Primary>

  <main
    style="--small:{MARGINS.small}; --medium:{MARGINS.medium}; --large:{MARGINS.large};">

    {#if $platform === 'desktop'}
      <Sidebar />
    {:else}
      <MobileHeader />
    {/if}
    <!-- page contents -->
    <slot />
  </main>

</Primary>
