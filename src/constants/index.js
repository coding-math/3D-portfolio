import {
  react,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  django,
  tailwind,
  nodejs,
  postgresql,
  git,
  blackgithub,
  docker,
  kubernetes,
  akaer,
  unifesp,
  cgprojects,
  yolo,
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: react,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'github',
    icon: blackgithub,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'kubernetes',
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer',
    company_name: 'Unifesp',
    icon: unifesp,
    iconBg: '#1E5A36',
    date: 'May 2023 - Present',
    points: [
      'Developing and maintaining web service using Django and other related technologies.',
      'Database modeling, development, and creation.',
      'Using the Scrum methodology to enhance project efficiency, resulting in timely project deliveries.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Akaer',
    icon: akaer,
    iconBg: '#F9F9F9',
    date: 'Sep 2023 - Present',
    points: [
      'Developing and maintaining internal web service using Django and other related technologies.',
      'Database modeling, development, and creation.',
      'Using and maintaining a IIS server to host django applications.',
    ],
  },
];

const testimonials = [
  {
    testimonial: '',
    name: '',
    designation: '',
    company: '',
    image: '',
  },
];

const projects = [
  {
    name: 'CG Projects',
    description:
      'A list of my Computer Graphics projects developed using React and Three.js. Comprehensive exploration of diverse computer graphics topics.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cgprojects,
    source_code_link: 'https://github.com/matheuxito/computer-graphics-projects',
  },
  {
    name: 'YOLO - Parking Spot',
    description:
      'I developed, with the help of YOLO, an artificial intelligence model capable of identifying vehicles in a parking lot for calculating available parking spaces.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'YOLO',
        color: 'green-text-gradient',
      },
      {
        name: 'torch',
        color: 'pink-text-gradient',
      },
    ],
    image: yolo,
    source_code_link: 'https://github.com/matheuxito/YOLO-Parking-Spot',
  },
];

export {
  services, technologies, experiences, testimonials, projects,
};
