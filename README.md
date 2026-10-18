# ADITYA KUMAR &mdash; Cinematic Video Editor & Visual Storyteller Portfolio

A high-performance, dark-mode cinematic portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**. Designed for high-end client acquisition, showcasing commercial reels, narrative films, and brand promotions.

---

## Features

- **Reference-Accurate Hero**: Adapted directly from the studio editorial layout with `{ Bracketed }` headline styling, dual CTAs, availability badge, and interactive preview card slider.
- **Universal Video Handling**: Native support for **Google Drive**, **YouTube / Shorts**, and **Direct MP4/WebM** with click-to-load facades, 16:9 / 9:16 aspect ratio detection, and error boundaries.
- **Accessible Video Modal**: Accessible dialog with focus trapping, body scroll locking, Escape-key dismiss, and accessible close button.
- **Categorized Filmography Grid**: Asymmetric layout supporting 5 categories with real-time filtering and designed empty states.
- **60s Showreel Showcase**: Widescreen cinematic player with instant fallback instructions.
- **Editing Toolkit**: Interactive list of NLE and color grading software with hideable config flags.
- **Contact Form**: Client-side validation, honeypot spam prevention, Formspree/Web3Forms integration, and graceful fallback to direct mail and WhatsApp if API is unconfigured.

---

## How to add a video

All project media, categories, showreel settings, and contact links are centralized in a single configuration file:
📂 `data/projects.ts` (or `src/data/projects.ts`)

You **never need to edit UI components** to update your videos or portfolio items.

---

### 1. Adding a Google Drive Video

> [!IMPORTANT]
> **Google Drive Sharing Requirement:**
> The video in Google Drive **must** be set to:
> `General access: Anyone with the link` &rarr; `Viewer`.
> If this permission is not set, viewers will see an access denied notice in the player.

Open `data/projects.ts` and add or edit an item in `PROJECTS`:

```typescript
{
  id: 'indie-short-film',
  title: 'Through The Mist &mdash; Short Film',
  category: 'Documentary & Storytelling',
  source: 'drive',
  videoUrl: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlhs/view?usp=sharing',
  description: 'Color-graded short film exploring rural landscapes and human emotion.',
  year: '2025',
  client: 'Film Festival Selection',
}
```

The system automatically extracts the Drive file ID and embeds the preview stream at `https://drive.google.com/file/d/FILE_ID/preview`.

---

### 2. Adding a YouTube Video (Standard or Shorts)

Supports standard `watch?v=`, `youtu.be/`, and vertical `shorts/` links.

```typescript
{
  id: 'commercial-tech-launch',
  title: 'Apex Headphones &mdash; Product Launch',
  category: 'Brand Promotions',
  source: 'youtube',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  description: 'High-energy 30-second commercial with 3D product transitions and sound design.',
  year: '2025',
  client: 'Apex Audio',
}
```

#### For YouTube Shorts (9:16 aspect ratio):
```typescript
{
  id: 'kinetic-typography-reel',
  title: 'Rhythm & Type &mdash; Vertical Reel',
  category: 'Cinematic Reels',
  source: 'youtube',
  videoUrl: 'https://www.youtube.com/shorts/3jz_K9mP_2A',
  description: 'Fast-paced vertical reel edited for maximum social retention.',
  year: '2025',
}
```
*The modal will automatically switch to vertical `9:16` aspect ratio.*

---

### 3. Adding a Product-Shot Reel

```typescript
{
  id: 'luxury-perfume-spec',
  title: 'Noir Fragrance Commercial Spec',
  category: 'Product Shot Reels',
  source: 'youtube',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_YOUTUBE_ID',
  description: 'Macro bottle lighting, fluid simulations, and high-contrast editorial cut.',
  year: '2025',
  client: 'Spec Project',
}
```

---

### 4. Adding a College Promotional Video

```typescript
{
  id: 'campus-fest-aftermovie',
  title: 'Nexus Fest 2024 Aftermovie',
  category: 'College Videos',
  source: 'drive',
  videoUrl: 'https://drive.google.com/file/d/1rGUJC46Puo5mliPeKoiyDgM1_hCbPWUi/view?usp=drive_link',
  description: 'High-tempo concert editing, crowd energy, dynamic speed ramps, and sound effects.',
  year: '2024',
  client: 'University Media Council',
}
```

---

### 5. Adding a Custom Thumbnail

By default, YouTube and public Google Drive videos automatically generate thumbnails. If you want a custom high-resolution still frame or poster:

1. Place your image in the `public/thumbnails/` folder (e.g. `public/thumbnails/noir-poster.jpg`).
2. Add the `thumbnailUrl` property:

```typescript
{
  id: 'noir-perfume',
  title: 'Noir Fragrance Commercial Spec',
  category: 'Product Shot Reels',
  source: 'youtube',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_ID',
  thumbnailUrl: '/thumbnails/noir-poster.jpg',
  description: 'Macro bottle lighting and fluid simulations.',
  year: '2025',
}
```

---

## How to Set the Showreel

Open `data/projects.ts` and update `SHOWREEL_CONFIG`:

```typescript
export const SHOWREEL_CONFIG: ShowreelConfig = {
  headline: '60 SECONDS. MY ENTIRE WORLD.',
  subtitle: 'A high-octane edit exploring movement, color science, pacing, and emotional rhythm.',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_SHOWREEL_ID',
};
```

---

## Contact Form & Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Create a free form at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
3. Paste your form ID:
   ```env
   NEXT_PUBLIC_FORMSPREE_KEY=your_form_id_here
   ```
4. If this key is not set, the form gracefully displays a "Form not connected" banner and allows clients to email or WhatsApp directly without faking message delivery.

---

## Running Locally

```bash
# Run development server
npm run dev

# Run video parser unit tests
node --experimental-strip-types lib/__tests__/video.test.ts

# Build for production
npm run build
```
