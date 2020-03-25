<script>
  import Sass from "./Sass.svelte";
</script>

<style lang="scss">
  div {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>

<div>
  <Sass />
  <slot />
</div>
