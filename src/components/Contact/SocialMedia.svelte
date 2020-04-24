<script>
  export let nonVerbose = false;
</script>

<style lang="scss">
  a,
  p {
    margin: 0 0 0.5rem;
  }
</style>

<div>
  {#if !nonVerbose}
    <label>Follow us on</label>
  {/if}
  <p>
    <a href="/" target="_blank">Facebook</a>
  </p>
  <p>
    <a href="/" target="_blank">Instagram</a>
  </p>
</div>
