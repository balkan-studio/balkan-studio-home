<script>
  import { scrollPosY } from "$stores";
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
  }
  p {
    color: white;
    position: fixed;
    top: 0;
    left: 2rem;
  }
</style>

<div>
  <p>{$scrollPosY}</p>
  <slot />
</div>
