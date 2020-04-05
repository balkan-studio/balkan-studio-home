<script>
  import { slide } from 'svelte/transition';
  import { quartIn, quartOut } from 'svelte/easing';

  let items = [
    { 
      class: 'facebook', 
      href: ''
    },
    { 
      class: 'instagram', 
      href: ''
    }
  ];
</script> 
<style>
  div {
    text-align: center;
    padding-top: 1em;
  }
  a {
    text-decoration: none;
    font-size: 2em;
  }
</style>
{#each items as item}
  <div 
   in:slide={{delay: 250, duration: 500, easing: quartIn }}
   out:slide={{delay: 50, duration: 500, easing: quartOut }} >
    <a href='{item.href}' target='_blank'><i class='ic {item.class}'></i></a>
  </div>
{/each}

