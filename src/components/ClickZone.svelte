<script>
  import { DISTANCES } from "$shared/constants";
  import { collaboratorsToggled as toggled } from "$stores";

  const closeZone = () => {
    console.log("close it up!");
    toggled.set(false);
  };
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: transparent;
    z-index: var(--distance);
  }
</style>

{#if $toggled}
  <div on:click={closeZone} style="--distance:{DISTANCES.middle}" />
{/if}
