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
  body: "Há 6 anos no mercado, o Cozinhandeiras é especializado no planejamento e na operação de catering para empresas. Sob a liderança de Patricia Kowalewski, com mais de 20 anos de experiência no segmento de eventos, unimos gastronomia, excelência, gestão estratégica e cuidado para transformar cada encontro em uma experiência memorável.",
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

export const differentiators = {
  eyebrow: "Diferenciais",
  title: "O cuidado está nos detalhes.",
  items: [
    {
      title: "Gastronomia + ambientação",
      description:
        "A experiência vai além do sabor. Cada mesa é pensada para harmonizar gastronomia, apresentação e detalhes que tornam o evento ainda mais especial.",
    },
    {
      title: "Personalização",
      description:
        "Cada evento é único. Criamos o formato, o menu e a experiência sob medida para o perfil, o propósito e os detalhes de cada ocasião.",
    },
    {
      title: "Operação profissional",
      description:
        "Planejamento e execução impecáveis para que você aproveite cada momento com seus convidados, enquanto cuidamos de todos os detalhes.",
    },
    {
      title: "Rede especializada",
      description:
        "Uma curadoria de parceiros especializados para cuidar de cada detalhe e elevar a experiência do seu evento.",
    },
    {
      title: "Experiência corporativa",
      description:
        "Entendemos a dinâmica e as exigências do ambiente corporativo, coordenando prazos, equipes, fornecedores e operação com precisão e agilidade.",
    },
  ],
};

export const clients = [
  "Artesanal Investimentos",
  "Banco Sicredi",
  "Bonfatti Eventos",
  "BonifiQ",
  "CHS Inc.",
  "CRM Bônus",
  "Delta Academy",
  "E-commerce Puro",
  "Essencial",
  "Fixe Eventos",
  "Grupo Visagio",
  "Igreja Presbiteriana de Pinheiros",
  "IFAZ Filmes",
  "inovabra Habitat",
  "Insight Media",
  "Joom Pulse",
  "Misses at Work",
  "NIPRO",
  "Ohio University",
  "Personic",
  "Prudential Seguros",
  "Rayes & Fagundes Advogados",
  "TOTVS",
  "Too Seguros",
  "Volkswagen",
  "Youse Seguros",
];

export type GalleryItem = {
  id: string;
  imageAlt: string;
  image?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g24",
    imageAlt: "Mesa de sucos naturais com arranjo floral e dispensers de limonada e suco de laranja",
    image: "/images/gallery/mesa-sucos-naturais-flores.jpg",
  },
  {
    id: "g12",
    imageAlt: "Mesa de buffet com arranjo floral em evento corporativo com convidados",
    image: "/images/gallery/evento-coquetel.jpg",
  },
  {
    id: "g15",
    imageAlt: "Taças de salada de tomate confit em mesa de evento com flores rosa",
    image: "/images/gallery/taca-tomate-confit.jpg",
  },
  {
    id: "g18",
    imageAlt: "Mesa com arranjo de girassóis, tábua de frios e guacamole",
    image: "/images/gallery/mesa-girassois-charcutaria.jpg",
  },
  {
    id: "g1",
    imageAlt: "Copos de frutas frescas variadas em mesa de evento corporativo",
    image: "/images/gallery/copos-frutas-frescas.jpg",
  },
  {
    id: "g2",
    imageAlt: "Doces de chocolate e mousse em copinhos com chantilly",
    image: "/images/gallery/doces-chocolate-mousse.jpg",
  },
  {
    id: "g3",
    imageAlt: "Bruschettas com tomate confit e alecrim em travessa dourada",
    image: "/images/gallery/bruschetta-tomate-confit.jpg",
  },
  {
    id: "g6",
    imageAlt: "Mini burgers de frango com palito decorativo em tábua de madeira",
    image: "/images/gallery/mini-burgers-frango.jpg",
  },
  {
    id: "g10",
    imageAlt: "Mini burgers artesanais com espeto colorido servidos em tábua de madeira",
    image: "/images/gallery/mini-burgers-coquetel.jpg",
  },
  {
    id: "g13",
    imageAlt: "Mesa com bolo de fubá fatiado, brownies, uvas e taça de frutas em evento corporativo",
    image: "/images/gallery/buffet-doces-frutas.png",
  },
  {
    id: "g14",
    imageAlt: "Sanduíches naturais, coxinhas, pão de queijo e mini burgers servidos em bandejas de fibra",
    image: "/images/gallery/buffet-sanduiches-salgados.png",
  },
  {
    id: "g19",
    imageAlt: "Mesa completa de buffet com sucos naturais e dispensers de água aromatizada",
    image: "/images/gallery/mesa-sucos-bebidas.jpg",
  },
  {
    id: "g11",
    imageAlt: "Mini quiches dourados servidos em travessa de cristal",
    image: "/images/gallery/quiches-coffee-break.jpg",
  },
  {
    id: "g23",
    imageAlt: "Arranjo floral rústico em vaso de cerâmica com detalhe de salgados ao fundo",
    image: "/images/gallery/arranjo-floral-detalhe.jpg",
  },
  {
    id: "g27",
    imageAlt: "Mini burgers artesanais e mousse com calda de frutas vermelhas em copinhos",
    image: "/images/gallery/mini-burgers-mousse-framboesa.jpg",
  },
  {
    id: "g28",
    imageAlt: "Mini burgers, tortinhas de tomate e copinhos de frutas frescas servidos em mesa de evento",
    image: "/images/gallery/mini-burgers-tortinhas-frutas.jpg",
  },
  {
    id: "g29",
    imageAlt: "Copinhos de guacamole com nachos servidos em evento ao ar livre",
    image: "/images/gallery/copos-guacamole-nachos.jpg",
  },
  {
    id: "g30",
    imageAlt: "Detalhe de dispenser de limonada com hortelã e limão",
    image: "/images/gallery/dispenser-limonada-detalhe.jpg",
  },
  {
    id: "g26",
    imageAlt: "Mesa de café da manhã com xícaras brancas e arranjo floral ao fundo",
    image: "/images/gallery/mesa-cafe-xicaras-flores.jpg",
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
      "Conheci o Cozinhandeiras e foi amor à primeira experiência. O sabor é incomparável, o atendimento é impecável e a entrega, sempre pontual e profissional. Desde então, o Cozinhandeiras faz parte dos eventos que organizo, atendendo marcas como iFood, Mercado Livre, Deloitte, TOTVS, Accor e Alqia. Nunca recebi uma crítica, apenas elogios e pedidos de contato da equipe da Patrícia. O que encanta é o cuidado com os detalhes e o sabor afetivo que remete à casa da gente: aconchego e mesa farta.",
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
    "Compartilhe os detalhes do evento e prepararemos uma proposta sob medida.",
  submitLabel: "Quero receber uma proposta",
  successMessage:
    "Obrigada! Recebemos as informações do seu evento. Nossa equipe entrará em contato para entender os detalhes e preparar uma proposta personalizada.",
  detailsPlaceholder:
    "Conte sobre o objetivo do evento, perfil dos convidados, local, horário, restrições alimentares e qualquer outro detalhe importante.",
};

