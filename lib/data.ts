export const products = [
  { 
    id: 'borewell-submersible-pumps',
    name: 'Borewell Submersible Pumps', 
    description: 'V3 / V4 / V6 - Single & Three Phase', 
    icon: '💧', 
    image: 'https://image.pollinations.ai/prompt/borewell%20submersible%20pump%20machine%20heavy%20duty%20photography',
    details: 'Our Borewell Submersible Pumps (V3, V4, and V6 series) are designed for deep well applications. These pumps offer superior performance with high discharge rates and are suitable for both single-phase and three-phase power supplies, making them ideal for agriculture, industrial use, and municipal water supply.'
  },
  { 
    id: 'ss304-submersible-pumps',
    name: 'SS304 Stainless Steel Submersible Pumps', 
    description: 'V4 / V6 (100mm & 150mm)', 
    icon: '🔩', 
    image: 'https://image.pollinations.ai/prompt/stainless%20steel%20submersible%20water%20pump%20equipment%20photography',
    details: 'Built with premium SS304 grade stainless steel, these submersible pumps guarantee rust-free operation and long lifespan. Their corrosion-resistant properties are perfectly matched for challenging water conditions, ensuring clean water delivery for commercial and domestic needs.'
  },
  { 
    id: 'open-well-horizontal',
    name: 'Open Well Submersible Pumps - Horizontal', 
    description: 'High capacity horizontal installation', 
    icon: '🌊', 
    image: 'https://image.pollinations.ai/prompt/horizontal%20open%20well%20submersible%20pump%20industrial%20photography',
    details: 'Designed for underwater applications in shallow wells or sumps, the horizontal open well submersible pumps eliminate priming issues. These pumps provide an energy-efficient, silent operation and are optimal for irrigation, canals, and large cooling towers.'
  },
  { 
    id: 'open-well-vertical',
    name: 'Open Well Submersible Pumps - Vertical', 
    description: 'Heavy duty vertical submersion', 
    icon: '⬆️', 
    image: 'https://image.pollinations.ai/prompt/vertical%20submersible%20water%20pump%20heavy%20duty%20equipment',
    details: 'Vertical open well submersible pumps are engineered for fluctuating water levels. With a rugged build and rust-resistant components, they ensure continuous water supply for multi-story buildings and large-scale agricultural projects.'
  },
  { 
    id: 'self-priming-monoblock',
    name: 'Self-Priming Centrifugal Monoblock Pumps', 
    description: 'Automatic priming capability', 
    icon: '🔄', 
    image: 'https://image.pollinations.ai/prompt/centrifugal%20monoblock%20water%20pump%20isolated%20photography',
    details: 'Self-priming centrifugal monoblock pumps handle air-entrained water efficiently without needing manual priming every time. They are robust, highly reliable, and excel in domestic water supply, gardening, and small scale irrigation tasks.'
  },
  { 
    id: 'centrifugal-monoblock',
    name: 'Centrifugal Monoblock Pumps', 
    description: 'Compact and efficient design', 
    icon: '⚙️', 
    image: 'https://image.pollinations.ai/prompt/industrial%20centrifugal%20pump%20motor%20close%20up%20photography',
    details: 'Engineered for smooth flow and quiet operation, our monoblock pumps integrate motor and pump into a single unit. They are compact, occupy minimum space, and are widely utilized in pressure boosting systems, HVAC installations, and water supply applications.',
    variants: [
      {
        title: "Single phase mono block pumps",
        tableData: {
          headers: ["TYPE", "POWER RANGE", "HEAD RANGE", "DISCHARGE RANGE", "PUMP SIZES IN MM"],
          rows: [
            ["Centrifugal Mono Block", "0.5 hp to 2 hp", "7 mts to 42 mts", "50 lpm to 1000 lpm", "25x25 & 32x25 mm\n40x40 & 50x40 mm\n50x50 & 65x50 mm\n75x65 & 75x75 mm"]
          ]
        },
        applications: [
          "Civil / Domestic / Agriculture / Industrial",
          "Pressure boosting for irrigation for washing plants.",
          "Irrigation cooling circuits & Gardening."
        ],
        images: [
          "https://www.jaijansi.com/productimg/centri01.png",
          "https://www.jaijansi.com/productimg/centri02.png",
          "https://www.jaijansi.com/productimg/centri03.png",
          "https://www.jaijansi.com/productimg/centri04.png",
          "https://www.jaijansi.com/productimg/centri05.png"
        ]
      },
      {
        title: "Three phase mono block pumps",
        tableData: {
          headers: ["TYPE", "POWER RANGE", "HEAD RANGE", "DISCHARGE RANGE", "PUMP SIZES IN MM"],
          rows: [
            ["High speed 2880 rpm", "3 hp to 15 hp", "8 mts to 50 mts", "60 lpm to 2500 lpm", "50x50 & 65x50 mm\n75x65 & 100x75 mm\n& 100x100 mm"],
            ["Slow speed 1440 rpm", "3 hp to 15 hp", "8 mts to 50 mts", "60 lpm to 2500 lpm", "50x50 & 65x50 mm\n75x65 & 100x75 mm\n100x100 & 150x150 mm"]
          ]
        },
        applications: [
          "Agriculture Irrigation and Drip sprinkler Irrigation",
          "Public water supply",
          "Industries applications, Water circulation applications."
        ],
        images: [
          "https://www.jaijansi.com/productimg/centri06.png"
        ]
      }
    ]
  },
  { 
    id: 'jet-pump-sets',
    name: 'Jet Pump Sets', 
    description: 'Shallow well and surface water solutions', 
    icon: '🚿', 
    image: 'https://image.pollinations.ai/prompt/industrial%20jet%20water%20pump%20set%20photography',
    details: 'Jet Pump Sets are the perfect solution for drawing water from shallow wells, tanks, and cisterns. With outstanding suction capacity and steady pressure, they deliver reliable water distribution for rural and residential homes.'
  },
  { 
    id: 'special-application',
    name: 'Special Application Submersible Pumps', 
    description: 'Custom engineered solutions', 
    icon: '🛠️', 
    image: 'https://image.pollinations.ai/prompt/heavy%20duty%20industrial%20submersible%20pump%20special%20application',
    details: 'Tailor-made for specialized industrial fluid handling, these pumps manage corrosive, abrasive, or high-temperature liquids safely. Custom manufactured to industry specifications for reliable chemical and wastewater management.'
  },
  { 
    id: 'compressor-pumps',
    name: 'Borewell Compressor Pumps & Motors', 
    description: 'Pneumatic and electric power', 
    icon: '💨', 
    image: 'https://image.pollinations.ai/prompt/air%20compressor%20motor%20pump%20industrial%20photography',
    details: 'Harness the power of compressed air for lifting water from deep borewells with low yields. Our borewell compressor pumps offer a highly durable, low-maintenance solution for challenging water extraction environments.'
  },
  { 
    id: 'induction-motors',
    name: 'Energy Efficient AC Induction Motors', 
    description: 'BIS-marked efficiency certified', 
    icon: '⚡', 
    image: 'https://image.pollinations.ai/prompt/industrial%20AC%20induction%20motor%20machine%20photography',
    details: 'Our BIS-marked AC induction motors are designed to reduce electricity consumption while maximizing torque output. Whether for running heavy industrial machinery or agricultural pump setups, these motors are verified for long-lasting, heavy-duty performance.'
  },
  { 
    id: 'air-compressors',
    name: 'Industrial Air Compressors', 
    description: 'Reliable air compression systems', 
    icon: '🌬️', 
    image: 'https://image.pollinations.ai/prompt/heavy%20industrial%20air%20compressor%20machine%20photography',
    details: 'Industrial air compressors by HI-FLOW are designed for high efficiency and consistent compressed air delivery. They are essential for pneumatic tools, assembly lines, and workshops that demand uninterruptible pneumatic power.'
  },
  { 
    id: 'vehicle-washers',
    name: 'Vehicle Washers / High Pressure Washers', 
    description: 'Professional cleaning equipment', 
    icon: '🚗', 
    image: 'https://image.pollinations.ai/prompt/high%20pressure%20washer%20car%20washer%20industrial%20equipment',
    details: 'Deliver professional-grade cleaning with our robust high-pressure washers. Engineered for garages, vehicle showrooms, and extreme industrial cleaning requirements, they effectively cut through dirt, grease, and grime while minimizing water usage.'
  },
];