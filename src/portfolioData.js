/** Content mirrored from updates.html */

export const PM_ITEMS = [
  {
    headline: "[ FINTECH ] Pay With Transfer on POS",
    summary:
      "Architected alternative payment flows allowing seamless bank transfers directly coordinated with POS terminals.",
    modalTitle: "Pay With Transfer on POS",
    modalType: "FINTECH",
    descHtml: `<strong>The Problem:</strong><br>Picture this: A customer is at checkout, but the POS terminal returns an 'Issuer Inoperative' error due to a card network downtime. The customer asks, 'Can I just transfer?' The merchant hesitates, knowing manual bank transfers to personal accounts are hard to verify and highly susceptible to fake alerts. Because our POS devices lacked a native, verifiable 'Pay With Transfer' option, we were experiencing serious friction and transaction drop-offs.<br><br><strong>Data & Research:</strong><br>We were not guessing; the data was clear, lol. Industry reports, notably Paystack's annual commerce insights, heavily highlighted that bank transfers were rapidly eating into the market share of traditional card payments, becoming the most preferred digital payment channel in Nigeria. By limiting our terminals to cards only, we were leaving billions of Naira in potential transaction volume on the table.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>The mission was clear: bring secure, instant bank transfers to the POS. I led the strategic orchestration between our internal engineering teams and major PTSPs (Payment Terminal Service Providers) including UP, ITEX, Global Accelerex, and Interswitch. We architected a flow where the terminal generates a dynamic, transaction-specific virtual account number. The customer transfers the funds, the webhook fires upon confirmation, and the POS automatically prints a receipt, zero manual verification required.<br><br><strong>The Result:</strong><br>The numbers told the real story. By giving merchants and customers the payment channel they actually wanted, we saw our POS revenue skyrocket from ₦5 Billion to ₦12 Billion. We drastically improved transaction success rates during card downtimes and fundamentally shifted our inbound payment metrics.`,
  },
  {
    headline: "[ HARDWARE / SAAS ] POS Terminal Management Systems",
    summary:
      "Managed the deployment of centralized terminal management infrastructure to monitor, update, and manage hardware fleets.",
    modalTitle: "POS Terminal Management Systems",
    modalType: "HARDWARE / SAAS",
    descHtml: `<strong>The Problem:</strong><br>Managing thousands of physical devices spread across a country is chaotic. Our internal POS Operations Team was flying blind. They couldn't accurately keep track of physical inventory, monitor hardware faults, or attribute revenue generation across all our different PTSPs. Terminals were going missing, hoarding dust in merchants' drawers, or throwing errors without our support team ever knowing.<br><br><strong>Data & Research:</strong><br>Internal audits revealed clear inefficiencies, like immediately. We quantified the cost of a dormant terminal, the hardware cost, the lost opportunity cost, and the maintenance overhead. We realized that without remote monitoring and centralized control, we were bleeding money simply through poor physical asset management.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>We needed a single source of truth. My job was to oversee the implementation of a comprehensive, centralized Terminal Management System (TMS). We built a platform that enabled the POS Team to visualize all incoming deployment requests, track hardware movement across complex internal approval lines, execute seamless dispatches, and monitor the heartbeat and uptime of every single deployed POS terminal in the field.<br><br><strong>The Result:</strong><br>Operational visibility went from zero to a hundred. We drastically reduced terminal downtime, streamlined our nationwide inventory rotation, and successfully plugged massive revenue leaks by actively identifying and re-deploying inactive devices.`,
  },
  {
    headline: "[ FINTECH ] Card Activation on USSD",
    summary:
      "Led the strategy and deployment of offline card activation flows via USSD for broad financial inclusion.",
    modalTitle: "Card Activation on USSD & QR",
    modalType: "FINTECH",
    descHtml: `<strong>The Problem:</strong><br>Issuing debit cards is expensive, but it's a major revenue driver for the business. However, we noticed a massive drop-off between a card being issued and a card being used. Why? Because activating a card required the user to visit an ATM, step into a physical branch, or use a mobile app that required an internet connection. We needed to remove this friction entirely.<br><br><strong>Data & Research:</strong><br>Looking closely at our demographic distribution, the data painted a clear picture, like very clear. A massive segment of our users, particularly in Northern Nigeria, relied primarily on USSD for almost all of their daily banking activities due to lower smartphone penetration and limited internet access. If we wanted them to use cards, we had to meet them where they were.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>We decided to bring card activation directly to the user's pocket, offline. Navigating significant security and regulatory constraints, we designed and implemented highly secure QR code and USSD-based activation flows. This allowed users (and assisting agents) to securely generate PINs and activate their physical cards using basic feature phones.<br><br><strong>The Result:</strong><br>By leaning heavily into user behavior data rather than forcing a one-size-fits-all digital approach, we successfully deployed the solution and improved our overall card activation rates by approximately 37%, unlocking previously trapped revenue.`,
  },
  {
    headline: "[ MOBILE ] Mobile App Revamps",
    summary:
      "Spearheaded end-to-end UX/UI and architecture overhauls for existing mobile applications to improve retention and performance.",
    modalTitle: "Mobile App Revamp",
    modalType: "MOBILE",
    descHtml: `<strong>The Problem:</strong><br>Our legacy mobile banking application was showing its age, and it simply wasn't a great product. It suffered from a clunky user experience, confusing navigation, high drop-off rates during critical tasks like transfers, and an aging, inflexible monolithic architecture that made pushing new features a nightmare.<br><br><strong>Data & Research:</strong><br>We didn't have to look far for data, lol. App store reviews were hovering in the low 2-star territory. Product analytics highlighted severe friction points: users were taking too many clicks to complete basic onboarding, and backend timeouts were causing unacceptable transaction failure rates during peak hours.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>I spearheaded a straightforward but deep overhaul. We didn't just put a fresh coat of paint on it; we tore it down. We completely reworked the frontend UI/UX for a modern, intuitive feel (focusing on a 'three-click' transfer rule), and simultaneously rebuilt the underlying backend architecture to be microservices-driven for extreme scalability and speed.<br><br><strong>The Result:</strong><br>We delivered a drastically smoother, faster application. The redesign significantly improved our Google Play and App Store ratings, boosted daily active user (DAU) retention, and drove up overall digital transaction volumes.`,
  },
  {
    headline: "[ FINTECH ] Virtual Card Deployments",
    summary:
      "Oversaw the lifecycle creation and deployment of secure virtual cards for instant digital payments and e-commerce.",
    modalTitle: "Virtual Card Deployments",
    modalType: "FINTECH",
    descHtml: `<strong>The Problem:</strong><br>The economics of physical cards were breaking down. The bank needed to aggressively cut the operational costs associated with importing blank plastics, printing, and logistics. Simultaneously, our younger users didn't care about a piece of plastic in their wallet; they just wanted instant access to spend money online for subscriptions and e-commerce.<br><br><strong>Data & Research:</strong><br>Consumer behavior analysis showed a clear spike in digital-first spending, lmao. With the rise of platforms like Netflix, Spotify, and international e-commerce, the demand for immediate, borderless payment instruments was at an all-time high.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>We pivoted to bits over atoms. I conceptualized and deployed instant Virtual Cards directly within our mobile banking ecosystem. This required complex technical orchestration, so I worked closely with Mercator and Interswitch (Postillion) to handle the secure issuance integration, ensuring users could generate, freeze, or delete cards on demand.<br><br><strong>The Result:</strong><br>A total win-win. We slashed physical printing overheads drastically while providing instant gratification for our customers, which in turn led to a massive, immediate spike in digital transaction volumes.`,
  },
  {
    headline: "[ ONBOARDING ] Rapid Account Opening Solutions",
    summary:
      "Streamlined KYC and onboarding flows to enable frictionless, high-speed customer account generation.",
    modalTitle: "Rapid Account Opening (RAAP)",
    modalType: "ONBOARDING",
    descHtml: `<strong>The Problem:</strong><br>Customer acquisition was moving at a snail's pace, heavily bottlenecked by traditional, branch-dependent KYC (Know Your Customer) and onboarding processes. Hand-filling forms and manual BVN validation simply couldn't scale if we wanted to capture the unbanked population.<br><br><strong>Data & Research:</strong><br>Working closely with the Agency Banking Team, we identified a large untapped market of individuals who needed instant account access but lived miles away from the nearest physical branch. The data showed that if we could turn our sprawling agent network into mobile onboarding units, we could multiply our user base.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>Leveraging a crucial partnership secured by the Agency Banking Team, I architected and deployed our Rapid Account Opening Solutions (RAAP). This was an offline-capable, dynamic KYC tiering application that allowed field agents to securely open fully functional accounts in minutes using automated BVN checks and simplified data capture.<br><br><strong>The Result:</strong><br>We scaled our customer acquisition exponentially. The RAAP deployment directly facilitated the successful onboarding of over 4 million new users into the banking ecosystem without them ever stepping foot in a branch.`,
  },
  {
    headline: "[ FINTECH ] Digital Lending (Cash & Airtime)",
    summary:
      "Managed the risk algorithms, user flows, and deployment of instant micro-lending facilities for users.",
    modalTitle: "Digital Lending Integration",
    modalType: "FINTECH",
    descHtml: `<strong>The Problem:</strong><br>As a financial institution, we were still relying heavily on old, paperwork-laden methods for credit and lending. It was incredibly slow, tedious, and completely unsustainable in the digital age. Users needed emergency funds or airtime at 2 AM, and a loan officer wasn't awake to process it.<br><br><strong>Data & Research:</strong><br>Market analysis indicated a massive, underserved demand for instant micro-loans and credit facilities. The challenge wasn't finding borrowers; it was building an automated risk assessment and immediate disbursement mechanism that could protect the bank while serving the user instantly.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>We transitioned from subjective human underwriting to data-driven, instant micro-lending. I managed the implementation of both instant Cash Borrowing and Airtime Borrowing facilities. We partnered with Periculum to integrate advanced alternative Credit Scoring (analyzing transaction histories and behaviors), worked with Aleezah for the Airtime Lending infrastructure, and built the core user flows and orchestration entirely in-house.<br><br><strong>The Result:</strong><br>The product found immediate market fit. In just the first week of launch alone, we generated and disbursed ₦5 million. More importantly, our smart scoring kept our NPL (Non-Performing Loan) ratio well within healthy limits.`,
  },
  {
    headline: "[ API / B2B ] Open Banking Integration",
    summary:
      "Led initiatives to integrate core banking systems with external third-party APIs for extended financial service offerings.",
    modalTitle: "Open Banking API Integration",
    modalType: "API / B2B",
    descHtml: `<strong>The Problem:</strong><br>Our core banking services were heavily siloed. We had great infrastructure, but it was a walled garden. This limited our ability to seamlessly partner with agile external fintechs, stifling innovation and leaving us unable to rapidly expand our service offerings to B2B clients.<br><br><strong>Data & Research:</strong><br>Market trends globally, and specifically in Africa, clearly showed that API-led integration (Banking as a Service) was crucial for unlocking new B2B revenue streams. Companies didn't want to build banks; they just wanted to plug into ours.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>I championed and led the strategic initiative to architect and expose secure Open Banking APIs. This involved navigating strict security compliance, building OAuth2 authentication layers, and creating clean, RESTful documentation that allowed seamless integration with third-party aggregators, loan providers, and payment gateways.<br><br><strong>The Result:</strong><br>We successfully transformed the bank from a closed system into a platform. This created highly lucrative new, passive revenue streams and significantly expanded our digital footprint through high-value strategic fintech partnerships.`,
  },
  {
    headline: "[ INFRASTRUCTURE ] NIP / UP Switch Gateway",
    summary:
      "Managed the integration of national payment switches for reliable, high-volume outbound transactions.",
    modalTitle: "NIP / UP Switch Gateway",
    modalType: "INFRASTRUCTURE",
    descHtml: `<strong>The Problem:</strong><br>'Where is my money?' is the worst question a banking user can ask. As our user base grew, our outbound transaction volumes began growing faster than our existing infrastructure could reliably handle. This led to unacceptable transfer delays and failures, particularly during high-stress periods like month-end salary disbursements.<br><br><strong>Data & Research:</strong><br>Throughput analysis showed severe bottlenecks and latency issues at our legacy gateways when communicating with the central switch. We were hitting API rate limits and connection timeouts that were destroying customer trust.<br><br><strong>What We Did:</strong><br>We navigated complex corporate structures to align internal stakeholders and engaged external bodies, including CBN where required, to secure approvals before execution.<br><br>I managed the highly complex technical deployment and integration of a robust new NIP (NIBSS Instant Payment) / UP Switch Gateway. We didn't just swap pipes; we implemented smart, dynamic routing, auto-reversals for failed pings, and asynchronous processing to intelligently handle heavy load spikes without dropping requests.<br><br><strong>The Result:</strong><br>We dramatically reduced transfer failure rates across the board and ensured a stellar 99.9% uptime metric during peak transaction windows, virtually eliminating manual reconciliation tickets and restoring customer confidence.`,
  },
];

