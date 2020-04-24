<script>
  import BalkanSlogan from "../BalkanSlogan.svelte";
  import Contact from "../Contact/Index.svelte";
  import { menuOpen } from "$stores";
  import { DISTANCES, MARGINS } from "$shared/constants";
</script>

<style>
  menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    background: black;
    transition: opacity 0.2s;
    z-index: var(--distance);
    opacity: var(--opacity);
    pointer-events: var(--pointerEvents);
    padding-left: var(--padding);
    box-sizing: border-box;
    padding-top: 100px;
  }
  .inner-wrap {
    padding-left: 50px;
  }
</style>

<menu
  style="--distance:{DISTANCES.mobileMenu}; --opacity:{$menuOpen ? '1' : '0'};
  --pointerEvents:{$menuOpen ? 'initial' : 'none'}; --padding:{MARGINS.small}">
  <span />
  <div class="inner-wrap">
    <Contact />
  </div>
</menu>
