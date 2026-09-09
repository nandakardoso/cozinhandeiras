// Fonte única de verdade para toda a copy e dados factuais da landing page.
// Conteúdo não confirmado usa placeholders explícitos no formato [INSERIR ...] / [CONFIRMAR ...].
// Não adicionar depoimentos, números, clientes ou imagens que não constem aqui.

export const brand = {
  name: "Cozinhandeiras",
  tagline: "Gastronomia & Decoração",
  positioning:
    "Catering corporativo que une gastronomia, ambientação e cuidado em cada detalhe.",
  region: "São Paulo e região",
  whatsappNumber: "11 98908-2788",
  whatsappMessage:
    "Olá! Conheci o Cozinhandeiras pelo site e gostaria de solicitar uma proposta para um evento.",
  instagramUrl: "https://www.instagram.com/cozinhandeiraseventos/",
  instagramHandle: "@cozinhandeiraseventos",
  linkedinUrl: "https://www.linkedin.com/company/cozinhandeiras",
};

export const hero = {
  headline: "Eventos corporativos com cuidado em cada detalhe.",
  subheadline:
    "Catering, gastronomia e ambientação para transformar encontros corporativos em experiências que conectam pessoas e fortalecem marcas.",
  ctaPrimary: "Solicite seu orçamento",
  ctaSecondary: "Conheça nossos serviços",
  imageAlt: "Patricia Kowalewski em evento corporativo, junto à mesa de buffet",
  image: "/images/hero-patricia.jpg",
  signature: [
    { label: "Gastronomia", detail: "que dá sabor aos encontros." },
    { label: "Decoração", detail: "que transforma ambientes." },
    { label: "Experiências", detail: "que conectam pessoas." },
  ],
};

export const about = {
  eyebrow: "História do Cozinhandeiras",
  title: "Muito mais do que servir. Criamos experiências.",
  body: "Há 6 anos no mercado, a Cozinhandeiras é especializada no planejamento e na operação de catering para empresas. Sob a liderança de Patricia Kowalewski, com mais de 20 anos de experiência no segmento de eventos, unimos gastronomia, excelência, gestão estratégica e cuidado para transformar cada encontro em uma experiência memorável.",
  stats: [
    { value: "6 anos", label: "de Cozinhandeiras" },
    { value: "+20 anos", label: "de experiência em eventos" },
    { value: "B2B", label: "foco em eventos corporativos" },
  ],
  leaderName: "Patricia Kowalewski",
  leaderRole: "Fundadora e responsável pela operação",
  leaderImageAlt: "Patricia Kowalewski, fundadora da Cozinhandeiras",
  leaderImage: "/images/patricia-kowalewski.jpg",
};

