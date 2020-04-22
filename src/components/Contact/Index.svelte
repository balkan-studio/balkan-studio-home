<script>
  import { MARGINS } from "$shared/constants";

  let email = "balkan@balkan.studio";
  let phone = "+354 772 0805";
</script>

<style>
  .box {
    box-sizing: border-box;
    padding: 0 var(--large) 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .item-wrap {
    padding: 0 0 1rem 0;
  }
  a,
  p {
    margin: 0 0 0.5rem;
  }
</style>

<div style="--large:{MARGINS.large}" class="box">

  <div class="item-wrap">
    <p>
      <a href="mailto:{email}?subject=feedback">{email}</a>
    </p>
    <p>{phone}</p>
  </div>

  <div class="item-wrap">
    <label>Follow us on</label>
    <p>
      <a href="/" target="_blank">Facebook</a>
    </p>
    <p>
      <a href="/" target="_blank">Instagram</a>
    </p>
  </div>

</div>
