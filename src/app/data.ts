import Certification from "./Components/Certification";
import { Project } from "./Sections/ProjectsSection";

export const achievementsData = [
  {
    title: 'National Hackathon "RecurziveV2"',
    org: "Dayananda Sagar College of Engineering",
    link: undefined,
    date: "04/09/2025",
    note: "Ranked in top 5 nationally",
    clr: "white",
    logoUrl: "/DSILogo.png",
  },
  {
    title: "Codeforces\nRating",
    org: "Codeforces",
    link: "https://codeforces.com/profile/yash_raj17",
    date: "Current",
    note: "Rating: 1078",
    clr: "white",
    logoUrl: "/CodeforcesLogo.png",
  },
  {
    title: "CodeChef\nRating",
    org: "CodeChef",
    link: "https://www.codechef.com/users/yashraj170803",
    date: "Current",
    note: "2-star coder",
    clr: "white",
    logoUrl: "/CodeChefLogo.png",
  },
  {
    title: "Mentored\n800+ Students",
    org: "EdTech & NeuralMinds",
    link: undefined,
    date: "Ongoing",
    note: "Mentored across JEE, aptitude & data science",
    clr: "white",
    logoUrl: "/NeuralMindsLogo.jpg",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "Generative AI using LangChain & LangGraph",
    organization: "Krish Naik",
    link: "#",
    date: "18/09/2025",
    notes: "Hands-on LLM development",
  },
  {
    id: "2",
    title: "Complete Data Science Course (ML, DL, NLP)",
    organization: "Krish Naik",
    link: "#",
    date: "24/05/2025",
    notes: "ML, DL, NLP training",
  },
  {
    id: "3",
    title: "J.P. Morgan – Quantitative Research Virtual Experience Program",
    organization: "JPMorgan Chase & Co. (Forage)",
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6902104abced24967b6aafd4_1762002287934_completion_certificate.pdf",
    date: "2025",
    notes:
      "Practical tasks: price estimation, storage pricing model, credit risk prediction, FICO score quantization",
  },
];

export const socials = [
  {
    platformName: "GitHub",
    platformIcon: "/GithubLogo.png",
    handle: "yashraj-shri17",
    link: "https://github.com/yashraj-shri17",
    notes: "Projects & source code",
  },
  {
    platformName: "LinkedIn",
    platformIcon: "/LinkedinLogo.png",
    handle: "yashrajshrivastava17",
    link: "https://www.linkedin.com/in/yashrajshrivastava17/",
    notes: "Portfolio & networking",
  },
  {
    platformName: "YouTube",
    platformIcon: "/YTLogo.png",
    handle: "neuralminds-c6y",
    link: "https://www.youtube.com/@NeuralMinds3",
    notes: "AI/ML education",
  },
  {
    platformName: "Instagram",
    platformIcon: "/IGLogo.png",
    handle: "neuralminds",
    link: "https://www.instagram.com/_neuralminds_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    notes: "Short AI/ML content",
  },
  {
    platformName: "Email",
    platformIcon: "/EmailLogo.png",
    handle: "yashraj170803@gmail.com",
    link: "mailto:yashraj170803@gmail.com",
    notes: "For collaborations & inquiries",
  },
  {
    platformName: "Codeforces",
    platformIcon: "/CodeforcesLogo.png",
    handle: "yash_raj17",
    link: "https://codeforces.com/profile/yash_raj17",
    notes: "1078 rating",
  },
  {
    platformName: "CodeChef",
    platformIcon: "/CodeChefLogo.png",
    handle: "yashraj170803",
    link: "https://www.codechef.com/users/yashraj170803",
    notes: "2★ Coder",
  },
  {
    platformName: "LeetCode",
    platformIcon: "/LeetcodeLogo.png",
    handle: "yashraj1708",
    link: "https://leetcode.com/u/yashraj1708/",
    notes: "1500+ rating",
  },
];

export const titles = [
  "AI\nEnthusiast",
  "Educator\n",
  "Founder\n",
  "YouTuber\n",
  "Freelancer\n",
];

