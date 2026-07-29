export const profile = {
  name: 'Demetrio Rojas Poñe',
  headline: 'INGENIERO EN SISTEMAS',
  role: 'Desarrollador Full Stack',
  location: 'Santa Cruz',
  phone: '76672191',
  email: 'demetriorojasp@gmail.com',
  objective:
    'Crecer como Desarrollador Full Stack, con enfoque en aplicaciones web escalables, ERP, CRM y soluciones integradas con IA. Me interesa construir productos mantenibles, aprender de forma continua y colaborar en equipos de trabajo.',
  summary:
    'Desarrollo interfaces web y soluciones backend con React.js, Next.js, Django y bases de datos SQL, cuidando la organización, la reutilización y la calidad del código.',
  highlights: ['React.js', 'Next.js', 'Django', 'SQL'],
  education: {
    title: 'Ingeniería en Sistemas',
    status: 'En curso - 9no semestre',
    school: 'Universidad Autónoma Gabriel René Moreno (UAGRM)'
  },
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    email: 'mailto:demetriorojasp@gmail.com'
  }
};

export const skills = {
  frontend: ['React.js', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Django', 'Node.js', 'REST APIs'],
  databases: ['MySQL', 'PostgreSQL', 'SQL Server'],
  tools: ['Git', 'GitHub']
};

export const experience = [
  {
    title: 'Plataforma de Punto de Venta',
    year: '2024',
    description:
      'Desarrollo de una plataforma universitaria con facturación, inventario, carrito de compras e integración de métodos de pago.',
    highlights: ['Facturación', 'Inventario', 'Carrito', 'Pagos']
  },
  {
    title: 'Asistente de Compra Inteligente',
    year: '2025',
    description:
      'Software web y móvil integrado con la API de OpenAI para apoyar procesos de compra y asistencia inteligente.',
    highlights: ['Web y móvil', 'OpenAI API', 'Asistencia inteligente']
  }
];

export const projects = [
  {
    title: 'Plataforma de Punto de Venta',
    type: 'Proyecto universitario',
    description:
      'Sistema de punto de venta con módulos de facturación, inventario, carrito de compras y pagos.',
    technologies: ['React', 'Node.js', 'SQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'Asistente de Compra Inteligente',
    type: 'Proyecto universitario',
    description:
      'Aplicación web y móvil con integración a OpenAI para asistencia durante el proceso de compra.',
    technologies: ['Next.js', 'Django', 'OpenAI'],
    github: '#',
    live: '#'
  }
];

export const navigation = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' }
];