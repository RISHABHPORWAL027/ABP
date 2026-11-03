import { NextResponse } from "next/server";
import { getArtistSignImagesFromDisk } from "@/lib/artist-signs-server";

export const revalidate = 3600;

export async function GET() {
  const images = getArtistSignImagesFromDisk();
  return NextResponse.json(
    {
      success: true,
      count: images.length,
      images,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}

