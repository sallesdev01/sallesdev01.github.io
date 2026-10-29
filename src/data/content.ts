// Todo o texto do site fica aqui. Edite este arquivo para atualizar o portfólio.

export const profile = {
  name: 'Weslley Almeida Sales',
  firstName: 'Weslley',
  lastName: 'Sales',
  age: 22,
  role: 'Gestor de Tráfego & Desenvolvedor',
  location: 'Diadema – SP',
  email: 'gestoreosalles@gmail.com',
  phone: '(11) 91408-0752',
  whatsapp: 'https://wa.me/5511914080752',
  linkedin: 'https://www.linkedin.com/in/eosallesofc/',
  github: 'https://github.com/sallesdev01',
  photo: '/img/weslley.jpg',
  photoCutout: '/img/weslley-cutout.webp',
  intro:
    'Gestor de tráfego que também escreve código. Uno mídia paga, dados e tecnologia para transformar investimento em receita previsível.',
}

export const heroStats = [
  { value: 200, prefix: 'R$', suffix: 'k+', label: 'investidos por mês' },
  { value: 4, suffix: 'x', label: 'ROAS multiplicado' },
  { value: 30, suffix: '', label: 'contas simultâneas' },
]

export const marquee = [
  'Google Ads',
  'Meta Ads',
  'TikTok Ads',
  'GA4',
  'Google Tag Manager',
  'Shopify',
  'Mercado Livre',
  'Power BI',
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Supabase',
  'Claude Code',
]

export const about = {
  statement: {
    lead: 'Opero mídia paga como quem escreve código:',
    rest: 'com estrutura, rastreamento e iteração constante.',
  },
  paragraphs: [
    'São 3 anos em mídia paga, performance e e-commerce, especializado em estruturar e escalar operações de aquisição de clientes. Hoje gerencio mais de R$ 200 mil mensais em Google Ads, Meta Ads e TikTok Ads.',
    'Meu diferencial é a ponte entre marketing e tecnologia. Estudo Análise e Desenvolvimento de Sistemas e uso programação, integrações via API e análise de dados para melhorar o rastreamento de conversões, automatizar processos e achar oportunidades de crescimento que o painel de anúncios não mostra.',
  ],
  facts: [
    { label: 'Idade', value: '22 anos' },
    { label: 'Base', value: 'Diadema – SP' },
    { label: 'Formação', value: 'ADS · Unicid' },
    { label: 'Idiomas', value: 'Espanhol B1 · Inglês A2' },
  ],
  numbers: [
    { value: 200, prefix: 'R$ ', suffix: 'k+', label: 'em mídia gerenciada por mês' },
    { value: 4, suffix: 'x', label: 'de multiplicação de ROAS' },
    { value: 100, suffix: '+', label: 'pedidos diários em e-commerce' },
    { value: 1000, suffix: '', label: 'usuários simultâneos no site (pico)' },
  ],
}

export type CaseVisual =
  | { kind: 'bars'; unit: string; bars: { label: string; value: number; display: string }[] }
  | { kind: 'split'; items: { label: string; display: string; up: boolean }[] }
  | { kind: 'big'; display: string; caption: string }
  | { kind: 'dots'; count: number; caption: string }

export type Case = {
  id: string
  client: string
  segment: string
  period: string
  headline: string
  summary: string
  channels: string[]
  results: string[]
  visual: CaseVisual
  // Coloque os prints em /public/cases/ e liste aqui, ex.: ['/cases/unic-google-ads.png']
  prints: string[]
}

