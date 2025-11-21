export type QAItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  relatedLinks?: { label: string; url: string }[];
};

export const SDHC_FAQ: QAItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I contact SDHC?",
    answer: "You can contact the San Diego Housing Commission through their main phone line, email, or by visiting their office. For specific program inquiries, visit the Contact Us section on their website.",
    relatedLinks: [
      { label: "Contact Information", url: "https://sdhc.org/contact" }
    ]
  },
  {
    id: "faq-2",
    category: "General",
    question: "What is SDHC?",
    answer: "The San Diego Housing Commission (SDHC) is a public agency that provides affordable housing solutions, rental assistance, and housing-related services to low-income households in the City of San Diego.",
    relatedLinks: [
      { label: "About SDHC", url: "https://sdhc.org/about" }
    ]
  },
  {
    id: "faq-3",
    category: "Tenant",
    question: "What are tenant protections?",
    answer: "SDHC provides information and resources about tenant rights and protections, including eviction prevention, fair housing, and rental assistance programs to help tenants maintain stable housing.",
    relatedLinks: [
      { label: "Tenant Resources", url: "https://sdhc.org/tenant-resources" }
    ]
  },
  {
    id: "faq-4",
    category: "Housing",
    question: "How do I find affordable housing?",
    answer: "SDHC offers affordable rental housing listings through their website. You can search for available units, check waitlist status, and learn about eligibility requirements for various affordable housing programs.",
    relatedLinks: [
      { label: "Affordable Rentals", url: "https://sdhc.org/affordable-rentals" }
    ]
  },
  {
    id: "faq-5",
    category: "Homebuying",
    question: "Do you offer homebuyer assistance?",
    answer: "Yes, SDHC provides first-time homebuyer programs including down payment assistance, homebuyer education, and mortgage assistance to help eligible families purchase their first home.",
    relatedLinks: [
      { label: "Homebuyer Programs", url: "https://sdhc.org/homebuyer-programs" }
    ]
  },
  {
    id: "faq-6",
    category: "Homelessness",
    question: "What services do you provide for people experiencing homelessness?",
    answer: "SDHC offers various programs to address homelessness, including emergency shelter, rapid rehousing, permanent supportive housing, and case management services to help individuals and families find and maintain stable housing.",
    relatedLinks: [
      { label: "Homelessness Services", url: "https://sdhc.org/homelessness-services" }
    ]
  },
  {
    id: "faq-7",
    category: "General",
    question: "What programs does SDHC offer?",
    answer: "SDHC offers a wide range of programs including rental assistance and housing vouchers, affordable rental housing, first-time homebuyer assistance, homelessness prevention and rapid rehousing, landlord partnership programs, and tenant protection services.",
    relatedLinks: [
      { label: "All Programs", url: "https://sdhc.org/programs" }
    ]
  },
  {
    id: "faq-8",
    category: "Rental",
    question: "How do I apply for housing assistance?",
    answer: "Applications for housing assistance are typically submitted online through the SDHC portal when applications are open. You'll need to provide documentation such as proof of income, identification, and household information. Some programs may have waitlists.",
    relatedLinks: [
      { label: "Apply Online", url: "https://sdhc.org/apply" },
      { label: "Application Portal", url: "https://sdhc.org/portal" }
    ]
  },
  {
    id: "faq-9",
    category: "Rental",
    question: "What are the income requirements?",
    answer: "Income requirements vary by program and are typically based on the Area Median Income (AMI) for San Diego County. Most programs serve households earning 30% to 80% of AMI. Specific income limits depend on household size and the program you're applying for.",
    relatedLinks: [
      { label: "Income Limits", url: "https://sdhc.org/income-limits" },
      { label: "Eligibility", url: "https://sdhc.org/eligibility" }
    ]
  },
  {
    id: "faq-10",
    category: "General",
    question: "Where is SDHC located?",
    answer: "SDHC's main office is located in San Diego, California. You can visit their office, contact them by phone or email, or access services online through their website and portal.",
    relatedLinks: [
      { label: "Contact Information", url: "https://sdhc.org/contact" },
      { label: "Office Location", url: "https://sdhc.org/location" }
    ]
  }
];

