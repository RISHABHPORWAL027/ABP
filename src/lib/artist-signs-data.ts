export interface ArtistSignItem {
  id: string;
  url: string;
  src: string;
  title: string;
  alt: string;
  artist?: string;
}

export const KNOWN_ARTIST_METADATA: Record<
  string,
  { title: string; alt: string; artist?: string; id?: string }
> = {
  "ScreenShot Tool -20261013214100.webp": {
    id: "cs-darshan",
    title: "Darshan Raval — Nafrat",
    artist: "Darshan Raval",
    alt: "Darshan Raval - Nafrat - All By Play",
  },
  "ScreenShot Tool -20261013214119.webp": {
    id: "cs-prateeksha",
    title: "Prateeksha Srivastava — Sajna Ve",
    artist: "Prateeksha Srivastava",
    alt: "Prateeksha Srivastava - Sajna Ve - All By Play",
  },
  "ScreenShot Tool -20261013214155.webp": {
    id: "cs-kalp",
    title: "Kalp — Na Ho Tum",
    artist: "Kalp",
    alt: "Kalp - Na Ho Tum - All By Play",
  },
  "ScreenShot Tool -20261013214220.webp": {
    id: "cs-troyboi",
    title: "TroyBoi — Beggin",
    artist: "TroyBoi",
    alt: "TroyBoi - Beggin - All By Play",
  },
  "ScreenShot Tool -20261013214238.webp": {
    id: "cs-malkit",
    title: "Malkit Singh — Jind Mahi",
    artist: "Malkit Singh",
    alt: "Malkit Singh - Jind Mahi - All By Play",
  },
  "ScreenShot Tool -20261013214256.webp": {
    id: "cs-jacqueline",
    title: "Jacqueline Fernandez — Stormrider",
    artist: "Jacqueline Fernandez",
    alt: "Jacqueline Fernandez - Stormrider - All By Play",
  },
  "ScreenShot Tool -20261013214323.webp": {
    id: "cs-yuvan",
    title: "Yuvan — Dil Namurad",
    artist: "Yuvan",
    alt: "Yuvan - Dil Namurad - All By Play",
  },
  "ScreenShot Tool -20261013214424.webp": {
    id: "cs-raja-kumari",
    title: "Raja Kumari — Kashi To Kailash",
    artist: "Raja Kumari",
    alt: "Raja Kumari - Kashi To Kailash - All By Play",
  },
  "ScreenShot Tool -20261017024128.png": {
    id: "cs-ananya-birla",
    title: "Ananya Birla",
    artist: "Ananya Birla",
    alt: "Ananya Birla - All By Play",
  },
  "shrreya1.png": {
    id: "cs-shreya-ghoshal",
    title: "Shreya Ghoshal — When Every Headline Was A Melody",
    artist: "Shreya Ghoshal",
    alt: "Shreya Ghoshal - When Every Headline Was A Melody - All By Play",
  },
};

/**
 * Cleanly format any unknown or custom filename into a presentable title.
 * Examples:
 * - "ananya_birla.png" -> "Ananya Birla"
 * - "Badshah - Voodoo.jpg" -> "Badshah — Voodoo"
 * - "ScreenShot Tool -20261018.png" -> "Featured Artist Campaign"
 */
export function formatArtistTitle(filename: string): string {
  // Strip extension
  const withoutExt = filename.replace(/\.[^/.]+$/, "");

  // If it's a generic screenshot tool filename
  if (/^ScreenShot\s*Tool/i.test(withoutExt) || /^Screenshot/i.test(withoutExt)) {
    return "Featured Artist Campaign";
  }

  // Replace underscores and multiple dashes with spaces or em-dash
  return withoutExt
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

/**
 * Built-in static list as an instantaneous fallback and SSR baseline.
 */
export const STATIC_ARTIST_SIGNS: ArtistSignItem[] = [
  {
    id: "cs-darshan",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214100.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214100.webp",
    title: "Darshan Raval — Nafrat",
    alt: "Darshan Raval - Nafrat - All By Play",
    artist: "Darshan Raval",
  },
  {
    id: "cs-prateeksha",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214119.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214119.webp",
    title: "Prateeksha Srivastava — Sajna Ve",
    alt: "Prateeksha Srivastava - Sajna Ve - All By Play",
    artist: "Prateeksha Srivastava",
  },
  {
    id: "cs-kalp",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214155.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214155.webp",
    title: "Kalp — Na Ho Tum",
    alt: "Kalp - Na Ho Tum - All By Play",
    artist: "Kalp",
  },
  {
    id: "cs-troyboi",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214220.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214220.webp",
    title: "TroyBoi — Beggin",
    alt: "TroyBoi - Beggin - All By Play",
    artist: "TroyBoi",
  },
  {
    id: "cs-malkit",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214238.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214238.webp",
    title: "Malkit Singh — Jind Mahi",
    alt: "Malkit Singh - Jind Mahi - All By Play",
    artist: "Malkit Singh",
  },
  {
    id: "cs-jacqueline",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214256.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214256.webp",
    title: "Jacqueline Fernandez — Stormrider",
    alt: "Jacqueline Fernandez - Stormrider - All By Play",
    artist: "Jacqueline Fernandez",
  },
  {
    id: "cs-yuvan",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214323.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214323.webp",
    title: "Yuvan — Dil Namurad",
    alt: "Yuvan - Dil Namurad - All By Play",
    artist: "Yuvan",
  },
  {
    id: "cs-raja-kumari",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261013214424.webp",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261013214424.webp",
    title: "Raja Kumari — Kashi To Kailash",
    alt: "Raja Kumari - Kashi To Kailash - All By Play",
    artist: "Raja Kumari",
  },
  {
    id: "cs-ananya-birla",
    url: "/artist%20sign/ScreenShot%20Tool%20-20261017024128.png",
    src: "/artist%20sign/ScreenShot%20Tool%20-20261017024128.png",
    title: "Ananya Birla",
    alt: "Ananya Birla - All By Play",
    artist: "Ananya Birla",
  },
  {
    id: "cs-shreya-ghoshal",
    url: "/artist%20sign/shrreya1.png",
    src: "/artist%20sign/shrreya1.png",
    title: "Shreya Ghoshal — When Every Headline Was A Melody",
    alt: "Shreya Ghoshal - When Every Headline Was A Melody - All By Play",
    artist: "Shreya Ghoshal",
  },
];
