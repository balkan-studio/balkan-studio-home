<script>
  import { collaboratorsToggled as toggled } from "$stores";
  import { collaborators } from "$data";
  import { DISTANCES } from "$shared/constants";
</script>

<style>
  ::selection {
    background: transparent;
  }
  .wrap {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    pointer-events: initial;
    transition: opacity 0.2s;
    z-index: var(--distance);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hide {
    opacity: 0;
    pointer-events: none;
  }
  h1 {
    font-size: 6vw;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    text-align: center;
    max-width: 95%;
  }
  a {
    text-decoration: none;
    margin: 0;
  }
  a:hover {
    color: black;
  }

  /* mobile work downstairs */
  @media (max-width: 900px) {
    h1 {
      font-size: 5vh;
    }
  }
</style>

<div
  style="--distance:{DISTANCES.front}"
  class={$toggled ? 'wrap' : 'wrap hide'}>
  <h1>
    {#each collaborators as collaborator, i}
      <a target="_blank" href={collaborator.url}>
        {i === collaborators.length - 1 ? collaborator.name : collaborator.name + ', '}
      </a>
    {/each}
  </h1>

</div>
