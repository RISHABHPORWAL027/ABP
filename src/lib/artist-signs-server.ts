import fs from "fs";
import path from "path";
import {
  ArtistSignItem,
  KNOWN_ARTIST_METADATA,
  formatArtistTitle,
  STATIC_ARTIST_SIGNS,
} from "./artist-signs-data";

const VALID_IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".avif",
  ".gif",
]);

interface FileMetadata {
  title?: string;
  artist?: string;
  alt?: string;
  id?: string;
}

/**
 * Scans `public/artist sign` directory on disk dynamically and returns
 * all valid images with their metadata and web-accessible URLs.
 */
export function getArtistSignImagesFromDisk(): ArtistSignItem[] {
  try {
    const dir = path.join(process.cwd(), "public", "artist sign");

    if (!fs.existsSync(dir)) {
      return STATIC_ARTIST_SIGNS;
    }

    // Read custom metadata.json if present
    let customMetadata: Record<string, FileMetadata> = {};
    const metadataFile = path.join(dir, "metadata.json");
    if (fs.existsSync(metadataFile)) {
      try {
        const fileContent = fs.readFileSync(metadataFile, "utf-8");
        customMetadata = JSON.parse(fileContent);
      } catch (err) {
        console.error("Failed to parse metadata.json in public/artist sign:", err);
      }
    }

    const dirEntries = fs.readdirSync(dir, { withFileTypes: true });
    const imageFiles: { name: string; mtime: number }[] = [];

    for (const entry of dirEntries) {
      if (entry.name.startsWith(".")) continue;
      if (entry.name.toLowerCase() === "metadata.json") continue;
      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name).toLowerCase();
      if (!VALID_IMAGE_EXTENSIONS.has(ext)) continue;

      try {
        const stat = fs.statSync(path.join(dir, entry.name));
        imageFiles.push({ name: entry.name, mtime: stat.mtimeMs });
      } catch {
        imageFiles.push({ name: entry.name, mtime: 0 });
      }
    }

    if (imageFiles.length === 0) {
      return STATIC_ARTIST_SIGNS;
    }

    // Maintain stable order:
    // 1. Files defined in KNOWN_ARTIST_METADATA follow their defined sequence
    // 2. Any newly dropped files follow in sorted or chronological order
    const knownKeys = Object.keys(KNOWN_ARTIST_METADATA);
    imageFiles.sort((a, b) => {
      const idxA = knownKeys.indexOf(a.name);
      const idxB = knownKeys.indexOf(b.name);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return a.mtime !== b.mtime ? a.mtime - b.mtime : a.name.localeCompare(b.name);
    });

    return imageFiles.map(({ name }) => {
      const known = KNOWN_ARTIST_METADATA[name] || {};
      const custom = customMetadata[name] || {};
      const title = custom.title || known.title || formatArtistTitle(name);
      const artist = custom.artist || known.artist || (title.includes("—") ? title.split("—")[0].trim() : title);
      const alt = custom.alt || known.alt || `${title} - All By Play`;
      const id = custom.id || known.id || `cs-${name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
      const encodedUrl = encodeURI(`/artist sign/${name}`);

      return {
        id,
        url: encodedUrl,
        src: encodedUrl,
        title,
        alt,
        artist,
      };
    });
  } catch (error) {
    console.error("Error loading artist sign images from disk:", error);
    return STATIC_ARTIST_SIGNS;
  }
}
