<script>
  import Logo from "./Logo.svelte";

  import { MARGINS } from "$shared/constants";
</script>

<style>
  aside {
    height: 100%;
    display: flex;
    justify-content: center;
    margin-right: var(--medium);
  }
  /* mobile work below */
  @media (max-width: 667px) {
    aside {
      margin-right: var(--small);
    }
  }
</style>

<aside style="--large:{MARGINS.medium}; --small:{MARGINS.small};">
  <Logo />
</aside>
