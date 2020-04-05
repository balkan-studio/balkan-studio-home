<script>
  import Logo from "./Wrapper/Logo.svelte";
</script>

<style lang="scss">
  @import "../sass/utils";
  div {
    flex: 14 14 0;
    display: flex;
    flex-flow: column;
    max-width: 100%;
  }
  main {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    will-change: scroll-position;
    height: 100%;
    width: 100%;
  }
  header {
    z-index: 1;
    padding: 0.5em 1em;
    min-height: get-size(6);
  }
</style>

<div id="doc">
  <header>
    <slot name="nav" />
  </header>
  <main id="main">
    <slot name="main" />
  </main>
</div>