export const ENGINEERING_PROJECTS = [
  {
    badge: "[ WEB ]",
    title: "Otto Africa",
    summary:
      "The primary landing page and main corporate website for Otto Africa's services and offerings.",
    modalTitle: "Otto Africa",
    modalType: "WEB",
    stack: ["React", "Node.js", "Vercel"],
    descHtml:
      "A comprehensive corporate landing page for Otto Africa, showcasing the company's core services, mission, and footprint. Designed with a focus on brand identity and corporate communication. Built to be fully responsive and performant across all devices.",
    url: "https://www.ottoafrica.com/",
  },
  {
    badge: "[ WEB ]",
    title: "Otto Business Portal",
    summary:
      "The dedicated login and management portal tailored for Otto Africa's business partners and merchants.",
    modalTitle: "Otto Business Portal",
    modalType: "WEB",
    stack: ["React", "TypeScript", "AWS", "Vercel"],
    descHtml:
      "A robust B2B web portal designed specifically for Otto Africa's partners and merchants. It features secure authentication, dashboard analytics, and comprehensive management tools tailored for seamless daily business operations.",
    url: "https://business.ottoafrica.com/login",
  },
  {
    badge: "[ MOBILE ]",
    title: "Otto Customer App",
    summary:
      "The official Android mobile application for Otto customers, available directly on the Play Store.",
    modalTitle: "Otto Customer App",
    modalType: "MOBILE",
    stack: ["Flutter", "Firebase"],
    descHtml:
      "The official native Android application for Otto customers. Built for high performance and sustained user engagement, it enables customers to access services on-the-go. Currently live and available for download directly from the Google Play Store.",
    url:
      "https://play.google.com/store/apps/details?id=com.otto.customer&hl=en-US&ah=qBtmCghPlA-ReaA82sEIIFNPN78",
  },
  {
    badge: "[ WEB ]",
    title: "Reconciliation Frontend",
    summary:
      "A web-based dashboard application built for handling and viewing financial reconciliations.",
    modalTitle: "Reconciliation Frontend",
    modalType: "WEB",
    stack: ["React", "Node.js", "Railway", "Vercel"],
    descHtml:
      "A specialized financial dashboard created to streamline the reconciliation process. It efficiently handles complex data sets, providing clear, actionable views for financial teams to verify transactions and maintain ledger accuracy.",
    url: "https://reconciliation-frontend-nu.vercel.app/",
  },
  {
    badge: "[ WEB ]",
    title: "Central Landing Page",
    summary:
      "A centralized landing page architecture designed to direct traffic and highlight key features.",
    modalTitle: "Central Landing Page",
    modalType: "WEB",
    stack: ["React", "Vercel"],
    descHtml:
      "A strategic central hub architecture designed to effectively route incoming traffic to various sub-products and services. Built with conversion optimization, fast load times, and clear call-to-actions in mind.",
    url: "https://central-landing-page.vercel.app/",
  },
  {
    badge: "[ WEB ]",
    title: "Deevo Technologies",
    summary:
      "The official company website showcasing the tech solutions and services provided by Deevo Technologies.",
    modalTitle: "Deevo Technologies",
    modalType: "WEB",
    stack: ["React", "Next.js", "Vercel"],
    descHtml:
      "The digital storefront for Deevo Technologies. It highlights their broad range of technological solutions, showcases their portfolio of services, and provides a direct point of contact for potential enterprise clients.",
    url: "https://www.deevotechnologies.com/",
  },
  {
    badge: "[ WEB ]",
    title: "GenZ HR Client",
    summary:
      "A modern, intuitive human resources management portal frontend tailored for today's workforce.",
    modalTitle: "GenZ HR Client",
    modalType: "WEB",
    stack: ["React", "Node.js", "Firebase", "Vercel"],
    descHtml:
      "A forward-thinking human resources management portal tailored to the modern workforce. It simplifies employee profile management, seamless onboarding, and self-service HR tasks with an intuitive and highly accessible interface.",
    url: "https://genzhr-client.vercel.app/",
  },
  {
    badge: "[ WEB ]",
    title: "GenZ HR Admin",
    summary:
      "The administrative control panel and management dashboard for the GenZ HR ecosystem.",
    modalTitle: "GenZ HR Admin",
    modalType: "WEB",
    stack: ["React", "TypeScript", "Firebase", "Vercel"],
    descHtml:
      "The core administrative control panel for the GenZ HR ecosystem. It provides HR managers and system administrators with comprehensive, secure tools to oversee employee data, configure platform settings, and manage organizational structures.",
    url: "https://genzhr-admin.vercel.app/#/login",
  },
  {
    badge: "[ WEB ]",
    title: "Spark Deals",
    summary: "An interactive frontend application for a deals and e-commerce platform.",
    modalTitle: "Spark Deals",
    modalType: "WEB",
    stack: ["React", "Node.js", "Railway", "Vercel"],
    descHtml:
      "An interactive frontend application for a dynamic deals and e-commerce platform. Features include dynamic deal listings, promotional highlights, user-friendly navigation, and a streamlined, conversion-focused checkout flow.",
    url: "https://sparkdeals.vercel.app/",
  },
  {
    badge: "[ WEB ]",
    title: "Enterprise Web Portal",
    summary:
      "A secure portal interface designed for enterprise-level operations and business workflows.",
    modalTitle: "Enterprise Web Portal",
    modalType: "WEB",
    stack: ["React", "TypeScript", "AWS", "Vercel"],
    descHtml:
      "A secure web portal interface designed for enterprise-level operations. It features comprehensive authentication flows and a robust operational dashboard tailored for internal business workflows and data management.",
    url: "https://frontend-ruby-eight-ejlw32wg4a.vercel.app/login",
  },
];
