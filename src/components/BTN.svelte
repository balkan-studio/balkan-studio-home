<script>
  import { onMount } from "svelte";
  import { collaboratorsToggled as toggled, platform } from "$stores";
  import { DISTANCES } from "$shared/constants";

  const fullsize = "95%";

  onMount(() => {
    let regularBlock = document.getElementById("regular");
    let invertedBlock = document.getElementById("inverted");

    regularBlock.addEventListener("mouseover", () => {
      if (!$toggled) {
        if ($platform === "desktop") {
          invertedBlock.style.width = fullsize;
        }
      }
    });
    invertedBlock.addEventListener("mouseleave", () => {
      if (!$toggled) {
        if ($platform === "desktop") {
          invertedBlock.style.width = "0%";
        }
      }
    });
    invertedBlock.addEventListener("click", () => {
      toggled.set(!$toggled);
      console.log("set toggled");
    });
    document.getElementById("click-on-me").addEventListener("click", () => {
      console.log("ripe up u cunts");
      toggled.set(!$toggled);
    });
  });
</script>

<style>
  .wrap {
    position: relative;
    height: 35px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--distance);
  }
  .block {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .block:hover {
    cursor: pointer;
  }
  #inverted {
    border-bottom: 1px solid white;
    color: black;
    width: 0%;
    transition: width 0.1s ease-in-out;
  }
  p {
    margin: 0;
    letter-spacing: -1px;
  }
</style>

<div style="--distance:{DISTANCES.front}" class="wrap">
  <div class="block" id="regular">
    <p id="click-on-me">Collaborators</p>
  </div>
  <div style="width:{$toggled ? fullsize : '0%'}" class="block" id="inverted" />
</div>
