<script>
  let className = "layout-default";

  export { className as class };
</script>

<style>

</style>

<div id="page" class={className}>
  <slot name="header" />
  <slot />
</div>
