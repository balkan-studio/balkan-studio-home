<script>
  import Showreel from "$components/Showreel.svelte";
  import ContactInfo from "$components/Sidebar/ContactInfo.svelte";
  import SocialMedia from "$components/Sidebar/SocialMedia.svelte";
</script>

<style lang="scss">
  @import './sass/utils/scale';
  .wrap {
    display: flex;
    flex-direction: column;
    > div {
      display: flex; 
    }
  }
  
  .info { 
    display: flex;
    flex-flow: column;
    padding-right: 3em;

    > .cl { 
      margin-top: auto;
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  @include screen(max 1024px) {
    .info {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>Balkan</title>
</svelte:head>

<div class="wrap">
  <h1>
    A web design studio based in Reykjavík, Iceland.
    <br />
    We design and code websites.
  </h1>
  <div style="position: relative">
    <div class="info">
      <div class="ci">
        <ContactInfo /> 
      </div>
      <div class="sm">
        <SocialMedia /> 
      </div> 
      <div class='cl'>
        <span> Collaborators </span>
      </div>
    </div>
    <Showreel />
  </div>
</div>
