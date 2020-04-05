<script>
  import { menuOpen } from "$stores";
  import BusinessCard from "./Menu/BusinessCard.svelte";
  import Exit from "./Menu/Exit.svelte";

  function closeMenu() {
    menuOpen.set(false);
  }
</script>

<style>
  div {
    background: white;
    height: 100%;
    position: fixed;
    z-index: 6;
    left: 0;
    top: 0;
    overflow: hidden;
    transition: 0.2s ease-in-out;
    width: var(--width);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  #sensor {
    overflow: hidden;
    width: var(--width);
    z-index: 5;
    background: transparent;
  }
</style>

<div style="--width:{$menuOpen ? '35%' : '0%'}">
  <Exit />
  <BusinessCard />
</div>

<!-- click svæði sem lokar menu ef klikkað er UTAN menu -->
<div
  on:click={closeMenu}
  style="--width:{$menuOpen ? '100%' : '0%'}"
  id="sensor" />
