<script>
  // Landing Page completa da MARKDEV
</script>

<!-- Nav Flutuante (Glass) -->
<nav class="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a href="/agency" class="font-mono font-bold text-xl tracking-tighter text-slate-900 hover:opacity-80 transition">
            MARKDEV<span class="text-blue-600">.DEV</span>
        </a>
        
        <div class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
            <a href="#solucoes" class="hover:text-slate-900 transition duration-200">Soluções</a>
            <a href="#metodo" class="hover:text-slate-900 transition duration-200">Método</a>
            <a href="#contato" class="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition shadow-apple-sm hover:shadow-apple-md transform active:scale-95 duration-200">
                Falar com Engenheiro
            </a>
        </div>
    </div>
</nav>

<div class="pt-20"> <!-- Espaçador para o Nav fixo -->

    <!-- Hero Section -->
    <section class="relative pt-32 pb-32 md:pt-48 md:pb-40 overflow-hidden">
        <!-- Background Pattern Sutil -->
        <div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div class="max-w-7xl mx-auto px-6 relative">
            <div class="max-w-4xl mx-auto text-center">
                
                <!-- Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide animate-fade-in-up">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Software House Especializada
                </div>

                <!-- Título -->
                <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8 animate-fade-in-up delay-100">
                    Transformamos <br class="hidden md:block" />
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">código complexo</span> <br class="md:hidden" />
                    em vantagem competitiva.
                </h1>

                <!-- Subtítulo -->
                <p class="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
                    Fugimos do genérico. Desenvolvemos inteligência artificial interna, automação de dados e ferramentas sob medida para empresas que precisam escalar.
                </p>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up delay-300">
                    <a href="#contato" class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition shadow-apple-lg hover:shadow-apple-xl hover:-translate-y-0.5 duration-300 flex items-center justify-center gap-2">
                        Iniciar Projeto
                        <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    
                    <a href="#solucoes" class="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition shadow-apple-sm hover:shadow-apple-md duration-300">
                        Ver Soluções
                    </a>
                </div>

            </div>
        </div>
    </section>

    <!-- Seção Soluções -->
    <section id="solucoes" class="py-32 bg-slate-50/50 border-t border-slate-200/60 relative">
        <div class="max-w-7xl mx-auto px-6">
            
            <div class="mb-20 max-w-2xl">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">O que construímos</h2>
                <p class="text-lg text-slate-500 leading-relaxed">Não somos uma fábrica de sites institucionais. Criamos sistemas robustos que resolvem dores operacionais reais e geram valor mensurável.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                
                <!-- Card 1 -->
                <div class="group bg-white p-10 rounded-3xl border border-slate-200/60 shadow-apple-card hover:shadow-apple-card-hover transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>
                    
                    <div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 border border-blue-100 relative z-10">
                        <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </div>
                    
                    <h3 class="text-xl font-bold text-slate-900 mb-4 relative z-10">IA & Bases de Conhecimento (RAG)</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">
                        Sua empresa tem PDFs e manuais ignorados? Criamos agentes de IA que respondem dúvidas da sua equipe instantaneamente, treinados com seus documentos proprietários.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="group bg-white p-10 rounded-3xl border border-slate-200/60 shadow-apple-card hover:shadow-apple-card-hover transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>

                    <div class="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 border border-emerald-100 relative z-10">
                        <svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>

                    <h3 class="text-xl font-bold text-slate-900 mb-4 relative z-10">Monitoramento & Scraping</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">
                        Precisa saber quando um concorrente muda um preço ou quando sai uma nova regulação? Nossos bots monitoram a web 24/7 e entregam os dados limpos via API ou Dashboard.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="group bg-white p-10 rounded-3xl border border-slate-200/60 shadow-apple-card hover:shadow-apple-card-hover transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>

                    <div class="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 border border-purple-100 relative z-10">
                        <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>

                    <h3 class="text-xl font-bold text-slate-900 mb-4 relative z-10">Automação de Processos</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">
                        Integramos seu CRM, ERP e planilhas. Eliminamos o trabalho manual repetitivo, conectando ferramentas que não conversam entre si nativamente (n8n, Zapier, Python).
                    </p>
                </div>

                <!-- Card 4 -->
                <div class="group bg-white p-10 rounded-3xl border border-slate-200/60 shadow-apple-card hover:shadow-apple-card-hover transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500"></div>

                    <div class="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition duration-500 border border-orange-100 relative z-10">
                        <svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>

                    <h3 class="text-xl font-bold text-slate-900 mb-4 relative z-10">Desenvolvimento Full-Stack</h3>
                    <p class="text-slate-500 leading-relaxed relative z-10">
                        Sistemas internos sob medida. Dashboards administrativos, ferramentas de controle e SaaS B2B desenvolvidos com tecnologias modernas e escaláveis (SvelteKit, React, Supabase).
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Stack Section -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-6">
            <p class="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-12">Tecnologias que Dominamos</p>
            
            <div class="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <!-- Logos em Texto Mono Elegante -->
                <span class="text-xl font-bold font-mono text-slate-800">Python</span>
                <span class="text-xl font-bold font-mono text-slate-800">SvelteKit</span>
                <span class="text-xl font-bold font-mono text-slate-800">React</span>
                <span class="text-xl font-bold font-mono text-slate-800">Flutter</span>
                <span class="text-xl font-bold font-mono text-slate-800">Supabase</span>
                <span class="text-xl font-bold font-mono text-slate-800">Docker</span>
                <span class="text-xl font-bold font-mono text-slate-800">OpenAI</span>
            </div>
        </div>
    </section>

    <!-- CTA Final -->
    <section id="contato" class="py-32 bg-slate-900 text-white relative overflow-hidden">
        <!-- Efeito de brilho no fundo -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -mt-40 pointer-events-none"></div>

        <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 class="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Tem um desafio técnico?</h2>
            <p class="text-slate-400 mb-12 text-xl max-w-2xl mx-auto font-light">
                Vamos conversar sobre como a tecnologia pode destravar o próximo nível da sua operação. Sem "bigalês", direto ao ponto.
            </p>
            
            <a href="mailto:contato@markdev.dev" class="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition shadow-2xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 duration-300">
                Iniciar Conversa
            </a>

            <div class="mt-24 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
                <p>&copy; 2025 MARKDEV. Todos os direitos reservados.</p>
                <div class="flex space-x-6">
                    <a href="#" class="hover:text-white transition">Github</a>
                    <a href="#" class="hover:text-white transition">Linkedin</a>
                    <a href="#" class="hover:text-white transition">Twitter</a>
                </div>
            </div>
        </div>
    </section>

</div>

<style>
    /* Sombras estilo Apple (suaves e difusas) */
    :global(.shadow-apple-sm) {
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    :global(.shadow-apple-md) {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }
    :global(.shadow-apple-lg) {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);
    }
    :global(.shadow-apple-xl) {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
    }
    
    :global(.shadow-apple-card) {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
    }
    
    :global(.shadow-apple-card-hover) {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01);
    }

    /* Animação simples de entrada */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    :global(.animate-fade-in-up) {
        animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        opacity: 0; /* Começa invisível */
    }

    :global(.delay-100) { animation-delay: 0.1s; }
    :global(.delay-200) { animation-delay: 0.2s; }
    :global(.delay-300) { animation-delay: 0.3s; }
</style>
