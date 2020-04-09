<script>
  import Primary from "$components/Primary.svelte";
  import Wrapper from "$components/Wrapper.svelte";
  import Branding from "$components/Branding.svelte";
  import Sidebar from "$components/Sidebar.svelte";
  //  export let segment;
</script>

<style lang="scss">
  @import './sass/vars';
  div {
    margin: 0 auto;
    padding: 0 1em;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    min-height: 100%;
    max-width: $main-max-width;
  }
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<svelte:head>
  <script src="js/anime.min.js">

  </script>
</svelte:head>
<Primary>
  <Sidebar />

  <Wrapper>
    <nav slot="nav">
      <Branding />
    </nav>
    <div slot="main">
      <slot />
    </div>
  </Wrapper>

</Primary>
