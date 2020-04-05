<script>
  import { menuOpen } from "$stores";
  function closeMenu() {
    menuOpen.set(false);
  }
</script>

<style>
  div {
    height: 50px;
    width: 50px;
    justify-self: center;
    position: relative;
  }
  div:hover {
    cursor: pointer;
  }
  span {
    width: 100%;
    height: 2px;
    top: 50%;
    margin-top: -1px;
    position: absolute;
    border-bottom: 1px solid black;
  }
  #one {
    transform: rotate(45deg);
  }
  #two {
    transform: rotate(-45deg);
  }
</style>

<div on:click={closeMenu}>
  <span id="one" />
  <span id="two" />
</div>
