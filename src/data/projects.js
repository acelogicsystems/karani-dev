export const projects = [
  {
    id: "imaragrid-platform",
    badge: "Disaster Risk & ClimateTech",
    title: "ImaraGrid — Climate Resilience & Early Warning System",
    clientSector: "DRM Agencies & Climate Practitioners",
    description: "An early warning and risk intelligence portal turning multi-source environmental indices into actionable alerts and vulnerability mapping for high-risk zones.",
    metrics: [
      { label: "Alert Latency", value: "<30 Seconds" },
      { label: "Data Granularity", value: "Sub-County Level" },
      { label: "Availability", value: "99.9% Uptime" }
    ],
    features: [
      "Dynamic risk-level zoning maps with automated severity indicators",
      "Low-bandwidth alerts accessible on mobile browsers across arid regions",
      "Interactive hazard overlay with rainfall and flood assessment models",
      "Exportable summary briefs for disaster response coordination"
    ],
    stack: ["React", "FastAPI", "Python", "Leaflet", "Tailwind CSS"],
    status: "Live & Validated",
    liveUrl: "https://imaragrid.vercel.app"
  },
  {
    id: "kilimocast-advisory",
    badge: "AgriTech & Rural Access",
    title: "KilimoCast — Hyperlocal Weather & Advisory Engine",
    clientSector: "Kenyan Smallholder Farmers & Cooperatives",
    description: "Built to bridge the gap between meteorological data and smallholder farming decisions. Combines localized weather forecasting with simple agronomic advisory messaging.",
    metrics: [
      { label: "Advisory Turnaround", value: "Daily Sync" },
      { label: "Network Footprint", value: "Ultra-Lightweight" },
      { label: "Farmer Usability", value: "Zero Training" }
    ],
    features: [
      "Ward-level precipitation and temperature advisory snapshots",
      "Built-in USSD workflow simulation for feature phone accessibility",
      "Clean agronomic tips tailored to seasonal planting cycles",
      "Lightweight data payload designed for 2G/3G mobile networks"
    ],
    stack: ["React", "TypeScript", "Weather APIs", "Tailwind CSS"],
    status: "Production Demo",
    liveUrl: ""
  },
  {
    id: "booking-commerce",
    badge: "SME Operations & FinTech",
    title: "Commercial Booking & Instant M-Pesa Engine",
    clientSector: "Kenyan SMEs & Service Businesses",
    description: "Replaced manual phone call bookings and manual MPESA message tracking with automated reservation scheduling and STK push verification.",
    metrics: [
      { label: "Payment Verification", value: "Instant STK" },
      { label: "Scheduling Friction", value: "-80%" },
      { label: "Load Speed", value: "<1.2s" }
    ],
    features: [
      "Daraja M-Pesa STK push with automated callback confirmation",
      "Conflict-free calendar booking engine with zero overlapping slots",
      "Automated WhatsApp notification trigger upon confirmed payment",
      "Protected admin panel for daily sales, revenue, and customer history"
    ],
    stack: ["React", "Node.js", "Daraja API", "PostgreSQL", "Tailwind CSS"],
    status: "Ready to Deploy",
    liveUrl: ""
  },
  {
    id: "kobo-field-pipeline",
    badge: "Field Operations & M&E",
    title: "Offline Field Data Pipeline (KoboToolbox & ODK)",
    clientSector: "NGOs, Research Programs & Field Surveys",
    description: "Paperless data capture systems built for enumerators in remote areas. Captures geo-coordinates and surveys offline, then cleans and syncs records straight to cloud tables.",
    metrics: [
      { label: "Offline Mode", value: "100% Reliable" },
      { label: "Lost Paper Forms", value: "0" },
      { label: "Export Format", value: "Excel / SQL / API" }
    ],
    features: [
      "Structured XLSForm logic with smart skips and strict validation rules",
      "Field GPS coordinate capture and photo documentation without signal",
      "Automated REST API pipeline syncing Kobo submissions to databases",
      "Automated clean summaries for donor reporting and monitoring"
    ],
    stack: ["KoboToolbox", "XLSForm", "REST APIs", "Power BI"],
    status: "Operational",
    liveUrl: ""
  }
];