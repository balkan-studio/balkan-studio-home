<script>
  import { platform } from "$stores";
  import { MARGINS } from "$shared/constants";
  // components
  import Showreel from "$components/Showreel.svelte";
  import Contact from "$components/Contact/Index.svelte";
  import BalkanSlogan from "$components/BalkanSlogan.svelte";
  import Branding from "$components/Branding.svelte";
  import CollaboratorsBTN from "$components/BTN.svelte";
  import Collaborators from "$components/Collaborators.svelte";
</script>

<style>
  .page-box {
    display: grid;
    grid-template-rows: auto auto 1fr;
    height: 100%;
    width: 100%;
  }
  .contact-video-wrap {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .contact-collabbtn-wrap {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .showreel-collab-wrap {
    height: 100%;
    width: 100%;
    position: relative;
  }

  @media (max-width: 900px) {
    .page-box {
      display: flex;
      margin: 0 auto;
    }
  }
</style>

<div class="page-box">

  {#if $platform === 'desktop'}
    <Branding />
    <BalkanSlogan />
  {/if}

  <!-- contact + video -->
  <div class="contact-video-wrap">
    {#if $platform === 'desktop'}
      <div class="contact-collabbtn-wrap" style="--large:{MARGINS.large}">
        <Contact />
        <span />
        <CollaboratorsBTN />
      </div>
    {/if}
    <div class="showreel-collab-wrap">
      <Showreel />
      <Collaborators />
    </div>
  </div>

</div>
