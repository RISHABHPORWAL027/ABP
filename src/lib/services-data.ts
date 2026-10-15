import { ServiceTicketData } from "@/components/ui/admit-one-ticket";

export interface ServiceDetailItem extends ServiceTicketData {
  heroTagline: string;
  leadParagraph: string;
  pillars: {
    title: string;
    subtitle: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    timing: string;
    desc: string;
  }[];
}

export const ALL_SERVICES: ServiceDetailItem[] = [
  {
    num: "01",
    slug: "branding",
    badge: "BRAND",
    bg: "bg-[#5B3BE8] text-white",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Branding & Marketing",
    stubTitle: "BRAND IDENTITY",
    stubSubtitle: "VISUAL & CREATIVE DIRECTION",
    heroTagline: "Visual identity and persona direction that makes everything else easier.",
    leadParagraph:
      "A strong artist brand sets you apart before a listener even presses play. We help shape your visual identity, design language, and social aesthetics so your presence feels cohesive across every release, tour, and touchpoint.",
    p1: "A strong artist brand makes everything else easier. We help shape the visual identity, design language, and overall online presence so the artist or label feels consistent across every touchpoint.",
    p2: "From social media to campaign creatives, we build a look and feel that fits the music and stands out in a crowded space.",
    highlights: [
      "Visual identity & color direction",
      "Artist persona & creative narrative",
      "Social media brand guidelines",
      "Campaign visual asset kits",
      "Logo, typography & press kits",
    ],
    pillars: [
      {
        title: "Visual Identity System",
        subtitle: "Aesthetic Cohesion",
        description:
          "Defining typography, color palettes, cover art styling, and visual motifs that resonate with your music genre.",
      },
      {
        title: "Artist Persona & Lore",
        subtitle: "Story Architecture",
        description:
          "Crafting the creative backstory and narrative angles that media, curators, and fans naturally latch onto.",
      },
      {
        title: "Digital Ecosystem Look & Feel",
        subtitle: "Cross-Platform Consistency",
        description:
          "Standardizing banners, profile avatars, highlights, and bio links across Spotify, Instagram, YouTube, and Apple Music.",
      },
      {
        title: "Creative Direction & Merch",
        subtitle: "Physical & Digital Tangibility",
        description:
          "Guidance on tour visuals, music video color palettes, and merchandise designs that extend your brand.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Brand Discovery & Moodboarding",
        timing: "Week 1",
        desc: "Deep dive into your musical influences, sonic palette, target demographic, and visual aspirations.",
      },
      {
        step: "PHASE 02",
        title: "Visual Identity Kit Creation",
        timing: "Week 2",
        desc: "Designing color tokens, font pairings, logo locks, and sample campaign collateral.",
      },
      {
        step: "PHASE 03",
        title: "Channel Standardization",
        timing: "Week 3",
        desc: "Implementing the new look across all social and DSP profiles for immediate impact.",
      },
      {
        step: "PHASE 04",
        title: "Release Integration",
        timing: "Ongoing",
        desc: "Providing templates and creative guidelines for upcoming singles, EPs, and tour announcements.",
      },
    ],
  },
  {
    num: "02",
    slug: "release-campaigns",
    badge: "RELEASE",
    bg: "bg-[#FFC72C] text-black",
    badgeBg: "#5B3BE8",
    badgeText: "#FFFFFF",
    title: "Release-based Campaigns",
    stubTitle: "RELEASE SUITE",
    stubSubtitle: "PRE & POST LAUNCH ROLLOUT",
    heroTagline: "Structured rollout campaigns that maximize Day-1 impact and sustain momentum.",
    leadParagraph:
      "A release should feel planned, not rushed. We build complete pre-release, launch-day, and post-release campaigns that guide your track from early teaser buzz through to long-tail chart and playlist retention.",
    p1: "A release should feel planned, not rushed. We build pre-release and post-release campaigns that support the music across the full rollout, from the first push to the follow-through after launch.",
    p2: "The strategy is shaped around the timeline, the goals, and what the song or project needs to land better.",
    highlights: [
      "Full pre & post launch timeline",
      "Multi-channel synchronized drops",
      "Influencer & editorial seeding",
      "Retainer-based execution",
      "Weekly analytics & review",
    ],
    pillars: [
      {
        title: "Timeline & Milestone Architecture",
        subtitle: "Strategic Scheduling",
        description:
          "Mapping every asset, teaser, press embargo, and ad launch from 4 weeks out to 6 weeks post-release.",
      },
      {
        title: "Pre-Save & Anticipation Loops",
        subtitle: "Early Fan Mobilization",
        description:
          "Building interactive pre-save campaigns, snippet viral drops, and exclusive community previews.",
      },
      {
        title: "Day-1 Release Blitz",
        subtitle: "Concentrated Impact",
        description:
          "Aligning PR features, playlist additions, reel audio pushes, and ad activations within the critical first 72 hours.",
      },
      {
        title: "Sustained Long-Tail Push",
        subtitle: "Catalog Longevity",
        description:
          "Post-release acoustic versions, remixes, behind-the-scenes content, and continuous playlist pitching.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Pre-Release Blueprint",
        timing: "Weeks -4 to -1",
        desc: "Editorial pitching on Spotify for Artists, asset preparation, and snippet teaser schedule.",
      },
      {
        step: "PHASE 02",
        title: "Drop Week Ignition",
        timing: "Launch Week",
        desc: "Coordinated media press release, playlist placement activation, and creator reels blitz.",
      },
      {
        step: "PHASE 03",
        title: "Momentum Expansion",
        timing: "Weeks 2 to 4",
        desc: "Scaling paid ad retargeting, radio tracking, and expanding playlist coverage.",
      },
      {
        step: "PHASE 04",
        title: "Catalog Transition",
        timing: "Week 5+",
        desc: "Reviewing listener retention data and feeding audience learnings into the next release.",
      },
    ],
  },
  {
    num: "03",
    slug: "pr-activation",
    badge: "PR",
    bg: "bg-[#1E1E28] text-white",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "PR Activation",
    stubTitle: "MEDIA & PR",
    stubSubtitle: "EDITORIAL & BROADCAST REACH",
    heroTagline: "Targeted media features, broadcast interviews, and press coverage that legitimize your art.",
    leadParagraph:
      "When a story is strong, PR helps it travel further. We build PR activations that go beyond one channel and instead look at the full mix — social, print, digital, radio, television, podcasts, and music platforms.",
    p1: "When a story is strong, PR helps it travel further. We build PR activations that go beyond one channel and instead look at the full mix — social, print, digital, radio, television, podcasts, and music platforms.",
    p2: "The goal is to place the artist and the release in spaces where the story actually connects with people.",
    highlights: [
      "Top music publication features",
      "Heavy text & digital press coverage",
      "Radio & television broadcast spots",
      "Podcast & interview placements",
      "Verified media kit & press release distribution",
    ],
    pillars: [
      {
        title: "Editorial & Music Journalism",
        subtitle: "Reputable Publications",
        description:
          "Securing thoughtful track reviews, artist interviews, and trend pieces across premier music publications.",
      },
      {
        title: "Broadcast & Radio Outreach",
        subtitle: "National & Regional Airplay",
        description:
          "Pitching to regional radio stations, national syndicates, and cultural audio broadcasts.",
      },
      {
        title: "Story Hook Crafting",
        subtitle: "Compelling Narrative",
        description:
          "Transforming your music release into a cultural narrative that editors actively want to cover.",
      },
      {
        title: "Syndication & SEO Footprint",
        subtitle: "Digital Permanence",
        description:
          "Building a permanent Google Search knowledge presence that boosts artist credibility.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Press Angle Development",
        timing: "Week 1",
        desc: "Formulating compelling narrative hooks, artist bios, and tailored press releases.",
      },
      {
        step: "PHASE 02",
        title: "Targeted Media Outreach",
        timing: "Week 2",
        desc: "Direct outreach to our network of music journalists, podcast hosts, and radio producers.",
      },
      {
        step: "PHASE 03",
        title: "Feature Placement & Interviews",
        timing: "Weeks 3 to 4",
        desc: "Coordinating interviews, guest columns, radio track plays, and editorial debuts.",
      },
      {
        step: "PHASE 04",
        title: "Coverage Amplification",
        timing: "Post-Drop",
        desc: "Clipping coverage for social proof, label showcases, and search engine authority.",
      },
    ],
  },
  {
    num: "04",
    slug: "instagram",
    badge: "SOCIAL",
    bg: "bg-[#FF6B4A] text-white",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Instagram-centric Campaigns",
    stubTitle: "VIRAL REELS",
    stubSubtitle: "CREATOR & INFLUENCER PUSH",
    heroTagline: "Viral audio seeding, reel creator partnerships, and fan community growth.",
    leadParagraph:
      "Instagram is one of the primary places where modern music gets discovered, shared, and turned into cultural moments. We design campaigns using creator seeding, curated edit pages, and audio trend challenges that turn casual scrollers into streaming fans.",
    p1: "Instagram is one of the main places where music gets noticed, shared, and talked about. We build campaigns that use content plans, creatives, edit-page pushes, review-led support, and creator collaborations to give a song more reach.",
    p2: "This includes thinking about the artist's profile as a whole, not just one release at a time.",
    highlights: [
      "Curated edit-page campaigns",
      "Influencer audio collaborations",
      "Reels hook optimization",
      "Organic trend amplification",
      "Profile aesthetics & bio conversion",
    ],
    pillars: [
      {
        title: "Edit Page & Curation Networks",
        subtitle: "Aesthetic Distribution",
        description:
          "Placing your song across aesthetic niche edit pages, cinema reels, and mood communities.",
      },
      {
        title: "Creator Collaborations",
        subtitle: "Authentic Integration",
        description:
          "Partnering with vetted content creators whose lifestyle matches your sound for organic audio adoption.",
      },
      {
        title: "Hook & Audio Optimization",
        subtitle: "Algorithm-Friendly Cuts",
        description:
          "Isolating the most infectious 15-second snippet to maximize replay and reel creation rates.",
      },
      {
        title: "Profile Inflow Conversion",
        subtitle: "From Scroller to Follower",
        description:
          "Restructuring your Instagram page with high-converting pinned reels, highlights, and link hubs.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Hook Analysis & Audio Packaging",
        timing: "Week 1",
        desc: "Selecting the highest-converting song sections and preparing reel audio assets.",
      },
      {
        step: "PHASE 02",
        title: "Creator Outreach & Briefing",
        timing: "Week 2",
        desc: "Vetting and activating high-engagement creators and edit pages tailored to your genre.",
      },
      {
        step: "PHASE 03",
        title: "Coordinated Influx Wave",
        timing: "Week 3",
        desc: "Dropping reels simultaneously to trigger Instagram's audio trending algorithms.",
      },
      {
        step: "PHASE 04",
        title: "Traffic Redirection",
        timing: "Ongoing",
        desc: "Funneling active Instagram listeners straight to Spotify and Apple Music.",
      },
    ],
  },
  {
    num: "05",
    slug: "spotify",
    badge: "STREAM",
    bg: "bg-[#7CFF6B] text-black",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Spotify-focussed Campaigns",
    stubTitle: "DSP STREAMING",
    stubSubtitle: "ALGORITHMIC & PLAYLIST DATA",
    isFeaturedCaseStudy: true,
    caseStudyNote: "Featured Case Study: Alfaaz by Hamza Malik & Zain Zohaib reached #2 on Spotify Top Songs India",
    heroTagline: "Predictive algorithmic triggers, editorial pitching, and chart-topping momentum.",
    leadParagraph:
      "Spotify growth needs more than just hoping for streams. We use research, data, playlist strategy, and campaign planning to help artists build a stronger presence on the platform.",
    p1: "Spotify growth needs more than just hoping for streams. We use research, data, playlist strategy, and campaign planning to help artists build a stronger presence on the platform.",
    p2: "We look at search keywords, stream sources, artist profile visits, and algorithmic streams so the campaign is guided by actual performance, not guesswork.",
    highlights: [
      "Playlist placements & pitching",
      "Keyword & SEO strategy",
      "Audience data analytics",
      "Algorithmic trigger optimization",
      "Artist profile & Canvas design",
    ],
    pillars: [
      {
        title: "Algorithmic Discovery",
        subtitle: "Release Radar & Radio",
        description:
          "Optimizing save rates, completion ratios, and repeat plays to unlock algorithmic loops.",
      },
      {
        title: "Editorial & Curated Playlists",
        subtitle: "Direct Curation",
        description:
          "Targeted pitching to Spotify editorial editors and reputable independent tastemakers.",
      },
      {
        title: "Search & Profile SEO",
        subtitle: "High-Intent Search",
        description:
          "Optimizing track metadata, Canvas videos, and artist profiles for maximum organic discoverability.",
      },
      {
        title: "PR & Off-Platform Inflow",
        subtitle: "External Momentum",
        description:
          "Coordinating external traffic from press, radio, and Instagram reels to feed Spotify's algorithms.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Pre-Release Blueprint",
        timing: "Days -14 to -1",
        desc: "Metadata validation, Canvas video creation, and pre-save push across audience channels.",
      },
      {
        step: "PHASE 02",
        title: "Launch & Seeding",
        timing: "Days 1 to 5",
        desc: "Curator placement activation, high-intent traffic redirection, and monitoring save ratios.",
      },
      {
        step: "PHASE 03",
        title: "PR & Viral Push",
        timing: "Days 6 to 20",
        desc: "Digital media reviews, broadcast interviews, and creator campaigns synchronized for chart ascent.",
      },
      {
        step: "PHASE 04",
        title: "Long-Tail Retention",
        timing: "Day 20+",
        desc: "Analyzing retention data, algorithmic radio persistence, and converting new listeners.",
      },
    ],
  },
  {
    num: "06",
    slug: "ads",
    badge: "ADS",
    bg: "bg-[#2563EB] text-white",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Ads Marketing",
    stubTitle: "PAID MEDIA",
    stubSubtitle: "TARGETED ADS & RETARGETING",
    heroTagline: "Data-backed paid ad campaigns that convert viewers into high-intent streaming fans.",
    leadParagraph:
      "Our music-focused ad campaigns build around the data we already have on the project and the audience. That means the work is guided by context, not just by running ads for the sake of it.",
    p1: "Our music-focused ad campaigns build around the data we already have on the project and the audience. That means the work is guided by context, not just by running ads for the sake of it.",
    p2: "Campaigns can include Instagram awareness and conversion ads, YouTube in-feed and in-stream ads, lead generation, and redirection campaigns.",
    highlights: [
      "Instagram conversion ads",
      "YouTube in-feed & discovery ads",
      "Smart redirection & retargeting",
      "Lookalike music audience modeling",
      "Full analytics & ROAS tracking",
    ],
    pillars: [
      {
        title: "High-Intent Meta Ad Funnels",
        subtitle: "Instagram & Facebook Ads",
        description:
          "Targeted video ads reaching listeners of comparable artists and directing them to DSP platforms.",
      },
      {
        title: "YouTube Music & In-Feed Ads",
        subtitle: "Video Viewers to Streamers",
        description:
          "Deploying discovery ads in search results and related music videos to build permanent views and subs.",
      },
      {
        title: "Smart Redirection & Pixel Tracking",
        subtitle: "Data Retargeting",
        description:
          "Using custom landing smart links that capture pixels for continuous retargeting of top listeners.",
      },
      {
        title: "Cost-Per-Stream Optimization",
        subtitle: "Budget Efficiency",
        description:
          "Daily algorithmic bid adjustments to ensure the lowest cost per high-retention streaming listener.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Audience Profiling & Creative Testing",
        timing: "Week 1",
        desc: "Testing multiple video hooks and audience cohorts to identify top-performing combinations.",
      },
      {
        step: "PHASE 02",
        title: "Budget Scaling",
        timing: "Week 2",
        desc: "Concentrating ad spend behind winning creatives to drive mass cost-effective conversions.",
      },
      {
        step: "PHASE 03",
        title: "Retargeting & Lookalikes",
        timing: "Weeks 3 to 4",
        desc: "Retargeting listeners who watched 50%+ of videos and building lookalike streaming models.",
      },
      {
        step: "PHASE 04",
        title: "Data Audit & Reporting",
        timing: "Post-Campaign",
        desc: "Delivering detailed reports on cost-per-stream, audience demographics, and geographic lift.",
      },
    ],
  },
  {
    num: "07",
    slug: "content",
    badge: "CONTENT",
    bg: "bg-[#E8E6DF] text-black",
    badgeBg: "#FFE600",
    badgeText: "#000000",
    title: "Content & Social Media Management",
    stubTitle: "CONTENT OPS",
    stubSubtitle: "DAILY STRATEGY & ARTIST PERSONA",
    heroTagline: "Daily content strategy, persona management, and consistent storytelling between releases.",
    leadParagraph:
      "Keeping a music project active online takes more than posting randomly. We help with content ideas, page planning, artist persona building, and day-to-day social direction so the brand feels consistent and alive.",
    p1: "Keeping a music project active online takes more than posting randomly. We help with content ideas, page planning, artist persona building, and day-to-day social direction so the brand feels consistent and alive.",
    p2: "This is especially useful when the artist or label needs a clearer rhythm for content around releases, events, and ongoing visibility.",
    highlights: [
      "Weekly content calendar & prompts",
      "Behind-the-scenes storytelling",
      "Day-to-day community engagement",
      "Artist persona & voice direction",
      "Multi-platform scheduling & ops",
    ],
    pillars: [
      {
        title: "Content Rhythm & Planning",
        subtitle: "Never Run Out of Ideas",
        description:
          "Developing predictable posting schedules with curated formats that showcase the artist's lifestyle.",
      },
      {
        title: "Studio & Tour Behind-the-Scenes",
        subtitle: "Authentic Intimacy",
        description:
          "Guiding raw, compelling footage from writing sessions, recording booths, and backstage life.",
      },
      {
        title: "Community & Comment Strategy",
        subtitle: "Superfan Conversion",
        description:
          "Proactive engagement tactics that turn casual social followers into loyal, ticket-buying superfans.",
      },
      {
        title: "Cross-Platform Repurposing",
        subtitle: "Maximum Mileage",
        description:
          "Repackaging single core video assets for optimal performance across TikTok, Reels, and YouTube Shorts.",
      },
    ],
    process: [
      {
        step: "PHASE 01",
        title: "Social Media & Persona Audit",
        timing: "Week 1",
        desc: "Evaluating past post performance, follower demographics, and aesthetic inconsistencies.",
      },
      {
        step: "PHASE 02",
        title: "Monthly Content Calendar Setup",
        timing: "Week 2",
        desc: "Structuring content pillars, shoot shotlists, and weekly scheduling workflows.",
      },
      {
        step: "PHASE 03",
        title: "Active Execution & Management",
        timing: "Ongoing",
        desc: "Providing daily post guidance, caption drafting, hashtag optimization, and community replies.",
      },
      {
        step: "PHASE 04",
        title: "Growth Analysis & Tuning",
        timing: "Monthly",
        desc: "Monthly metric reviews adjusting formats based on engagement velocity and follower growth.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetailItem | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
