#!/usr/bin/env bash
set -euo pipefail
cd /home/lleche/my_portfolio

STAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP="backups/content-$STAMP"
mkdir -p "$BACKUP" lib scripts

echo "Backup folder: $BACKUP"

# Backup the files we know hold copy
for f in lib/data.ts src/lib/data.ts; do
  [ -f "$f" ] && cp -a "$f" "$BACKUP/" && echo "backed up $f"
done

find . \
  \( -path ./node_modules -o -path ./.next -o -path ./.git -o -path ./backups \) -prune \
  -o -type f \( -iname '*nav*' -o -iname '*header*' -o -iname '*footer*' -o -iname 'page.tsx' \) -print \
  | while read -r f; do
      mkdir -p "$BACKUP/$(dirname "$f")"
      cp -a "$f" "$BACKUP/$f"
      echo "backed up $f"
    done

# New content file. Old data.ts stays until you point components at this.
cat > lib/siteContent.ts << 'EOF'
export const nav = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Websites and apps for businesses, churches, and brands that need to look serious.",
  headlineLine1: "Your site should make the next step obvious",
  headlineLine2: "on a phone, in under three seconds.",
  subhead:
    "I am Lanzema Leche, a web developer in Winnipeg. I design and build marketing sites, catalogs, and simple products for people who cannot afford a vague six-month build. You get a clear structure, fast pages, and a site you can actually update.",
  primaryCta: { label: "See the work", href: "#work" },
  secondaryCta: { label: "Book a 20-minute call", href: "#contact" },
  proofs: [
    "Winnipeg-based",
    "Ships in weeks, not quarters",
    "Phones first",
    "Direct contact, no account manager",
  ],
};

export const workIntro = {
  heading: "Work you can click. Problems you will recognise.",
  body:
    "I take a messy brief — a brand that lives on WhatsApp, a church still running on paper, a product with no real menu — and turn it into a site people can use.",
};

export const approach = {
  id: "approach",
  heading: "How a project actually runs",
  steps: [
    {
      title: "Scope on one page",
      body: "We agree what the first version must do. If it is not on that page, it is not in the build.",
    },
    {
      title: "Structure before decoration",
      body: "Pages, actions, and content first. Colour after the path is clear.",
    },
    {
      title: "Build in the open",
      body: "You see a working URL early. No six weeks of silence.",
    },
    {
      title: "Hand off so you are not stuck",
      body: "You get a site you can edit, plus a short note on how to change the parts that will change.",
    },
  ],
  toolsLine:
    "Tools I reach for first: Next.js, React, TypeScript, Tailwind, Node, PostgreSQL, Vercel.",
};

export const audience = {
  heading: "Hire me if this sounds like you",
  fits: [
    "You run a business, church, or brand and the current site is a brochure nobody finishes.",
    "You need a first version that can take enquiries, orders, or sign-ups.",
    "You want one person accountable.",
    "You are in Winnipeg, elsewhere in Canada, or you run a West African brand that needs a sharper public face.",
  ],
  notFits: [
    "You need a large platform team.",
    "You want the cheapest theme with a logo dropped in.",
  ],
};

export const contactCopy = {
  heading: "Tell me what has to exist in four weeks.",
  body:
    "Send the current site (or the Instagram, if that is the site), what a customer should do when they land, and when you need it live. I will reply with whether I am the right hire and what a first version should include.",
  namePlaceholder: "Your name",
  emailPlaceholder: "you@studio.com",
  messagePlaceholder: "What should this site do that it cannot do today?",
  button: "Send the brief",
};

export const footerLine =
  "Lanzema Leche · Winnipeg · Websites and small products for people who need them to work.";
EOF

echo "wrote lib/siteContent.ts"

# Keep old arrays alive so current components do not crash
if [ -f lib/data.ts ]; then
  grep -q 'export const timeline' lib/data.ts || cat >> lib/data.ts << 'EOF'

export type TimelineEntry = {
  id: string;
  period: string;
  role: string;
  company: string;
  breakthrough: string;
  details: string[];
};
export const timeline: TimelineEntry[] = [];

export type SocialLink = {
  name: string;
  href: string;
  label: string;
  icon: LucideIcon;
};
export const socials: SocialLink[] = [];
EOF
  echo "ensured timeline + socials exist in lib/data.ts"
fi

echo
echo "DONE."
echo "1. Old files are in $BACKUP"
echo "2. New copy is in lib/siteContent.ts"
echo "3. Do NOT change the navbar in five files at once."
echo "   Change the Header/Nav component to read from siteContent.nav first."
echo "   Then rename section ids to #work #approach #contact to match."
echo "4. Leave Stack and Timeline sections in the page until their replacements are wired."
echo "   Hide them by commenting the JSX in page.tsx, do not delete yet."