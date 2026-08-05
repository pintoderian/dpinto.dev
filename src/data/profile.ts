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
    description: `Fundé Codegea para ayudar a empresas ecuatorianas a construir el software que su operación necesita. Trabajo directamente con cada cliente, desde el levantamiento de requerimientos hasta el despliegue en producción.

Lo que desarrollo:
Sistemas empresariales y plataformas internas a medida
Integraciones con SAP Business One, pasarelas de pago (Datafast) y APIs de sistemas de terceros
Asistentes con IA (OpenAI): chatbot entrenado con manuales y rutas del sistema para guiar a los usuarios, y enrutamiento automático de tickets de soporte
Automatización de procesos con n8n, Power Automate y ActiveCampaign
Despliegue completo en AWS (EC2, S3, SQS, DynamoDB), Cloudflare y Nginx

Clientes en retail, hotelería y medios: Orodelti S.A., Vink S.A. (Ferremundo), Hotel Oro Verde, DMori, Godcorp S.A.

Stack: Laravel, NestJS, Node.js, Vue, React, Next.js, TypeScript, PostgreSQL, MySQL.

Actualmente desarrollando un SaaS de inventario con facturación electrónica para el mercado ecuatoriano.`
  },
  {
    initials: "EU",
    company: "Diario El Universo",
    role: "Senior Full Stack",
    dateRange: "sep. 2021 — sep. 2023",
    description: `Desarrollé componentes en React con Arc Publishing para eluniverso.com.
Integré la API de datos deportivos Datafactory, transformando la respuesta de XML a JSON para alimentar los componentes deportivos en React.
Creé micrositios con Next.js y Tailwind CSS.
Adapté componentes con Tailwind CSS para mejorar la experiencia de usuario.
Implementé metodología Scrum para el despliegue de tareas.
Configuré y mantuve servidores utilizando Nginx.
Migré sitios web a Digital Ocean para mejorar escalabilidad y eficiencia.
Integré DoubleClick for Publishers (DFP) con Piano y di mantenimiento a los módulos publicitarios.
Desarrollé APIs con Express, TypeScript, Jest, Husky y Prettier.
Implementé Directus Headless CMS para optimizar los procesos empresariales de la compañía.`
  },
  {
    initials: "EV",
    company: "Ecuavisa",
    role: "Senior Full Stack",
    dateRange: "oct. 2020 — sep. 2021",
    description: `Lideré la migración del CMS del sitio www.ecuavisa.com de Drupal a IterCMS (Protecmedia), garantizando la continuidad del sitio sin interrupciones significativas.
Brindé soporte al personal de redacción, resolviendo los problemas técnicos de manera eficiente y oportuna.
Desarrollé módulos personalizados para mejorar la funcionalidad del sitio y cumplir con las necesidades del negocio.
Integré la plataforma de videos Mediastream en el CMS para mejorar la experiencia de usuario.
Diseñé y desarrollé micrositios dentro del CMS para promocionar eventos y campañas de marketing.
Gestioné los usuarios del CMS para garantizar el acceso apropiado y la seguridad de los datos.
Optimicé la velocidad del sitio y mejoré su posicionamiento en Google con estrategias de SEO.
Corregí el código de las plantillas AMP para mejorar la velocidad de carga en móviles.
Administré los servidores para levantar APIs y módulos personalizados, garantizando la continuidad de la operación.`
  },
  {
    initials: "SV",
    company: "SV Technology",
    role: "Tech Lead",
    dateRange: "mar. 2020 — sep. 2020",
    description: `Lideré técnicamente a un equipo de dos desarrolladores, definiendo el rumbo técnico de los proyectos y supervisando la entrega. (Cargo registrado como Líder de Proyectos.)
Desarrollé sistemas de facturación electrónica con Laravel y Vue.js, integrándolos con SAP Business One para una gestión contable más eficiente.
Desarrollé un sistema de nómina con Laravel y Vue.js para facilitar el cálculo y procesamiento de pagos.
Realicé migraciones de base de datos en MySQL, SQL Server y PostgreSQL, asegurando la integridad de los datos.
Di seguimiento a la implementación de software y pruebas para garantizar la calidad del producto final.
Brindé soporte y asistencia técnica a usuarios ante fallos o errores en los sistemas.
Elaboré módulos personalizados para optimizar los procesos y el flujo de trabajo de los distintos departamentos.`
  },
  {
    initials: "OR",
    company: "Orodelti",
    role: "Full Stack",
    dateRange: "sep. 2018 — mar. 2020",
    description: `Desarrollé plataformas empresariales con PHP, Vue.js, Node.js, jQuery, HTML5, Bootstrap 4, Laravel y .NET.
Creé aplicaciones para dispositivos móviles Android.
Analicé datos y generé informes para la toma de decisiones empresariales.
Realicé migraciones de base de datos asegurando la integridad de los datos.
Di seguimiento a la implementación de software y pruebas para garantizar la calidad del producto final.
Brindé soporte y solución de problemas técnicos a los usuarios.
Administré bases de datos en PostgreSQL, SQL Server y MySQL, optimizando el funcionamiento de las consultas.`
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
