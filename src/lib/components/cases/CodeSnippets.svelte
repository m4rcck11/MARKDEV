<script lang="ts">
  import type { CodeSnippet } from '$lib/cases';
  import { onMount } from 'svelte';
  import hljs from 'highlight.js/lib/core';
  import javascript from 'highlight.js/lib/languages/javascript';
  import python from 'highlight.js/lib/languages/python';
  import 'highlight.js/styles/github-dark.css';
  
  export let snippets: CodeSnippet[];
  
  // Register languages
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('python', python);
  
  function copyToClipboard(code: string) {
    navigator.clipboard.writeText(code);
  }
  
  // Highlight code blocks after render
  onMount(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
    });
  });
</script>

<section class="code-section">
  <h2>Exemplos de Código</h2>
  
  <div class="snippets-container">
    {#each snippets as snippet, index}
      <div class="snippet-card">
        <div class="snippet-header">
          <div class="snippet-info">
            {#if snippet.filename}
              <span class="filename">{snippet.filename}</span>
            {/if}
            <span class="language-badge">{snippet.language}</span>
          </div>
          <button 
            class="copy-btn"
            on:click={() => copyToClipboard(snippet.code)}
            aria-label="Copiar código"
          >
            📋 Copiar
          </button>
        </div>
        
        {#if snippet.description}
          <p class="snippet-description">{snippet.description}</p>
        {/if}
        
        <div class="code-wrapper">
          <pre><code class="language-{snippet.language}">{snippet.code}</code></pre>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .code-section {
    margin: 4rem 0;
  }
  
  h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    margin: 0 0 2rem 0;
    color: #1a1a1a;
  }
  
  .snippets-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .snippet-card {
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .snippet-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #2d2d2d;
    border-bottom: 1px solid #404040;
  }
  
  .snippet-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .filename {
    color: #d4d4d4;
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }
  
  .language-badge {
    padding: 0.25rem 0.75rem;
    background: #667eea;
    color: white;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  
  .copy-btn {
    padding: 0.5rem 1rem;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.2s;
  }
  
  .copy-btn:hover {
    background: #5568d3;
  }
  
  .snippet-description {
    padding: 1rem 1.5rem;
    color: #d4d4d4;
    background: #252525;
    margin: 0;
    line-height: 1.6;
    border-bottom: 1px solid #404040;
  }
  
  .code-wrapper {
    overflow-x: auto;
  }
  
  pre {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
  }
  
  code {
    font-family: 'Courier New', Consolas, Monaco, monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #d4d4d4;
    white-space: pre;
  }
  
  @media (max-width: 768px) {
    .snippet-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .copy-btn {
      width: 100%;
    }
    
    pre {
      padding: 1rem;
    }
    
    code {
      font-size: 0.8rem;
    }
  }
</style>

