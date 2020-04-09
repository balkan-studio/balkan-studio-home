<script>
  import Logo from './Wrapper/Logo.svelte';
</script>
<style lang='scss'>
  @import './sass/utils';
  @import './sass/vars'; 
  div {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    max-width: $main-max-width + 5em;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1em;
    line-height: 1;
    span {
      padding-left: 1em;
    }
  }
  
  @include screen(max 1023px) {
    div {
      padding: 0;
    }
  }
</style>
<div>
  <Logo />
  <span>
    Balkan<br>Studio
  </span>
</div>

