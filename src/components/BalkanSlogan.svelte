<script>
  import { platform } from "$stores";
</script>

<style>
  p {
    font-size: var(--size);
  }
</style>

<p style="--size:{$platform === `mobile` ? '3rem' : 'inital'}">
  A web design studio
  {#if $platform === 'desktop'}
    <br />
  {/if}
  based in Reykjavík, Iceland.
</p>
