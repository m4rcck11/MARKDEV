<script lang="ts">
  import type { CaseStudy } from '$lib/cases';
  import Hero from './Hero.svelte';
  import Section from './Section.svelte';
  import Metrics from './Metrics.svelte';
  import Tags from './Tags.svelte';
  import ImageGallery from './ImageGallery.svelte';
  import Architecture from './Architecture.svelte';
  import CodeSnippets from './CodeSnippets.svelte';
  import Roadmap from './Roadmap.svelte';
  
  export let caseData: CaseStudy;
</script>

<article class="case-study">
  <Hero title={caseData.title} />
  
  <div class="container">
    <Tags tags={caseData.tags} />
    
    <Section title="Resumo">
      <p class="summary">{caseData.summary}</p>
    </Section>
    
    <Section title="O Desafio">
      <div class="challenge-content">
        {@html caseData.challenge.replace(/\n\n/g, '</p><p>').replace(/•/g, '<br>•')}
      </div>
    </Section>
    
    {#if caseData.metrics}
      <Metrics metrics={caseData.metrics} />
    {/if}
    
    {#if caseData.architecture}
      <Architecture 
        mermaidCode={caseData.architecture.mermaidCode}
        description={caseData.architecture.description}
      />
    {/if}
    
    <Section title="Decisões Técnicas">
      <div class="tech-decisions">
        {#each caseData.techDecisions as decision}
          <div class="decision-card">
            <h4>{decision.title}</h4>
            <div class="decision-content">
              {@html decision.content.replace(/\n\n/g, '</p><p>').replace(/•/g, '<br>•')}
            </div>
          </div>
        {/each}
      </div>
    </Section>
    
    {#if caseData.codeSnippets && caseData.codeSnippets.length > 0}
      <CodeSnippets snippets={caseData.codeSnippets} />
    {/if}
    
    {#if caseData.roadmap}
      <Roadmap roadmap={caseData.roadmap} />
    {/if}
    
    <Section title="Sobre este estudo">
      <div class="lessons-content">
        {@html caseData.lessonsLearned.replace(/\n\n/g, '</p><p>')}
      </div>
    </Section>
    
    {#if caseData.images && caseData.images.length > 10}
      <ImageGallery images={caseData.images} />
    {/if}
    
    <div class="navigation">
      <a href="/case-studies" class="back-link">← Voltar para Case Studies</a>
    </div>
  </div>
</article>

<style>
  .case-study {
    background: white;
    min-height: 100vh;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .summary {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #444;
    font-weight: 400;
  }
  
  .challenge-content,
  .lessons-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
  }
  
  .tech-decisions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .decision-card {
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 12px;
    border-left: 4px solid #000000;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .decision-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(128, 128, 128, 0.2);
  }
  
  .decision-card h4 {
    margin: 0 0 1rem 0;
    color: #1a1a1a;
    font-size: 1.3rem;
    font-weight: 600;
    position: relative;
    padding-bottom: 0.5rem;
  }
  
  .decision-card h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #000000, #d3d3d3);
    border-radius: 2px;
  }
  
  .decision-content {
    line-height: 1.7;
    color: #555;
  }
  
  .navigation {
    margin: 4rem 0;
    padding: 2rem 0;
    border-top: 1px solid #e0e0e0;
  }
  
  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s;
  }
  
  .back-link:hover {
    transform: translateX(-4px);
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
    }
    
    .tech-decisions {
      gap: 1.5rem;
    }
    
    .decision-card {
      padding: 1.5rem;
    }
  }
</style>

