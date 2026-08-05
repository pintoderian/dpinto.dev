export const profile = {
  name: "Derian Pinto",
  role: "Full Stack Developer",
  company: { name: "Codegea", url: "https://codegea.com" },
  location: "Guayaquil, Ecuador",
  email: "dpintoec@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/pintoderian/",
    github: "https://github.com/pintoderian",
    site: "https://codegea.com"
  }
};

export const about = {
  headline:
    "Ayudo a empresas a construir y modernizar sus sistemas a medida: plataformas internas, ERPs e integraciones con lo que ya usan.",
  body: [
    "Más de 8 años desarrollando aplicaciones web y APIs. Trabajé para dos de los medios digitales más grandes de Ecuador — eluniverso.com y ecuavisa.com — donde aprendí a intervenir sistemas en producción, migrarlos y mantenerlos funcionando sin interrumpir la operación. Hoy dirijo Codegea, donde construyo sistemas empresariales, integraciones con SAP Business One y pasarelas de pago, y asistentes con IA para empresas ecuatorianas."
  ]
};

export const nimbus = {
  name: "Nimbus",
  tagline: "Facturación electrónica para el SRI de Ecuador, como servicio",
  url: "https://nimbus.com.ec",
  description:
    "Cada empresa tiene su propio espacio, aislado y seguro, para emitir sus comprobantes electrónicos con validez legal ante el SRI. Diseñado y construido de punta a punta en Codegea.",
  features: [
    "Factura, nota de crédito, nota de débito, guía de remisión, retención y liquidación",
    "Firma electrónica con validez legal ante el SRI",
    "Cada cliente con su propio espacio, aislado del resto",
    "Alta de una empresa nueva, automática, apenas se confirma el pago"
  ]
};

export type Experience = {
  initials: string;
  company: string;
  role: string;
  dateRange: string;
  description: string;
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    initials: "C",
    company: "Codegea",
    role: "Founder",
    dateRange: "mar. 2023 — actualidad",
    current: true,
    description:
      "Fundé Codegea porque estaba cansado de ver empresas atadas a sistemas genéricos que no encajaban con su operación. Hoy, con mi equipo, diseño y construyo la plataforma completa —del ERP interno a la integración con SAP Business One y las pasarelas de pago— y la dejamos funcionando en producción, sin intermediarios. En Codegea construimos el ecommerce de DMori, que en este Mundial vendió tanto que se quedó sin stock varias veces. Por mi cuenta hice retail para Godcorp (con quienes sigo trabajando), Orodelti y Ferremundo, y una optimización de landing con SEO para Hotel Oro Verde."
  },
  {
    initials: "EU",
    company: "Diario El Universo",
    role: "Senior Full Stack",
    dateRange: "sep. 2021 — sep. 2023",
    description:
      "Dos años dentro de uno de los medios digitales más grandes de Ecuador. Construí los componentes React que sostienen eluniverso.com a diario, integré datos deportivos en tiempo real y mantuve la operación publicitaria (DFP + Piano) funcionando sin fricciones — en un sitio donde un error en producción no es una opción."
  },
  {
    initials: "EV",
    company: "Ecuavisa",
    role: "Senior Full Stack",
    dateRange: "oct. 2020 — sep. 2021",
    description:
      "Lideré la migración del CMS de ecuavisa.com —con la redacción publicando en vivo— de Drupal a IterCMS sin una sola interrupción. Integré la plataforma de video Mediastream y optimicé SEO y AMP para que las noticias cargaran más rápido en el celular de cada lector."
  },
  {
    initials: "SV",
    company: "SV Technology",
    role: "Tech Lead",
    dateRange: "mar. 2020 — sep. 2020",
    description:
      "Lideré un equipo de dos desarrolladores para construir, desde cero, el sistema de facturación electrónica y de nómina de la empresa, integrado con SAP Business One — la contabilidad pasó de reconciliar todo a mano a tener un solo sistema del que fiarse."
  },
  {
    initials: "OR",
    company: "Orodelti",
    role: "Full Stack",
    dateRange: "sep. 2018 — mar. 2020",
    description:
      "Mi primer trabajo como desarrollador: plataformas empresariales con PHP, Vue.js, Node.js y .NET, apps para Android y bases de datos en tres motores distintos. Ahí aprendí algo que sigo aplicando hoy: un buen sistema no es el que tiene más funciones, es el que nadie nota porque simplemente funciona."
  }
];

export const stack = [
  "Laravel",
  "NestJS",
  "Vue",
  "React / Next.js",
  "TypeScript",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Cloudflare",
  "Docker",
  "Nginx"
];
