<script>
  export let position;
</script>

<style>
  div {
    width: 100px;
    height: 100vh;
    position: absolute;
    background: gray;
    z-index: 8;
  }
</style>

<div>
  <slot />
</div>
