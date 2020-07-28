<script>
  import { MARGINS } from "$shared/constants";
  import BalkanSlogan from "$components/BalkanSlogan.svelte";

  import { SocialMediaLinks } from "$data";

  let email = "balkan@balkan.studio";
  let phone = "+354 772 0805";
</script>

<style>
  .box {
    box-sizing: border-box;
    padding: 0 var(--large) 0 0;
    display: grid;
    grid-gap: 0.5rem;
  }
  .item-wrap {
    padding: 0 0 1rem 0;
  }
  a,
  p {
    margin: 0 0 0.5rem;
  }
  @media (max-width: 667px) {
    .box {
      padding: 0 var(--medium) 0 0;
    }
  }
</style>

<div style="--large:{MARGINS.large}; --medium:{MARGINS.medium};" class="box">

  <BalkanSlogan />

  <div class="item-wrap">
    <p>
      <a href="mailto:{email}?subject=feedback">{email}</a>
    </p>
  </div>

  <div class="item-wrap">
    <!-- <p>
      <a href={SocialMediaLinks.facebook} target="_blank">Facebook</a>
    </p>
    <p>
      <a href={SocialMediaLinks.instagram} target="_blank">Instagram</a>
    </p> -->
  </div>

</div>
