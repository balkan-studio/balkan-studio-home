<script>
  import { onMount } from "svelte";
  import { collaboratorsToggled as toggled } from "$stores";

  onMount(() => {
    let regularBlock = document.getElementById("regular");
    let invertedBlock = document.getElementById("inverted");

    regularBlock.addEventListener("mouseover", () => {
      if (!$toggled) {
        invertedBlock.style.width = "100%";
      }
    });
    invertedBlock.addEventListener("mouseleave", () => {
      if (!$toggled) invertedBlock.style.width = "0%";
    });
    invertedBlock.addEventListener("click", () => {
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
    background: white;
    color: black;
    width: 0%;
    transition: width 0.1s ease-in-out;
  }
  p {
    margin: 0;
  }
</style>

<div class="wrap">
  <div class="block" id="regular">
    <p>Collaborators</p>
  </div>
  <div style="--width:{$toggled ? '100%' : '0%'}" class="block" id="inverted">
    <p>Collaborators</p>
  </div>
</div>