export const cases: Case[] = [
  {
    id: 'unic-pharma',
    client: 'Unic Pharma',
    segment: 'E-commerce · Saúde e bem-estar',
    period: 'Ago/2026 – Atual',
    headline: 'Faturamento de R$ 1,2 mi para R$ 1,6 mi',
    summary:
      'Estratégia, gestão e otimização de aquisição em Google Ads, Meta Ads e TikTok Ads, com mais de R$ 200 mil mensais distribuídos entre canais por ROAS, CPA e receita.',
    channels: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Shopify'],
    results: [
      'ROAS multiplicado em até 4x com otimização estratégica',
      'Produtos da marca entre os primeiros resultados para termos do nicho',
      'Picos de 1.000 usuários ativos simultâneos no site',
      'Funis e campanhas de lançamento de produto',
    ],
    visual: {
      kind: 'bars',
      unit: 'Faturamento',
      bars: [
        { label: 'Antes', value: 1.2, display: 'R$ 1,2 mi' },
        { label: 'Depois', value: 1.6, display: 'R$ 1,6 mi' },
      ],
    },
    prints: [],
  },
  {
    id: 'ecom-solutions',
    client: 'Ecom Solutions',
    segment: 'Consultoria · E-commerce varejo',
    period: 'Mar/2025 – Mai/2025',
    headline: 'Menos investimento, mais faturamento',
    summary:
      'Gestão estratégica de mídia paga para oito contas de e-commerce do varejo, incluindo GM (Chevrolet). Definição de KPIs, investimento por canal e relatórios para reuniões com clientes.',
    channels: ['Google Ads', 'Meta Ads', 'Power BI'],
    results: [
      'Até 20% de redução no orçamento investido',
      'Até 30% de aumento no faturamento dos clientes',
      'Oito contas atendidas simultaneamente',
    ],
    visual: {
      kind: 'split',
      items: [
        { label: 'Investimento', display: '−20%', up: false },
        { label: 'Faturamento', display: '+30%', up: true },
      ],
    },
    prints: [],
  },
  {
    id: 'comercial-luvi',
    client: 'Comercial Luvi',
    segment: 'Marketplaces · Mercado Livre, Amazon, Shopee',
    period: 'Dez/2024 – Fev/2025',
    headline: 'Operação com mais de 100 pedidos por dia',
    summary:
      'Estruturação de anúncios em marketplaces, direção de criativos em vídeo e imagem e otimização de cadastros com SEO e copywriting.',
    channels: ['Mercado Livre', 'Amazon', 'Shopee'],
    results: [
      'Mais de 100 pedidos diários no e-commerce',
      'Melhor posicionamento orgânico nos marketplaces',
      'Criativos orientados a CTR e eficiência',
    ],
    visual: { kind: 'big', display: '100+', caption: 'pedidos por dia' },
    prints: [],
  },
  {
    id: 'purple',
    client: 'Purple Assessoria',
    segment: 'Agência · B2B e B2C',
    period: 'Set/2025 – Jul/2026',
    headline: '30 contas de anúncios ao mesmo tempo',
    summary:
      'Geração de leads e aquisição de clientes para empresas de esporte, fitness, estética e culinária, com gestão de demandas em Asana, Notion e Monday.',
    channels: ['Meta Ads', 'Google Ads'],
    results: [
      'Cerca de 30 contas gerenciadas em paralelo',
      'Estratégias de geração de leads B2B e B2C',
      'Rotina de KPIs e otimização de investimento',
    ],
    visual: { kind: 'dots', count: 30, caption: 'contas ativas' },
    prints: [],
  },
]