export type Service = {
  id: string;
  title: string;
  benefit: string;
  description: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "coffee-break",
    title: "Coffee Breaks & Brunches",
    benefit: "Energia e cuidado logo na abertura do evento.",
    description:
      "Cardápios criativos e apresentações impecáveis para encontros que pedem energia, praticidade e cuidado.",
    imageAlt: "[INSERIR FOTO REAL — COFFEE BREAK]",
  },
  {
    id: "almocos",
    title: "Almoços Corporativos",
    benefit: "Curadoria gastronômica no ritmo da sua empresa.",
    description:
      "Refeições completas com curadoria gastronômica e operação adequada ao ritmo da empresa.",
    imageAlt: "[INSERIR FOTO REAL — ALMOÇO CORPORATIVO]",
  },
  {
    id: "feiras",
    title: "Catering para Feiras",
    benefit: "Logística precisa para o seu estande.",
    description:
      "Soluções sob medida, logística precisa e atendimento eficaz para estandes e eventos de negócios.",
    imageAlt: "[INSERIR FOTO REAL — CATERING PARA FEIRAS]",
  },
  {
    id: "coqueteis",
    title: "Coquetéis & Happy Hours",
    benefit: "Networking com apresentação impecável.",
    description:
      "Experiências gastronômicas para networking, relacionamento e celebração.",
    imageAlt: "[INSERIR FOTO REAL — COQUETEL CORPORATIVO]",
  },
  {
    id: "kits-lanche",
    title: "Kits Lanches Premium",
    benefit: "Praticidade sem abrir mão da apresentação.",
    description:
      "Soluções práticas e bem apresentadas para pequenos e grandes grupos.",
    imageAlt: "[INSERIR FOTO REAL — KIT LANCHE]",
  },
  {
    id: "cestas",
    title: "Cestas de Natal e Presentes Corporativos",
    benefit: "Encantamento para clientes, parceiros e colaboradores.",
    description:
      "Opções especiais para presentear e encantar clientes, parceiros e colaboradores.",
    imageAlt: "[INSERIR FOTO REAL — CESTAS CORPORATIVAS]",
  },
  {
    id: "buffets-tematicos",
    title: "Buffets Temáticos",
    benefit: "Uma solução para cada data comemorativa.",
    description:
      "Soluções para Natal, Páscoa, Dia das Mães, Dia dos Pais, Dia das Crianças, Halloween e outras ocasiões.",
    imageAlt: "[INSERIR FOTO REAL — BUFFET TEMÁTICO]",
  },
  {
    id: "projetos-especiais",
    title: "Projetos Especiais",
    benefit: "Um projeto criado do zero para o seu evento.",
    description:
      "Seu evento pede algo diferente? Criamos projetos personalizados de gastronomia, ambientação e operação de A&B de acordo com o objetivo, o público e o formato do encontro.",
    imageAlt: "[INSERIR FOTO REAL — PROJETO ESPECIAL]",
  },
];

export const servicesSection = {
  eyebrow: "Serviços",
  title: "Soluções de gastronomia e decoração",
  cta: "Quero planejar meu evento",
};

export const differentiators = {
  eyebrow: "Diferenciais",
  title: "O cuidado está nos detalhes.",
  items: [
    {
      title: "Gastronomia + ambientação",
      description:
        "A experiência não termina no cardápio. A apresentação da mesa faz parte da entrega.",
    },
    {
      title: "Personalização",
      description:
        "Formato, menu e experiência adaptados ao objetivo e ao perfil de cada evento.",
    },
    {
      title: "Operação profissional",
      description:
        "Planejamento e execução para que o cliente cuide dos convidados — e não dos problemas.",
    },
    {
      title: "Rede especializada",
      description:
        "Parceiros selecionados, como bartenders, decoradores, floristas e fornecedores especializados.",
    },
    {
      title: "Experiência corporativa",
      description:
        "Entendimento das exigências de empresas, agências, horários, fornecedores e operação.",
    },
  ],
};

export const clients = [
  "TOO Seguros / Volkswagen",
  "Rayes & Fagundes",
  "IFAZ Filmes / Agência FIXE Eventos",
  "Artesanal Investimentos",
  "Agência Bonfatti Eventos",
  "Agência Personic",
  "CRM Bônus",
  "Capgemini",
  "Inovabra Habitat",
  "Igreja Presbiteriana de Pinheiros",
  "Joom Pulse",
  "Misses at Work",
  "Nipro",
  "Prudential Seguros",
  "Banco Sicredi",
  "TOTVS",
  "Universidade de Ohio",
  "Grupo Visagio",
  "BonifiQ",
];

export const galleryCategories = [
  "Todos",
  "Gastronomia",
  "Coffee Break",
  "Mesas",
  "Coquetéis",
  "Eventos",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  category: Exclude<GalleryCategory, "Todos">;
  imageAlt: string;
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "Eventos",
    imageAlt: "Mesa de buffet com arranjo floral em evento corporativo com convidados",
    image: "/images/gallery/evento-coquetel.jpg",
  },
  {
    id: "g2",
    category: "Coquetéis",
    imageAlt: "Mini sanduíches e hambúrgueres artesanais servidos em bandejas de fibra",
    image: "/images/gallery/buffet-sanduiches-sliders.jpg",
  },
  {
    id: "g3",
    category: "Mesas",
    imageAlt: "Mesa completa de buffet com salgados, tortinhas, frutas e arranjo floral",
    image: "/images/gallery/mesa-buffet-completa.jpg",
  },
  {
    id: "g4",
    category: "Coffee Break",
    imageAlt: "Pão de queijo e sanduíches naturais em bandejas para coffee break",
    image: "/images/gallery/paes-queijo-sanduiches.jpg",
  },
  {
    id: "g5",
    category: "Gastronomia",
    imageAlt: "Mesa de doces e frutas com bolo caseiro fatiado e taça de uvas",
    image: "/images/gallery/mesa-doces-frutas.jpg",
  },
];

