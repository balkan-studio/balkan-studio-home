<script>
  import Logo from "../components/Sidebar/Logo.svelte";
  import Branding from "../components/Branding.svelte";
</script>

<style>
  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .burger-branding-wrap {
    width: 100px;
    display: flex;
    align-content: center;
    justify-content: space-between;
  }
</style>

<nav>
  <div class="burger-branding-wrap">
    <Logo />
    <Branding />
  </div>
  <!-- burger -->
</nav>