export const experience = [
  {
    role: 'Gestor de Tráfego',
    company: 'Unic Pharma',
    period: 'Ago/2026 – Atual',
    place: 'Diadema – SP',
    points: [
      'Campanhas em Google Ads, Meta Ads e TikTok Ads com mais de R$ 200 mil/mês',
      'Distribuição de orçamento por ROAS, CPA e receita',
      'Funis de venda, lançamentos e adequação às políticas das plataformas',
    ],
    tools: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Shopify', 'Tiny ERP', 'Claude Code'],
  },
  {
    role: 'Gestor de Tráfego Pleno',
    company: 'Purple Assessoria de Marketing',
    period: 'Set/2025 – Jul/2026',
    place: 'Híbrido · Diadema – SP',
    points: [
      'Cerca de 30 contas de anúncios simultâneas, B2B e B2C',
      'Geração de leads e aquisição em esporte, fitness, estética e culinária',
      'Monitoramento de KPIs e otimização de investimentos',
    ],
    tools: ['Meta Ads', 'Google Ads', 'Asana', 'Notion', 'Monday.com'],
  },
  {
    role: 'Consultor de E-commerce',
    company: 'Ecom Solutions',
    period: 'Mar/2025 – Mai/2025',
    place: 'Remoto · PJ',
    points: [
      'Mídia paga para oito contas de varejo, incluindo GM (Chevrolet)',
      'Até 20% menos investimento com até 30% mais faturamento',
    ],
    tools: ['Google Ads', 'Meta Ads', 'Power BI'],
  },
  {
    role: 'Gestor de E-commerce e Performance',
    company: 'Comercial Luvi',
    period: 'Dez/2024 – Fev/2025',
    place: 'Presencial · São Paulo – SP',
    points: [
      'Campanhas em Mercado Livre, Amazon e Shopee',
      'Operação de anúncios com mais de 100 pedidos diários',
      'Inbound, funis, SEO e copywriting de produto',
    ],
    tools: ['Mercado Livre', 'Amazon', 'Shopee'],
  },
  {
    role: 'Gestor de Tráfego',
    company: 'Diadema Veículos',
    period: 'Jan/2024 – Jun/2024',
    place: 'Presencial · Diadema – SP',
    points: [
      'Estruturação inicial de tráfego pago no segmento automotivo',
      'Fluxo de geração de leads para a equipe comercial',
    ],
    tools: ['Meta Ads', 'Google Ads', 'Webmotors', 'Mercado Livre'],
  },
]

export const process = [
  { title: 'Diagnóstico', text: 'Auditoria de contas, funil, margem e metas reais do negócio.' },
  { title: 'Rastreamento', text: 'GA4, GTM e integrações via API para medir cada conversão.' },
  { title: 'Estrutura', text: 'Campanhas, públicos e criativos organizados para aprender rápido.' },
  { title: 'Otimização', text: 'Leitura diária de ROAS, CPA e testes contínuos de criativo e oferta.' },
  { title: 'Escala', text: 'Mais orçamento onde o dado prova retorno, novos canais e automação.' },
]

export const stack = [
  {
    title: 'Mídia paga & performance',
    items: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Planejamento de mídia', 'ROAS / CPA', 'Leads B2B e B2C', 'Remarketing', 'Funis de venda', 'Edição de vídeo com IA'],
  },
  {
    title: 'Analytics & dados',
    items: ['GA4', 'Google Tag Manager', 'Power BI', 'Excel', 'KPIs', 'Rastreamento de conversões', 'Integrações via API'],
  },
  {
    title: 'E-commerce & negócio',
    items: ['Shopify', 'Mercado Livre', 'Amazon', 'Shopee', 'CRO', 'SEO', 'Copywriting', 'Inbound', 'Rentabilidade'],
  },
  {
    title: 'Tecnologia & dev',
    items: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'SQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Automação', 'Claude Code', 'GPT-6 Astra'],
  },
]

export const education = {
  degree: {
    title: 'Análise e Desenvolvimento de Sistemas',
    school: 'Universidade Cidade de São Paulo (Unicid)',
    status: 'Em andamento',
  },
  certifications: [
    { title: 'Google Ads e Google Analytics 4', issuer: 'Google Skillshop', year: '2025' },
    { title: 'Power BI para Business Intelligence', issuer: 'Data Science University', year: '' },
    { title: 'Análise de Dados com Power BI', issuer: 'Fundação Bradesco', year: '' },
    { title: 'Inbound Marketing', issuer: 'HubSpot Academy', year: '' },
    { title: 'SEO e Marketing de Conteúdo', issuer: 'Santander Open Academy', year: '' },
  ],
}
