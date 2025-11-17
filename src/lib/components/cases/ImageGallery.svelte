<script lang="ts">
  interface Image {
    src: string;
    alt: string;
    caption?: string;
  }
  
  export let images: Image[];
</script>

<div class="gallery">
  <h3>Galeria</h3>
  <div class="gallery-grid">
    {#each images as image}
      <figure class="gallery-item">
        <img src={image.src} alt={image.alt} />
        {#if image.caption}
          <figcaption>{image.caption}</figcaption>
        {/if}
      </figure>
    {/each}
  </div>
</div>

<style>
  .gallery {
    margin: 4rem 0;
  }
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 2rem 0;
    color: #1a1a1a;
  }
  
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .gallery-item {
    margin: 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .gallery-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  figcaption {
    padding: 1rem;
    background: #f8f9fa;
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .gallery {
      margin: 2.5rem 0;
    }
    
    .gallery-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>

