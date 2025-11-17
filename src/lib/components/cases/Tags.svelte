<script lang="ts">
  export let tags: string[];
</script>

<div class="tags">
  {#each tags as tag}
    <span class="tag">{tag}</span>
  {/each}
</div>

<style>
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin: 2rem 0;
  }
  
  .tag {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    color: #333;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s;
  }
  
  .tag:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
</style>

