export const TESSA_KNOWLEDGE_VERSION = '2026.09.28-kb1';

const rawKnowledge = [
  [
    "general-what-is-ttt",
    "General",
    "",
    "answer",
    [
      "what does ttt do",
      "what is ttt",
      "what services do you offer"
    ],
    "TTT plans, integrates, installs and supports vehicle technology including audio, window tint, security, tracking, cameras, electronics, SignalTrace diagnostics and custom fabrication."
  ],
  [
    "general-who-do-you-serve",
    "General",
    "",
    "answer",
    [
      "who do you work with",
      "do you only work with consumers",
      "who are your customers"
    ],
    "TTT works with individual vehicle owners as well as dealerships, fleets and other commercial vehicle programs."
  ],
  [
    "general-need-product-picked",
    "General",
    "",
    "qualify",
    [
      "do i need to know what product i want",
      "i do not know which product i need",
      "can you recommend what i need"
    ],
    "No. TTT starts with the outcome you want and the vehicle you have, then helps narrow down the appropriate system and product category.",
    "Tell me what you want the vehicle to do better and I can point you in the right direction."
  ],
  [
    "general-multiple-services",
    "General",
    "",
    "qualify",
    [
      "can i do several services together",
      "can you do tint and audio together",
      "can one project include multiple upgrades"
    ],
    "Yes. Multi-service projects are often easier to plan as one system so power, mounting, controls, access and future serviceability are considered together.",
    "Which upgrades are you considering?"
  ],
  [
    "general-phased-project",
    "General",
    "",
    "answer",
    [
      "can i do the project in phases",
      "can i upgrade later",
      "can we stage the build"
    ],
    "Yes. TTT can plan a project in phases so early work supports later upgrades instead of having to be undone."
  ],
  [
    "general-oem-systems",
    "General",
    "",
    "qualify",
    [
      "can you work with factory systems",
      "do you integrate with oem equipment",
      "can i keep the factory screen"
    ],
    "Yes. OEM integration is central to the TTT approach. Compatibility depends on the vehicle, trim and factory equipment.",
    "What year, make and model are you working with?"
  ],
  [
    "general-customer-parts",
    "General",
    "",
    "handoff",
    [
      "can i bring my own parts",
      "will you install parts i bought",
      "can you install customer supplied equipment"
    ],
    "TTT may install customer-supplied equipment case by case after checking compatibility, condition, required hardware, documentation and support considerations.",
    "Tell me the vehicle and the exact product you already have, and the team can review it."
  ],
  [
    "general-brand-selection",
    "General",
    "",
    "answer",
    [
      "what brands do you recommend",
      "how do you choose brands",
      "do you only use premium brands"
    ],
    "TTT evaluates products around system fit, reliability, serviceability, documentation, manufacturer support and value rather than choosing a brand name by itself."
  ],
  [
    "pricing-how-much",
    "Pricing",
    "",
    "qualify",
    [
      "how much does it cost",
      "what are your prices",
      "how much will my project be"
    ],
    "Pricing depends on the vehicle, product selection, installation complexity and scope. TTT avoids quoting a generic number when the actual vehicle can materially change the work.",
    "Tell me the service and vehicle and I can collect what the team needs for a quote."
  ],
  [
    "pricing-online-quote",
    "Pricing",
    "",
    "qualify",
    [
      "can i get a quote online",
      "can tessa give me a quote",
      "can you estimate this online"
    ],
    "Tessa can collect the information needed to start a quote, but final pricing may require the team to confirm fitment, products and installation scope.",
    "What service and vehicle should I start with?"
  ],
  [
    "pricing-why-vehicle",
    "Pricing",
    "",
    "answer",
    [
      "why do you need my vehicle for pricing",
      "why does year make model matter",
      "why can price vary by car"
    ],
    "Different trims can use different glass, factory amplifiers, cameras, networks, panels and mounting conditions. Exact vehicle information helps TTT avoid inaccurate pricing and fitment assumptions."
  ],
  [
    "pricing-budget",
    "Pricing",
    "",
    "answer",
    [
      "do i need a budget",
      "can you work to a budget",
      "what if i have a budget limit"
    ],
    "A budget range is helpful but not required. It lets TTT explain realistic options and tradeoffs rather than designing a system that does not fit what you want to spend."
  ],
  [
    "pricing-diagnostic",
    "Pricing",
    "SignalTrace™ diagnostics",
    "handoff",
    [
      "how much is signaltrace",
      "what does diagnostic work cost",
      "is diagnostics a flat fee"
    ],
    "Complex diagnostics are generally better handled as authorized diagnostic work rather than a promise of a fixed result for a fixed time. The team can explain the current assessment structure before work begins.",
    "Tell me the vehicle and symptoms and I can pass them along."
  ],
  [
    "pricing-deposit",
    "Pricing",
    "",
    "handoff",
    [
      "do you require a deposit",
      "how much is the deposit",
      "when do i pay"
    ],
    "Deposit and payment requirements depend on the project, products that need to be ordered and the approved scope. The team will confirm those terms with the quote."
  ],
  [
    "pricing-price-match",
    "Pricing",
    "",
    "answer",
    [
      "do you price match",
      "can you match another shop price",
      "why are you more expensive"
    ],
    "TTT scopes complete systems and installation quality rather than comparing only the price of a part. If you have another quote, the team can compare scope, hardware and assumptions with you."
  ],
  [
    "process-start",
    "Process",
    "",
    "qualify",
    [
      "how do i start a project",
      "how do i get started",
      "what is the first step"
    ],
    "Start with the vehicle and the result you want. TTT can then define the system, scope, products and next step.",
    "What are you looking to improve?"
  ],
  [
    "process-written-scope",
    "Process",
    "",
    "answer",
    [
      "will i get a written quote",
      "do you provide a scope",
      "will i know what is being installed"
    ],
    "The TTT operating model is built around written scope, estimate and authorization before material work begins."
  ],
  [
    "process-appointment",
    "Process",
    "",
    "qualify",
    [
      "how do i book an appointment",
      "can i schedule with tessa",
      "when can i come in"
    ],
    "Tessa can collect your project details, and the TTT team can confirm the appropriate appointment and timing.",
    "What service and vehicle is this for?"
  ],
  [
    "process-turnaround",
    "Process",
    "",
    "handoff",
    [
      "how long will the job take",
      "what is the turnaround time",
      "how long do installations take"
    ],
    "Turnaround varies by service, vehicle, product availability and project complexity. The team can give a better estimate once the scope is known.",
    "Tell me the vehicle and service and I can route the request."
  ],
  [
    "process-same-day",
    "Process",
    "",
    "handoff",
    [
      "can you do it same day",
      "is this a same day install",
      "can i wait for the car"
    ],
    "Some work may fit within a day while larger integrations or diagnostics may not. TTT will confirm expected timing before scheduling."
  ],
  [
    "process-scope-change",
    "Process",
    "",
    "answer",
    [
      "what if i add something after work starts",
      "can i change the job later",
      "how do change orders work"
    ],
    "If the approved scope changes, additional work should be discussed and authorized separately so pricing and timing remain clear."
  ],
  [
    "process-status",
    "Process",
    "",
    "answer",
    [
      "will i get updates",
      "how do i know job status",
      "do you update customers during the job"
    ],
    "TTT's operating model is designed around documented job status and customer communication. The exact update cadence depends on the project."
  ],
  [
    "tint-ceramic",
    "Window Tint",
    "Window tint",
    "qualify",
    [
      "do you offer ceramic tint",
      "what is ceramic tint",
      "can i get ceramic window film"
    ],
    "TTT offers vehicle-specific guidance including ceramic film options focused on heat performance, clarity, UV protection and long-term appearance.",
    "Which vehicle and windows are you considering?"
  ],
  [
    "tint-heat",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "does tint reduce heat",
      "will tint keep my car cooler",
      "what tint is best for heat"
    ],
    "High-performance automotive film can reduce solar heat entering the cabin. Heat performance depends on the specific film, not simply how dark it looks."
  ],
  [
    "tint-darkness-heat",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "is darker tint better for heat",
      "does darker tint block more heat",
      "do i need dark tint for heat rejection"
    ],
    "Not necessarily. Darkness and heat rejection are different characteristics, so a lighter high-performance film can be a better choice than selecting shade alone."
  ],
  [
    "tint-uv",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "does tint block uv",
      "does ceramic tint protect from uv",
      "will tint protect the interior"
    ],
    "Quality automotive film can reduce UV exposure to occupants and interior materials. Product-specific performance should be confirmed for the film selected."
  ],
  [
    "tint-legal",
    "Window Tint",
    "Window tint",
    "handoff",
    [
      "what tint is legal",
      "what percentage tint can i have",
      "is 5 percent tint legal"
    ],
    "Tint limits depend on jurisdiction, vehicle type, window position and possible exemptions. TTT can provide guidance, but current rules should be verified for where the vehicle will be operated.",
    "Tell me the vehicle and where it is registered or normally driven."
  ],
  [
    "tint-factory-privacy",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "my suv already has dark rear glass",
      "is factory privacy glass tint",
      "do i still need film on factory privacy glass"
    ],
    "Factory privacy glass and aftermarket window film are not the same thing. Dark factory glass may provide privacy while additional film can be considered for heat, UV or appearance goals."
  ],
  [
    "tint-match-rear",
    "Window Tint",
    "Window tint",
    "qualify",
    [
      "can you match front tint to rear glass",
      "can you make the front windows match the back",
      "match factory privacy glass"
    ],
    "TTT can help choose a front-window shade that visually complements factory rear privacy glass while also considering performance and applicable regulations.",
    "What vehicle is it?"
  ],
  [
    "tint-night",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "will dark tint make it hard to see at night",
      "what tint is best for night driving",
      "does tint reduce night visibility"
    ],
    "Darker film can reduce visible light and may affect nighttime visibility. TTT considers visibility, privacy, appearance and legal requirements rather than shade alone."
  ],
  [
    "tint-windshield",
    "Window Tint",
    "Window tint",
    "handoff",
    [
      "do you tint windshields",
      "can you put ceramic film on the windshield",
      "can my windshield be tinted"
    ],
    "Windshield film options depend heavily on local rules and the product being considered. The team can discuss legal and performance-conscious options for your vehicle."
  ],
  [
    "tint-sunroof",
    "Window Tint",
    "Window tint",
    "qualify",
    [
      "can you tint a sunroof",
      "do you tint panoramic roofs",
      "can you tint my moonroof"
    ],
    "Sunroof and panoramic-roof film can be evaluated, but the glass construction and manufacturer guidance matter.",
    "Tell me the vehicle and which roof glass you want treated."
  ],
  [
    "tint-remove-old",
    "Window Tint",
    "Window tint",
    "qualify",
    [
      "can you remove old tint",
      "my tint is bubbling can you replace it",
      "do you remove purple tint"
    ],
    "Existing film can often be removed before new film is installed. Condition, adhesive and rear defroster considerations can affect the work.",
    "Tell me which windows have the old film."
  ],
  [
    "tint-one-window",
    "Window Tint",
    "Window tint",
    "qualify",
    [
      "can you tint one window",
      "can you replace tint on just one window",
      "do i have to tint the whole car"
    ],
    "A single window can be evaluated when only one piece needs treatment or replacement. Matching existing film may depend on its age, shade and product.",
    "Which window and vehicle is it?"
  ],
  [
    "tint-aftercare",
    "Window Tint",
    "Window tint",
    "answer",
    [
      "when can i roll down windows after tint",
      "how do i care for new tint",
      "what should i do after tint installation"
    ],
    "Fresh film needs time to cure, and temporary haze or moisture can be normal. Follow the installer instructions for window use and cleaning because cure time varies with film and conditions."
  ],
  [
    "audio-speakers-only",
    "Audio",
    "Audio & DSP",
    "qualify",
    [
      "will new speakers make my car sound better",
      "is replacing speakers enough",
      "can i just upgrade the speakers"
    ],
    "Speakers can help, but factory processing, available power, mounting and the incoming signal can limit the result. TTT looks at the complete signal path before assuming speakers alone are the best first step.",
    "What vehicle and factory audio system do you have?"
  ],
  [
    "audio-dsp",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "do i need a dsp",
      "what does a dsp do",
      "why use a dsp in car audio"
    ],
    "A DSP can control routing, crossover, equalization, delay and level structure. Not every build requires one, but it is especially useful when factory processing or a more precise tune is involved."
  ],
  [
    "audio-amp",
    "Audio",
    "Audio & DSP",
    "qualify",
    [
      "do i need an amplifier",
      "will an amp improve my speakers",
      "can you add an amp to factory audio"
    ],
    "An amplifier can provide cleaner power and system headroom when matched correctly to the speakers and signal path. Factory integration determines how it should be added.",
    "What vehicle and audio goal are you working with?"
  ],
  [
    "audio-subwoofer",
    "Audio",
    "Audio & DSP",
    "qualify",
    [
      "can you add a subwoofer",
      "i want more bass",
      "do you install subs"
    ],
    "Yes. TTT designs subwoofer systems around output goals, available space, enclosure requirements and how the bass should integrate with the rest of the system.",
    "How much space are you willing to use, and what vehicle is it?"
  ],
  [
    "audio-factory-screen",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "can i keep my factory radio",
      "can i keep the factory screen",
      "will audio upgrades replace my factory controls"
    ],
    "Often yes. TTT generally tries to preserve useful factory controls and displays where practical, using the appropriate integration strategy for the vehicle."
  ],
  [
    "audio-premium-factory",
    "Audio",
    "Audio & DSP",
    "qualify",
    [
      "can you upgrade bose",
      "can you upgrade harman kardon",
      "my car has premium factory audio can you improve it"
    ],
    "Factory premium systems can often be improved, but their amplifiers, processing and active channels make correct integration especially important.",
    "Tell me the year, make, model and factory audio package if you know it."
  ],
  [
    "audio-treatment",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "do i need sound deadening",
      "do you install sound treatment",
      "will sound treatment reduce rattles"
    ],
    "Targeted sound treatment can reduce resonance, rattles and some road-noise effects while improving speaker mounting conditions. TTT uses it where it addresses an actual acoustic problem."
  ],
  [
    "audio-tuning",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "do you tune car audio",
      "what is dsp tuning",
      "is tuning included"
    ],
    "TTT treats tuning as part of making a DSP-based system operate as a system. Exact tuning scope depends on the hardware and project."
  ],
  [
    "audio-carplay",
    "Audio",
    "Audio & DSP",
    "handoff",
    [
      "can you add apple carplay",
      "can you add android auto",
      "can you upgrade my radio to carplay"
    ],
    "CarPlay or Android Auto retrofit options are vehicle-specific and may involve the factory display, radio, interfaces or an aftermarket source unit.",
    "Tell me the year, make and model and the team can review compatibility."
  ],
  [
    "audio-controls",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "will steering wheel controls still work",
      "can i keep factory chimes",
      "will i lose factory audio features"
    ],
    "Preserving factory controls, chimes and other required functions is part of the integration plan where compatible interfaces and the vehicle architecture allow it."
  ],
  [
    "audio-staged",
    "Audio",
    "Audio & DSP",
    "answer",
    [
      "can i upgrade audio in stages",
      "can i add a sub now and speakers later",
      "can i build my system over time"
    ],
    "Yes. A staged audio plan can reserve signal paths, power capability and system architecture so later upgrades fit the original design."
  ],
  [
    "audio-no-bass",
    "Audio",
    "Audio & DSP",
    "handoff",
    [
      "my stereo has no bass",
      "my speakers suddenly sound bad",
      "my amp stopped working"
    ],
    "A sudden performance change can come from configuration, wiring, power, signal or a failed component. It is better to inspect and test than guess from the symptom alone.",
    "Tell me what changed and what equipment is installed."
  ],
  [
    "audio-custom-enclosure",
    "Audio",
    "Audio & DSP",
    "qualify",
    [
      "do you build custom sub boxes",
      "can you make a custom enclosure",
      "can you build a hidden subwoofer box"
    ],
    "TTT can incorporate custom enclosure and fabrication work when an off-the-shelf solution does not fit the vehicle or performance goal.",
    "What vehicle and space constraints are you working with?"
  ],
  [
    "security-layered",
    "Security",
    "Security / kill switch",
    "answer",
    [
      "how do you protect a car from theft",
      "what security system do you recommend",
      "what is layered vehicle security"
    ],
    "TTT approaches security in layers: deterrence, detection, alerts, immobilization, tracking and recovery support can each address different failure modes. No single device guarantees a vehicle cannot be stolen."
  ],
  [
    "security-kill-switch",
    "Security",
    "Security / kill switch",
    "qualify",
    [
      "do you install kill switches",
      "can you add an immobilizer",
      "i want a kill switch"
    ],
    "TTT can evaluate discreet immobilization strategies as part of a layered security plan. Exact implementation depends on the vehicle and is intentionally not described publicly.",
    "What vehicle are you protecting?"
  ],
  [
    "security-location-secret",
    "Security",
    "Security / kill switch",
    "handoff",
    [
      "where do you hide the kill switch",
      "where will the tracker be hidden",
      "tell me where security devices are installed"
    ],
    "TTT does not publish sensitive device locations, wiring paths or bypass details because that would weaken the protection. Owners receive the information they need to use and service the system appropriately."
  ],
  [
    "security-alarm",
    "Security",
    "Security / kill switch",
    "qualify",
    [
      "do you install alarms",
      "can you upgrade my factory alarm",
      "what alarm should i get"
    ],
    "TTT can evaluate alarm and detection layers based on the vehicle, where it is parked and the threats you are trying to address.",
    "What vehicle and security concerns do you have?"
  ],
  [
    "security-tracker-combo",
    "Security",
    "Security / kill switch",
    "answer",
    [
      "should i get a tracker and kill switch",
      "is gps enough for security",
      "tracker versus immobilizer"
    ],
    "Tracking and immobilization solve different parts of the problem. Layering them can provide both resistance to unauthorized operation and information that may support recovery."
  ],
  [
    "security-remote-start",
    "Security",
    "Security / kill switch",
    "handoff",
    [
      "will a kill switch work with remote start",
      "can security work with remote start",
      "will an alarm interfere with remote start"
    ],
    "Security and remote-start systems can interact with factory authorization and aftermarket interfaces. Compatibility needs to be reviewed for the specific vehicle and installed equipment."
  ],
  [
    "security-keyless",
    "Security",
    "Security / kill switch",
    "answer",
    [
      "can you protect keyless entry cars",
      "what about relay theft",
      "can you stop keyless car theft"
    ],
    "Different theft methods require different layers. TTT can evaluate the vehicle's exposure and design a security strategy without claiming any single product defeats every attack."
  ],
  [
    "security-guarantee",
    "Security",
    "Security / kill switch",
    "answer",
    [
      "can you guarantee my car will not be stolen",
      "is your kill switch theft proof",
      "will this stop all theft"
    ],
    "No responsible security system can guarantee a vehicle will never be stolen. The goal is to add meaningful layers, increase difficulty, improve awareness and support recovery."
  ],
  [
    "security-factory-alarm",
    "Security",
    "Security / kill switch",
    "qualify",
    [
      "is the factory alarm enough",
      "do i need security if my car has an alarm",
      "can you add to the factory security system"
    ],
    "Factory security may cover some threats but not others. TTT can review the vehicle and your risk profile before recommending additional layers.",
    "Where is the vehicle normally parked and what are you most concerned about?"
  ],
  [
    "security-fleet",
    "Security",
    "Security / kill switch",
    "qualify",
    [
      "can you secure a fleet",
      "do you do security for work trucks",
      "can you standardize kill switches for multiple vehicles"
    ],
    "TTT can design repeatable security programs for commercial or fleet vehicles while keeping sensitive installation details controlled.",
    "How many vehicles and what types are involved?"
  ],
  [
    "tracking-install",
    "Tracking",
    "GPS & tracking",
    "qualify",
    [
      "do you install gps trackers",
      "can you add tracking to my car",
      "i need vehicle gps"
    ],
    "Yes. TTT can help with GPS tracking, geofencing, history and multi-vehicle platforms for personal, dealer and fleet use.",
    "Is this for one vehicle or multiple vehicles?"
  ],
  [
    "tracking-subscription",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "does gps require a subscription",
      "is there a monthly fee for tracking",
      "do trackers have cellular fees"
    ],
    "Many connected tracking platforms require a subscription for cellular connectivity, cloud services or app features. Terms depend on the platform selected."
  ],
  [
    "tracking-geofence",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "what is geofencing",
      "can i get an alert when the car leaves an area",
      "can gps notify me when a vehicle moves"
    ],
    "Many tracking platforms support geofences or movement alerts. Exact alert types and timing depend on the selected platform and subscription."
  ],
  [
    "tracking-history",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "can i see trip history",
      "does gps save where the car has been",
      "how long is location history stored"
    ],
    "Trip and location history capabilities vary by platform. Retention length, reporting and export options should be checked before selecting the system."
  ],
  [
    "tracking-live",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "is gps real time",
      "how often does location update",
      "can i watch the vehicle live"
    ],
    "Location update frequency varies by device, cellular connection, power mode and subscription. TTT can help compare platforms around the update rate you actually need."
  ],
  [
    "tracking-fleet",
    "Tracking",
    "GPS & tracking",
    "qualify",
    [
      "can i track my whole fleet",
      "can multiple vehicles be on one dashboard",
      "do you have fleet tracking"
    ],
    "Yes. Fleet platforms can bring multiple vehicles into one administrative view with roles, geofences, history and reporting depending on the platform.",
    "How many vehicles would you like to manage?"
  ],
  [
    "tracking-privacy",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "who can see my gps data",
      "does ttt monitor my location",
      "is tracking data private"
    ],
    "TTT should only access location or telematics information when needed for an authorized service. The tracking platform itself may process data under its own privacy terms, so access and retention should be reviewed."
  ],
  [
    "tracking-battery",
    "Tracking",
    "GPS & tracking",
    "answer",
    [
      "will a tracker drain my battery",
      "does gps use battery when parked",
      "can gps cause parasitic drain"
    ],
    "A properly selected and installed tracker should account for vehicle power management, but connected devices do consume power. Device behavior and vehicle storage patterns should be considered."
  ],
  [
    "tracking-removal",
    "Tracking",
    "GPS & tracking",
    "handoff",
    [
      "can you remove an old tracker",
      "i found a gps tracker can you remove it",
      "can you uninstall tracking equipment"
    ],
    "TTT can evaluate installed tracking equipment and removal when ownership and authorization are clear. The team may need to inspect how the device is integrated before removing it."
  ],
  [
    "camera-dashcam",
    "Cameras",
    "Cameras",
    "qualify",
    [
      "do you install dash cams",
      "can you hardwire a dashcam",
      "i need a dash camera"
    ],
    "Yes. TTT integrates dash cameras around coverage, parking mode, storage, clean power and how footage needs to be retrieved.",
    "Do you want front-only, front-and-rear or broader coverage?"
  ],
  [
    "camera-front-rear",
    "Cameras",
    "Cameras",
    "answer",
    [
      "should i get front and rear cameras",
      "do you install two channel dashcams",
      "can i record behind the car too"
    ],
    "Front-and-rear systems provide broader incident coverage than a front camera alone. The right channel count depends on what events you need to capture."
  ],
  [
    "camera-parking",
    "Cameras",
    "Cameras",
    "answer",
    [
      "can a dashcam record while parked",
      "what is parking mode",
      "will my camera record when the car is off"
    ],
    "Many dash cameras support parking recording, but behavior depends on the camera, power strategy, settings and battery-management design."
  ],
  [
    "camera-battery",
    "Cameras",
    "Cameras",
    "answer",
    [
      "will a dashcam drain my battery",
      "is parking mode safe for the battery",
      "can cameras kill the battery"
    ],
    "Parking-mode systems need appropriate low-voltage or battery-management strategy. Expected parking duration and vehicle usage affect the correct setup."
  ],
  [
    "camera-storage",
    "Cameras",
    "Cameras",
    "answer",
    [
      "how much dashcam storage do i need",
      "what size memory card should i use",
      "how long does dashcam footage last"
    ],
    "Storage needs depend on channel count, resolution, bitrate, driving time and event retention. TTT can help size storage around how you use the camera."
  ],
  [
    "camera-cloud",
    "Cameras",
    "Cameras",
    "answer",
    [
      "can i view my dashcam remotely",
      "do dashcams have cloud access",
      "can i get camera alerts on my phone"
    ],
    "Some camera platforms support cloud connectivity, remote viewing or event alerts, often with connectivity and subscription requirements."
  ],
  [
    "camera-cabin",
    "Cameras",
    "Cameras",
    "qualify",
    [
      "do you install interior cameras",
      "can i record inside the vehicle",
      "i need a cabin camera"
    ],
    "Cabin cameras can be useful for rideshare, fleet, security or incident documentation. Privacy and organizational policy should be considered along with coverage.",
    "Is this for a personal vehicle or commercial use?"
  ],
  [
    "camera-rear-camera",
    "Cameras",
    "Cameras",
    "handoff",
    [
      "can you add a backup camera",
      "can you replace my rear camera",
      "my reverse camera is broken"
    ],
    "Backup-camera retrofit or repair is vehicle-specific because displays, camera formats and factory modules vary. The team can review compatibility for your vehicle."
  ],
  [
    "camera-blackvue",
    "Cameras",
    "Cameras",
    "qualify",
    [
      "do you install blackvue",
      "can you hardwire my blackvue",
      "do you sell blackvue cameras"
    ],
    "TTT can evaluate BlackVue and other dash-camera systems based on the vehicle, coverage, parking-mode and connectivity requirements. Current model availability should be confirmed with the team.",
    "Which BlackVue model or camera setup are you considering?"
  ],
  [
    "signaltrace-what",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "what is signaltrace",
      "what does signal trace do",
      "what is your diagnostic service"
    ],
    "TTT SignalTrace™ is a structured root-cause diagnostic service for difficult electrical and electronic problems, especially intermittent faults and aftermarket integration issues.",
    "What symptom is the vehicle showing?"
  ],
  [
    "signaltrace-battery",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "my battery keeps dying",
      "i have a parasitic drain",
      "car battery dies overnight"
    ],
    "Battery drain can involve a device that stays awake, wiring, grounding, charging or module sleep behavior. SignalTrace is designed to test the condition rather than guess at the cause.",
    "What vehicle is it, and when did the problem start?"
  ],
  [
    "signaltrace-no-start",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "my car sometimes will not start",
      "intermittent no start",
      "vehicle randomly does not start"
    ],
    "Intermittent no-start problems can involve power, ground, authorization, modules, wiring or aftermarket equipment. SignalTrace works by reproducing and isolating the fault with evidence.",
    "What vehicle is it and what happens when you try to start it?"
  ],
  [
    "signaltrace-aftermarket",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "problem started after aftermarket install",
      "my stereo caused an electrical issue",
      "shop says aftermarket equipment is the problem"
    ],
    "The presence of aftermarket equipment is not proof that it caused the fault. SignalTrace tests the system to determine whether the added equipment is involved and, if so, how.",
    "What was installed and what symptom appeared afterward?"
  ],
  [
    "signaltrace-can",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "i have can bus errors",
      "module communication problem",
      "multiple modules are offline"
    ],
    "Modern vehicles rely on networked modules, so communication faults can create many symptoms. SignalTrace can isolate whether the issue is network, power, ground, module, wiring or integration related.",
    "What codes or symptoms are you seeing?"
  ],
  [
    "signaltrace-wiring",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "answer",
    [
      "can you diagnose bad wiring",
      "do you find grounding problems",
      "can you trace electrical shorts"
    ],
    "Yes. Wiring, connectors, grounds, opens and shorts are among the conditions SignalTrace can investigate using measurement and circuit tracing."
  ],
  [
    "signaltrace-process",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "answer",
    [
      "how does signaltrace work",
      "what is scan isolate trace verify resolve",
      "what happens during diagnostics"
    ],
    "The SignalTrace process is SCAN → ISOLATE → TRACE → VERIFY → RESOLVE: capture evidence, narrow the system, trace the fault path, confirm the root cause and verify the correction."
  ],
  [
    "signaltrace-time",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "handoff",
    [
      "how long will diagnostics take",
      "how quickly can you find the fault",
      "can you diagnose it in one hour"
    ],
    "Diagnostic time depends on whether the symptom can be reproduced and how deep the fault is. TTT may work in authorized diagnostic blocks rather than promise a result before testing."
  ],
  [
    "signaltrace-scan-code",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "answer",
    [
      "can you just scan the codes",
      "is a code scan the same as diagnostics",
      "will obd codes tell you the problem"
    ],
    "A scan can provide useful clues, but a fault code does not always identify the failed component. SignalTrace uses codes together with live data, electrical tests and system evidence."
  ],
  [
    "signaltrace-running-board",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "my powered steps stopped working",
      "running boards work intermittently",
      "can you diagnose power steps"
    ],
    "Intermittent powered-step problems can involve power, grounds, sensors, modules, wiring or aftermarket integration and are suitable for structured diagnostics.",
    "Tell me the vehicle and exactly what the steps are doing."
  ],
  [
    "signaltrace-fuse",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "my fuse keeps blowing",
      "why does the same fuse keep failing",
      "can you find what is blowing a fuse"
    ],
    "Repeated fuse failure indicates an electrical condition that should be traced rather than repeatedly replacing the fuse. SignalTrace can isolate the affected circuit and cause.",
    "Which fuse or system is affected?"
  ],
  [
    "signaltrace-warning",
    "SignalTrace",
    "SignalTrace™ diagnostics",
    "qualify",
    [
      "warning lights after install",
      "dashboard errors after aftermarket work",
      "multiple warning messages came on"
    ],
    "Multiple warnings after an installation can be related to power, grounds, disconnected modules, network communication or configuration. The team can test the vehicle rather than assuming the first visible symptom is the cause.",
    "What was installed and which warnings are showing?"
  ],
  [
    "electronics-remote-start",
    "Electronics",
    "Electronics",
    "handoff",
    [
      "do you install remote start",
      "can remote start be added to my car",
      "can you fix my remote start"
    ],
    "Remote-start compatibility depends on the vehicle, factory authorization systems and any existing aftermarket equipment. The team can review the specific vehicle and system."
  ],
  [
    "electronics-usb",
    "Electronics",
    "Electronics",
    "qualify",
    [
      "can you add usb charging",
      "can you add usb c to my car",
      "i want hidden charging ports"
    ],
    "TTT can integrate charging and accessory power when it can be done cleanly and safely around the vehicle's electrical system.",
    "What vehicle and charging setup do you want?"
  ],
  [
    "electronics-lighting",
    "Electronics",
    "Electronics",
    "qualify",
    [
      "do you install vehicle lighting",
      "can you add interior ambient lights",
      "can you wire auxiliary lights"
    ],
    "TTT can evaluate lighting projects where power, controls, mounting and integration can be planned appropriately.",
    "What type of lighting and vehicle are you working with?"
  ],
  [
    "electronics-factory-features",
    "Electronics",
    "Electronics",
    "answer",
    [
      "will i lose factory features",
      "can you keep oem functions",
      "will modifications break factory electronics"
    ],
    "TTT plans around preserving factory functions where practical. The exact limitations depend on the vehicle architecture and the modification being considered."
  ],
  [
    "electronics-accessories",
    "Electronics",
    "Electronics",
    "answer",
    [
      "can multiple accessories share power",
      "how do you wire several devices",
      "can you clean up all my accessory wiring"
    ],
    "Multiple accessories should be planned around proper power distribution, protection, grounding, control and serviceability rather than stacking unrelated connections."
  ],
  [
    "electronics-wire-cleanup",
    "Electronics",
    "Electronics",
    "handoff",
    [
      "can you fix messy wiring",
      "previous shop left bad wiring",
      "can you redo an old install"
    ],
    "TTT can inspect and potentially rework existing aftermarket wiring. The team may need to see the current installation before deciding whether repair or replacement is the better path."
  ],
  [
    "electronics-retrofit",
    "Electronics",
    "Electronics",
    "handoff",
    [
      "can you retrofit newer technology",
      "can you add a feature my trim did not come with",
      "can you retrofit factory options"
    ],
    "Some technology retrofits are possible while others require modules, coding, wiring or hardware that make them impractical. Compatibility needs to be reviewed vehicle by vehicle."
  ],
  [
    "fab-what",
    "Fabrication",
    "Custom fabrication",
    "qualify",
    [
      "what can you fabricate",
      "what custom parts do you make",
      "do you do automotive fabrication"
    ],
    "TTT can design vehicle-specific mounts, brackets, panels, enclosures, jigs, fixtures and selected low-volume parts when an off-the-shelf solution does not fit.",
    "What problem are you trying to solve?"
  ],
  [
    "fab-3d-print",
    "Fabrication",
    "Custom fabrication",
    "answer",
    [
      "do you do 3d printing",
      "can you print automotive parts",
      "do you make custom 3d printed parts"
    ],
    "Yes. TTT uses additive manufacturing when it makes sense for fit, function, prototyping or low-volume production rather than treating printing as a commodity by itself."
  ],
  [
    "fab-scan",
    "Fabrication",
    "Custom fabrication",
    "answer",
    [
      "do you do 3d scanning",
      "can you scan my interior for a part",
      "do you use scanners for custom parts"
    ],
    "3D scanning can help with complex geometry, but TTT uses it selectively. Direct measurement, templates or CAD may be faster for simpler parts."
  ],
  [
    "fab-replacement",
    "Fabrication",
    "Custom fabrication",
    "handoff",
    [
      "can you reproduce a broken plastic part",
      "can you make a discontinued part",
      "can you print a replacement trim piece"
    ],
    "TTT can evaluate low-volume replacement parts when the application is appropriate and non-safety-critical. The original part, fit requirements and operating environment need to be reviewed."
  ],
  [
    "fab-one-off",
    "Fabrication",
    "Custom fabrication",
    "answer",
    [
      "will you make one part",
      "do you do one off fabrication",
      "is one custom bracket worth doing"
    ],
    "Yes, one-off work can make sense when a small custom component solves a larger installation problem. Pricing reflects design, validation and production effort rather than raw material alone."
  ],
  [
    "fab-design-only",
    "Fabrication",
    "Custom fabrication",
    "handoff",
    [
      "can you just design the cad file",
      "do you offer cad design only",
      "can i buy the design"
    ],
    "Design-only work may be possible depending on the project, ownership requirements and validation needed. The team can review the intended use and deliverables."
  ],
  [
    "fab-repeatable",
    "Fabrication",
    "Custom fabrication",
    "answer",
    [
      "can you save the design for future vehicles",
      "can custom parts be repeated",
      "can you make the same part again later"
    ],
    "Yes. Validated designs can become reusable digital parts with revision and fitment records so future builds do not have to repeat the same engineering work."
  ],
  [
    "commercial-dealer",
    "Commercial",
    "",
    "qualify",
    [
      "do you work with dealerships",
      "can you build dealership packages",
      "do you offer dealer programs"
    ],
    "Yes. TTT can structure repeatable dealership technology packages around products, installation standards, pricing logic, documentation and vehicle handoff.",
    "What type of dealership and program are you considering?"
  ],
  [
    "commercial-fleet",
    "Commercial",
    "",
    "qualify",
    [
      "do you work with fleets",
      "can you outfit work trucks",
      "do you do commercial vehicles"
    ],
    "Yes. TTT can standardize tracking, cameras, security and other vehicle technology across commercial fleets.",
    "How many vehicles and what types are involved?"
  ],
  [
    "commercial-small-fleet",
    "Commercial",
    "",
    "answer",
    [
      "is my fleet too small",
      "do you work with small fleets",
      "we only have a few vehicles"
    ],
    "A small fleet can still benefit from standardization. A pilot on a few vehicles can establish the hardware, installation and documentation standard before the fleet grows."
  ],
  [
    "commercial-standardize",
    "Commercial",
    "",
    "answer",
    [
      "can you standardize installs across different vehicles",
      "how do you keep fleet installs consistent",
      "can one standard work across several models"
    ],
    "The program can be standardized even when exact mounting varies by model. TTT can define approved hardware, configuration, QA and vehicle-specific installation methods."
  ],
  [
    "commercial-white-label",
    "Commercial",
    "",
    "handoff",
    [
      "can you work white label for a dealership",
      "can you install behind our brand",
      "do you offer white label installation"
    ],
    "A behind-the-scenes or white-label partner model can be discussed where it fits the dealership's customer experience and operating requirements."
  ],
  [
    "commercial-pilot",
    "Commercial",
    "",
    "qualify",
    [
      "can we test on one vehicle first",
      "can we run a pilot",
      "do we need to commit the whole fleet"
    ],
    "Yes. A pilot is often the best way to validate hardware, installation time, reporting and user workflow before scaling.",
    "What would you like the pilot vehicle to prove?"
  ],
  [
    "commercial-records",
    "Commercial",
    "",
    "answer",
    [
      "do you keep records by vehicle",
      "can you track what was installed on each fleet vehicle",
      "will there be installation records"
    ],
    "TTT's operating model is designed around vehicle-level records for installed equipment, project history and service information."
  ],
  [
    "commercial-platform-choice",
    "Commercial",
    "",
    "answer",
    [
      "how do we choose a tracking platform",
      "which fleet gps is best",
      "what should we compare in telematics"
    ],
    "Start with the operational requirement: update frequency, roles, geofencing, history, reporting, camera integration, subscription structure, APIs and support. The right platform is the one that fits the workflow."
  ],
  [
    "support-product-failure",
    "Support",
    "",
    "handoff",
    [
      "what if a product fails",
      "my installed product stopped working",
      "what happens if hardware breaks"
    ],
    "The next step depends on whether the issue is product failure, configuration, installation or another vehicle condition. TTT can review the installation and applicable manufacturer support or warranty terms."
  ],
  [
    "support-warranty",
    "Support",
    "",
    "handoff",
    [
      "what warranty do you offer",
      "is installation covered",
      "how does warranty work"
    ],
    "Warranty coverage depends on the product, manufacturer terms and the work performed. Applicable coverage should be documented with the project, and the team can clarify the terms for a specific job."
  ],
  [
    "support-records",
    "Support",
    "",
    "answer",
    [
      "do you keep installation records",
      "will you remember what was installed",
      "can i get a record of my system"
    ],
    "The TTT operating model is designed to keep vehicle-level records of installed equipment, relevant configuration, project history and service information."
  ],
  [
    "support-other-tech",
    "Support",
    "",
    "answer",
    [
      "can another technician service the car later",
      "will another shop understand the install",
      "is the installation documented"
    ],
    "Good documentation and serviceable installation are intended to make future support possible. Sensitive security details may remain restricted, but the broader system should not depend on undocumented knowledge."
  ],
  [
    "support-existing",
    "Support",
    "",
    "qualify",
    [
      "i am an existing customer and need help",
      "i need support for an old install",
      "something changed after my ttt install"
    ],
    "TTT can route existing-installation questions for review. Describe what changed, when it started and which system is involved.",
    "What is happening now?"
  ],
  [
    "support-future-upgrade",
    "Support",
    "",
    "answer",
    [
      "can i add to the system later",
      "will you support future upgrades",
      "can my installation be expanded"
    ],
    "Where practical, TTT designs systems with serviceability and future expansion in mind. The available upgrade path depends on the original architecture and current goals."
  ],
  [
    "area-houston",
    "Service Area",
    "",
    "answer",
    [
      "where are you located",
      "what area do you serve",
      "are you in houston"
    ],
    "TTT is focused on the Greater Houston area. Project availability and exact service location are confirmed before scheduling."
  ],
  [
    "area-cities",
    "Service Area",
    "",
    "answer",
    [
      "do you serve katy",
      "do you serve sugar land",
      "do you serve cypress",
      "do you serve the woodlands",
      "do you serve pearland"
    ],
    "TTT's Greater Houston service area includes Houston and surrounding communities such as Katy, Sugar Land, Cypress, The Woodlands and Pearland, subject to project availability."
  ],
  [
    "area-mobile",
    "Service Area",
    "",
    "handoff",
    [
      "do you offer mobile installation",
      "can you come to me",
      "do you install at my location"
    ],
    "Mobile capability depends on the service, vehicle, work environment and project requirements. The team can confirm whether a particular job is suitable for mobile work."
  ],
  [
    "area-hours",
    "Service Area",
    "",
    "handoff",
    [
      "what are your hours",
      "when are you open",
      "are you open today"
    ],
    "TTT does not currently publish fixed shop hours on the website. The team can confirm availability when arranging your project."
  ]
];

export const TESSA_KNOWLEDGE = Object.freeze(rawKnowledge.map(([id, category, service, mode, questions, answer, followUp='']) => Object.freeze({
  id,
  category,
  service,
  mode,
  questions: Object.freeze(questions),
  answer,
  followUp
})));

export const TESSA_KNOWLEDGE_COUNT = TESSA_KNOWLEDGE.length;
export const TESSA_PHRASE_COUNT = TESSA_KNOWLEDGE.reduce((sum, item) => sum + item.questions.length, 0);
