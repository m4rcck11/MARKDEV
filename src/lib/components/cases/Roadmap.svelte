<script lang="ts">
  import type { CaseStudyRoadmap, RoadMapStatus } from '$lib/cases';
  
  export let roadmap: CaseStudyRoadmap;
  
  function getStatusClass(status: RoadMapStatus) {
    switch(status) {
      case 'completed': return 'status-completed';
      case 'in_progress': return 'status-in-progress';
      case 'planned': return 'status-planned';
      case 'not_started': return 'status-not-started';
      default: return '';
    }
  }
  
  function getStatusLabel(status: RoadMapStatus) {
    switch(status) {
      case 'completed': return 'Concluído';
      case 'in_progress': return 'Em progresso';
      case 'planned': return 'Planejado';
      case 'not_started': return 'Não iniciado';
      default: return status;
    }
  }
</script>

<div class="roadmap-section">
  <h2>{roadmap.title}</h2>
  
  <div class="roadmap-timeline">
    {#each roadmap.items as item}
      <div class="roadmap-item {getStatusClass(item.status)}">
        <div class="roadmap-marker"></div>
        <div class="roadmap-content">
          <div class="roadmap-header">
            <h3>{item.title}</h3>
            <div class="roadmap-meta">
              {#if item.target}
                <span class="roadmap-target">{item.target}</span>
              {/if}
              <span class="roadmap-status {getStatusClass(item.status)}">
                {getStatusLabel(item.status)}
              </span>
            </div>
          </div>
          <p class="roadmap-description">{item.description}</p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .roadmap-section {
    margin: 4rem 0;
  }
  
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 2rem 0;
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
  
  .roadmap-timeline {
    display: flex;
    overflow-x: auto;
    padding: 2rem 0;
    position: relative;
    gap: 1rem;
  }
  
  .roadmap-timeline::before {
    content: '';
    position: absolute;
    top: 1.25rem;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: #e0e0e0;
    z-index: 0;
  }
  
  .roadmap-item {
    position: relative;
    padding-top: 3rem;
    flex: 1;
    min-width: 280px;
  }
  
  .roadmap-marker {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #d3d3d3;
    border: 3px solid white;
    box-shadow: 0 0 0 2px #e0e0e0;
    z-index: 1;
  }
  
  .roadmap-item:first-child .roadmap-marker {
    left: 1rem;
    transform: none;
  }
  
  .roadmap-item:last-child .roadmap-marker {
    left: auto;
    right: 1rem;
    transform: none;
  }
  
  .roadmap-item.status-completed .roadmap-marker {
    background: #000000;
    box-shadow: 0 0 0 2px #000000;
  }
  
  .roadmap-item.status-in-progress .roadmap-marker {
    background: #666666;
    box-shadow: 0 0 0 2px #666666;
    animation: pulse 2s infinite;
  }
  
  .roadmap-item.status-planned .roadmap-marker,
  .roadmap-item.status-not-started .roadmap-marker {
    background: #d3d3d3;
    box-shadow: 0 0 0 2px #d3d3d3;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.9); }
  }
  
  .roadmap-content {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin: 0 0.5rem;
  }
  
  .roadmap-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.75rem;
    gap: 0.5rem;
  }
  
  .roadmap-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a1a1a;
  }
  
  .roadmap-meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .roadmap-target {
    font-size: 0.875rem;
    color: #666;
    font-weight: 500;
  }
  
  .roadmap-status {
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;
  }
  
  .roadmap-status.status-completed { background: #000000; color: white; }
  .roadmap-status.status-in-progress { background: #666666; color: white; }
  .roadmap-status.status-planned,
  .roadmap-status.status-not-started { background: #e0e0e0; color: #666; }
  
  .roadmap-description {
    margin: 0;
    line-height: 1.6;
    color: #555;
    font-size: 0.95rem;
  }
  
  @media (max-width: 1024px) {
    .roadmap-timeline {
      display: block;
      overflow-x: visible;
      padding: 0;
      padding-left: 1rem;
      margin-top: 2rem;
    }
  
    .roadmap-timeline::before {
      left: 7px;
      top: 0;
      bottom: 0;
      right: auto;
      width: 2px;
      height: auto;
    }
  
    .roadmap-item {
      padding-top: 0;
      padding-left: 2.5rem;
      margin-bottom: 2.5rem;
      min-width: 0;
    }
    
    .roadmap-marker {
      left: 0;
      top: 0.25rem;
      transform: none;
    }
    
    .roadmap-item:first-child .roadmap-marker,
    .roadmap-item:last-child .roadmap-marker {
      left: 0;
      right: auto;
      transform: none;
    }

    .roadmap-content {
      margin: 0;
    }
    
    .roadmap-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .roadmap-meta {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
  }
</style>
