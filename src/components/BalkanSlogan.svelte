<script>
  import { platform } from "$stores";
</script>

<style>
  p {
    font-size: var(--size);
    display: flex;
    flex-direction: column;
  }
</style>

<p style="--size:{$platform === `mobile` ? '3rem' : 'inital'}">
  <span>A web design studio</span>
  <span>based in Reykjavík, Iceland.</span>
</p>
