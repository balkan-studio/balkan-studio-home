<script>
  import { menuOpen } from "$stores";
  import { DISTANCES } from "$shared/constants";
</script>

<style>
  .wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .burger {
    background: transparent;
    height: 3.5rem;
    width: 3rem;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    z-index: var(--distance);
  }
  span {
    width: 100%;
    height: 3px;
    border-bottom: 1.5px solid white;
    transition: 0.2s;
    transform: rotate(var(--rotation)) translateX(var(--translation));
  }
</style>

<div class="wrap">
  <div
    style="--distance:{DISTANCES.burger}"
    on:click={menuOpen.set(!$menuOpen)}
    class="burger">
    <span
      style="--rotation:{$menuOpen ? `-45deg` : `0deg`}; --translation:{$menuOpen ? `-9px` : `0px`}" />
    <span
      style="--rotation:{$menuOpen ? `45deg` : `0deg`}; --translation:{$menuOpen ? `-8px` : `0px`}" />
    {#if !$menuOpen}
      <span />
    {/if}
  </div>
</div>
