export const projects = [
  {
    id: "booking-commerce",
    badge: "Business Website & Payments",
    title: "Online Booking with Instant M-Pesa",
    clientSector: "Kenyan Businesses & Service Providers",
    description: "Built for businesses tired of taking bookings over phone calls and tracking payments by hand. Customers pick a date, pay via M-Pesa STK push, and get an instant confirmation message.",
    metrics: [
      { label: "Payment Verification", value: "Instant M-Pesa" },
      { label: "Double Bookings", value: "0" },
      { label: "Page Load Speed", value: "Under 2 Seconds" }
    ],
    features: [
      "Customers pay instantly on their phone with M-Pesa prompt (STK Push)",
      "Calendar automatically blocks booked slots so no one overlaps",
      "Sends instant confirmation text messages to both you and the customer",
      "Simple admin dashboard to see daily sales and customer contacts"
    ],
    stack: ["React", "Daraja M-Pesa", "Node.js", "Tailwind CSS"],
    status: "Ready to Deploy"
  },
  {
    id: "spatial-hazard",
    badge: "Maps & Spatial Data",
    title: "Interactive Weather & Drought Map",
    clientSector: "Farming, Climate & Field Teams",
    description: "An interactive online map that shows live rainfall, dry areas, and drought risks across Kenyan counties. Easy to use on phones and laptops, even with slow internet.",
    metrics: [
      { label: "Map Detail", value: "Sub-County Level" },
      { label: "Internet Use", value: "Very Low Data" },
      { label: "Updates", value: "Automatic" }
    ],
    features: [
      "Clickable map showing county and ward boundaries",
      "Clear color codes showing flood or drought risks",
      "Works smoothly even when the connection is 3G or poor",
      "Download reports and map snapshots with one click"
    ],
    stack: ["React", "Leaflet Maps", "GIS Data", "Python"],
    status: "Tested & Working"
  },
  {
    id: "kobo-resilience",
    badge: "Field Surveys & Data",
    title: "Offline Field Data Collection with KoboToolbox",
    clientSector: "NGOs, Researchers & Field Projects",
    description: "Set up fast digital forms for field teams to replace paper surveys. Works completely offline in remote villages, saves GPS coordinates, and sends all data to a clean dashboard when back online.",
    metrics: [
      { label: "Offline Mode", value: "100% Works" },
      { label: "Lost Paper Forms", value: "0" },
      { label: "Data Export", value: "Excel / PDF" }
    ],
    features: [
      "Custom forms on KoboToolbox with smart questions and skip logic",
      "Takes GPS locations and photos directly from the field phone",
      "No data lost if the agent loses network in rural areas",
      "Automated summary tables for weekly and donor reports"
    ],
    stack: ["KoboToolbox", "ODK Forms", "Excel / Power BI", "APIs"],
    status: "Active in the Field"
  }
];