<script>
  export let toggled;
</script>

<style lang="scss">
  @import "./sass/burger.scss";
  div {
    @include burger-anim(3, 0.5s);
    @include easing;
  }
</style>

<div
  class="burger"
  class:closed={toggled === false}
  class:open={toggled === true}>
  {#if toggled}
    <div />
    <div />
    <div />
  {:else}
    <div />
    <div />
    <div />
  {/if}
</div>
