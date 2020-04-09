<script>
  import { fade } from "svelte/transition";
  import Burger from "./Burger.svelte";
  import ContactInfo from "./Sidebar/ContactInfo.svelte";
  import SocialMedia from "./Sidebar/SocialMedia.svelte";
  let toggled;
  function sidebar_toggle(node) {
    function handle_click(event) {
      toggled = !toggled;
    }
    node.addEventListener("click", handle_click);

    return {
      destroy() {
        node.removeEventListener("click", handle_click);
      }
    };
  }
</script>

<style lang="scss">
  @import "../sass/utils";

  aside {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    overflow: hidden;

    z-index: 2;

    display: flex;
    flex-flow: column;

    transition: width 0.6s, background-color 0.6s, height 0.6s;
    @include easing;

    &.collapse {
      width: 50%;
      height: get-size(6);
    }

    > div {
      transition: background-color 0.6s;
      @include easing;
      flex: 1 1 auto;
      &.ci {
        padding: 1em;
      }
    }
    header {
      min-height: get-size(6);
      display:  flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 1em;
    }
  }

  span {
    display: inline-block;
    position: absolute;
    right: 1em;
    top: 1em;
    cursor: pointer;
    z-index: 3;
  }

  @include screen(min 1023px) {
    aside {
      display: none;
    }
    span {
      display: none;
    }
  }

</style>
<span use:sidebar_toggle>
  <Burger {toggled} />
</span>

<aside id="sidebar" class={!toggled ? 'collapse' : 'open'}>
  <header>
  </header>
  <slot />
  {#if toggled}
    <div class="ci" transition:fade>
      <ContactInfo />
      <SocialMedia />
    </div>
  {/if}
</aside>
