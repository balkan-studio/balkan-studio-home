<script>
  import Sass from './Primary/Sass.svelte';
</script>
<style lang='scss'>
  #primary {
    height: 100vh;
    > div {
      display: flex;
      overflow: hidden;
      position: relative;
      width: 100%;
      height:100%;
    }
  }
</style>
<div id='primary' class='theme-dark'>
  <Sass />
  <div>
    <slot></slot>
  </div>
</div>
