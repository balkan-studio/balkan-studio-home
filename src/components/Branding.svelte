<script>
  import Logo from './Wrapper/Logo.svelte';
</script>
<style lang='scss'>
  @import '../sass/utils';
  div {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    max-width: 64em;
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
      justify-content: flex-end;      
    }
  }
</style>
<div>
  <Logo />
  <span>
    Balkan<br>Studio
  </span>
</div>

