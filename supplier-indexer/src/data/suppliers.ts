export type Supplier = {
  id: string;
  slug: string;
  name: string;
  category: string;
  partnerType: string;
  description: string;
  website: string;
  portalUrl?: string;
  tags: string[];
  status: "Public" | "Pending" | "Review";
  lastUpdated: string;
  sourceType: "Partner Portal" | "Docs" | "Press" | "Search";
  sourceUrl: string;
  highlights: string[];
};

export type ApiProfile = {
  id: string; name: string; type: string; access: string; url: string;
  description: string; tags: string[]; sourceUrl: string; relationship: string;
};

export const suppliers: Supplier[] = [
  {
    id: "sup-001",
    slug: "ross-partner-portal",
    name: "Ross Partner Portal",
    category: "Supplier Access",
    partnerType: "Partner Portal",
    description:
      "Primary public-facing portal for vendor and supplier communication, document exchange, and operational onboarding.",
    website: "https://partners.rossstores.com/",
    portalUrl: "https://partners.rossstores.com/",
    tags: ["EDI", "Vendor Management", "Retail", "Supply Chain"],
    status: "Public",
    lastUpdated: "2026-09-01",
    sourceType: "Partner Portal",
    sourceUrl: "https://partners.rossstores.com/",
    highlights: [
      "Supplier-facing portal",
      "Vendor onboarding and document exchange",
      "Retail operations and EDI context",
    ],
  },
  {
    id: "sup-002",
    slug: "supply-chain-technology",
    name: "Ross Stores Supply Chain Technology",
    category: "Operations",
    partnerType: "Technology Ecosystem",
    description:
      "Public description of Ross Stores' AI-driven supply chain operating model, automation, and merchandise analytics footprint.",
    website: "https://corporate.rossstores.com/",
    portalUrl: "https://corporate.rossstores.com/",
    tags: ["AI", "Automation", "Inventory", "Warehouse", "Analytics"],
    status: "Public",
    lastUpdated: "2026-05-02",
    sourceType: "Docs",
    sourceUrl: "https://corporate.rossstores.com/",
    highlights: [
      "AI-driven inventory allocation",
      "Distribution center automation",
      "Merchandise analytics and planning",
    ],
  },
  {
    id: "sup-003",
    slug: "vendor-edi-network",
    name: "Vendor EDI Network",
    category: "Data Exchange",
    partnerType: "EDI Vendor",
    description:
      "A public metadata category representing structured retailer data exchange patterns used in supplier and vendor systems.",
    website: "https://partners.rossstores.com/",
    portalUrl: "https://partners.rossstores.com/",
    tags: ["EDI", "Data Exchange", "Supplier Portal"],
    status: "Review",
    lastUpdated: "2026-08-22",
    sourceType: "Press",
    sourceUrl: "https://partners.rossstores.com/",
    highlights: [
      "EDI-oriented supplier communication",
      "Operational data exchange",
      "Structured vendor integration",
    ],
  },
  {
    id: "sup-004",
    slug: "merchandising-analytics",
    name: "Merchandising Analytics",
    category: "Analytics",
    partnerType: "Intelligence Platform",
    description:
      "A representative public profile for merchandising and allocation intelligence activities relevant to off-price retail operations.",
    website: "https://corporate.rossstores.com/",
    portalUrl: "https://corporate.rossstores.com/",
    tags: ["Analytics", "Merchandising", "AI", "Retail"],
    status: "Pending",
    lastUpdated: "2026-09-10",
    sourceType: "Search",
    sourceUrl: "https://www.rossstores.com",
    highlights: [
      "Merchandise analytics and planning",
      "Public-facing retail intelligence narrative",
      "AI and operational efficiency themes",
    ],
  },
];

export const featuredSuppliers = suppliers.slice(0, 3);

export const categories = [
  "All",
  "Supplier Access",
  "Operations",
  "Data Exchange",
  "Analytics",
];

export const apiProfiles: ApiProfile[] = [
  { id: "api-001", name: "Ross Stores Supply Chain Technology", type: "Public ecosystem profile", access: "Enterprise / partner access", url: "https://corporate.rossstores.com/", description: "A public profile of Ross Stores' supply-chain technology, including inventory allocation, distribution automation, and merchandise analytics.", tags: ["Analytics", "Automation", "Inventory", "Supply Chain"], sourceUrl: "https://corporate.rossstores.com/responsibility/", relationship: "Describes the technology ecosystem supporting Ross Stores operations; it is not a callable public API." },
  { id: "api-002", name: "Ross Stores Partner Portal", type: "Supplier portal", access: "Private / partner access", url: "https://partners.rossstores.com/", description: "The public entry point for Ross Stores supplier and partner communications, onboarding, and document exchange.", tags: ["EDI", "Vendor Management", "Supplier Portal"], sourceUrl: "https://partners.rossstores.com/", relationship: "Represents the supplier-facing access layer for the Ross Stores ecosystem." },
];
