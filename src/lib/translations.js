export const translations = {
  en: {
    nav: {
      about: "About",
      shorado: "Shorado",
      build: "What I Build",
      stack: "Stack",
      lab: "Lab",
      path: "Path",
      contact: "Contact",
      location: "MUNICH, DE",
      getInTouch: "Get in touch",
    },
    hero: {
      role: "SOFTWARE ENGINEER",
      origin: "KYIV → MUNICH",
      explore: "EXPLORE",
      firstName: "Yevhenii",
      lastName: "Shorobura",
      quote:
        "I dreaming about making products whats be used milions peoples every day",
      scrollDown: "Scroll down to discover",
    },
    about: {
      tag: "01 — About",
      titlePrefix: "Building at the seam between ",
      titleProduct: "product",
      titleAnd: " and ",
      titleSystem: "system",
      titleSuffix: ".",
      locationCity: "Munich, DE",
      originCity: "orig. Kyiv, UA",
      metricSoloNum: "2024+",
      metricSoloDesc: "Solo in production with Shorado",
      metricSelfTaughtNum: "100%",
      metricSelfTaughtDesc: "Self-taught builder by shipping",
      badgeMindset: "Background & Mindset",
      p1Greeting: "My name is ",
      p1Name: "Yevhenii Shorobura",
      p1Text:
        ". I am a full-stack engineer and product builder originally from Kyiv, Ukraine, now based in Munich.",
      p2Text:
        "I am self-taught — every single part of my stack has been learned by making millions of mistakes and errors, and by repeatedly shipping real software rather than following theoretical curricula.",
      p3Since: "Since 2024, I have been the solo engineer behind ",
      p3Product: "Shorado",
      p3Rest:
        ", a Ukrainian platform operating live in production — designing the interface, writing the backend APIs, tuning data schemas, and maintaining the infrastructure that holds it together.",
      quote:
        "“My interest sits at the seam between product and system: not just how a screen looks, but what has to be true underneath it for the screen to be honest.”",
      quoteAuthor: "— Yevhenii Shorobura, Core Engineering Principle",
      val1Title: "Clarity over Complexity",
      val1Desc:
        "Interfaces and systems built for fast comprehension and reliability.",
      val2Title: "End-to-End Ownership",
      val2Desc:
        "From UX wireframes to PostgreSQL indexes and CDN edge rules.",
    },
    shorado: {
      tag: "02 — Featured Project",
      badgeSolo: "SOLO-BUILT",
      badgeProd: "IN PRODUCTION",
      tagline:
        "A Ukrainian marketplace built solo, exploring how listings should be discovered and ranked when visibility isn't for sale.",
      badgePasskeys: "WebAuthn Passkeys",
      badgeWebSockets: "Live WebSockets",
      previewHeader: "shorado.com.ua — Production Interface",
      previewBadge: "Ukrainian Marketplace",
      previewCaption:
        "Dark & amber-accented Ukrainian UI with bento layout",
      previewStack:
        "Fastify • Node.js • PostgreSQL • Cloudflare R2 • WebAuthn",
      pillarTag: "Architecture Pillar",
      pillarTested: "Production Tested →",
      pillars: [
        {
          step: "01",
          tag: "Market Distortion",
          title: "The Problem",
          desc: "Existing Ukrainian platforms for selling used items let visibility be bought outright. The best listing isn't the one shown first — the one paid for is. My father's work as a realtor made that broken pay-to-win dynamic visible up close.",
        },
        {
          step: "02",
          tag: "Merit-Based Discovery",
          title: "The Idea",
          desc: "Here, you don't buy first place. Ranking organically tracks seller reputation, verified authenticity, and listing quality — never ad spend.",
        },
        {
          step: "03",
          tag: "Event-Log & Schema",
          title: "The System",
          desc: "A PostgreSQL schema built around items, users, and an append-only event log. Uses a progressive reach-stage model that governs how far a listing travels strictly based on real algorithmic signal rather than payment.",
        },
        {
          step: "04",
          tag: "Bento & WebAuthn",
          title: "The Interface",
          desc: "A dark, amber-accented UI in Ukrainian built around bento-style grids, passwordless WebAuthn passkey authentication, and an instant buyer-seller chat system streaming over WebSockets.",
        },
        {
          step: "05",
          tag: "Edge CDN & Sharp",
          title: "The Engineering",
          desc: "Fastify & Node.js on the backend, Cloudflare R2 + CDN edge caching for media, a Sharp-based pipeline auto-generating WebP variants with blur placeholders, and an HTTP 410 tombstone pattern for deleted listings.",
        },
      ],
      highlightBadge: "Full-Cycle Solo Operations",
      highlightTitle:
        "Built from scratch, operated with zero dev bloat.",
      highlightDesc:
        "Every detail — UI state machines, WebSocket push gateways, database connection pooling, image resizing workers, and HTTP cache headers — maintained by a single engineer.",
      highlightType: "Marketplace Platform",
      highlightSince: "Live since 2024",
    },
    build: {
      tag: "03 — Capabilities",
      title: "What I build",
      subtitle:
        "Interfaces, applications, backends, and the systems that connect them into cohesive products.",
      domains: [
        {
          index: "01",
          title: "Interfaces",
          desc: "Component-driven UI built for clarity and speed, not decoration.",
          tech: ["React", "Next.js", "Tailwind CSS"],
        },
        {
          index: "02",
          title: "Applications",
          desc: "Full products with robust auth, predictable state, and real-time interaction.",
          tech: ["WebAuthn", "Zustand", "WebSocket"],
        },
        {
          index: "03",
          title: "Products",
          desc: "Taking all of the above and shipping it as something people actually use — end to end. Shorado is the proof.",
          tech: ["Shorado", "Solo-built", "In production"],
        },
        {
          index: "04",
          title: "Backends",
          desc: "APIs and services designed cleanly around the data they actually need to move.",
          tech: ["Node.js", "Fastify", "Express"],
        },
        {
          index: "05",
          title: "Data",
          desc: "Schemas built for growth — immutable event logs and query indexes that hold under load.",
          tech: ["PostgreSQL", "Redis", "SQLite"],
        },
        {
          index: "06",
          title: "Real-time systems",
          desc: "Sockets and push pipelines that stay synchronized with zero wasteful polling.",
          tech: ["WebSocket", "FCM", "Service Workers"],
        },
      ],
    },
    stack: {
      tag: "04 — Technologies",
      title: "The Stack",
      subtitle:
        "Grouped by what it's for. Tools chosen for resilience, clarity, and real operational predictability.",
      techCountSuffix: "technologies",
      categories: [
        {
          category: "Core",
          desc: "Foundational web & execution runtime",
          skills: ["JavaScript", "Node.js", "HTML5", "CSS3"],
        },
        {
          category: "Frontend",
          desc: "Declarative, high-speed user interfaces",
          skills: ["React", "Next.js", "TailwindCSS", "Zustand"],
        },
        {
          category: "Backend",
          desc: "High-throughput APIs & microservices",
          skills: ["Node.js", "Fastify", "Express"],
        },
        {
          category: "Data",
          desc: "Structured storage, caching & key-value stores",
          skills: ["PostgreSQL", "SQLite", "Redis"],
        },
        {
          category: "Systems",
          desc: "Protocols, authentication & offline layers",
          skills: [
            "REST APIs",
            "WebSockets",
            "WebAuthn / Passkeys",
            "PWA / Service Workers",
          ],
        },
        {
          category: "AI & LLM Integration",
          desc: "Model integration, moderation & AI tooling",
          skills: [
            "Together AI API",
            "ChatGPT API",
            "ChatGPT Moderation API",
            "Vercel AI",
          ],
        },
        {
          category: "Services & Cloud",
          desc: "Edge networks, database hosts & deployments",
          skills: [
            "Cloudflare R2 & CDN",
            "Vercel Deploying",
            "Supabase",
            "Firebase FCM",
          ],
        },
        {
          category: "Exploring & Mobile",
          desc: "Active research & expansion domains",
          skills: ["React Native", "Kotlin", "Swift", "Go"],
        },
      ],
    },
    lab: {
      tag: "05 — R&D Experiments",
      title: "Lab",
      subtitle:
        "Where the stack gets tested before it's trusted. Deep-dive prototypes, performance benchmarks, and browser edge cases.",
      badge: "Active Prototyping",
      verified: "Verified",
      experiments: [
        {
          index: "01",
          title: "Onboarding & Mobile UX",
          tag: "UI Engineering",
          summary:
            "Programmatic phone mockups with perspective-warped screenshots, collapsible navigation, and a keyboard-safe chat UI tuned specifically for Android's viewport quirks.",
          focus: "Mobile Viewports & Keyboard Resizing",
        },
        {
          index: "02",
          title: "Cross-Platform Barcode Scanning",
          tag: "Web APIs",
          summary:
            "A BarcodeDetector-based scanner implementation with an automated polyfill fallback for legacy engines and browsers without native hardware-accelerated camera detection.",
          focus: "Native Hardware APIs & Polyfills",
        },
        {
          index: "03",
          title: "Notification Architecture",
          tag: "PWA & Workers",
          summary:
            "Firebase Cloud Messaging paired with a specialized Service Worker layer that isolates offline asset caching logic from background push delivery handling.",
          focus: "Decoupled Push & Offline Workers",
        },
        {
          index: "04",
          title: "Edge Caching & Low-Latency ISR",
          tag: "Performance",
          summary:
            "Cloudflare CDN placed strategically in front of Next.js Incremental Static Regeneration, crushing time-to-first-byte (TTFB) down to ~20ms globally.",
          focus: "Next.js ISR + Cloudflare Edge (~20ms TTFB)",
        },
      ],
    },
    path: {
      tag: "06 — Growth",
      title: "Path",
      subtitle:
        "Capability, not chronology. The progressive layers of engineering mastery built by shipping.",
      badge: "Iterative Progression",
      steps: [
        {
          step: "01",
          title: "Foundations",
          subtitle: "Understanding the web from the ground up.",
          tools: ["HTML5", "CSS3", "Modern JavaScript", "DOM APIs"],
          detail:
            "Mastering browser engines, execution models, layouts, semantic structuring, and networking primitives.",
        },
        {
          step: "02",
          title: "Interfaces",
          subtitle: "Component architecture & reactive UI systems.",
          tools: [
            "React",
            "State Machines",
            "Design Systems",
            "Tailwind CSS",
          ],
          detail:
            "Building declarative UI components engineered for instant render cycles, clean abstractions, and smooth responsiveness.",
        },
        {
          step: "03",
          title: "Applications",
          subtitle:
            "APIs, data models, identity, and bi-directional communications.",
          tools: ["Node.js", "REST APIs", "Databases", "WebSockets", "Auth"],
          detail:
            "Connecting rich clients to resilient server runtimes, transactional data flows, and secure session management.",
        },
        {
          step: "04",
          title: "Systems",
          subtitle:
            "Distributed edge, storage, caching, and database durability.",
          tools: ["Next.js", "PostgreSQL", "Redis", "Cloudflare CDN / R2"],
          detail:
            "Designing architecture that scales predictably under burst traffic with minimal latency and high availability.",
        },
        {
          step: "05",
          title: "Products",
          subtitle:
            "Shipping and operating real software in production, solo.",
          tools: [
            "Shorado",
            "Solo Engineering",
            "User Telemetry",
            "Operations",
          ],
          detail:
            "Translating engineering capability into real, living platforms serving actual users with zero corporate overhead.",
        },
      ],
    },
    contact: {
      tag: "07 — Contact",
      pitchPrefix: "Have a project? ",
      pitchAccent: "Let's build something.",
      subtitle:
        "Available for engineering roles, technical advisory, or ambitious product builds.",
      directChannel: "Direct Channel",
      locationCity: "Munich, Germany",
      primaryEmail: "Primary Email",
      copy: "Copy",
      copied: "Copied!",
      write: "Write",
      quote:
        "“The measure of who we are is what we do with what we have.”",
      quoteAuthor: "— Vince Lombardi",
      languagesHeader: "Languages",
      languagesSub: "Communication",
      languagesTitle: "Spoken Languages",
      languagesDesc:
        "Comfortable working in cross-functional international and European teams.",
      languages: [
        {
          code: "UKR",
          level: "++",
          name: "Ukrainian",
          desc: "Native proficiency",
        },
        {
          code: "ENG",
          level: "+",
          name: "English",
          desc: "Fluent / Professional",
        },
        {
          code: "DEU",
          level: "+-",
          name: "German",
          desc: "Intermediate / Working",
        },
        {
          code: "RUS",
          level: "+",
          name: "Russian",
          desc: "Fluent",
        },
      ],
      locationNote: "Currently based in Munich, Germany (CET / UTC+1)",
      copyright: "All rights reserved.",
      backToTop: "Back to Top ↑",
    },
    blackHole: {
      pauseTitle: "Pause cosmic animation",
      resumeTitle: "Resume cosmic animation",
      pauseLabel: "PAUSE",
      resumeLabel: "RESUME",
    },
  },
  de: {
    nav: {
      about: "Über mich",
      shorado: "Shorado",
      build: "Was ich baue",
      stack: "Stack",
      lab: "Lab",
      path: "Werdegang",
      contact: "Kontakt",
      location: "MÜNCHEN, DE",
      getInTouch: "Kontakt aufnehmen",
    },
    hero: {
      role: "SOFTWARE-ENTWICKLER",
      origin: "KYJIW → MÜNCHEN",
      explore: "ERKUNDEN",
      firstName: "Yevhenii",
      lastName: "Shorobura",
      quote:
        "Ich träume davon, Produkte zu erschaffen, die täglich von Millionen von Menschen genutzt werden.",
      scrollDown: "Nach unten scrollen zum Entdecken",
    },
    about: {
      tag: "01 — Über mich",
      titlePrefix: "Bauen an der Schnittstelle zwischen ",
      titleProduct: "Produkt",
      titleAnd: " und ",
      titleSystem: "System",
      titleSuffix: ".",
      locationCity: "München, DE",
      originCity: "urspr. Kyjiw, UA",
      metricSoloNum: "2024+",
      metricSoloDesc: "Allein in Produktion mit Shorado",
      metricSelfTaughtNum: "100%",
      metricSelfTaughtDesc: "Autodidakt durch praktische Umsetzung",
      badgeMindset: "Hintergrund & Denkweise",
      p1Greeting: "Mein Name ist ",
      p1Name: "Yevhenii Shorobura",
      p1Text:
        ". Ich bin Full-Stack-Entwickler und Product Builder, ursprünglich aus Kyjiw, Ukraine, und lebe derzeit in München.",
      p2Text:
        "Ich bin Autodidakt – jeder einzelne Teil meines Tech-Stacks entstand durch Millionen von Fehlern und das kontinuierliche Ausliefern echter Software, anstatt theoretischen Lehrplänen zu folgen.",
      p3Since: "Seit 2024 bin ich der alleinige Entwickler hinter ",
      p3Product: "Shorado",
      p3Rest:
        ", einer ukrainischen Plattform im Live-Betrieb. Ich gestalte das Interface, entwickle die Backend-APIs, optimiere Datenbankschemata und betreue die Infrastruktur, die alles zusammenhält.",
      quote:
        "„Mein Interesse liegt an der Schnittstelle zwischen Produkt und System: Nicht nur, wie ein Bildschirm aussieht, sondern was darunter wahr sein muss, damit die Benutzeroberfläche ehrlich ist.“",
      quoteAuthor: "— Yevhenii Shorobura, Zentrales Konstruktionsprinzip",
      val1Title: "Klarheit vor Komplexität",
      val1Desc:
        "Interfaces und Systeme, gebaut für schnelles Verständnis und kompromisslose Zuverlässigkeit.",
      val2Title: "Ganzheitliche Verantwortung",
      val2Desc:
        "Vom UX-Wireframe über PostgreSQL-Indizes bis hin zu CDN-Edge-Regeln.",
    },
    shorado: {
      tag: "02 — Hauptprojekt",
      badgeSolo: "SOLO ENTWICKELT",
      badgeProd: "IN PRODUKTION",
      tagline:
        "Ein ukrainischer Marktplatz, im Alleingang entwickelt, der erforscht, wie Angebote entdeckt und bewertet werden sollten, wenn Sichtbarkeit nicht käuflich ist.",
      badgePasskeys: "WebAuthn Passkeys",
      badgeWebSockets: "Live-WebSockets",
      previewHeader: "shorado.com.ua — Produktions-Interface",
      previewBadge: "Ukrainischer Marktplatz",
      previewCaption:
        "Dunkle Benutzeroberfläche mit bernsteinfarbenen Akzenten im Bento-Layout",
      previewStack:
        "Fastify • Node.js • PostgreSQL • Cloudflare R2 • WebAuthn",
      pillarTag: "Architektur-Säule",
      pillarTested: "In Produktion erprobt →",
      pillars: [
        {
          step: "01",
          tag: "Marktverzerrung",
          title: "Das Problem",
          desc: "Bestehende ukrainische Plattformen für Gebrauchtwaren erlauben es, Sichtbarkeit direkt zu kaufen. Das beste Angebot steht nicht an erster Stelle – sondern das bezahlte. Durch die Arbeit meines Vaters als Immobilienmakler wurde diese unfaire Dynamik aus nächster Nähe greifbar.",
        },
        {
          step: "02",
          tag: "Leistungsbasierte Entdeckung",
          title: "Die Idee",
          desc: "Hier kauft man sich keinen ersten Platz. Das Ranking folgt organisch der Reputation des Verkäufers, verifizierter Authentizität und der Qualität des Angebots – niemals Werbebudgets.",
        },
        {
          step: "03",
          tag: "Event-Log & Schema",
          title: "Das System",
          desc: "Ein PostgreSQL-Schema rund um Artikel, Nutzer und ein unveränderliches Event-Log. Nutzt ein progressives Reichweitenstufen-Modell, das die Verbreitung eines Inserats rein nach echten algorithmischen Signalen steuert.",
        },
        {
          step: "04",
          tag: "Bento & WebAuthn",
          title: "Das Interface",
          desc: "Eine dunkle, bernsteinfarbene Benutzeroberfläche auf Ukrainisch mit Bento-Grids, passwortloser WebAuthn-Passkey-Authentifizierung und einem Echtzeit-Käufer-Verkäufer-Chat über WebSockets.",
        },
        {
          step: "05",
          tag: "Edge CDN & Sharp",
          title: "Das Engineering",
          desc: "Fastify & Node.js im Backend, Cloudflare R2 + CDN-Edge-Caching für Medien, eine Sharp-basierte Pipeline für WebP-Varianten mit Blur-Platzhaltern sowie ein HTTP-410-Tombstone-Muster für gelöschte Einträge.",
        },
      ],
      highlightBadge: "Vollständiger Solo-Betrieb",
      highlightTitle:
        "Von Grund auf aufgebaut, betrieben ohne Entwicklungs-Overhead.",
      highlightDesc:
        "Jedes Detail – von UI-Zustandsmaschinen und WebSocket-Gateways über DB-Connection-Pooling bis zu Bildverarbeitungs-Workern und HTTP-Cache-Headern – wird von einem einzigen Entwickler gepflegt.",
      highlightType: "Marktplatz-Plattform",
      highlightSince: "Live seit 2024",
    },
    build: {
      tag: "03 — Kompetenzen",
      title: "Was ich baue",
      subtitle:
        "Benutzeroberflächen, Anwendungen, Backends und die Systeme, die sie zu funktionierenden Produkten verbinden.",
      domains: [
        {
          index: "01",
          title: "Interfaces",
          desc: "Komponentengetriebene UIs, entwickelt für Klarheit und Geschwindigkeit, nicht zur Dekoration.",
          tech: ["React", "Next.js", "Tailwind CSS"],
        },
        {
          index: "02",
          title: "Anwendungen",
          desc: "Vollwertige Produkte mit robuster Authentifizierung, verlässlichem State und Echtzeit-Interaktion.",
          tech: ["WebAuthn", "Zustand", "WebSocket"],
        },
        {
          index: "03",
          title: "Produkte",
          desc: "All dies zusammenführen und als echte Produkte ausliefern, die Menschen tatsächlich nutzen. Shorado ist der Beweis.",
          tech: ["Shorado", "Solo entwickelt", "In Produktion"],
        },
        {
          index: "04",
          title: "Backends",
          desc: "APIs und Services, die exakt um den benötigten Datenfluss herum konzipiert sind.",
          tech: ["Node.js", "Fastify", "Express"],
        },
        {
          index: "05",
          title: "Daten",
          desc: "Schemas für Wachstum – unveränderliche Event-Logs und Indizes, die auch unter Last standhalten.",
          tech: ["PostgreSQL", "Redis", "SQLite"],
        },
        {
          index: "06",
          title: "Echtzeitsysteme",
          desc: "Sockets und Push-Pipelines, die ohne ressourcenintensives Polling synchron bleiben.",
          tech: ["WebSocket", "FCM", "Service Workers"],
        },
      ],
    },
    stack: {
      tag: "04 — Technologien",
      title: "Der Stack",
      subtitle:
        "Gruppiert nach Verwendungszweck. Werkzeuge, ausgewählt für Widerstandsfähigkeit, Klarheit und echte betriebliche Vorhersehbarkeit.",
      techCountSuffix: "Technologien",
      categories: [
        {
          category: "Core",
          desc: "Grundlegende Web- & Ausführungsumgebung",
          skills: ["JavaScript", "Node.js", "HTML5", "CSS3"],
        },
        {
          category: "Frontend",
          desc: "Deklarative, hochperformante Benutzeroberflächen",
          skills: ["React", "Next.js", "TailwindCSS", "Zustand"],
        },
        {
          category: "Backend",
          desc: "Hochdurchsatz-APIs & Microservices",
          skills: ["Node.js", "Fastify", "Express"],
        },
        {
          category: "Data",
          desc: "Strukturierte Speicherung, Caching & Key-Value-Stores",
          skills: ["PostgreSQL", "SQLite", "Redis"],
        },
        {
          category: "Systems",
          desc: "Protokolle, Authentifizierung & Offline-Schichten",
          skills: [
            "REST APIs",
            "WebSockets",
            "WebAuthn / Passkeys",
            "PWA / Service Workers",
          ],
        },
        {
          category: "KI & LLM-Integration",
          desc: "Modellintegration, Moderation & KI-Tooling",
          skills: [
            "Together AI API",
            "ChatGPT API",
            "ChatGPT Moderation API",
            "Vercel AI",
          ],
        },
        {
          category: "Services & Cloud",
          desc: "Edge-Netzwerke, Datenbank-Hosts & Deployments",
          skills: [
            "Cloudflare R2 & CDN",
            "Vercel Deploying",
            "Supabase",
            "Firebase FCM",
          ],
        },
        {
          category: "Forschung & Mobile",
          desc: "Aktive Forschung & Erweiterungsbereiche",
          skills: ["React Native", "Kotlin", "Swift", "Go"],
        },
      ],
    },
    lab: {
      tag: "05 — F&E-Experimente",
      title: "Lab",
      subtitle:
        "Wo der Stack getestet wird, bevor ihm vertraut wird. Tiefgehende Prototypen, Performance-Benchmarks und Browser-Randfälle.",
      badge: "Aktives Prototyping",
      verified: "Verifiziert",
      experiments: [
        {
          index: "01",
          title: "Onboarding & Mobile UX",
          tag: "UI-Engineering",
          summary:
            "Programmatische Smartphone-Mockups mit perspektivisch verzerrten Screenshots, einklappbarer Navigation und einer tastatursicheren Chat-UI für Android-Viewport-Eigenheiten.",
          focus: "Mobile Viewports & Keyboard Resizing",
        },
        {
          index: "02",
          title: "Plattformübergreifendes Barcode-Scanning",
          tag: "Web-APIs",
          summary:
            "Eine BarcodeDetector-Implementierung mit automatischem Polyfill-Fallback für ältere Browser ohne native Hardware-Kameraerkennung.",
          focus: "Native Hardware-APIs & Polyfills",
        },
        {
          index: "03",
          title: "Benachrichtigungsarchitektur",
          tag: "PWA & Workers",
          summary:
            "Firebase Cloud Messaging kombiniert mit einer spezialisierten Service-Worker-Schicht, die Offline-Caching von Hintergrund-Push trennt.",
          focus: "Entkoppelte Push- & Offline-Worker",
        },
        {
          index: "04",
          title: "Edge Caching & Low-Latency ISR",
          tag: "Performance",
          summary:
            "Cloudflare CDN strategisch vor Next.js ISR platziert, wodurch die Time-to-First-Byte (TTFB) global auf ca. 20 ms sinkt.",
          focus: "Next.js ISR + Cloudflare Edge (~20ms TTFB)",
        },
      ],
    },
    path: {
      tag: "06 — Werdegang",
      title: "Weg",
      subtitle:
        "Fähigkeiten statt Chronologie. Die aufeinander aufbauenden Schichten ingenieurmäßiger Meisterschaft, erlangt durch echte Projekte.",
      badge: "Iterative Entwicklung",
      steps: [
        {
          step: "01",
          title: "Grundlagen",
          subtitle: "Das Web von Grund auf verstehen.",
          tools: ["HTML5", "CSS3", "Modernes JavaScript", "DOM APIs"],
          detail:
            "Beherrschung von Browser-Engines, Ausführungsmodellen, Layouts, semantischer Strukturierung und Netzwerk-Primitiven.",
        },
        {
          step: "02",
          title: "Schnittstellen",
          subtitle: "Komponentenarchitektur & reaktive UI-Systeme.",
          tools: [
            "React",
            "Zustandsmaschinen",
            "Design-Systeme",
            "Tailwind CSS",
          ],
          detail:
            "Entwicklung deklarativer UI-Komponenten für sofortige Renderzyklen, saubere Abstraktionen und nahtlose Responsivität.",
        },
        {
          step: "03",
          title: "Anwendungen",
          subtitle:
            "APIs, Datenmodelle, Identität und bidirektionale Kommunikation.",
          tools: ["Node.js", "REST APIs", "Datenbanken", "WebSockets", "Auth"],
          detail:
            "Verbindung reichhaltiger Clients mit resilienten Server-Runtimes, transaktionalen Datenflüssen und sicherer Sitzungsverwaltung.",
        },
        {
          step: "04",
          title: "Systeme",
          subtitle:
            "Verteilte Edge-Netze, Speicher, Caching und Datenbank-Beständigkeit.",
          tools: ["Next.js", "PostgreSQL", "Redis", "Cloudflare CDN / R2"],
          detail:
            "Konzeption von Architekturen, die unter Lastspitzen vorhersehbar skalieren – mit minimaler Latenz und hoher Verfügbarkeit.",
        },
        {
          step: "05",
          title: "Produkte",
          subtitle:
            "Echte Software eigenständig in Produktion ausliefern und betreiben.",
          tools: [
            "Shorado",
            "Solo-Engineering",
            "User-Telemetrie",
            "Betrieb",
          ],
          detail:
            "Ingenieurtechnische Fähigkeiten in lebendige Plattformen für echte Nutzer verwandeln – ohne unnötigen bürokratischen Ballast.",
        },
      ],
    },
    contact: {
      tag: "07 — Kontakt",
      pitchPrefix: "Projekt im Sinn? ",
      pitchAccent: "Lass uns etwas bauen.",
      subtitle:
        "Verfügbar für Software-Engineering-Rollen, technische Beratung oder anspruchsvolle Produktentwicklungen.",
      directChannel: "Direkter Kanal",
      locationCity: "München, Deutschland",
      primaryEmail: "Primäre E-Mail",
      copy: "Kopieren",
      copied: "Kopiert!",
      write: "Schreiben",
      quote:
        "„Das Maß dessen, wer wir sind, ist das, was wir mit dem tun, was wir haben.“",
      quoteAuthor: "— Vince Lombardi",
      languagesHeader: "Sprachen",
      languagesSub: "Kommunikation",
      languagesTitle: "Gesprochene Sprachen",
      languagesDesc:
        "Erfahren in der Zusammenarbeit in internationalen und europäischen Teams.",
      languages: [
        {
          code: "UKR",
          level: "++",
          name: "Ukrainisch",
          desc: "Muttersprachliches Niveau",
        },
        {
          code: "ENG",
          level: "+",
          name: "Englisch",
          desc: "Fließend / Verhandlungssicher",
        },
        {
          code: "DEU",
          level: "+-",
          name: "Deutsch",
          desc: "Gute Kenntnisse / Im Berufsalltag",
        },
        {
          code: "RUS",
          level: "+",
          name: "Russisch",
          desc: "Fließend",
        },
      ],
      locationNote: "Derzeit wohnhaft in München, Deutschland (MEZ / UTC+1)",
      copyright: "Alle Rechte vorbehalten.",
      backToTop: "Nach oben ↑",
    },
    blackHole: {
      pauseTitle: "Kosmische Animation pausieren",
      resumeTitle: "Kosmische Animation fortsetzen",
      pauseLabel: "PAUSE",
      resumeLabel: "START",
    },
  },
};
