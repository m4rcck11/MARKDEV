export interface ProjectSection {
  title: string;
  content: string;
}

export interface CodeSnippet {
  language: string;
  filename?: string;
  code: string;
  description?: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}


export interface CaseStudyRoadmap {
  title: string;
  items: RoadmapItem[];
}

export type RoadMapStatus = 'not_started' | 'in_progress' | 'completed' | 'planned';

export interface RoadmapItem {
  title: string;
  description: string;
  target?: string;
  status: RoadMapStatus;
}


export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  heroImage?: string;
  summary: string;
  challenge: string;
  architecture?: {
    mermaidCode: string;
    description: string;
  };
  techDecisions: ProjectSection[];
  codeSnippets?: CodeSnippet[];
  lessonsLearned: string;
  metrics?: CaseStudyMetric[];
  images?: CaseStudyImage[];
  links?: {
    github?: string | null;
    live?: string | null;
  };
  roadmap?: CaseStudyRoadmap;
}

export const libremetricas: CaseStudy = {
  id: "libremetricas",
  title: "Plataforma Altmetria",
  subtitle: "API FastAPI que transforma 40M+ registros altmétricos em métricas prontas para o frontend usando DuckDB + Parquet",
  tags: ["Python 3.11", "FastAPI", "DuckDB", "Parquet", "Cachetools", "SlowAPI", "Docker", "Nginx"],
  heroImage: "/images/altmetria.png",

  summary: `
    API REST construída para o IBICT que entrega métricas altmétricas da produção científica latino-americana.
    O backend lê arquivos Parquet já provisionados (GCS + Alibaba OSS), registra views temporárias no DuckDB
    e responde agregações em poucos segundos sem duplicar nem mover os dados originais.
  `,

  challenge: `
    Precisávamos expor dashboards maduros sem refazer o frontend existente e sem importar bilhões de registros
    para um banco tradicional. O desafio envolvia:
    
    • Validar e organizar dezenas de arquivos Parquet pesados (works, locations, authors, etc.).
    • Entregar agregações analíticas (por fonte, ano, área) com latência baixa e segurança contra abusos.
    • Configurar cache e rate limiting para proteger a API sem sacrificar frescor dos dados.
    • Garantir deploy seguro com Docker, Gunicorn/Uvicorn, nginx e SSL enquanto mantemos a aplicação portátil.
  `,

  architecture: {
    description: "Arquitetura simples: frontend faz requisição HTTPS ao nginx, que encaminha ao container Python + FastAPI; middleware aplica rate limiting, validação e cache antes de acionar DuckDB para consultar os Parquets locais e devolver JSON.",
    mermaidCode: `
graph TD
    %% Estilos com bom contraste em fundo claro
    classDef storage fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#111,font-weight:bold;
    classDef infra fill:#f3e5f5,stroke:#4a148c,stroke-width:2px,color:#111,font-weight:bold;
    classDef app fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px,color:#111,font-weight:bold;
    classDef external fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#111,font-weight:bold;

    subgraph ClientSide ["Cliente"]
        User[Frontend / Usuário]:::external
    end

    subgraph Infra ["Infraestrutura (Docker Host)"]
        Nginx[Nginx Reverse Proxy + SSL]:::infra
    end

    subgraph AppContainer ["Container da Aplicação (Python 3.11)"]
        direction TB
        Guni[Gunicorn + Uvicorn Workers]:::app
        
        subgraph Middleware ["Middleware Layer"]
            SlowAPI[SlowAPI Rate Limiter]:::app
            Cors[CORS Configuration]:::app
        end
        
        subgraph Logic ["Application Logic"]
            Val[Pydantic Validator]:::app
            FastAPI[FastAPI Router]:::app
            Cache[Cachetools TTLCache]:::app
        end
    end

    subgraph DataLayer ["Motor Analítico (In-Process)"]
        Duck[DuckDB Engine]:::storage
    end

    subgraph LocalParquets ["Parquets locais (sincronizados)"]
        LocalP[(Arquivos Parquet)]:::storage
    end

    %% Fluxo da Requisição
    User -->|1. HTTPS Request| Nginx
    Nginx -->|2. Forward| Guni
    Guni -->|3. ASGI Handoff| SlowAPI
    
    %% Middleware
    SlowAPI -->|4. Allowed| Val
    SlowAPI --x|429 Too Many Requests| Nginx
    Nginx -->|429 Response| User

    Val --> FastAPI
    FastAPI -->|5. Check Cache| Cache
    
    %% Cache Logic
    Cache -.->|Hit Return| FastAPI
    Cache -->|Miss| Duck
    
    %% Data Fetch local
    Duck -->|6. Read Parquet| LocalP
    
    Duck -->|7. Result DataFrame| FastAPI
    FastAPI -->|8. JSON Response| User
    `
  },

  techDecisions: [
    {
      title: "DuckDB sobre Parquet para OLAP in-process",
      content: `Registramos cada arquivo Parquet como view temporária (CREATE TEMP VIEW) e usamos DuckDB em read-only com PRAGMA de threads/memória. Isso permite executar agregações analíticas pesadas (joins entre works, sources, locations, authors) diretamente sobre os arquivos baixados, sem provisionar outro banco, mantendo leitura eficiente mesmo com dezenas de GB no disco.`
    },
    {
      title: "API leve com FastAPI + cache local",
      content: `FastAPI entrega as rotas REST, Pydantic valida payloads e Cachetools TTLCache guarda resultados de queries críticas (300s). Quando o cache falha, \`_execute_query\` executa SQL parametrizado no DuckDB e transforma o resultado em JSON pronto para o Vue.`
    },
    {
      title: "Rate limiting e deploy seguro",
      content: `SlowAPI aplica limites distintos (100 req/min para rotas gerais, 10 req/min para queries pesadas) e os headers \`X-RateLimit-*\` acompanham as respostas. O deploy é containerizado (Docker + Gunicorn/Uvicorn) com nginx/SSL e scripts para configurar firewall/Certbot, garantindo operação em produção e fácil recuperação em caso de falhas`
    }
  ],

  codeSnippets: [
    {
      language: "python",
      filename: "app/database.py",
      description: "Gerencia conexão DuckDB e registra views temporárias dos Parquets locais em modo read-only.",
      code: `
class DatabaseManager:
    def _register_parquet_tables(self, conn):
        tables = {...}
        for name, pattern in tables.items():
            file_pattern = self._resolve_pattern(pattern)
            conn.execute(f\"\"\"CREATE OR REPLACE TEMP VIEW {name} AS SELECT * FROM read_parquet('{file_pattern}')\"\"\")
`
    },
    {
      language: "python",
      filename: "app/queries.py",
      description: "Padrão `_execute_query` com cache e serialização coluna→lista para responder JSON com DuckDB.",
      code: `
def _execute_query(conn, sql, params=()):
    result = conn.execute(sql, params).fetchall()
    columns = [desc[0] for desc in conn.description]
    return _serialize_result(columns, result)
`
    }
  ],

  lessonsLearned: `
    Através deste projeto, aprofundei minha compreensão sobre a combinação DuckDB + Parquet para análise de dados, partindo da documentação para avaliar seus tradeoffs em cenários reais. O desenvolvimento me permitiu evoluir minhas habilidades em arquitetura de APIs REST, implementando componentes essenciais para escalabilidade como reverse proxies e rate limiting para gerenciar paralelismo de acesso. Além disso, aprimorei minha experiência com Docker, fortalecendo minha visão sobre portabilidade e containerização de sistemas backend.`,

  metrics: [
    { value: "40M+", label: "Linhas altmétricas processadas nos Parquets" },
    { value: "2s", label: "Latência máxima das agregações críticas" },
    { value: "90min", label: "TTL de cache para queries pesadas" },
    { value: "100/10", label: "Rate limit (genérico/heavy) por IP" }
  ],

  images: [
    {
      src: "/images/altmetria.png",
      alt: "Dashboard principal",
      caption: "Dashboard front-end consumindo a API FastAPI."
    }
  ],

  links: {
    github: "https://github.com/m4rcck11/plataforma-altmetria-backend",
    live: null
  },roadmap: {
    title: "Roadmap do Projeto LibreMétricas",
    items: [
      {
        title: "Início do Desenvolvimento",
        description: "Configuração do ambiente de desenvolvimento, planejamento de endpoints e arquitetura conforme contrato do frontend.",
        target: "Q3 2025",
        status: "completed"
      },
      { 
        title: "Preparação das Queries e Disponibilização dos Dados",
        description: "Separação dos dados necessários em parquet; disponibilização dos arquivos via bucket GCS + Alibaba OSS; Engenheiro de dados entrega as queries para o backend",
        target: "Q3 2025",
        status: "completed"
      },
      {
        title: "Backend API - Desenvolvimento Core",
        description: "Implementação da API REST com FastAPI + DuckDB; endpoints de consulta de eventos, fontes, periódicos, campos de pesquisa; sistema de cache e rate limiting",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Sistema de Coleta de Eventos Altmétricos",
        description: "Scripts de coleta automatizada de eventos do Crossref Event Data, Bluesky Firehose e Agência BORI; processamento e consolidação de eventos",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Integração Backend-Frontend",
        description: "Ajustes de compatibilidade da API; implementação do endpoint de busca por DOIs (/search_dois); integração com dashboard e visualizações",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Deploy do Frontend para testes",
        description: "Deploy do frontend em servidor para testes e conferência interna",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Deploy em Produção",
        description: "Deploy da API em servidor Alibaba Cloud com Docker; configuração de Nginx como reverse proxy; SSL com Let's Encrypt; sincronização automática de dados via cron/systemd",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Sincronização Incremental de Dados",
        description: "Sistema de sincronização inteligente do GCS; atualização automática dos dados OpenAlex LATAM; coleta periódica de eventos altmétricos",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Preparação de scripts para CI/CD",
        description: "Preparação de scripts para automação de tarefas de CI/CD",
        target: "Q4 2025",
        status: "completed"
      },
      {
        title: "Funcionalidade de exportação completa de eventos altmétricos",
        description: "Preparação de documentação da API e do projeto",
        target: "Q4 2025",
        status: "in_progress"
      },
      {
        title: "CI/CD com GitHub Actions",
        description: "Implementação de workflows automatizados para sincronização de dados, coleta de eventos, testes e deploy contínuo; notificações automáticas de falhas",
        target: "Q1 2026",
        status: "in_progress"
      },
      {
        title: "Expansão de Fontes de Dados",
        description: "Integração com novas fontes altmétricas; enriquecimento de metadados; cobertura expandida América Latina",
        target: "Q1 2026",
        status: "planned"
      },
      
    ]
}
};
