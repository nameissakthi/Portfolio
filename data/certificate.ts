export interface Certificate {
  /** Name of the certificate. Shown on the card and in the popup. */
  title: string;

  /** Who issued it. Optional. */
  issuer?: string;

  /** Shown as written, e.g. "July 2024". */
  date: string;

  /** URL of the issuer's logo. If empty or broken, the card shows letters from the issuer name. */
  logo?: string;

  /**
   * Pictures of the certificate, saved in /public, e.g. ["/certificates/a.png", "/certificates/b.png"].
   * One image shows normally, two or more become a carousel in the popup.
   */
  images?: string[];

  /** Credential number. Shown in the popup with a copy button. */
  credentialId?: string;

  /** Link to view or verify the credential online. Shown as a button in the popup. */
  credentialUrl?: string;

  /** Skills this certificate covers. Shown in the popup. */
  skills?: string[];
}

/* Every field except title and date is optional. Whatever you include is what gets shown. */
export const certificates: Certificate[] = [
  {
    title: "Advanced Diploma in Computer Software Programming",
    date: "October 2022",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQG2ZdjCGPslgQ/company-logo_400_400/company-logo_400_400/0/1630667032319/alphawebacademy_logo?e=1793232000&v=beta&t=OQ11OruGfzf2O3KParryMBtH_8zcDq9ca3wIM0Qks8M",
    images: ["/certificates/certificate1.png"],
    credentialId: "27AD400053",
    skills: [
      "DOS Commands",
      "SQL",
      "MS Office",
      "Programming Languages",
      "C (Programming Language)",
      "C++",
      "Python",
      "Java"
    ],
  },

  {
    title: "Database Administrator",
    issuer: "PMKVY & Skill India",
    date: "August 2024",
    logo : "https://www.nsdcindia.org/assets/svgs/skill-india-logo.svg",  
    images: ["/certificates/certificate2/1.jpeg", "/certificates/certificate2/2.jpeg"],
    credentialId: "ADTNA0021QG-05-IT-00492-2023-V1.1-NASSCOM-043940",
    skills: ["MySQL", "SQL", "Database Administration"],
  },

  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    date: "July 2024",
    logo : "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
    images: ["/certificates/certificate3.png"],
    credentialUrl: "https://www.linkedin.com/learning/certificates/cbbc5d409aa7fa8747cb0570547acba38ae5a2c5986e8f962232aa48b2678352/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BBk0QXRUnQe2idK%2BGG3o4iA%3D%3D",
    skills: ["Software Development", "Programming"],
  },

  {
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner",
    date: "July 2024",
    logo : "https://media.licdn.com/dms/image/v2/D560BAQEhb_j1_sDRJQ/company-logo_400_400/company-logo_400_400/0/1720817595519/theforage_logo?e=1793232000&v=beta&t=fcgaBdG1o9O6IhlAc8Op8Cp9BcAgwkqT7gSTFRzB9cU",
    images: ["/certificates/certificate4.png"],
    credentialId: "q7A6CyaZr6GmcCiu7",
    skills: ["React.JS", "JavaScript", "Backpack", "CSS"],
  },

  {
    title: "Introduction to MongoDB (For Students)",
    issuer: "MongoDB",
    date: "July 2024",
    logo : "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress",
    credentialId: "MDBu4lyoiqks6",
    skills: ["MongoDB", "NoSQL"],
  },

  {
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "July 2024",
    logo : "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_400_400/company-logo_400_400/0/1688684715866/ibm_logo?e=1793232000&v=beta&t=jJSjBu2tGbKPlQgySoDHtFCql-GGdVMTyOVhu8iDG_M",
    credentialId: "92213fac-f283-4136-b485-f5337bf0420b",
    credentialUrl : "https://www.credly.com/badges/92213fac-f283-4136-b485-f5337bf0420b/",
    skills: [
      "Frontend Development",
      "Backend Development",
      "CSS",
      "DevOps",
      "JavaScript",
      "Testing"
    ],
  },
];