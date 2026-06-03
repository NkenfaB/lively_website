/**
 * Site-wide constants. Edit these when launching.
 */

export const site = {
  name: 'Lively',
  tagline: 'On-device cough screening, with optional cloud sync.',
  description:
    'Lively records a short cough sample and runs an on-device model to indicate possible signs of illness. Works fully offline; sign in to sync your history across devices. A research prototype — not a medical diagnosis.',
  url: 'https://lively.app', // replace with your actual Vercel URL once deployed
  email: 'nkenfabrandon71@gmail.com',
  // Update this with the public URL of the APK when you upload it
  // (e.g. a GitHub release asset, or Supabase Storage public file).
  apkUrl: 'https://example.com/lively-latest.apk',
  // Play Store URL (or null while pending).
  playStoreUrl: null as string | null,
  // Manifest URL that the app uses for OTA — also surfaced on the website footer for transparency.
  manifestUrl:
    'https://jsypqxpceuaosirxelnb.supabase.co/storage/v1/object/public/models/manifest.json',
} as const;

export const nav = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Download', href: '#download' },
  { label: 'Privacy', href: '/privacy' },
] as const;
