<script>
  import Primary from "$components/Primary.svelte";
  import Wrapper from "$components/Wrapper.svelte";
  import { COLORS } from "$shared/constants.js";

  let items = [{ title: "Home", slug: "/" }];
</script>

<style lang="scss">
  div {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--background);
    color: white;
  }
</style>

<svelte:head>
  <script src="js/anime.min.js">

  </script>
</svelte:head>
<Primary>
  <!-- er kannski betri leið til að útfæra þetta með scss? -->
  <div style="--background:{COLORS.background}">
    <Wrapper>
      <slot />
    </Wrapper>
  </div>
</Primary>
