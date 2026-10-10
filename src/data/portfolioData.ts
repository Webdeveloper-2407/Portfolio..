// Assets
import portraitImage from '../assets/images/rana_ahmad_editorial_1791639123300.jpg';
import cafeEbonImage from '../assets/images/project_cafe_ebon_1791635826042.jpg';
import homelyImage from '../assets/images/project_homely_furniture_1791635840945.jpg';
import theArtImage from '../assets/images/project_the_art_1791635852108.jpg';
import coffeeImage from '../assets/images/project_coffee_moments_1791635863159.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  liveUrl: string;
  image: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ToolItem {
  name: string;
  category: string;
  abbr?: string;
  iconType: 'code' | 'layout' | 'palette' | 'terminal' | 'server' | 'figma' | 'react' | 'tailwind';
}

export const PERSONAL_INFO = {
  fullName: 'Rana Ahmad',
  title: 'Frontend Developer & UI/UX Designer',
  location: 'Rahim Yar Khan, Pakistan',
  phone: '03026737036',
  phoneDial: '+923026737036',
  email: 'ranaahmaed2407@gmail.com',
  github: 'https://github.com/Webdeveloper-2407',
  instagram: 'https://instagram.com/developer.2407',
  discord: 'https://discord.com/users/1327249953285996705',
  discordId: '1327249953285996705',
  portrait: portraitImage,
  bioSummary:
    "I'm Rana Ahmad, a Frontend Developer and UI/UX Designer focused on building modern, responsive, visually engaging websites. I turn creative ideas into polished digital experiences through thoughtful design, clean interfaces, and purposeful interactions.",
  heroQuote:
    'I design and develop digital experiences that are intuitive, visually distinctive, and built around real user needs.',
  aboutFull:
    "I'm Rana Ahmad, a Frontend Developer and UI/UX Designer from Rahim Yar Khan, Pakistan. I enjoy transforming ideas into clean, modern, responsive websites that balance visual quality with usability.\n\nMy approach combines thoughtful interface design, attention to detail, and practical frontend development. I focus on creating digital experiences that look polished, work smoothly, and remain accessible across different devices.",
  principles: [
    'Detail-oriented',
    'User-focused',
    'Responsive-first',
    'Continuous learning',
    'Quality-driven development',
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive, polished, maintainable web interfaces with modern frontend technologies.',
  },
  {
    id: 'uiux',
    number: '02',
    title: 'UI/UX Design',
    description:
      'Creating intuitive layouts and thoughtful user journeys that make digital products easy to use.',
  },
  {
    id: 'responsive',
    number: '03',
    title: 'Responsive Web Design',
    description:
      'Developing websites that work smoothly across desktop, tablet, and mobile screens.',
  },
  {
    id: 'interactive',
    number: '04',
    title: 'Interactive Experiences',
    description:
      'Creating purposeful transitions, animations, hover effects, and useful interface interactions.',
  },
  {
    id: 'implementation',
    number: '05',
    title: 'Design Implementation',
    description:
      'Turning visual concepts and reference designs into working websites with attention to detail.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'Understand the goals, audience, project requirements, and visual direction.',
  },
  {
    number: '02',
    title: 'PLAN',
    description:
      'Organize the content, section structure, user journeys, and information hierarchy.',
  },
  {
    number: '03',
    title: 'DESIGN',
    description:
      'Establish the visual system, typography, spacing, composition, and interface details.',
  },
  {
    number: '04',
    title: 'DEVELOP',
    description:
      'Build responsive components and implement functional interactions.',
  },
  {
    number: '05',
    title: 'REFINE & DELIVER',
    description:
      'Test the layout, improve details, resolve issues, and prepare the website for deployment.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'cafe-ebon',
    title: 'Cafe Ebon',
    subtitle: 'Artisanal Cafe & Bakery Digital Experience',
    category: 'Cafe Website / Frontend Development',
    liveUrl: 'https://cafe-ebon-one.vercel.app/',
    image: cafeEbonImage,
    description:
      'A welcoming cafe website featuring handcrafted coffee visuals, warm tones, elegant typography, and an inviting customer experience.',
    tags: ['React', 'Responsive Design', 'UI/UX', 'Interactive Menu'],
    features: [
      'Warm artisanal typography and rich visual storytelling',
      'Interactive menu preview with category filtering',
      'Optimized media presentation with responsive layouts',
      'Table reservation and order online CTAs',
    ],
  },
  {
    id: 'homely',
    title: 'Homely',
    subtitle: 'Modern Furniture & Home Decor Store',
    category: 'E-commerce UI / Furniture Website',
    liveUrl: 'https://homely-modern-furniture-home-decor.vercel.app/',
    image: homelyImage,
    description:
      'A modern furniture and home decor experience featuring elegant product presentation, organized categories, and a refined shopping interface.',
    tags: ['E-Commerce UI', 'Tailwind CSS', 'Component Architecture', 'Product Grid'],
    features: [
      'Comprehensive department & room category hierarchy',
      'Hero promotional spotlight for outdoor living & patio decor',
      'Dynamic product cards with pricing and visual options',
      'Eco-conscious brand narrative and sustainable badges',
    ],
  },
  {
    id: 'the-art',
    title: 'The Art',
    subtitle: 'Wonders of Civilization Digital Museum',
    category: 'Museum Website / Interactive Design',
    liveUrl: 'https://the-art-khwp.vercel.app/',
    image: theArtImage,
    description:
      'An immersive digital museum experience showcasing historical wonders, architecture, and civilization through dramatic imagery and editorial storytelling.',
    tags: ['Interactive Museum', 'Editorial Layout', 'Typography', 'Visual Journey'],
    features: [
      'Classical gold editorial typography with high visual impact',
      'Immersive historical exploration across 7 wonders of antiquity',
      'Timeline navigation and architectural deep-dives',
      'Rich multi-era cultural storytelling and exhibit galleries',
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee',
    subtitle: 'Sweet Moments Start Here',
    category: 'Coffee Website / Frontend Development',
    liveUrl: 'https://coffee-psi-green.vercel.app/',
    image: coffeeImage,
    description:
      'A coffee-inspired website combining warm photography, elegant layouts, and a welcoming visual identity.',
    tags: ['Frontend Web', 'Micro-Interactions', 'Editorial Branding', 'Responsive'],
    features: [
      'Artisanal coffee brewing showcase and roast spotlights',
      'Warm natural color palette with organic typography',
      'Interactive explore features and daily brew specials',
      'Mobile-first responsive layout with fluid touch targets',
    ],
  },
];

export const TOOLS: ToolItem[] = [
  { name: 'HTML5', category: 'Markup & Structure', abbr: 'HTML', iconType: 'code' },
  { name: 'CSS3', category: 'Styling & Motion', abbr: 'CSS', iconType: 'palette' },
  { name: 'JavaScript', category: 'Core Language', abbr: 'JS', iconType: 'terminal' },
  { name: 'TypeScript', category: 'Type-Safe Logic', abbr: 'TS', iconType: 'code' },
  { name: 'React', category: 'Component Framework', abbr: 'React', iconType: 'react' },
  { name: 'Next.js', category: 'React Production', abbr: 'Next', iconType: 'server' },
  { name: 'Tailwind CSS', category: 'Utility Styling', abbr: 'Tailwind', iconType: 'tailwind' },
  { name: 'Git & GitHub', category: 'Version Control', abbr: 'Git', iconType: 'terminal' },
  { name: 'Figma', category: 'UI/UX Prototyping', abbr: 'Figma', iconType: 'figma' },
];
