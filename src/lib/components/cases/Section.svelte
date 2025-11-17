<script lang="ts">
  export let title: string;
</script>

<section class="case-section">
  <h2>{title}</h2>
  <div class="content">
    <slot />
  </div>
</section>

<style>
  .case-section {
    margin: 4rem 0;
  }
  
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    color: #1a1a1a;
    position: relative;
    padding-bottom: 0.75rem;
  }
  
  h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #000000, #d3d3d3);
    border-radius: 2px;
  }
  
  .content {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #333;
  }
  
  .content :global(p) {
    margin: 1rem 0;
  }
  
  .content :global(strong) {
    color: #1a1a1a;
    font-weight: 600;
  }
  
  .content :global(ul) {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  .content :global(li) {
    margin: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    .case-section {
      margin: 2.5rem 0;
    }
    
    .content {
      font-size: 1rem;
    }
  }
</style>

