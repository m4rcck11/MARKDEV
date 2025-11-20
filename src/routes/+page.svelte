<script>
	import { onMount } from 'svelte';
	import * as Gap from '$lib/components/gap';

	let headlineElement;
	let heroElement;
	let showToast = false;
	let toastMessage = '';
	let hoveredProject = null;

	const projects = [
		{
			title: 'Tesla Cognos',
			description: 'Plataforma EAD em Flutter com Supabase. Gamificação e UX para usuários do Tesla Concursos.',
			tags: ['Flutter', 'BaaS', 'UI/UX'],
			context: 'B2C, EAD',
			year: '2023 - Atualmente'
		},
		{
			title: 'InSySpo — Acoplamento de Autores Bibliográficos ',
			description: 'Consulta de autores em base de terabytes. Google Cloud + BigQuery.',
			tags: ['Flutter', 'BigQuery', 'Cloud'],
			context: 'Interno',
			year: '2024'
		},
		{
			title: 'API LibreMétricas',
			description: 'API para métricas científicas. DuckDB, Docker e FastAPI.',
			tags: ['Python', 'DuckDB', 'Docker'],
			context: 'Gov',
			year: '2025'
		},
		{
			title: 'Dashboard IBICT',
			description: 'Visualização de dados de pesquisadores via BigQuery.',
			tags: ['Flutter', 'Data Viz', 'MySQL'],
			context: 'Interno',
			year: '2025'
		},
		{
			title: 'MultiOBS',
			description: 'Iniciativa de democratização de dados ligada à Fapesp.',
			tags: ['Data', 'Research'],
			context: 'Projeto',
			year: '2026'
		},
		{
			title: 'OpenAlex Portal',
			description: 'Portal de acesso a dados científicos globais.',
			tags: ['React', 'MaxCompute', 'Alibaba', BigQuery],
			context: 'Mais detalhes em breve',
			year: 'Em Breve'
		}
	];

	const websites = [
		{
			image: '/images/teslaweb.png',
			alt: 'Tesla Concursos',
			title: 'Tesla Concursos',
			description: 'Website institucional focado em performance e SEO.'
		},
		{
			image: '/images/Insyspo.png',
			alt: 'InSySpo',
			title: 'InSySpo',
			description: 'Manutenção e desenvolvimento hospedado na Unicamp.'
		},
		{
			image: '/images/Desvendando a formação de fósseis.png',
			alt: 'Desvendando Fósseis',
			title: 'IG Unicamp',
			description: 'Plataforma EAD para curso de extensão.'
		},
		{
			image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1400&auto=format&fit=crop',
			alt: 'EMES Advogados',
			title: 'EMES Advogados',
			description: 'Coming Soon...'
		}
	];

	function handleSubmit(e) {
		e.preventDefault();
		showToastMessage('Opa, desculpa... não ainda. Se importa em copiar a mensagem e me mandar manualmente no google? e_e');
		e.target.reset();
	}

	function showToastMessage(msg) {
		toastMessage = msg;
		showToast = true;
		const timer = setTimeout(() => {
			showToast = false;
		}, 3000);
		return () => clearTimeout(timer);
	}

	function handleHeroMouseMove(e) {
		if (!heroElement) return;
		const r = heroElement.getBoundingClientRect();
		const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
		const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
		heroElement.style.transform = `translate3d(${dx * 6}px, ${dy * 4}px, 0)`;
	}

	function handleHeroMouseLeave() {
		if (heroElement) {
			heroElement.style.transform = '';
		}
	}

	onMount(() => {
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		
		if (prefersReduced) {
			document.querySelectorAll('.headline, .website-card, .list-row').forEach((el) => el.classList.add('inview'));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('inview');
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.website-card, .list-row').forEach((el) => io.observe(el));
		if (headlineElement) io.observe(headlineElement);

		if (heroElement) {
			heroElement.addEventListener('mousemove', handleHeroMouseMove);
			heroElement.addEventListener('mouseleave', handleHeroMouseLeave);
		}

		document.addEventListener('keyup', (e) => {
			if (e.key === 'Tab') document.documentElement.classList.add('user-is-tabbing');
		});

		return () => {
			if (heroElement) {
				heroElement.removeEventListener('mousemove', handleHeroMouseMove);
				heroElement.removeEventListener('mouseleave', handleHeroMouseLeave);
			}
		};
	});
</script>

<svelte:head>
	<title>Marcelo — Portfólio</title>
	<meta name="description" content="Portfólio de Marcelo de Barros Júnior — engenheiro de software e dados." />
	<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/editorial-new" />
</svelte:head>

<header>
	<nav class="side-menu">
		<ul>
			<li><a href="/"> Home </a></li>
			<li><a href="/case-studies">Estudos de Caso</a></li>
			<li><a href="/curriculo.pdf" download="curriculo_marcelo.pdf">Baixar currículo</a></li>
			<li><a href="#contact">Contato</a></li>
		</ul>
	</nav>
</header>

<main>
	<section bind:this={heroElement} class="hero" aria-labelledby="hero-title">
		<div class="hero-label-left">MARKDEV</div>
		<div class="hero-label-right">Based in São Paulo — Brazil.</div>
		<h1 id="hero-title" bind:this={headlineElement} class="headline" style="font-style: normal; font-weight: 700">
			Marcelo<span class="dot">.</span>
		</h1>
		<p class="sub">Desenvolvedor Full-stack de Campinas, São Paulo para o mundo.</p>
	</section>

	<section id="about" class="wrapper">
		<h2 class="about-title">Sobre mim</h2>
		<div class="about-content">
			<p>Olá! Eu sou Marcelo, desenvolvedor e graduando em Análise e Desenvolvimento de Sistemas pelo SENAC. Eu arrecado mais de 4 anos de experiência com webdesign e desenvolvimento. Meus hobbies favoritos são encontrar soluções automatizadas para processos, criar MVPs que ninguém pediu e estudar arquitetura de sistemas. Sou fã de viajar, cyberpunk e rock paulera.</p>
		</div>
	</section>

	<Gap.Vertical size={140} />

	<!-- SEÇÃO 1: ENGENHARIA (Lista Técnica) -->
	<section id="engineering" class="wrapper">
		<div class="section-header">
			<h2 class="agency-title">Engenharia & Sistemas</h2>
			<p class="section-subtitle">Soluções de alta complexidade, dashboards e arquitetura de dados.</p>
		</div>

		<Gap.Vertical size={60} />

		<div class="tech-list">
			<!-- Header da Tabela -->
			<div class="list-row header">
				<span class="col-1">Projeto</span>
				<span class="col-2">Tecnologia</span>
				<span class="col-3">Contexto</span>
				<span class="col-4">Ano</span>
			</div>

			{#each projects as project}
				<a href="#" class="list-row item">
					<div class="col-1">
						<span class="project-name">{project.title}</span>
					</div>
					<div class="col-2">
						<span class="tech-tag">{project.tags[0]}</span>
						{#if project.tags[1]}<span class="tech-tag secondary">+{project.tags.length - 1}</span>{/if}
					</div>
					<div class="col-3">
						<span class="project-context">{project.context}</span>
					</div>
					<div class="col-4">
						<span class="project-year">{project.year}</span>
					</div>
					<div class="hover-reveal">→</div>
				</a>
			{/each}
		</div>
	</section>


	<Gap.Vertical size={180} />


	<!-- SEÇÃO 2: WEBSITES (Visual) -->
	<section id="websites" class="wrapper">
		<div class="section-header">
			<h2 class="agency-title">Web Design</h2>
			<p class="section-subtitle">Experiências digitais focadas em performance e SEO.</p>
		</div>

		<Gap.Vertical size={80} />

		<div class="website-grid">
			{#each websites as site}
				<article class="website-card">
					<div class="image-container">
						<img src={site.image} alt={site.alt} loading="lazy" />
						<div class="overlay"></div>
					</div>
					<div class="website-info">
						<h3>{site.title}</h3>
						<p>{site.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<Gap.Vertical size={120} />

	<section id="contact" class="wrapper">
		<div class="contact-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start">
			<div>
				<h2 class="contact-title" style="font-size: 68px; line-height: 1; margin: 0 0 1rem 0; font-weight: 700">
					Vamos <span style="font-style: normal; font-weight: 300">conversar?</span>
				</h2>
				<p style="font-size: 1.1rem; margin-top: 1rem">marcelo@markdev.dev</p>

				<div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center">
					<img
						src="https://cdn-icons-png.flaticon.com/512/5968/5968973.png"
						alt="Mastodon"
						style="width: 22px; height: 22px"
						loading="lazy"
						decoding="async"
					/>
					<img
						src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
						alt="GitHub"
						style="width: 22px; height: 22px"
						loading="lazy"
						decoding="async"
					/>
					<img
						src="https://cdn-icons-png.flaticon.com/512/15466/15466128.png"
						alt="Bluesky"
						style="width: 22px; height: 22px"
						loading="lazy"
						decoding="async"
					/>
				</div>
			</div>

			<form on:submit={handleSubmit} style="display: flex; flex-direction: column; gap: 1rem">
				<input
					type="text"
					placeholder="Seu nome"
					style="padding: 0.8rem; border: 1px solid #000; border-radius: 8px; font-size: 1rem"
				/>
				<input
					type="email"
					placeholder="Seu email"
					style="padding: 0.8rem; border: 1px solid #000; border-radius: 8px; font-size: 1rem"
				/>
				<textarea
					placeholder="Sua mensagem"
					rows="5"
					style="padding: 0.8rem; border: 1px solid #000; border-radius: 8px; font-size: 1rem"
				></textarea>
				<button
					type="submit"
					style="padding: 0.9rem 1.2rem; border-radius: 8px; border: 1px solid #000; background: #000; color: #fff; font-weight: 600; font-size: 1rem; cursor: pointer"
				>
					Enviar
				</button>
			</form>
		</div>
	</section>
	
	<Gap.Vertical size={80} />
</main>

{#if showToast}
	<div class="toast show">{toastMessage}</div>
{:else}
	<div class="toast">{toastMessage}</div>
{/if}

<style>
	:global(:root) {
		--bg: #ffffff;
		--text: #000000;
		--muted: #505050;
		--accent: #000000;
		--accent2: #ffffff;
		--container-max: 1100px;
		--radius: 12px;
		--serif: 'Editorial New', 'Georgia', 'Times New Roman', serif;
		--sans: 'Editorial New', system-ui, -apple-system, 'Segoe UI', sans-serif;
		--transition-fast: 220ms;
		--transition-mid: 420ms;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		font-family: var(--sans), 'Georgia', 'Times New Roman', serif;
		color: var(--text);
		background: var(--bg);
		line-height: 1.45;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-feature-settings: 'kern' 1;
		text-rendering: optimizeLegibility;
	}

	/* Garantir visibilidade de todos os textos */
	:global(h1),
	:global(h2),
	:global(h3),
	:global(p),
	:global(a),
	:global(span) {
		color: inherit;
		visibility: visible;
		opacity: 1;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.wrapper {
		max-width: var(--container-max);
		margin: 0 auto;
		padding: 1.25rem;
	}

	/* Header */
	header {
		padding: 1rem 0;
		position: relative;
	}

	/* Vertical stacked menu */
	.side-menu {
		position: absolute;
		top: 12rem;
		right: 12rem;
		z-index: 9999;
	}

	.side-menu ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0;
		line-height: 0.9;
	}

	.side-menu a {
		font-size: 16px;
		font-weight: 300;
		font-style: normal;
		letter-spacing: -0.02em;
		display: block;
		padding: 2px 0;
	}

	.side-menu a:hover {
		opacity: 0.6;
		transition: opacity 0.2s ease;
	}

	/* Hero single centered column */
	.hero {
		min-height: 100svh; /* Use svh para mobile browsers */
		width: 100%;
		padding: 6rem 1.25rem; /* Padding menor para telas pequenas */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
		position: relative;
		overflow: hidden; /* Previne scroll horizontal indesejado */
	}

	@media (min-width: 768px) {
		.hero {
			min-height: 100vh;
			padding: 8rem 1.25rem;
		}
	}

	/* Vertical side labels inside hero */
	.hero-label-left,
	.hero-label-right {
		position: absolute;
		top: 50%;
		transform: translateY(-50%) rotate(-90deg);
		font-size: 10px;
		letter-spacing: -0.04em;
		opacity: 0.8;
		pointer-events: none;
	}

	.hero-label-left {
		left: 0.6rem;
		font-weight: 300;
		font-style: normal;
		font-size: 12.5px;
	}

	.hero-label-right {
		right: 0.6rem;
		font-weight: 700;
		font-style: normal;
		font-size: 12.5px;
		
	}

	.headline {
		font-family: var(--serif);
		font-weight: 700;
		font-size: clamp(3.5rem, 14vw, 9rem); /* Ajustado: Min razoável, Max contido */
		line-height: .9;
		margin: 0;
		letter-spacing: -0.02em;
		opacity: 0;
		transform: translateY(8px);
		transition: opacity var(--transition-mid) ease, transform var(--transition-mid) ease;
		max-width: 100%;
		word-wrap: break-word; /* Garante que não estoure em telas muito pequenas */
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
		background: var(--accent);
		opacity: 0.18;
		border-radius: 2px;
		transform: scaleX(0.8);
		transition: transform 900ms cubic-bezier(0.2, 0.9, 0.2, 1);
	}

	.headline:hover::after {
		transform: scaleX(1.2);
		opacity: 0.28;
	}

	.sub {
		font-size: 1.05rem;
		color: var(--muted);
		max-width: 60ch;
		margin-top: 0.5rem;
	}

	.about-title {
		font-size: clamp(1.75rem, 3vw, 2.5rem);
		font-weight: 700;
		margin: 0 0 2rem 0;
		color: #1a1a1a;
		position: relative;
		padding-bottom: 0.75rem;
	}

	.about-title::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 60px;
		height: 4px;
		background: linear-gradient(90deg, #000000, #d3d3d3);
		border-radius: 2px;
	}

	.about-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: #333;
		max-width: 800px;
	}

	.about-content p {
		margin: 0;
	}

	/* --- AGENCY STYLES --- */

	.agency-title {
		font-family: var(--serif);
		font-size: 2.5rem;
		margin: 0;
		font-weight: 400;
	}

	.section-subtitle {
		color: var(--muted);
		margin-top: 0.5rem;
		font-family: var(--sans);
		max-width: 500px;
	}

	/* Engineering List */
	.tech-list {
		border-top: 1px solid #000;
	}

	.list-row {
		display: grid;
		grid-template-columns: 2fr 1.5fr 1fr 1fr 40px;
		padding: 1.5rem 0;
		border-bottom: 1px solid #e5e5e5;
		align-items: center;
		text-decoration: none;
		color: inherit;
		position: relative;
		transition: background 0.2s;
		opacity: 0;
		transform: translateY(10px);
		transition: opacity 0.4s ease, transform 0.4s ease, background 0.2s;
	}

	:global(.list-row.inview) {
		opacity: 1;
		transform: none;
	}

	.list-row.header {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted);
		padding: 0.75rem 0;
		border-bottom: 1px solid #000;
		opacity: 1;
		transform: none;
	}

	.list-row.item:hover {
		background: #f4f4f4;
		padding-left: 10px; 
	}

	.project-name {
		font-family: var(--serif);
		font-size: 1.25rem;
		font-weight: 400;
	}

	.tech-tag {
		background: #eee;
		padding: 2px 8px;
		border-radius: 4px;
		font-size: 0.8rem;
		font-family: monospace;
		margin-right: 4px;
	}

	.tech-tag.secondary {
		background: transparent;
		color: var(--muted);
	}

	.hover-reveal {
		opacity: 0;
		transition: opacity 0.2s;
		font-family: monospace;
	}

	.list-row.item:hover .hover-reveal {
		opacity: 1;
	}

	/* Website Grid */
	.website-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 4rem;
	}

	@media (min-width: 768px) {
		.website-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem 4rem;
		}
		
		.website-grid article:nth-child(even) {
			transform: translateY(6rem);
		}
	}

	.website-card {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	:global(.website-card.inview) {
		opacity: 1;
		transform: translateY(0);
	}
	
	@media (min-width: 768px) {
		:global(.website-card.inview:nth-child(even)) {
			transform: translateY(6rem);
		}
	}

	.image-container {
		aspect-ratio: 16/10;
		background: #f0f0f0;
		overflow: hidden;
		border-radius: 4px;
		position: relative;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		filter: grayscale(100%);
	}

	.website-card:hover .image-container img {
		transform: scale(1.05);
		filter: grayscale(0%);
	}

	.website-info h3 {
		font-family: var(--serif);
		font-size: 1.5rem;
		margin: 0 0 0.5rem 0;
		font-weight: 400;
	}

	.website-info p {
		font-size: 0.95rem;
		color: var(--muted);
		line-height: 1.5;
		margin: 0;
	}


	/* Contact form microfeedback */
	.toast {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		background: #111;
		color: #fff;
		padding: 0.8rem 1rem;
		border-radius: 8px;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
		opacity: 0;
		transform: translateY(12px);
		transition: opacity 260ms, transform 260ms;
	}

	.toast.show {
		opacity: 1;
		transform: none;
	}

	:global(button[type='submit']:hover) {
		background: #222;
		transition: background 0.25s ease;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.hero-label-left,
		.hero-label-right {
			display: none; /* Esconde labels em tablets e mobile para evitar sobreposição */
		}
	}

	@media (max-width: 600px) {
		.hero {
			padding: 4rem 1.25rem;
			justify-content: center;
		}

		.contact-grid {
			grid-template-columns: 1fr !important;
		}

		.contact-title {
			font-size: 48px !important;
		}

		.list-row {
			grid-template-columns: 1fr auto 40px; /* Simplificado para mobile */
		}
		.col-3, .col-4 {
			display: none;
		}
	}

	/* Respect reduced motion */
	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
