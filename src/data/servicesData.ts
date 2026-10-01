export interface ServiceDetail {
  slug: string;
  num: string;
  title: string;
  shortDesc: string;
  tags: string;
  youtubeId: string;
  overview: string;
  whyThisApproach?: string;
  highlights: string[];
  deliverables: {
    title: string;
    description: string;
  }[];
  featuredCampaigns?: string[];
  pricingOrCommitment?: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "content-social-media",
    num: "01",
    title: "Content & Social Media Management",
    shortDesc: "Comprehensive social media solutions to boost awareness and engagement online.",
    tags: "PERSONAS / CREATIVE DIRECTION / SHOOT & EDIT / DAILY PLANNERS",
    youtubeId: "vsHtDl4Wee4",
    overview:
      "All By Play offers comprehensive social media solutions to boost awareness and engagement online. We build authentic artist personas aligned with individual musical styles and current social media algorithms.",
    highlights: [
      "Building artist personas based on individual personalities, musical styles, and latest social media mechanisms.",
      "Creative design, video shoots & professional editing.",
      "Curating and managing daily content planners.",
      "Developing proprietary social media IPs.",
    ],
    deliverables: [
      {
        title: "Artist Persona Development",
        description: "Crafting a multi-dimensional persona rooted in authentic musical identity, visual styling, and online real estate.",
      },
      {
        title: "Creative Production & Editing",
        description: "High-quality short-form video shoots, reel curation, lyric video graphics, and platform-optimized edits.",
      },
      {
        title: "Daily Content Planning & Scheduling",
        description: "Consistent, strategic posting schedules ensuring constant algorithmic momentum and audience retention.",
      },
      {
        title: "Proprietary Social Media IPs",
        description: "Conceptualizing repeatable content series and video franchises that build dedicated fanbase communities.",
      },
    ],
  },
  {
    slug: "ads-performance-marketing",
    num: "02",
    title: "Ads & Performance Marketing",
    shortDesc: "In-depth analysis of music data & audience pools for targeted ad campaigns across platforms.",
    tags: "DATA ANALYSIS / INSTAGRAM AWARENESS / SPOTIFY REDIRECTION / YOUTUBE",
    youtubeId: "i52TYO13Nyg",
    overview:
      "What sets us apart from other ad agencies is our collation and in-depth analysis of music data. Based on the artist's data and our in-house pool of receptive music listeners, we execute precision ad campaigns across platforms.",
    highlights: [
      "Instagram Awareness Campaign for Artists and Releases.",
      "Instagram to Spotify Redirection Campaigns to grow Spotify listenership.",
      "Lead generation, ticket sales, and campaigns for Tours, Festivals, and conferences.",
      "TikTok Campaigns & Performance Marketing ADs for YouTube music videos.",
    ],
    deliverables: [
      {
        title: "Instagram-to-Spotify Redirection",
        description: "Driving active listenership by funneling engaged Instagram reel viewers directly to Spotify tracks and playlists.",
      },
      {
        title: "YouTube Video Performance Ads",
        description: "Targeted YouTube TrueView & Discovery ads reaching high-intent music video watchers and genre fans.",
      },
      {
        title: "Tour & Festival Ticket Lead Gen",
        description: "High-converting geo-targeted ad funnels driving ticket sales and RSVP leads for live concerts and festivals.",
      },
      {
        title: "In-House Audience Pool Retargeting",
        description: "Leveraging ABP's proprietary music audience data pool to maximize conversion rates and reduce Cost Per Stream.",
      },
    ],
  },
  {
    slug: "branding-digital-identity",
    num: "03",
    title: "Branding & Digital Identity",
    shortDesc: "Crafting a distinctive brand identity to ensure a consistent online aesthetic.",
    tags: "EPKS / SHOWREELS / BRAND DECKS / STYLING / COLOR SCHEMES",
    youtubeId: "nwXAkF8OFCc",
    overview:
      "We help artists and labels craft a distinctive brand identity to ensure a consistent online aesthetic, so their uniqueness shines through every internet touchpoint.",
    highlights: [
      "EPKs (Electronic Press Kits), Showreels & Brand Decks for artists and labels.",
      "Brand marketing reachouts and commercial sponsorships.",
      "Building artist personas across internet real estate (whole look and feel, styling, color schemes).",
    ],
    deliverables: [
      {
        title: "Electronic Press Kits (EPKs)",
        description: "Interactive, media-ready EPKs designed for press outlets, booking agents, and festival promoters.",
      },
      {
        title: "Artist & Label Brand Decks",
        description: "Commercial deck design showcasing stream metrics, audience demographics, and sponsorship opportunities.",
      },
      {
        title: "Internet Real Estate Styling",
        description: "Cohesive color palettes, typography, profile banners, and visual identity across Spotify, Apple Music, YouTube & Instagram.",
      },
    ],
  },
  {
    slug: "pr-activation-media",
    num: "04",
    title: "PR Activation & Media Reach",
    shortDesc: "Unique PR activation beyond traditional media, engaging the right audience with compelling stories.",
    tags: "DIGITAL & PRINT / TV & RADIO / PODCASTS / INDIE CHANNELS",
    youtubeId: "wo2-ldwHqyQ",
    overview:
      "ABP offers unique PR activation beyond traditional media, incorporating social media, print, digital, TV, Radio, and global platforms + Podcast and indie music channels, to promote artists with compelling stories.",
    highlights: [
      "Multichannel PR incorporating social media, print, digital, TV, Radio, and global platforms.",
      "Placements across top podcasts and indie music channels.",
      "Targeted narrative building for release rollouts and national music media.",
    ],
    deliverables: [
      {
        title: "Digital & Print Press Placements",
        description: "Features and reviews across leading national & international music publications, blogs, and culture portals.",
      },
      {
        title: "TV, Radio & Broadcast Features",
        description: "Radio interviews, television appearances, and global broadcast station plays.",
      },
      {
        title: "Podcast & Indie Channel Network",
        description: "Guest appearances and music spotlights on influential culture podcasts and indie music YouTube channels.",
      },
    ],
  },
  {
    slug: "spotify-growth-strategy",
    num: "05",
    title: "Spotify Growth Strategy",
    shortDesc: "Targeted Spotify growth through Instagram reel campaigns — a cost-effective alternative to in-app ads.",
    tags: "REEL CAMPAIGNS / FOLLOWER ACQUISITION / LISTENERSHIP / SAVES",
    youtubeId: "NlvLxP9ehWE",
    overview:
      "Drive targeted Spotify growth through Instagram reel campaigns. A cost-effective alternative to expensive In-App ADs on Spotify (10L + INR Starting package), overcoming geographical limitations of Spotify's ad tools.",
    whyThisApproach:
      "Cost-effective alternative to expensive In-App ADs on Spotify. We prioritize comprehensive growth beyond streams, focusing on follower acquisition, stream/save rates, and active listenership.",
    highlights: [
      "Cost-effective alternative to expensive In-App Spotify ADs (10L+ INR starting package).",
      "Overcomes geographical limitations of Spotify's ad tools.",
      "Follower acquisition, improved listener/stream/save rates.",
      "Measurable growth within Spotify for Artists.",
      "Triggering active listenership via conversation redirection campaigns.",
    ],
    deliverables: [
      {
        title: "Instagram Reel Conversation Redirection",
        description: "Utilizing engaging viral reels to convert Instagram users into active, repeat Spotify listeners.",
      },
      {
        title: "Algorithmic Triggering (Radio & Discover Weekly)",
        description: "Optimizing save rates and repeat plays to trigger Spotify's Radio, Release Radar, and Discover Weekly algorithms.",
      },
      {
        title: "Listener & Follower Acquisition",
        description: "Building permanent monthly active listeners and profile followers rather than temporary stream spikes.",
      },
    ],
  },
  {
    slug: "tour-live-marketing",
    num: "06",
    title: "Tour & Live Event Marketing",
    shortDesc: "High-impact marketing campaigns for major live tours, festivals, and venue concerts.",
    tags: "COLDPLAY / SHAKIRA / ANUV JAIN / JASLEEN ROYAL / ARR TOUR",
    youtubeId: "FzjBVeOJdug",
    overview:
      "All By Play executes comprehensive tour marketing campaigns for arena tours, indie artist roadshows, and major international festivals, driving venue ticket sales and regional fanbase excitement.",
    featuredCampaigns: [
      "Coldplay",
      "Shakira",
      "ARR Wonderment Tour",
      "Anuv Jain",
      "Jasleen Royal",
      "Paresh Pahuja",
      "Purva Mantri",
      "Prateeksha Srivastava",
      "Outstation",
    ],
    highlights: [
      "Full tour marketing strategy from city announcement to show-day push.",
      "Proven track record with major international & Indian arena artists.",
      "Regional audience targeting & localized digital campaigns.",
    ],
    deliverables: [
      {
        title: "City Announcement & Rollout Strategy",
        description: "High-impact teaser campaigns and ticketing link launches across targeted tour cities.",
      },
      {
        title: "Geo-Targeted Performance Ads",
        description: "Hyper-local ad campaigns targeting music fans within 50km radius of venue cities.",
      },
      {
        title: "On-Ground & Influencer Seeding",
        description: "Regional creator partnerships and digital buzz generation leading up to concert dates.",
      },
    ],
  },
  {
    slug: "artist-retainer-360-management",
    num: "07",
    title: "Artist Retainer Plans & 360 Management",
    shortDesc: "Customized promotion strategies & in-house artist management with 360° support.",
    tags: "360 MGMT / 3-MONTH COMMITMENT / FESTIVAL PITCHING / LIVE PORTFOLIO",
    youtubeId: "M5OCLifZK1w",
    overview:
      "Customize the promotion strategy according to the artist's preference. Minimum 3 Months Commitment (renewable). Choose an in-house marketing service, combine services, or opt for full 360° artist management.",
    pricingOrCommitment: "Minimum 3 Months Commitment (Renewable)",
    featuredCampaigns: ["Yuvan Sharma", "NKSHTRA", "Prateeksha Srivastava"],
    highlights: [
      "Minimum 3 Months Commitment (renewable).",
      "Choose in-house marketing services or combine as needed.",
      "Option for complete 360° artist management.",
      "Developing a live portfolio for retainer artists by pitching them to festivals, organizers, and venues.",
    ],
    deliverables: [
      {
        title: "360° Marketing & Release Strategy",
        description: "Year-round strategic guidance covering every single release, brand deal, and digital push.",
      },
      {
        title: "Live Portfolio & Festival Pitching",
        description: "Actively pitching retainer artists to music festival curators, venue programmers, and tour organizers.",
      },
      {
        title: "Dedicated Management Team",
        description: "Full in-house marketing team handling day-to-day operations, ad budgets, and creative rollouts.",
      },
    ],
  },
  {
    slug: "playlist-pitching-covers",
    num: "08",
    title: "Playlist Pitches & Editorial Cover Pitching",
    shortDesc: "Direct editorial playlist pitching across major streaming services and platform covers.",
    tags: "EDITORIAL PLAYLISTS / COVER PITCHES / STREAMING PLATFORMS",
    youtubeId: "i52TYO13Nyg",
    overview:
      "All By Play facilitates official streaming service playlist pitches (at the discretion of streaming services), striving for flagship editorial placements and cover artwork features.",
    highlights: [
      "Playlist pitches across Spotify, Apple Music, Amazon Music, and Wynk.",
      "Opportunity for playlist cover features at platform editor discretion.",
      "Growth in streams, listeners, save rates, and playlist additions.",
    ],
    deliverables: [
      {
        title: "Streaming Editorial Pitching",
        description: "Crafting compelling editorial pitch notes submitted directly to streaming platform curators.",
      },
      {
        title: "Playlist Cover Pitching",
        description: "Positioning qualifying priority releases for coveted playlist cover artwork slots.",
      },
      {
        title: "Listener Playlist Triggering",
        description: "Activating organic algorithmic additions and listener playlist saves across global territories.",
      },
    ],
  },
];
