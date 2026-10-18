/**
 * CENTRALIZED PORTFOLIO DATA FOR ADITYA KUMAR
 * ===========================================
 * Edit this file to add/update your video links, showreel, services,
 * toolkit, and contact details without touching any UI component code.
 */

export type ProjectCategory =
  | 'Cinematic Reels'
  | 'Product Shot Reels'
  | 'College Videos'
  | 'Brand Promotions'
  | 'Documentary & Storytelling';

export type VideoSource = 'drive' | 'youtube' | 'mp4';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  source: VideoSource;
  /**
   * Leave empty ("") if you haven't uploaded yet.
   * Supports:
   * - Google Drive: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
   * - YouTube: https://www.youtube.com/watch?v=ID or https://youtu.be/ID or Shorts
   * - MP4: Direct MP4 / WebM video link
   */
  videoUrl: string;
  /** Optional web-optimized preview video for smooth muted hover autoplay */
  previewVideoUrl?: string;
  /** Optional custom thumbnail URL. If omitted, automatic thumbnail is derived from YouTube or Drive */
  thumbnailUrl?: string;
  description: string;
  year: string;
  client?: string;
  featuredInHero?: boolean;
}

export interface ShowreelConfig {
  headline: string;
  subtitle: string;
  /**
   * Paste your 60s showreel link here (YouTube, Google Drive, or MP4)
   * If left blank, a cinematic instructional placeholder will be shown.
   */
  videoUrl: string;
  thumbnailUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string; // Optional price or pricing range
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ToolkitItem {
  name: string;
  category: 'NLE' | 'VFX' | 'Color' | 'Design' | '3D' | 'Audio';
  icon: string;
  enabled: boolean;
}

export interface SocialLink {
  platform: 'Email' | 'WhatsApp' | 'Instagram' | 'YouTube' | 'Vimeo' | 'LinkedIn';
  url: string; // Left blank if not configured yet
  handle?: string;
}

export interface SiteConfig {
  ownerName: string;
  brandName: string;
  titleRole: string;
  tagline: string;
  heroHeadline: string;
  heroSupportingText: string;
  heroDescription: string;
  availabilityStatus: string;
  about: {
    heading: string;
    bio: string;
    philosophy: string;
    interests: string[];
    portraitImage?: string;
  };
  socialLinks: SocialLink[];
  formspreeEndpoint?: string; // from env or config
}

export const CATEGORIES: ProjectCategory[] = [
  'Cinematic Reels',
  'Product Shot Reels',
  'College Videos',
  'Brand Promotions',
  'Documentary & Storytelling',
];

/**
 * STARTER PROJECTS
 * Add your real video links here!
 * Never invent fake video links - empty videoUrls render gracefully.
 */
export const PROJECTS: Project[] = [
  {
    id: 'cinematic-reel-collection',
    title: 'Cinematic Reel Collection',
    category: 'Cinematic Reels',
    source: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1tRqnZZsy_1KEfkAbVZB5erujyXoCU_iQ/view?usp=drive_link',
    previewVideoUrl: '/previews/cinematic-reel-collection.mp4',
    description: 'Cinematic edits, transitions, camera movement, rhythm, and visual storytelling.',
    year: '2025',
    client: 'Director Showcase',
    featuredInHero: true,
  },
  {
    id: 'product-films-commercial',
    title: 'Product Films & Commercial Shots',
    category: 'Product Shot Reels',
    source: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1S4I4twQyXNmV6n_YuxeW7N28G0Va1zPf/view?usp=drive_link',
    previewVideoUrl: '/previews/product-films-commercial.mp4',
    description: 'Product-focused visuals, detail shots, lighting, camera movement, and commercial editing.',
    year: '2025',
    client: 'Commercial Brands',
    featuredInHero: true,
  },
  {
    id: 'college-films-campus',
    title: 'College Films & Campus Stories',
    category: 'College Videos',
    source: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1rGUJC46Puo5mliPeKoiyDgM1_hCbPWUi/view?usp=drive_link',
    previewVideoUrl: '/previews/college-films-campus.mp4',
    description: 'Campus life, college events, student activities, and institutional promotional films.',
    year: '2024',
    client: 'University Media',
    featuredInHero: true,
  },
  {
    id: 'brand-campaigns',
    title: 'Brand Campaigns',
    category: 'Brand Promotions',
    source: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1WHzRw1t3C8PR0cjk6DOKLgt8JSXS0dBO/view?usp=drive_link',
    previewVideoUrl: '/previews/brand-campaigns.mp4',
    description: 'Promotional videos, business reels, and creative brand storytelling.',
    year: '2025',
    client: 'E-Commerce & Tech',
    featuredInHero: false,
  },
  {
    id: 'documentary-films',
    title: 'Documentary Films',
    category: 'Documentary & Storytelling',
    source: 'drive',
    videoUrl: 'https://drive.google.com/file/d/1dhy8Taw3J-FszpZm-1Je0MvohrJaPiMY/view?usp=drive_link',
    previewVideoUrl: '/previews/documentary-films.mp4',
    description: 'Narrative-driven videos, interviews, human stories, and cinematic documentaries.',
    year: '2024',
    client: 'SHRI KUNDUN SWEETS',
    featuredInHero: false,
  },
];

export const SHOWREEL_CONFIG: ShowreelConfig = {
  headline: '60 SECONDS. MY ENTIRE WORLD.',
  subtitle: 'A high-octane edit exploring movement, color science, pacing, and emotional rhythm.',
  videoUrl: '', // Add your showreel link here
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Complete narrative pacing, scene construction, pacing, and editorial craft.',
  },
  {
    id: 'social-reels',
    title: 'Instagram Reels & YouTube Shorts',
    description: 'High-retention 9:16 vertical edits with magnetic pacing, sound effects, and typography.',
  },
  {
    id: 'product-commercial',
    title: 'Product Videos & Commercial Films',
    description: 'Sleek luxury product reveals, crisp dynamic cuts, macro lighting emphasis, and brand polish.',
  },
  {
    id: 'brand-promotions',
    title: 'Brand Promotions',
    description: 'Compelling high-conversion brand advertisements, launch teasers, and corporate narratives.',
  },
  {
    id: 'college-institutional',
    title: 'College & Institutional Videos',
    description: 'Captivating campus life showcases, fest aftermovies, student spotlights, and recruitment films.',
  },
  {
    id: 'documentary-editing',
    title: 'Documentary Editing',
    description: 'Thoughtful long-form storytelling, archival weaving, interview pacing, and emotional resonance.',
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'DaVinci Resolve color pipelines, custom LUT creation, skin tone balancing, and moody aesthetics.',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Dynamic kinetic typography, HUD elements, logo animations, and stylistic visual embellishments.',
  },
  {
    id: 'sound-design',
    title: 'Sound Design',
    description: 'Multi-layer foley, atmospheric risers, sub-bass drops, spatial audio mixing, and dialogue cleanup.',
  },
  {
    id: 'social-packages',
    title: 'Social Media Content Packages',
    description: 'Turnkey monthly deliverables tailored for creators and brands looking to scale visual presence.',
  },
];

