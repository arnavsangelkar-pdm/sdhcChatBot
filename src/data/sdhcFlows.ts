export type FlowTurn = {
  id: string;
  userQuestion: string;
  userQuestionVariants?: string[];
  botAnswer: string;
  relatedLinks?: { label: string; url: string }[];
};

export type Flow = {
  id: string;
  title: string;
  description: string;
  topicTags: string[];
  tone?: "formal" | "conversational" | "supportive";
  turns: FlowTurn[];
};

export const SDHC_FLOWS: Flow[] = [
  {
    id: "flow-rent-assistance",
    title: "Rent Assistance Basics",
    description: "Learn about rental assistance programs and eligibility",
    topicTags: ["rent", "assistance", "vouchers", "eligibility"],
    turns: [
      {
        id: "turn-1",
        userQuestion: "How can SDHC help me with my rent?",
        botAnswer: "SDHC offers several rental assistance programs for low-income households in the City of San Diego. These programs include housing vouchers, rental subsidies, and emergency rental assistance. These programs help eligible families afford safe and stable housing by providing financial support to cover a portion of their monthly rent.",
        relatedLinks: [
          { label: "Help With Your Rent", url: "https://sdhc.org/rental-assistance" },
          { label: "Rental Assistance Programs", url: "https://sdhc.org/programs/rental-assistance" }
        ]
      },
      {
        id: "turn-2",
        userQuestion: "Am I eligible for rental assistance?",
        botAnswer: "Eligibility for rental assistance depends on several factors including your household income (which must be below certain limits based on family size), your current housing situation, and whether you meet other program-specific criteria. Income limits are typically set as a percentage of the Area Median Income (AMI) for San Diego County. I recommend checking the specific eligibility requirements for the program you're interested in.",
        relatedLinks: [
          { label: "Eligibility Information", url: "https://sdhc.org/eligibility" },
          { label: "Application Instructions", url: "https://sdhc.org/apply" }
        ]
      },
      {
        id: "turn-3",
        userQuestion: "How do I apply?",
        botAnswer: "Applications for rental assistance programs are typically handled online through the SDHC portal when applications are open. You'll need to create an account, complete the application form, and provide required documentation such as proof of income, identification, and household composition. Some programs may have waitlists, so it's important to apply as soon as applications open.",
        relatedLinks: [
          { label: "Apply Online", url: "https://sdhc.org/apply" },
          { label: "Application Portal", url: "https://sdhc.org/portal" }
        ]
      }
    ]
  },
  {
    id: "flow-affordable-rentals",
    title: "Affordable Rentals & SDHC-Owned Housing",
    description: "Find affordable rental housing and learn about availability",
    topicTags: ["affordable", "rentals", "housing", "listings", "waitlist"],
    turns: [
      {
        id: "turn-1",
        userQuestion: "Where can I find affordable rental housing?",
        botAnswer: "SDHC maintains listings of affordable rental housing units throughout the City of San Diego. These include SDHC-owned properties as well as privately-owned units that participate in affordable housing programs. You can search available units by location, size, and rent amount on the SDHC website.",
        relatedLinks: [
          { label: "Affordable Rentals", url: "https://sdhc.org/affordable-rentals" },
          { label: "Search Listings", url: "https://sdhc.org/listings" }
        ]
      },
      {
        id: "turn-2",
        userQuestion: "Do you have a waitlist?",
        botAnswer: "Yes, many affordable rental properties and programs have waitlists due to high demand. Waitlist length varies by property and program. Some properties may have immediate availability, while others may have waitlists that are several months or years long. You can check the current status of waitlists and availability on the SDHC website.",
        relatedLinks: [
          { label: "Waitlist Information", url: "https://sdhc.org/waitlists" },
          { label: "Current Availability", url: "https://sdhc.org/availability" }
        ]
      },
      {
        id: "turn-3",
        userQuestion: "Can I see current listings online?",
        botAnswer: "Yes! You can view current affordable rental listings online through the SDHC website. The listings include property details, rent amounts, unit sizes, amenities, and contact information. You can filter listings by neighborhood, price range, and number of bedrooms to find options that meet your needs.",
        relatedLinks: [
          { label: "View Listings", url: "https://sdhc.org/listings" },
          { label: "Property Portal", url: "https://sdhc.org/properties" }
        ]
      }
    ]
  },
  {
    id: "flow-landlord-resources",
    title: "Landlord Resources",
    description: "Information for landlords interested in working with SDHC",
    topicTags: ["landlord", "property", "owner", "participation"],
    turns: [
      {
        id: "turn-1",
        userQuestion: "I'm a landlord. How can I work with SDHC?",
        botAnswer: "Landlords can participate in SDHC's rental assistance programs by accepting housing vouchers and participating in affordable housing initiatives. This allows you to rent to qualified tenants while receiving guaranteed rent payments. SDHC provides support and resources to help landlords navigate the process.",
        relatedLinks: [
          { label: "Landlord Portal", url: "https://sdhc.org/landlords" },
          { label: "Program Participation", url: "https://sdhc.org/landlord-programs" }
        ]
      },
      {
        id: "turn-2",
        userQuestion: "What are the benefits of participating?",
        botAnswer: "Participating landlords benefit from guaranteed rent payments (the portion covered by the voucher), reduced vacancy rates, access to pre-screened tenants, and ongoing support from SDHC staff. The program helps ensure consistent rental income while providing housing opportunities to low-income families.",
        relatedLinks: [
          { label: "Landlord Benefits", url: "https://sdhc.org/landlord-benefits" },
          { label: "Program Details", url: "https://sdhc.org/landlord-programs" }
        ]
      },
      {
        id: "turn-3",
        userQuestion: "Where do I sign up?",
        botAnswer: "You can sign up through the SDHC Landlord Portal, where you can register your property, complete required paperwork, and access resources. You can also contact the Landlord Services team directly for assistance with enrollment and to learn more about the participation process.",
        relatedLinks: [
          { label: "Landlord Portal", url: "https://sdhc.org/landlord-portal" },
          { label: "Contact Landlord Services", url: "https://sdhc.org/contact-landlords" }
        ]
      }
    ]
  },
  {
    id: "flow-homelessness",
    title: "Homelessness Programs",
    description: "Services and programs for people experiencing homelessness",
    topicTags: ["homelessness", "shelter", "housing", "services"],
    turns: [
      {
        id: "turn-1",
        userQuestion: "What programs do you have for people experiencing homelessness?",
        botAnswer: "SDHC offers comprehensive services for individuals and families experiencing homelessness, including emergency shelter, rapid rehousing programs, permanent supportive housing, and case management services. These programs are designed to help people quickly move from homelessness into stable housing with ongoing support.",
        relatedLinks: [
          { label: "Homelessness Services", url: "https://sdhc.org/homelessness-services" },
          { label: "Emergency Shelter", url: "https://sdhc.org/shelter" }
        ]
      },
      {
        id: "turn-2",
        userQuestion: "How do I access emergency shelter?",
        botAnswer: "Emergency shelter access is typically coordinated through SDHC's coordinated entry system or by contacting the Homelessness Services team directly. Priority is given to those most in need, and case managers work with individuals to assess their situation and connect them with appropriate shelter and housing resources.",
        relatedLinks: [
          { label: "Access Shelter", url: "https://sdhc.org/access-shelter" },
          { label: "Coordinated Entry", url: "https://sdhc.org/coordinated-entry" }
        ]
      },
      {
        id: "turn-3",
        userQuestion: "What is rapid rehousing?",
        botAnswer: "Rapid rehousing is a program that helps individuals and families quickly exit homelessness and return to permanent housing. The program provides short-term rental assistance, case management, and support services to help people stabilize in housing. The goal is to help people become self-sufficient and maintain housing long-term.",
        relatedLinks: [
          { label: "Rapid Rehousing Program", url: "https://sdhc.org/rapid-rehousing" },
          { label: "Program Details", url: "https://sdhc.org/rapid-rehousing-details" }
        ]
      }
    ]
  },
  {
    id: "flow-homebuyers",
    title: "First-Time Homebuyers",
    description: "Programs and assistance for first-time homebuyers",
    topicTags: ["homebuyer", "home", "purchase", "down payment", "mortgage"],
    turns: [
      {
        id: "turn-1",
        userQuestion: "Do you help first-time homebuyers?",
        botAnswer: "Yes! SDHC offers several programs to assist first-time homebuyers, including down payment assistance, homebuyer education classes, and mortgage assistance programs. These programs are designed to help eligible families overcome common barriers to homeownership, such as saving for a down payment and understanding the homebuying process.",
        relatedLinks: [
          { label: "Homebuyer Programs", url: "https://sdhc.org/homebuyer-programs" },
          { label: "Down Payment Assistance", url: "https://sdhc.org/down-payment-assistance" }
        ]
      },
      {
        id: "turn-2",
        userQuestion: "What is down payment assistance?",
        botAnswer: "Down payment assistance provides eligible first-time homebuyers with financial help to cover a portion of their down payment and closing costs. This assistance can come in the form of grants or low-interest loans, making it easier for families to purchase their first home. The amount of assistance varies based on income, household size, and other factors.",
        relatedLinks: [
          { label: "Down Payment Assistance Details", url: "https://sdhc.org/down-payment-assistance" },
          { label: "Eligibility Requirements", url: "https://sdhc.org/homebuyer-eligibility" }
        ]
      },
      {
        id: "turn-3",
        userQuestion: "Do I need to take classes?",
        botAnswer: "Yes, most SDHC homebuyer programs require completion of homebuyer education classes. These classes cover important topics like budgeting, credit management, the homebuying process, and home maintenance. The education helps ensure you're prepared for the responsibilities of homeownership and can help you qualify for certain assistance programs.",
        relatedLinks: [
          { label: "Homebuyer Education", url: "https://sdhc.org/homebuyer-education" },
          { label: "Class Schedule", url: "https://sdhc.org/education-schedule" }
        ]
      }
    ]
  },
  {
    id: "eviction-notice-help",
    title: "Eviction Notice – Step-by-Step Guidance",
    description:
      "A gentle, step-by-step conversation for someone who just received or is worried about an eviction notice in the City of San Diego.",
    topicTags: ["eviction", "tenant protections", "help with rent"],
    tone: "supportive",
    turns: [
      {
        id: "eviction-1",
        userQuestion: "I just got an eviction notice. What do I do?",
        userQuestionVariants: [
          "i just got an eviction notice what do i do",
          "i got a eviction notice",
          "i got an eviciton notice",
          "i got an evction notice",
          "help eviction notice",
          "my landlord is evicting me",
          "my landord is evicting me",
          "got eviction notice help",
          "eviction notice what now",
        ],
        botAnswer: "I'm really glad you reached out. Getting an eviction notice can feel scary, but you don't have to go through it alone. First, try to stay calm and read the notice carefully—look for the reason listed and any deadlines. In the City of San Diego, there are local tenant protections that may apply to you, depending on the reason your landlord is trying to end your tenancy.\n\nThe San Diego Housing Commission (SDHC) worked with the City to provide a Tenant Protection Guide that explains the City's Residential Tenant Protections Ordinance and gives educational information about tenants' rights and resources. This guide is for general information only.\n\nI'm not a lawyer, but I can point you toward information and local resources that may help you understand your options, starting with SDHC's Tenant Protections information page.",
        relatedLinks: [
          {
            label: "Tenant Protections – SDHC",
            url: "https://sdhc.org/housing-opportunities/tenant-protections/",
          },
        ],
      },
      {
        id: "eviction-2",
        userQuestion: "Is my landlord allowed to evict me for this?",
        userQuestionVariants: [
          "can my landlord evict me for this",
          "is my landlord allowed to evict me",
          "is this legal eviction",
          "is this a legal eviciton",
          "is this legal evction",
          "can they really kick me out",
          "can landlord do this",
          "is eviction legal",
        ],
        botAnswer:
          "Whether your landlord is allowed to evict you depends on the reason listed in the notice and the laws that apply where you live. In many cases, landlords must have a legally valid reason—such as nonpayment of rent, certain serious lease violations, or a qualifying no-fault reason like the owner moving into the unit.\n\nThe City of San Diego has a Residential Tenant Protections Ordinance, in addition to state law. The City's Tenant Protection Guide, which SDHC was required to prepare, explains when 'just cause' is required, what notices must include, and what protections may apply if you receive a termination notice. It is meant to be educational, not legal advice.\n\nIt's important to check the reason stated on your notice, note any dates and deadlines, and keep copies of everything you receive. For legal advice about whether your landlord is allowed to evict you in your situation, it's best to talk with a local legal aid or tenant rights organization.",
        relatedLinks: [
          {
            label: "Tenant Protections – SDHC",
            url: "https://sdhc.org/housing-opportunities/tenant-protections/",
          },
        ],
      },
      {
        id: "eviction-3",
        userQuestion: "What if I'm behind on rent?",
        userQuestionVariants: [
          "im behind on rent",
          "i am behind on rent",
          "i owe back rent",
          "im late on rent",
          "i cant pay my rent",
          "cant pay rent",
          "behind on rent and eviction",
          "rent is late what do i do",
        ],
        botAnswer:
          "If you're behind on rent, that's one of the most common reasons landlords start the eviction process. It can feel overwhelming, but there may still be options.\n\n• Talk to your landlord early if you haven't already. Sometimes you can discuss a payment plan or short-term arrangement.\n• Look into rental assistance programs that may help with back rent if you qualify.\n• Get information about your rights as a tenant before you agree to anything in writing.\n\nThe San Diego Housing Commission administers federal Section 8 Housing Choice Voucher rental assistance in the City of San Diego, and its 'Help With Your Rent' page provides information about rental assistance and how to apply when wait lists are open.",
        relatedLinks: [
          {
            label: "Help With Your Rent – SDHC",
            url: "https://sdhc.org/housing-opportunities/help-with-your-rent/",
          },
          {
            label: "Section 8 Wait List Portal",
            url: "https://sdhc.org/housing-opportunities/help-with-your-rent/wait-list-portal/",
          },
        ],
      },
      {
        id: "eviction-4",
        userQuestion: "How much time do I have before I have to move out?",
        userQuestionVariants: [
          "how long do i have before i have to move",
          "how much time before i get kicked out",
          "do i have to move out right away",
          "when do i have to leave",
          "how long until eviction",
          "time before move out",
          "when move out",
        ],
        botAnswer:
          "The amount of time you have usually depends on the type of notice you received and the laws that apply. Some notices give you a certain number of days to pay what you owe or fix a problem. Others tell you to move out by a specific date. Court documents have their own deadlines and requirements.\n\nIt's important to look closely at the dates on your notice, keep track of any deadlines, and avoid ignoring anything you receive from a court—there are often strict timelines to respond.\n\nThe City of San Diego's Tenant Protection Guide, prepared by SDHC, describes different types of termination notices and provides general information about protections for residential tenants. For exact timelines and legal options in your situation, a local legal aid or tenant rights organization is the best place to get personalized advice.",
        relatedLinks: [
          {
            label: "Tenant Protections – SDHC",
            url: "https://sdhc.org/housing-opportunities/tenant-protections/",
          },
        ],
      },
      {
        id: "eviction-5",
        userQuestion: "Can SDHC stop my eviction?",
        userQuestionVariants: [
          "can sdhc stop my eviction",
          "can you stop my eviction",
          "will sdhc stop my landlord",
          "can you make them not evict me",
          "sdhc help stop eviction",
        ],
        botAnswer:
          "SDHC cannot step into your specific court case or directly stop an eviction for you, and it does not act as your attorney. However, SDHC shares information about tenant protections, rental assistance programs, and homelessness solutions that may be helpful as you explore your options.\n\nIf you're facing an eviction, it can be very important to:\n\n• Talk with a legal aid or tenant rights organization as soon as possible.\n• Ask about any emergency rental assistance or mediation programs that may be available.\n• Collect and organize all of your paperwork so you can clearly explain your situation.\n\nSDHC's website can help you learn more about local programs and services that might be relevant.",
        relatedLinks: [
          {
            label: "Tenant Protections – SDHC",
            url: "https://sdhc.org/housing-opportunities/tenant-protections/",
          },
          {
            label: "Help With Your Rent – SDHC",
            url: "https://sdhc.org/housing-opportunities/help-with-your-rent/",
          },
          {
            label: "Homelessness Solutions – SDHC",
            url: "https://sdhc.org/homelessness-solutions/",
          },
        ],
      },
      {
        id: "eviction-6",
        userQuestion: "What if I have nowhere to go?",
        userQuestionVariants: [
          "i have nowhere to go",
          "i dont have anywhere to go",
          "where do i go if im evicted",
          "what if im homeless after eviction",
          "nowhere to go help",
          "homeless after eviction",
        ],
        botAnswer:
          "I'm really sorry you're going through this. Worrying about where you'll go is incredibly stressful. If you think you may have nowhere to stay, it's important to reach out for help as early as you can.\n\nThe San Diego Housing Commission is a key partner in addressing homelessness in the City of San Diego and works to increase housing opportunities that serve people who are at risk of or already experiencing homelessness. SDHC's Homelessness Solutions pages describe programs and initiatives, including HOUSING FIRST – SAN DIEGO, that focus on connecting individuals and families to housing with supportive services.\n\nThese programs can't promise a specific outcome, but they may help connect you with available resources, depending on eligibility and availability.",
        relatedLinks: [
          {
            label: "Homelessness Solutions – SDHC",
            url: "https://sdhc.org/homelessness-solutions/",
          },
          {
            label: "HOUSING FIRST – SAN DIEGO",
            url: "https://sdhc.org/homelessness-solutions/housing-first-san-diego/",
          },
        ],
      },
      {
        id: "eviction-7",
        userQuestion: "Who can I talk to for legal help?",
        userQuestionVariants: [
          "who can i talk to for legal help",
          "how do i get legal help",
          "do i need a lawyer",
          "need legal aid eviction",
          "who can help me with my eviction",
          "legal help eviction",
        ],
        botAnswer:
          "For legal advice about an eviction notice, the best option is usually a local legal aid or tenant rights organization. They can help you understand whether the notice you received follows local and state law, what your options may be if you want to challenge the eviction, and what deadlines you need to meet if you receive court documents.\n\nThe City of San Diego's Tenant Protection Guide, prepared by SDHC, is meant to provide educational information about tenant protections and point to resources, but it is not legal advice. SDHC shares information about tenant protections and community resources, but it does not provide legal representation.\n\nReaching out to a legal aid organization as early as possible can make a big difference.",
        relatedLinks: [
          {
            label: "Tenant Protections – SDHC",
            url: "https://sdhc.org/housing-opportunities/tenant-protections/",
          },
        ],
      },
      {
        id: "eviction-8",
        userQuestion: "How do I contact SDHC about this?",
        userQuestionVariants: [
          "how do i contact sdhc",
          "how can i contact sdhc about eviction",
          "how can i reach sdhc",
          "who do i call at sdhc",
          "contact sdhc",
          "sdhc phone number",
        ],
        botAnswer:
          "You can contact the San Diego Housing Commission using the information on its Contact Us page. SDHC serves customers by phone, email, mail, virtually, and in person. The page includes a general phone number and links to department contact information.\n\nWhen you reach out, it can help to have your paperwork ready—like your eviction notice and any letters you've received—so you can quickly share the basics of your situation.",
        relatedLinks: [
          {
            label: "Contact SDHC",
            url: "https://sdhc.org/about-us/contact-us/",
          },
        ],
      },
    ],
  },
];

