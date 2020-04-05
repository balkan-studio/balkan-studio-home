<script>
  import Logo from "$components/Logo.svelte";
</script>

<style>
  div {
    z-index: 4;
    height: 40px;
    max-width: 150px;
    width: auto;
    position: absolute;
    top: 40px;
    left: 25px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  p {
    color: white;
  }
</style>

<div>
  <Logo />
  <p>Balkan Studio</p>
</div>