export const CREATIVE_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understand the project, audience, objectives, moodboard, and creative direction.',
  },
  {
    step: '02',
    title: 'CRAFT',
    description: 'Organize the footage, build the narrative arc, establish the rhythm, and refine the rough cut.',
  },
  {
    step: '03',
    title: 'POLISH',
    description: 'Complete color grading, sound design, audio sweetening, motion graphics, and finishing touches.',
  },
  {
    step: '04',
    title: 'DELIVER',
    description: 'Export platform-ready master content (ProRes / 4K / Vertical) and complete agreed revisions.',
  },
];

export const TOOLKIT: ToolkitItem[] = [
  { name: 'DaVinci Resolve', category: 'Color', icon: 'palette', enabled: true },
  { name: 'Adobe Premiere Pro', category: 'NLE', icon: 'film', enabled: true },
  { name: 'After Effects', category: 'VFX', icon: 'sparkles', enabled: true },
  { name: 'Photoshop', category: 'Design', icon: 'image', enabled: true },
  { name: 'Illustrator', category: 'Design', icon: 'pen-tool', enabled: true },
  { name: 'Blender', category: '3D', icon: 'box', enabled: true },
  { name: 'Final Cut Pro', category: 'NLE', icon: 'scissors', enabled: true },
];

export const SITE_CONFIG: SiteConfig = {
  ownerName: 'ADITYA KUMAR',
  brandName: 'NaxAi',
  titleRole: 'Video Editor | Visual Storyteller',
  tagline: 'I TURN IDEAS INTO FEELINGS.',
  heroHeadline: 'I TURN IDEAS INTO FEELINGS.',
  heroSupportingText: 'Every Cut. Crafted to Perfection.',
  heroDescription: '',
  availabilityStatus: 'Available for freelance & commercial projects',
  about: {
    heading: "BEHIND EVERY FRAME, THERE'S A STORY.",
    bio: "I'm Aditya Kumar, a video editor and visual storyteller passionate about transforming raw footage into meaningful experiences. From fast-paced social content to cinematic brand films, I focus on rhythm, emotion, sound, and the details that make every frame matter.",
    philosophy:
      'Editing is not just cutting clips—it is sculpting time, rhythm, and human emotions into a cohesive cinematic journey.',
    interests: [
      'Color science & film emulation',
      'Soundscape synthesis & Foley design',
      'Dynamic typography & match cuts',
      'Cinematography & lighting design',
    ],
    portraitImage: '', // Optional image path: /images/aditya-portrait.jpg
  },
  socialLinks: [
    { platform: 'Email', url: 'mailto:zen.gaditya7091@gmail.com', handle: 'zen.gaditya7091@gmail.com' },
    { platform: 'WhatsApp', url: '', handle: '' },
    { platform: 'Instagram', url: '', handle: '' },
    { platform: 'YouTube', url: '', handle: '' },
    { platform: 'Vimeo', url: '', handle: '' },
    { platform: 'LinkedIn', url: '', handle: '' },
  ],
};
