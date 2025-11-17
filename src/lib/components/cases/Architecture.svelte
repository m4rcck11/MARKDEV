<script lang="ts">
  import { onMount } from 'svelte';
  
  export let mermaidCode: string;
  export let description: string;
  
  let diagramContainer: HTMLElement;
  let isRendered = false;
  
  onMount(async () => {
    try {
      // Importa mermaid dinamicamente
      const mermaid = await import('mermaid');
      
      mermaid.default.initialize({
        startOnLoad: false,
        theme: 'default',
        themeVariables: {
          fontSize: '16px'
        }
      });
      
      // Renderiza o diagrama
      const { svg } = await mermaid.default.render('mermaid-diagram', mermaidCode);
      if (diagramContainer) {
        diagramContainer.innerHTML = svg;
        isRendered = true;
      }
    } catch (error) {
      console.error('Erro ao renderizar diagrama Mermaid:', error);
    }
  });
</script>

<section class="architecture-section">
  <h2>Arquitetura do Sistema</h2>
  <p class="description">{description}</p>
  
  <div class="diagram-wrapper">
    {#if !isRendered}
      <div class="loading">Carregando diagrama...</div>
    {/if}
    <div bind:this={diagramContainer} class="diagram-container"></div>
  </div>
</section>

<style>
  .architecture-section {
    margin: 4rem 0;
    padding: 3rem;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 12px;
  }
  
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #1a1a1a;
  }
  
  .description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 2rem;
  }
  
  .diagram-wrapper {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  }
  
  .diagram-container {
    display: flex;
    justify-content: center;
    min-height: 400px;
  }
  
  .diagram-container :global(svg) {
    max-width: 100%;
    height: auto;
  }
  
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    color: #999;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    .architecture-section {
      margin: 2.5rem 0;
      padding: 2rem 1rem;
    }
    
    .diagram-wrapper {
      padding: 1rem;
    }
  }
</style>

