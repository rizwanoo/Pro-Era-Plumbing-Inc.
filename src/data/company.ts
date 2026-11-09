export interface ServiceItem {
  id: string;
  category: 'residential' | 'fixtures' | 'construction' | 'maintenance';
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  materials: string[];
  image: string;
  imageAlt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'custom-home' | 'bathroom' | 'kitchen' | 'rough-in';
  location: string;
  summary: string;
  details: string;
  specifications: string[];
  image: string;
  beforeImage?: string;
  imageAlt: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  quote: string;
  highlight: string;
}

export const COMPANY_INFO = {
  name: "Pro Era Plumbing Inc.",
  shortName: "Pro Era Plumbing",
  slogan: "Built With Precision. Finished With Purpose.",
  headline: "PRECISION IN EVERY PIPE. EXCELLENCE IN EVERY PROJECT.",
  subheadline: "From custom homes to complete renovations, Pro Era Plumbing delivers professional plumbing solutions built around quality, precision and dependable workmanship across Toronto and the GTA.",
  phone: "+1 437-263-0817",
  phoneRaw: "+14372630817",
  email: "proeraplumbing@gmail.com",
  registeredAddress: "164 Swan Park Rd, Markham, ON L6E 1S4",
  registeredAddressNotice: "Canadian registered corporate office. Field service dispatch across Toronto & Greater Toronto Area.",
  facebookUrl: "https://www.facebook.com/profile.php?id=100094797480282",
  jobberRequestUrl: "https://clienthub.getjobber.com/client_hubs/154e2dc2-9767-464f-953d-d924bbe3fa71/public/work_request/embedded_new?source=embedded_inline",
  serviceAreas: [
    { name: "Toronto", region: "City of Toronto (Downtown, Midtown, West End, East End)" },
    { name: "Markham", region: "York Region (Registered Headquarters & Field Operations)" },
    { name: "North York", region: "Central GTA Residential & Custom Builds" },
    { name: "Vaughan", region: "Woodbridge, Thornhill, Maple Custom Estates" },
    { name: "Richmond Hill", region: "Custom Residential & Luxury Remodels" },
    { name: "Scarborough", region: "Residential Plumbing & Renovations" },
    { name: "Mississauga", region: "Peel Region Custom Homes & Upgrades" },
    { name: "Brampton", region: "Residential rough-ins & full plumbing services" },
    { name: "Greater Toronto Area", region: "Surrounding GTA Municipalities by Consultation" }
  ],
  coreValues: [
    {
      title: "Ontario Building Code Compliance",
      desc: "Every rough-in, stack, and supply line is installed strictly adhering to Ontario Building Code Part 7 standards for zero-defects on first inspection."
    },
    {
      title: "Architectural Precision",
      desc: "We coordinate meticulously with architects, designers, and general contractors to ensure valve heights, stub-outs, and drains align millimeter-perfect."
    },
    {
      title: "Commercial-Grade Materials",
      desc: "Using industry-standard Uponor PEX-A expansion piping, lead-free Type L rigid copper, and Charlotte Pipe DWV systems for maximum durability."
    },
    {
      title: "Clear, Transparent Pricing",
      desc: "Itemized estimates with transparent material and labor breakdowns. No hidden surprises or arbitrary markup."
    }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-plumbing",
    category: "residential",
    title: "Residential Plumbing & Re-Piping",
    tagline: "High-spec water distribution and reliable pipe systems",
    description: "Comprehensive residential plumbing solutions engineered for longevity. From complete home copper-to-PEX conversions to high-pressure line balance and leak diagnostic isolation, we ensure your residential water supply operates flawlessly.",
    deliverables: [
      "Whole-home water supply re-piping & modernization",
      "Main water service shutoff and pressure regulator installations",
      "Precision pinhole leak detection and pipe repairs",
      "Pressure testing and acoustic flow balance",
      "Hot water recirculation loop integration"
    ],
    materials: [
      "Uponor PEX-A Expansion Piping",
      "Lead-Free Type L Rigid Copper",
      "Quarter-turn ball valves and brass fittings",
      "Approved pressure reducing valves (PRVs)"
    ],
    image: "/assets/copper_pipes.jpg",
    imageAlt: "Precision copper plumbing pipes and shutoff valves installed neatly on framing"
  },
  {
    id: "kitchen-bathroom-fixtures",
    category: "fixtures",
    title: "Kitchen & Luxury Bathroom Fixtures",
    tagline: "Architectural finish work with flawless installation",
    description: "Expert finishing and fixture installations for contemporary luxury kitchens and bathrooms. We install freestanding soaking tubs, ceiling-mount rain heads, wall-hung toilets, thermostatic multi-jet shower systems, prep sinks, and pot fillers.",
    deliverables: [
      "Freestanding tub and floor-mounted tub filler installation",
      "Thermostatic shower valves and body spray rough-ins",
      "Wall-mount and deck-mount architectural faucets",
      "Kitchen undermount sink and garbage disposal plumbing",
      "High-end pot fillers and secondary prep island sinks"
    ],
    materials: [
      "Solid brass rough-in valves",
      "Kohler, Moen, Grohe, Riobel, and Brizo trims",
      "Reinforced stainless steel braided supply lines",
      "Odor-tight mechanical trap seals"
    ],
    image: "/assets/luxury_bath.jpg",
    imageAlt: "Modern luxury bathroom with freestanding soaking tub and black matte fixtures"
  },
  {
    id: "new-construction-roughin",
    category: "construction",
    title: "New Construction & Framing Rough-Ins",
    tagline: "Ground-up plumbing engineering for custom builds",
    description: "Turnkey plumbing rough-ins for new custom homes and structural additions across Toronto and the GTA. We route DWV (drain-waste-vent) stacks, establish water service headers, and coordinate with structural framing for clean pass-throughs.",
    deliverables: [
      "Under-slab drainage and subterranean rough-ins",
      "Complete DWV vertical stack and vent routing",
      "PEX-A multi-port home-run manifold systems",
      "Backwater valve and sump basin rough-in installation",
      "Pre-drywall municipal plumbing inspection signoff"
    ],
    materials: [
      "Schedule 40 PVC / System 15 DWV pipe",
      "Uponor ProPEX engineered polymer manifolds",
      "Cast iron or acoustically insulated drain stacks",
      "Full-port cleanout access points"
    ],
    image: "/assets/construction_roughin.jpg",
    imageAlt: "Custom home construction framing with rough-in plumbing piping"
  },
  {
    id: "plumbing-maintenance-diagnostics",
    category: "maintenance",
    title: "Diagnostics, Inspections & System Maintenance",
    tagline: "Preventative audits and precision troubleshooting",
    description: "Thorough plumbing assessments to identify hidden flow restrictions, aging cast-iron or galvanized pipes, water hammer vibrations, and backflow vulnerabilities before costly water damage occurs.",
    deliverables: [
      "High-resolution video camera drain scoping",
      "Water pressure testing and static volume audit",
      "Backwater valve maintenance and flapper replacement",
      "Winterization and exterior frost-free hose bib servicing",
      "Mechanical room inspection (boilers, water heaters, sumps)"
    ],
    materials: [
      "Industrial fiber-optic camera systems",
      "High-accuracy digital manometer gauges",
      "Frost-free sillcocks with vacuum breakers",
      "Backflow prevention test kits"
    ],
    image: "/assets/mechanical_room.jpg",
    imageAlt: "High-efficiency mechanical room plumbing manifolds and water heating installation"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "forest-hill-custom-estate",
    title: "Forest Hill Modern Custom Residence",
    category: "custom-home",
    location: "Toronto, Ontario",
    summary: "Full-scale custom estate plumbing comprising 6 bathrooms, a chef's kitchen with secondary prep pantry, hydronic loop coordination, and dual manifold water distribution.",
    details: "Pro Era Plumbing executed the complete plumbing scope from subterranean slab rough-in to luxury trim-out. Features an Uponor home-run manifold system providing balanced hot water delivery across 3 residential levels.",
    specifications: [
      "6 Full Ensuites + 2 Powder Rooms",
      "Dual Dedicated PEX-A Manifolds",
      "Main Line Backwater Valve System",
      "Zero municipal inspection deficiencies"
    ],
    image: "/assets/custom_home_hero.jpg",
    imageAlt: "Architectural custom home residence in Toronto"
  },
  {
    id: "markham-luxury-ensuite",
    title: "Cachet Estate Master Ensuite Transformation",
    category: "bathroom",
    location: "Markham, Ontario",
    summary: "Complete gut and luxury bathroom reconfiguration featuring freestanding stone tub, curbless wet room with thermostatic dual rain heads, and floating dual vanity.",
    details: "Relocated the main 3-inch waste line through engineered joists with structural approval, established sound-dampened supply routing, and set precision rough-in heights for wall-mounted faucets.",
    specifications: [
      "Curbless Shower with Linear Drain",
      "Dual Thermostatic Rough-In Valves",
      "Freestanding Tub Floor Rough-In",
      "Acoustic Insulation on Waste Lines"
    ],
    image: "/assets/bath_vanity.jpg",
    beforeImage: "/assets/plumbing_pipes.jpg",
    imageAlt: "Modern luxury double vanity and polished fixtures in finished bathroom renovation"
  },
  {
    id: "yorkville-chef-kitchen",
    title: "Yorkville Contemporary Kitchen Renovation",
    category: "kitchen",
    location: "Toronto, Ontario",
    summary: "Gourmet residential kitchen upgrade with high-flow commercial pot filler, island prep sink, reverse osmosis line, and silent DWV drainage.",
    details: "Installed dedicated water purification feeds, copper-to-PEX conversions, and concealed valve access inside custom Italian cabinetry.",
    specifications: [
      "Deck-Mount High-Arc Gooseneck Faucet",
      "Wall-Mounted Articulating Pot Filler",
      "Dual Dishwasher & Ice-Maker Supply",
      "Under-Sink Air Gap & Disposal Hookup"
    ],
    image: "/assets/kitchen_faucet.jpg",
    imageAlt: "Architectural modern kitchen faucet and undermount sink"
  },
  {
    id: "vaughan-framing-roughin",
    title: "Vaughan Valley Multi-Level Rough-In",
    category: "rough-in",
    location: "Vaughan, Ontario",
    summary: "Ground-up plumbing rough-in for a 4,800 sq ft custom build, featuring complex stack offsets, laundry suite routing, and basement walkout suite rough-in.",
    details: "All DWV stacks pressure-tested to 5 PSI air pressure without drop over 24 hours. Code approved on initial inspection.",
    specifications: [
      "4,800 sq ft residential structure",
      "Full basement rough-in for future secondary suite",
      "Clean manifold layout with clear circuit labeling",
      "Backwater valve with easily accessible cleanout"
    ],
    image: "/assets/construction_roughin.jpg",
    imageAlt: "Framed custom home walls showing organized PEX and DWV plumbing rough-in"
  },
  {
    id: "richmond-hill-spa-shower",
    title: "Bayview Hill Spa Shower Suite",
    category: "bathroom",
    location: "Richmond Hill, Ontario",
    summary: "Custom walk-in spa shower with 4 body sprays, dual overhead rain fixtures, and handheld spray system.",
    details: "Engineered 3/4-inch supply lines to deliver required 14 GPM water volume without drops when other household fixtures are active.",
    specifications: [
      "3/4-inch Dedicated Water Feed",
      "Digital Thermostatic Control Valve",
      "Linear Tile-Insert Floor Drain",
      "Anti-Scald Pressure Balancing"
    ],
    image: "/assets/modern_shower.jpg",
    imageAlt: "Modern walk-in shower with high-end chrome and glass finish"
  },
  {
    id: "north-york-residence",
    title: "Bridle Path Area Residence Upgrade",
    category: "custom-home",
    location: "North York, Ontario",
    summary: "Plumbing infrastructure upgrade for an architect-designed contemporary residence, including continuous hot water circulation and water treatment interface.",
    details: "Coordinated with mechanical HVAC contractors to build a consolidated, clean utility room manifold system.",
    specifications: [
      "Smart Water Leak Auto-Shutoff System",
      "Whole-Home Sediment & Carbon Filtration Hookup",
      "PEX-A Distribution System",
      "Independent Zone Isolation Valves"
    ],
    image: "/assets/modern_villa.jpg",
    imageAlt: "Contemporary architectural residence exterior"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    clientName: "Marcus Sterling",
    location: "Forest Hill, Toronto",
    projectType: "Custom Home Build",
    quote: "Pro Era Plumbing handled the complete plumbing rough-in and fixture installation on our new build. Their piping layout inside the mechanical room looks like artwork—clean, labeled, and millimeter-level straight. Passed city inspection on the first visit with zero notes.",
    highlight: "Zero inspection deficiencies & surgical precision"
  },
  {
    id: "t2",
    clientName: "Elena Rostova",
    location: "Markham, ON",
    projectType: "Master Ensuite Renovation",
    quote: "We renovated our master bathroom and relocated our tub and double shower. Pro Era worked seamlessly with our tile contractor and architect. The water pressure in our rainfall shower is incredible, and their communication throughout was top notch.",
    highlight: "Flawless coordination with custom builders"
  },
  {
    id: "t3",
    clientName: "David Chen",
    location: "Vaughan, ON",
    projectType: "Kitchen & Main Floor Remodel",
    quote: "As a general contractor in York Region, having a reliable plumbing partner makes or breaks a project timeline. Pro Era is punctual, professional, uses top-tier Uponor materials, and gives our homeowners complete peace of mind.",
    highlight: "The trusted plumbing partner for GTA contractors"
  }
];
