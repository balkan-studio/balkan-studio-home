<script>
  import { scrollPosY } from "$stores";

  console.log(window.innerHeight + $scrollPosY);
</script>

<style>
  div {
    height: 5000px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<svelte:window bind:scrollY={$scrollPosY} />

<div>
  <p>{scrollPosY}</p>
  <slot />
</div>
