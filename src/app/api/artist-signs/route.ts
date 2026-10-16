import { NextResponse } from "next/server";
import { getArtistSignImagesFromDisk } from "@/lib/artist-signs-server";

export const dynamic = "force-dynamic";

export async function GET() {
  const images = getArtistSignImagesFromDisk();
  return NextResponse.json({
    success: true,
    count: images.length,
    images,
  });
}
