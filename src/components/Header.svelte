<script lang="ts">
  let y: number;
  let scrollDirection = 0;
  let lastScroll: number;
  let headerHeight: number;
  $: {
    scrollDirection = Math.sign(y - (lastScroll ?? y));
    lastScroll = y;
  }
</script>

<svelte:window bind:scrollY={y} />
<header
  data-js="header"
  class:hideHeader={scrollDirection === 1 && y > headerHeight}
  bind:offsetHeight={headerHeight}
>
  <a href="/" class="logo" title="Accueil">
    <img
      src="/logo.jpg"
      width="175"
      height="100"
      alt="logo de la cité éducativie"
    />
  </a>
  <nav>
    <ul role="list">
      <li><a href="/actualites">Actualités</a></li>
      <li><a href="/etablissements">Établissements</a></li>
      <li><a href="/apropos">À Propos</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 99;
    background: var(--clr-surface-1);
    display: flex;
    align-items: center;
    gap: var(--s-s);
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    padding-block: var(--s-xs);
    transition: transform 0.4s cubic-bezier(1, 0.26, 0.51, 0.72);
  }

  header.hideHeader {
    transform: translateY(-100%);
  }

  nav ul {
    gap: var(--s-s);
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: var(--clr-text-2);
  }

  @media screen and (min-width: 36rem) {
    header {
      flex-direction: row;
      justify-content: space-between;
      padding-inline: var(--s-m);
      gap: 0;
    }
    nav ul {
      gap: var(--s-m);
    }
    nav a {
      transition: color 0.2s;
    }
    nav a:hover,
    :focus-visible {
      color: var(--clr-secondary-2);
    }
  }
</style>
