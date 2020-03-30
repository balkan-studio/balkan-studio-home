<script>
  import Source from "./Video/Source.svelte";
  import Zoomer from "./Video/Zoomer.svelte";
  import { COLORS } from "$shared/constants";
</script>

<style>
  #background {
    height: 100%;
    width: 100%;
    object-fit: fill;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    background: var(--background);
  }
</style>

<div style="--background:{COLORS.background}" id="background">
  <Zoomer>
    <Source />
  </Zoomer>
</div>
