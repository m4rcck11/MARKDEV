<script lang="ts">
  import { onMount } from 'svelte';
  
  export let title: string;
  
  let headlineElement: HTMLElement;
  
  function goBack() {
    window.history.back();
  }
  
  onMount(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      if (headlineElement) headlineElement.classList.add('inview');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('inview');
        });
      },
      { threshold: 0.15 }
    );

    if (headlineElement) io.observe(headlineElement);
  });
</script>

<section class="hero" aria-labelledby="hero-title">
  <button class="back-button" on:click={goBack} aria-label="Voltar">
    <span class="back-arrow">←</span>
  </button>
  
  <h1 id="hero-title" bind:this={headlineElement} class="headline">
    {title}<span class="dot">.</span>
  </h1>
</section>

<style>
  .hero {
    padding: 8rem 1.25rem 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    position: relative;
  }

  .back-button {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--text, #000000);
    padding: 0;
    z-index: 10;
  }

  .back-button:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .back-button:active {
    transform: translateY(0);
  }

  .back-arrow {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
  }

  .headline {
    font-family: var(--serif, 'Editorial New', 'Georgia', 'Times New Roman', serif);
    font-weight: 700;
    font-size: clamp(3rem, 12vw, 7.5rem);
    line-height: 0.9;
    margin: 0;
    letter-spacing: -0.02em;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 420ms ease, transform 420ms ease;
  }

  :global(.headline.inview) {
    opacity: 1;
    transform: none;
  }

  .headline .dot {
    display: inline-block;
    transform: translateY(0.04em);
  }

  /* subtle hero underline pulse */
  .headline::after {
    content: '';
    display: block;
    height: 2px;
    width: 36px;
    margin: 1rem auto 0;
    background: var(--accent, #000000);
    opacity: 0.18;
    border-radius: 2px;
    transform: scaleX(0.8);
    transition: transform 900ms cubic-bezier(0.2, 0.9, 0.2, 1);
  }

  .headline:hover::after {
    transform: scaleX(1.2);
    opacity: 0.28;
  }

  @media (max-width: 600px) {
    .hero {
      padding: 4rem 1.25rem;
    }
    
    .back-button {
      top: 1rem;
      left: 1rem;
      width: 3rem;
      height: 3rem;
    }
    
    .back-arrow {
      font-size: 1.2rem;
    }
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .headline {
      transition: none;
    }
    
    .headline::after {
      transition: none;
    }
  }
</style>

