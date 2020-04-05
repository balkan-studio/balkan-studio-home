<script>
  import { fade } from 'svelte/transition';
  import Burger from './Burger.svelte';
  import SocialMedia from './Sidebar/SocialMedia.svelte';
  import ContactInfo from './Sidebar/ContactInfo.svelte';
  let toggled;
  function sidebar_toggle(node) {
    function handle_click(event) {
      toggled = !toggled; 
    } 
    node.addEventListener('click', handle_click);

    return {
      destroy() {
        node.removeEventListener('click', handle_click);
      }
    };
  }
</script>

<style lang='scss'>
  @import '../sass/utils';
  aside {
    flex: 4 4 0;
    position: relative;
    display: flex;
    flex-flow: column;
    white-space: nowrap;
    z-index: 2;
    max-width: 25em;
    transition: max-width .6s, background-color .6s;
    @include easing;
    &.collapse {
      max-width: get-size(6);
    }

    > div {
      margin-top: auto;
      &.sm {
        padding: .5em;
        max-width: get-size(6);
      }
      &.ci {
        padding: 1em;
      }
    }

    header {
      z-index: 1;
      padding: .5em;
      min-height: get-size(6);
      > span {
        display: inline-block;
        padding: .5em .25em;
        cursor: pointer;
      }
    }
  }
  @include screen((min 1400px, max 1800px)) {
    aside {
      flex: 5 5 0;
    }
  }
  @include screen((min 1024px, max 1399px)) {
    aside {
      flex: 6 6 0;
    }
  }

  @include screen(max 1023px) {
    aside {
      position: absolute;
      max-width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      left: 0;
      overflow: hidden;
      &.collapse {
        height: get-size(6);
      }
    }
  }
</style>

<aside id='sidebar' class='{!toggled ? "collapse" : "open"}' >
  <header>
    <span use:sidebar_toggle >
      <Burger {toggled} />
    </span>
  </header>
  <slot />
  {#if toggled}
    <div class='ci' transition:fade>
      <ContactInfo />
    </div>
  {/if} 
  <div class='sm'>
    {#if !toggled}
      <SocialMedia />
    {/if}
  </div>
</aside>