export const cateringCorporativoPage = {
  h1: "Catering corporativo em São Paulo",
  intro:
    "O Cozinhandeiras é especializado no planejamento e na operação de catering para empresas em São Paulo. Sob a liderança de Patricia Kowalewski, com mais de 20 anos de experiência no segmento de eventos, cuidamos de cada etapa: planejamento do cardápio, gastronomia, ambientação da mesa e operação no dia do evento, com uma rede de parceiros especializados para elevar cada detalhe.",
  sections: [
    {
      title: "Planejamento sob medida",
      body: "Cada evento é único. O cardápio, o formato de serviço e a ambientação são pensados de acordo com o perfil dos convidados, o propósito do encontro e as particularidades do espaço.",
    },
    {
      title: "Gastronomia e ambientação",
      body: "A experiência vai além do sabor: cada mesa é montada para harmonizar gastronomia, apresentação e detalhes que tornam o evento corporativo memorável.",
    },
    {
      title: "Equipe e operação",
      body: "Coordenamos prazos, equipe e fornecedores com a agilidade e a precisão que a dinâmica corporativa exige, para que sua empresa possa se dedicar aos convidados.",
    },
  ],
  eventTypesLabel: "Formatos atendidos",
  metadata: {
    title: "Catering Corporativo em São Paulo | Cozinhandeiras",
    description:
      "Catering corporativo em São Paulo com gastronomia, ambientação e operação completa para eventos, empresas e experiências corporativas.",
  },
};

export const eventosCorporativosPage = {
  h1: "Catering para eventos corporativos",
  intro:
    "Atendemos eventos empresariais de diferentes formatos e propósitos: confraternizações, celebrações, lançamentos, eventos internos, encontros com clientes e experiências que fortalecem a marca de cada empresa.",
  sections: [
    {
      title: "Confraternizações e celebrações",
      body: "Momentos de reconhecimento e celebração dentro da empresa, com um cardápio e uma ambientação que criam clima de comemoração.",
    },
    {
      title: "Lançamentos e eventos para clientes",
      body: "Ocasiões em que a marca recebe convidados externos: a gastronomia e a apresentação são pensadas para representar bem a empresa e encantar quem participa.",
    },
    {
      title: "Eventos internos",
      body: "Reuniões, treinamentos e encontros de equipe também ganham cuidado gastronômico, com formatos que se adaptam à rotina corporativa.",
    },
  ],
  eventTypesLabel: "Tipos de evento atendidos",
  metadata: {
    title: "Eventos Corporativos em São Paulo | Cozinhandeiras",
    description:
      "Planejamento, gastronomia, ambientação e operação para eventos corporativos em São Paulo.",
  },
};

export const coffeeBreakPage = {
  h1: "Coffee break corporativo em São Paulo",
  intro:
    "O coffee break corporativo é um dos formatos mais procurados por empresas em São Paulo para reuniões, treinamentos e convenções. Cuidamos da gastronomia e da apresentação para que o intervalo também seja parte da experiência do evento.",
  sections: [
    {
      title: "Reuniões e treinamentos",
      body: "Formatos práticos e bem apresentados, pensados para encaixar na rotina de reuniões e treinamentos corporativos.",
    },
    {
      title: "Convenções e eventos maiores",
      body: "Coffee breaks planejados para acompanhar o ritmo de convenções e eventos corporativos de maior porte, com atenção à operação e ao tempo de serviço.",
    },
    {
      title: "Personalização do cardápio",
      body: "O cardápio é adaptado ao perfil dos convidados e ao formato do evento, mantendo o cuidado gastronômico que caracteriza o Cozinhandeiras.",
    },
  ],
  eventTypesLabel: "Formatos de coffee break",
  metadata: {
    title: "Coffee Break Corporativo em São Paulo | Cozinhandeiras",
    description:
      "Coffee break corporativo para empresas, reuniões, treinamentos e eventos em São Paulo, com gastronomia e apresentação cuidadosa.",
  },
};

export const seo = {
  title: "Catering e Buffet para Eventos Corporativos em SP | Cozinhandeiras",
  description:
    "Catering corporativo, coffee breaks, brunches, almoços, coquetéis e eventos empresariais em São Paulo. Gastronomia, ambientação e atendimento personalizado. Solicite uma proposta.",
};
