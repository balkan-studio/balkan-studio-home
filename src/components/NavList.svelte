<script>
  export let segment;
  export let items;
</script>

<style lang="scss">
  $nav-color: #4a6082;
  $nav-color-active: lighten($nav-color, 10%);
  $nav-color-underline: #f79e7c;
  ul {
    margin: 0;
    display: inline-block;
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 0em 0.5em;
    color: $nav-color;
    &.active {
      color: $nav-color-active;
      span::before {
        content: "";
        position: absolute;
        width: 100%;
        bottom: -2px;
        height: 2px;
        background-color: $nav-color-underline;
      }
    }
  }

  a {
    text-decoration: none;
    span {
      position: relative;
      display: inline-block;
      font-weight: 700;
    }
  }
</style>

<ul>
  {#each items as item}
    {#if item.slug}
      <li class:active={segment === item.slug}>
        <a href={item.slug} rel="prefetch">
          <i class="nf-ic medium">{item.icon}</i>
          &nbsp;
          <span>{item.title}</span>
        </a>
      </li>
    {:else}
      <li class:active={typeof segment === 'undefined'}>
        <a href="/" rel="prefetch">
          <i class="nf-ic medium">{item.icon}</i>
          &nbsp;
          <span>{item.title}</span>
        </a>
      </li>
    {/if}
  {/each}
</ul>
