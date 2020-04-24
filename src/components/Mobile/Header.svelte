<script>
  import Logo from "../../components/Sidebar/Logo.svelte";
  import Branding from "../../components/Branding.svelte";
  import Burger from "../../components/Burger.svelte";
  import { DISTANCES } from "$shared/constants";
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: var(--distance);
  }
  .burger-branding-wrap {
    width: 100px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
</style>

<nav style="--distance:{DISTANCES.burger}">
  <div class="burger-branding-wrap">
    <Logo />
    <Branding />
  </div>
  <Burger />
</nav>
