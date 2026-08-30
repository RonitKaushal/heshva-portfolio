export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  role: string;
  timeline: string;
  image: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const experiencesData: ProjectItem[] = [
  {
    id: "isro",
    name: "SAC-ISRO",
    category: "Space Applications Centre, ISRO",
    role: "Research Intern",
    timeline: "June 2026 - Present",
    image: "/images/isro_geodata.jpg",
    description:
      "Conducting research in AI/ML algorithms and Time Series Analysis for Geodata and satellite observation datasets at the Space Applications Centre, ISRO. Developing high-precision deep learning pipelines to extract features and monitor temporal earth observation trends.",
    highlights: [
      "Time Series Analysis on satellite observation datasets",
      "Developing Machine Learning pipelines in Python",
      "Geospatial data extraction and deep feature representation",
      "Collaborating with senior scientists on spatial data intelligence",
    ],
    tags: ["Python", "Machine Learning", "Time Series", "Geodata", "ISRO"],
  },
  {
    id: "infolabz",
    name: "InfoLabz",
    category: "Python & Machine Learning",
    role: "Intern",
    timeline: "July 2023 - August 2023",
    image: "/images/musea.jpg",
    description:
      "Specialized in Python data processing pipelines, predictive modeling, and applied Machine Learning architectures for enterprise data analysis and statistical processing.",
    highlights: [
      "Built predictive machine learning models in Python",
      "Implemented automated data cleaning and transformation workflows",
      "Applied statistical analysis on production datasets",
    ],
    tags: ["Python", "Scikit-Learn", "Data Analysis", "Pandas", "NumPy"],
  },
  {
    id: "techno-it",
    name: "Techno IT Hub",
    category: "Software & Data Engineering",
    role: "Intern",
    timeline: "September 2022 - May 2023",
    image: "/images/verve.jpg",
    description:
      "Hands-on full-lifecycle software development and database optimization across multiple client projects during a 9-month professional internship in Ahmedabad, Gujarat.",
    highlights: [
      "Developed backend logic and data endpoints",
      "Optimized query performance and application reliability",
      "Collaborated in agile team sprints and version control",
    ],
    tags: ["Software Engineering", "Databases", "Python", "Git", "APIs"],
  },
  {
    id: "geodata-ai",
    name: "Geodata AI",
    category: "AI/ML Geodata Analysis",
    role: "Core Research Project",
    timeline: "2024 - 2026",
    image: "/images/elara.jpg",
    description:
      "Advanced spatial analytics and machine learning system for processing temporal earth observation data, remote sensing, and automated pattern classification.",
    highlights: [
      "Automated time-series classification algorithms",
      "Interactive data visualization with Python & open-source stacks",
      "Certified in AI/ML for Geodata Analysis",
    ],
    tags: ["Geodata", "Remote Sensing", "Deep Learning", "Satellite AI"],
  },
];
