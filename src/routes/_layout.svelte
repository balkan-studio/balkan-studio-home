<script>
  import Primary from "$components/Primary.svelte";
  import Sidebar from "$components/Sidebar/Index.svelte";
  import MobileHeader from "../components/Mobile/Header.svelte";
  import MobileFooter from "../components/Mobile/Footer.svelte";
  import MobileMenu from "../components/Mobile/Menu.svelte";
  import SEO from "../components/seo.svelte";
  import ClickZone from "../components/ClickZone.svelte";
  import Loader from "../components/Loader.svelte";

  import { platform, animationDelay, videoSwitch } from "$stores";
  import { MARGINS } from "$shared/constants";

  import { onMount } from "svelte";

  onMount(() => {
    document
      .getElementById("main")
      .style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
  });

  let width, height;
  $: width, platform.detect(width);
  $: (width, height), videoSwitch.detect(width, height);
</script>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      pointer-events: none;
    }
    to {
      opacity: 1;
      pointer-events: initial;
    }
  }
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
  @media (max-width: 667px) {
    main {
      padding: 0 var(--small) 0 var(--small);
      grid-template-columns: 1fr;
      grid-template-rows: 85px auto 85px;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
  }
</style>

<svelte:head>
  <script src="js/anime.min.js">

  </script>
  <SEO />
</svelte:head>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<Primary>
  <Loader />
  <main
    id="main"
    style="--small:{MARGINS.small}; --medium:{MARGINS.medium}; --large:{MARGINS.large};
    --animationDelay:{$animationDelay}">

    <!-- þetta lokar collaborators popup ef klikkað er UTAN takkans eða collab texta -->
    <ClickZone />

    {#if $platform === 'desktop'}
      <Sidebar />
    {:else}
      <MobileHeader />
      <MobileMenu />
    {/if}
    <!-- page contents -->
    <slot />

    {#if $platform === 'mobile'}
      <MobileFooter />
    {/if}

  </main>

</Primary>
