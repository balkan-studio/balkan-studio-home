<script>
  import { scrollPosY, menuOpen } from "$stores";
</script>

<style>
  div {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 5% 10%;
    transition: 0.2s;
    filter: blur(var(--blur));
  }
</style>

<div style="--blur:{$menuOpen ? '5px' : '0px'}">
  <slot />
</div>