export const skillsData = [
  {
    id: 1,
    title: "Generative AI & LLMs",
    keywords: [
      "LangChain",
      "LangGraph",
      "Ollama",
      "OpenAI",
      "HuggingFace",
      "Groq",
      "NVIDIA NeMo",
      "Crew AI",
      "RAG",
      "LLM Fine-tuning",
    ],
    description:
      "Experienced in chatbot development, RAG workflows, AI agents, prompt engineering, and fine-tuning LLMs for domain-specific applications.",
    imageUrl: "/GenAI.png",
  },
  {
    id: 2,
    title: "AI-ML",
    keywords: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "TensorFlow",
      "NLP",
      "Deep Learning",
    ],
    description:
      "Experienced in Python for data analysis, machine learning, deep learning, and NLP. Skilled in building ML pipelines, model experimentation, and applied AI research.",
    imageUrl: "/AiMlSkill.png",
  },
  {
    id: 3,
    title: "Visualization & BI Tools",
    keywords: ["Power BI", "Tableau"],
    description:
      "Able to build analytics dashboards and visualize insights for decision-making and evaluation.",
    imageUrl: "/Analytics.png",
  },
  {
    id: 4,
    title: "Development, Web & Version Control",
    keywords: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "Streamlit",
      "Gradio",
      "FastAPI",
      "Git",
      "GitHub",
    ],
    description:
      "Proficient in creating interactive dashboards, ML-driven web apps, and APIs. Strong version-control practices using Git/GitHub.",
    imageUrl: "/Development.png",
  },
  {
    id: 5,
    title: "Competitive Programming",
    keywords: ["Codeforces", "CodeChef", "LeetCode"],
    description:
      "Regular problem-solver focusing on algorithms and data structures.",
    imageUrl: "/CP.png",
  },
];

export const generativeAIProjects: Project[] = [
  {
    name: "AstroBot",
    subheading: "AI Chatbot for Space & Weather Data",
    tech: "LangChain, RAG, LLaMA-3.1, FAISS, Flask, Web Crawling",
    description:
      "Built a domain-specific chatbot for ISRO's MOSDAC data with natural-language querying for satellites, missions, and weather. Integrated 1000+ documents into an LLaMA-3.1 RAG pipeline. Added speech-to-text, conversational memory, and PDF export.",
    github: "https://github.com/Vijay6923/AstroBot",
    imgUrl: "/AstroBot.png",
  },
  {
    name: "TruthTell",
    subheading: "Real-time Fake News Detector",
    tech: "Flask, PassiveAggressiveClassifier, NLP, Deep Learning",
    description:
      "Real-time misinformation detection with 87.6% F1-score. Reduced inference latency by 65% and deployed a scalable Flask app.",
    github: "https://github.com/arynch24/MediVerus",
    imgUrl: "/TruthTell.png",
  },
  {
    name: "Video Person Tracker",
    subheading: "Multi-person Real-time Face Recognition",
    tech: "YOLOv8, DeepFace, OpenCV",
    description:
      "Multi-person real-time face recognition with 92% accuracy. Improved analytics by 40% and reduced false positives by 35%.",
    github: "https://github.com/infy-dinkar/Face-Recognition",
    imgUrl: "/VideoPersonTracker.png",
  },
  {
    name: "AI Personal Assistants / Agents",
    subheading: "Micro AI Agents for Task Automation",
    tech: "Python, Flask, LangChain, APIs",
    description:
      "Built micro AI agents assisting with tasks like scheduling, reminders, and information retrieval.",
    github: "https://github.com/yashraj-shri17/Text-Summarization",
    imgUrl: "/AiAgents.png",
  },
];

export const machineLearningProjects: Project[] = [
  {
    name: "SmartJobMatcher",
    subheading: "AI Job Role Finder",
    tech: "Python, Flask, Logistic Regression, TF-IDF",
    description:
      "Predicts suitable job roles from resumes and skills. Supports filters for internships, full-time roles, and remote jobs.",
    github: "https://github.com/yashraj-shri17/resume_analyser",
    imgUrl: "/SmartJobMatcher.png",
  },
  {
    name: "Momenta",
    subheading: "Audio Deepfake Detection",
    tech: "Deep Learning, Audio Processing, Flask",
    description:
      "Detects real vs. fake audio with 90% accuracy, optimized for artifact-level detection using ASVspoof 5 dataset.",
    github:
      "https://github.com/yashraj-shri17/Momenta-Audio-Deepfake-Detection",
    imgUrl: "/Momenta.png",
  },
];
