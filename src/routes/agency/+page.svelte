<script>
  import Hero from './Components/Hero.svelte';
</script>

<svelte:head>
	<title>MARKDEV — Digital Agency</title>
	<meta name="description" content="Soluções tecnológicas de alta complexidade, dashboards e arquitetura de dados." />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>

<main class="antialiased text-slate-900" style="font-family: 'Inter', sans-serif; background-color: #F8FAFC; min-height: 100vh;">
	<Hero />
	
	<!-- Outras seções da página podem vir aqui -->
</main>

<style>
  /* Estilos globais para a página da agência */
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>



