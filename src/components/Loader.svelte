<script>
  import Logo from "../components/Sidebar/Logo.svelte";
  import { platform } from "$stores";
</script>

<style>
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  div {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background: black;
  }
  .fadeOut {
    animation: fadeOut 0.4s forwards 0.5s;
    pointer-events: none;
  }
</style>

<div class={$platform ? 'fadeOut' : ''}>
  <Logo />
</div>
