<script lang="ts">
  interface Metric {
    value: string;
    label: string;
  }
  
  export let metrics: Metric[];
</script>

<div class="metrics-section">
  <div class="metrics-grid">
    {#each metrics as metric}
      <div class="metric-card">
        <div class="metric-value">{metric.value}</div>
        <div class="metric-label">{metric.label}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap');
  
  .metrics-section {
    margin: 4rem 0;
    padding: 3rem 2rem;
    background: #000000;
    border-radius: 12px;
    color: white;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }
  
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .metric-card {
    text-align: center;
    padding: 1.5rem;
    background: #2d2d2d;
    border-radius: 8px;
    transition: transform 0.3s, background 0.3s;
  }
  
  .metric-card:hover {
    transform: translateY(-4px);
    background: #3a3a3a;
  }
  
  .metric-value {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 900;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    margin-bottom: 0.5rem;
    line-height: 1;
    color: white;
  }
  
  .metric-label {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.4;
    color: white;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .metrics-section {
      padding: 2rem 1rem;
      margin: 2.5rem 0;
    }
    
    .metrics-grid {
      gap: 1rem;
    }
  }
</style>

