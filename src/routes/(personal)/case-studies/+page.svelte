<script lang="ts">
	import { onMount } from 'svelte';

	let headlineElement: HTMLElement | null = null;
	let heroElement: HTMLElement | null = null;
	let showToast = false;
	let toastMessage = '';

	// Imagens em /static/images/

	const caseStudies = [
		{
			image: '/images/altmetria.png',
			alt: 'LibreMétricas - IBICT',
			title: 'LibreMétricas',
			description:
				'API para o IBICT com DuckDB, middleware e Docker. Extração e métricas científicas com pipelines otimizados.',
			tags: ['Vue', 'Alibaba Cloud', 'ECS', 'NGINX', 'Python', 'FastAPI', 'DuckDB', 'Docker'],
			link: '/case-studies/libremetricas'
		},
		{
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
			alt: 'Radar Político',
			title: 'Radar Político',
			description: 'Em breve',
			tags: ['Em breve'],
			link: '#'
		},
		{
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
			alt: 'Projeto Open Alex',
			title: 'Projeto Open Alex',
			description: 'Em breve',
			tags: ['Em breve'],
			link: '#'
		},
		{
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
			alt: 'Tesla COGNOS',
			title: 'Tesla COGNOS',
			description: 'Em breve',
			tags: ['Em breve'],
			link: '#'
		}
	];

	function handleSubmit(e: Event) {
		e.preventDefault();
		showToastMessage('Opa, desculpa... não ainda. Se importa em copiar a mensagem e me mandar manualmente no google? e_e');
		(e.target as HTMLFormElement).reset();
	}

	function showToastMessage(msg: string) {
		toastMessage = msg;
		showToast = true;
		const timer = setTimeout(() => {
			showToast = false;
		}, 3000);
		return () => clearTimeout(timer);
	}

	function handleHeroMouseMove(e: MouseEvent) {
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
			document.querySelectorAll('.card, .case-card, .headline').forEach((el) => el.classList.add('inview'));
			return;
		}

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('inview');
				});
			},
			{ threshold: 0.15 }
		);

		document.querySelectorAll('.card, .case-card').forEach((el) => io.observe(el));
		if (headlineElement) io.observe(headlineElement);

		if (heroElement) {
			heroElement.addEventListener('mousemove', handleHeroMouseMove);
			heroElement.addEventListener('mouseleave', handleHeroMouseLeave);
		}

		// Accessible focus styles for keyboard users
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
	<title>Marcelo — Estudos de Caso</title>
	<meta name="description" content="Portfólio de Marcelo de Barros Júnior — engenheiro de software e dados." />
	<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/editorial-new" />
</svelte:head>

<header>
	<nav class="side-menu">
		<ul>
			<li><a href="/"> Home </a></li>
			<li><a href="#work">Estudos de Caso</a></li>
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
			Estudos de <span style="font-weight: 200; font-style: italic">Caso</span><span class="dot">.</span>
		</h1>
		<p class="sub">Projetos reais que exigiram engenharia, estratégia e tomada de decisão. Cada case detalha o contexto, as escolhas técnicas e os resultados alcançados.</p>
	</section>

	<section id="case-studies" class="wrapper" style="padding-block: 1.25rem 2.5rem">
		<div class="projects" role="list">
			{#each caseStudies as caseStudy}
				<article class="case-card" role="listitem">
					<img src={caseStudy.image} alt={caseStudy.alt} loading="lazy" decoding="async" />
					<div class="case-content">
						<h3 style="margin: 0.5rem 0 0.25rem">{caseStudy.title}</h3>
						<p class="muted">{caseStudy.description}</p>
						{#if caseStudy.tags && caseStudy.tags.length > 0}
							<div class="tags">
								{#each caseStudy.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						{/if}
						<a href={caseStudy.link} class="cta-button">Ver estudo de caso →</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section id="contact" class="wrapper" style="padding-block: 4rem 4rem">
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
		--gap: 1.25rem;
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
		top: 1rem;
		right: 1rem;
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
		font-size: 12px;
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
		padding: 8rem 1.25rem 8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1rem;
		position: relative;
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
	}

	.hero-label-right {
		right: 0.6rem;
		font-weight: 700;
		font-style: normal;
	}

	.headline {
		font-family: var(--serif);
		font-weight: 700;
		font-size: clamp(3rem, 12vw, 7.5rem);
		line-height: 0.9;
		margin: 0;
		letter-spacing: -0.02em;
		opacity: 0;
		transform: translateY(8px);
		transition: opacity var(--transition-mid) ease, transform var(--transition-mid) ease;
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

	/* Projects */
	.projects {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--gap);
		margin-top: 2rem;
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}


	.muted {
		color: var(--muted);
	}

	/* Tags */
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}

	.tag {
		background: #f0f0f0;
		color: var(--text);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		border: 0.5px solid rgba(0, 0, 0, 0.1);
	}

	/* Case Study Cards */
	.case-card {
		background: #ffffff;
		border: 1px solid rgba(0, 0, 0, 0.125);
		border-radius: 0;
		overflow: hidden;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
		transform: translateY(8px);
		opacity: 0;
		transition: opacity var(--transition-mid);
		display: flex;
		flex-direction: column;
	}

	:global(.case-card.inview) {
		transform: none;
		opacity: 1;
	}

	.case-card img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	.case-content {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex-grow: 1;
	}

	.cta-button {
		background: #000000;
		color: #ffffff;
		padding: 0.9rem 1.5rem;
		border-radius: 0;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		text-align: center;
		transition: background 0.25s ease, transform 0.2s ease;
		margin-top: 0.5rem;
		display: inline-block;
		align-self: flex-start;
	}

	.cta-button:hover {
		background: #222222;
		transform: translateY(-2px);
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
	@media (max-width: 600px) {
		.hero {
			padding: 4rem 1.25rem;
		}

		.hero-label-left,
		.hero-label-right {
			display: none;
		}

		.contact-grid {
			grid-template-columns: 1fr !important;
		}

		.contact-title {
			font-size: 48px !important;
		}
	}

	@media (min-width: 900px) {
		.projects {
			grid-template-columns: repeat(3, 1fr);
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
