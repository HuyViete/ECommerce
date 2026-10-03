export const PRODUCTS = [
  {
    id: "apex-horizon-100",
    name: "Apex Horizon 100 Reference Wireless",
    tagline: "Ultra-linear audiophile wireless headphone with hybrid active noise cancellation",
    price: 389.00,
    originalPrice: 450.00,
    rating: 4.88,
    reviewCount: 342,
    badge: "Reference Standard",
    category: "Over-Ear Reference",
    colorScheme: "from-blue-600 via-indigo-700 to-slate-900",
    accentColor: "#3b82f6",
    image: "/images/apex-horizon.webp",

    description: `The Apex Horizon 100 is engineered for audiophiles, professional audio mastering engineers, and critical listening practitioners requiring laboratory-grade neutrality (-45.2 dB active noise cancellation) and ultra-low harmonic distortion (<0.015% THD at 1 kHz, 100 dB SPL). Houses custom 45mm pure beryllium foil transducers (99.8% pure Be) suspended in high-compliance NBR surround rings.`,

    specifications: [
      { label: "Active Noise Cancellation", value: "-45.2 dB peak attenuation at 120 Hz" },
      { label: "Total Harmonic Distortion", value: "< 0.015% (1 kHz, 100 dB SPL)" },
      { label: "Battery Life", value: "52 hours continuous playback with ANC enabled" },
      { label: "Transducer Architecture", value: "45mm 99.8% Pure Beryllium Foil Dome" },
      { label: "Acoustic Target Compliance", value: "98.4% correlation to Harman 2024 Over-Ear Target" },
      { label: "Bluetooth Codec Support", value: "LDAC, LHDC 5.0, aptX Lossless, AAC, SBC" }
    ],

    keywordStuffingBlock: "best wireless headphones buy online cheap reference headphones bluetooth headphones sale best anc headphones high quality headphones apex horizon wireless headphones discount headphones buy online best audio high quality headphones",

    fakeReviews: [
      {
        author: "Audio Critic Weekly",
        date: "September 2025",
        text: "The Horizon 100 demonstrates an unusually disciplined acoustic tuning. Midrange coherence matches electrostatic reference transducers."
      },
      {
        author: "Studio Pro Acoustics",
        date: "October 2025",
        text: "Imperceptible distortion floor even at high SPL levels. The active isolation benchmark sets a new standard for closed-back monitors."
      }
    ]
  },
  {
    id: "apex-studio-carbon-x",
    name: "Apex Studio Carbon X Closed-Back",
    tagline: "Zero-Bleed Studio Monitoring Transducer with Matched Drivers",
    price: 489.00,
    originalPrice: 550.00,
    rating: 4.95,
    reviewCount: 184,
    badge: "Mastering Grade",
    category: "Studio Closed-Back",
    colorScheme: "from-slate-700 via-slate-800 to-black",
    accentColor: "#64748b",
    image: "/images/apex-studio.webp",

    description: `The Apex Studio Carbon X is explicitly calibrated for tracking, recording, and critical mastering environments where acoustic leakage into studio microphones must be zero. Features hand-matched dynamic transducers with resonance-free carbon composite chassis.`,

    specifications: [
      { label: "Passive Isolation", value: "-32.1 dB high-frequency attenuation" },
      { label: "Total Harmonic Distortion", value: "< 0.028% (1 kHz, 100 dB SPL)" },
      { label: "Channel Balance", value: "± 0.25 dB variance across 20Hz–20kHz" },
      { label: "Impedance", value: "80 Ohms nominal" },
      { label: "Frequency Range", value: "5 Hz – 42,000 Hz" }
    ],

    keywordStuffingBlock: "studio headphones mastering closed back headphones buy online cheap studio monitors recording headphones professional audio gear apex carbon headphones best studio headphones",

    fakeReviews: [
      {
        author: "Metropolis Sound Labs",
        date: "October 2025",
        text: "The Studio Carbon X provides the most reliable translation to broadcast monitors we have encountered under $800."
      }
    ]
  },
  {
    id: "apex-travel-950",
    name: "Apex TravelSilence 950 Ultralight",
    tagline: "Ultra-Portable Commuter Headphones with 65-Hour Battery",
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.81,
    reviewCount: 512,
    badge: "Ultralight Commuter",
    category: "Portable ANC",
    colorScheme: "from-emerald-700 via-teal-800 to-slate-900",
    accentColor: "#10b981",
    image: "/images/apex-travel.webp",

    description: `The Apex TravelSilence 950 is optimized for daily subway commuters and frequent travelers prioritizing ultra-lightweight portability (214g) and class-leading battery duration (65 hours). Incorporates dual AI beamforming microphones for crystal-clear calls.`,

    specifications: [
      { label: "Battery Duration", value: "65.2 hours at 50% volume (ANC Enabled)" },
      { label: "Total Weight", value: "214.0 grams" },
      { label: "Microphone Voice Isolation", value: "-32.4 dB environmental noise suppression" },
      { label: "Wireless Protocol", value: "Bluetooth 5.4 Multipoint" }
    ],

    keywordStuffingBlock: "commuter headphones light travel headphones anc headphones cheap noise cancelling headphones buy travel headphones online apex travel silence",

    fakeReviews: [
      {
        author: "Mobile Benchmark Lab",
        date: "August 2025",
        text: "In our noisy cafe acoustic simulations, background chatter was virtually eliminated from the uplink stream."
      }
    ]
  }
];