export type Testimonial = {
  name: string;
  role?: string;
  quote: string;
  imageAlt: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carolynne Bonfatti",
    quote:
      "A entrega foi impecável! A comida saborosa, variada e de qualidade, superou expectativas. O compromisso com prazos e a excelência do buffet foram essenciais para o sucesso da inauguração da nova sede da Ricoh. Vocês fizeram não apenas meu cliente feliz, mas também a mim. Obrigada por serem parceiras de confiança, sempre entregando o melhor.",
    imageAlt: "Carolynne Bonfatti",
    image: "/images/testimonials/carolynne-bonfatti.png",
  },
  {
    name: "Tatiane Matsuo",
    quote:
      "Realizamos um evento que era um momento de celebração com nossos parceiros e clientes, e um ponto alto do evento foi a presença do Cozinhandeiras. Muito mais do que prestar um serviço, a Patrícia vestiu a camisa e conquistou a todos com a sua simpatia, alegria e principalmente com sabores perfeitos. Ela nos deu as melhores sugestões de cardápio conforme nossa expectativa de formato de evento e investimento. Desejo que sua jornada seja sempre brilhante.",
    imageAlt: "Tatiane Matsuo",
    image: "/images/testimonials/tatiane-matsuo.png",
  },
  {
    name: "Lis Britto",
    quote:
      "Conheci o Cozinhandeiras e foi amor à primeira experiência. O sabor é incomparável, o atendimento é impecável e a entrega, sempre pontual e profissional. Desde então, o Cozinhandeiras faz parte dos eventos que organizo, atendendo marcas como iFood, Mercado Livre, Deloitte, Totvs, Accor e Alqia. Nunca recebi uma crítica — apenas elogios e pedidos de contato da equipe da Patrícia. O que encanta é o cuidado com os detalhes e o sabor afetivo que remete à casa da gente: aconchego e mesa farta.",
    imageAlt: "Lis Britto",
    image: "/images/testimonials/lis-britto.png",
  },
];

export const serviceOptions = [
  "Coffee Break",
  "Brunch",
  "Almoço",
  "Coquetel",
  "Happy Hour",
  "Feira",
  "Kit Lanche",
  "Buffet Temático",
  "Cestas",
  "Projeto Especial",
  "Ainda não sei",
] as const;

export const guestRangeOptions = [
  "Até 30",
  "31–50",
  "51–100",
  "101–200",
  "Mais de 200",
] as const;

export const leadForm = {
  eyebrow: "Vamos conversar sobre o seu evento",
  title: "Conte sobre seu evento",
  subtitle:
    "Para que a Patricia prepare uma proposta impecável, precisamos de alguns detalhes.",
  submitLabel: "Quero receber uma proposta",
  successMessage:
    "Obrigada! Recebemos as informações do seu evento. Nossa equipe entrará em contato para entender os detalhes e preparar uma proposta personalizada.",
  detailsPlaceholder:
    "Conte sobre o objetivo do evento, perfil dos convidados, local, horário, restrições alimentares e qualquer outro detalhe importante.",
};

export const seo = {
  title: "Catering e Buffet para Eventos Corporativos em SP | Cozinhandeiras",
  description:
    "Catering corporativo, coffee breaks, brunches, almoços, coquetéis e eventos empresariais em São Paulo. Gastronomia, ambientação e atendimento personalizado. Solicite uma proposta.",
};
