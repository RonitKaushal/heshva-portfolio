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
  github?: string;
  pypi?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  timeline: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

// ─── PROJECTS ONLY ──────────────────────────────────────────────────────────

export const projectsData: ProjectItem[] = [
  {
    id: "qualiframe",
    name: "QualiFrame",
    category: "Python Package · PyPI",
    role: "Author & Maintainer",
    timeline: "2025 - Present",
    image: "/images/isro_geodata.jpg",
    description:
      "A published Python package on PyPI that performs automated data quality assessment and analysis. QualiFrame handles schema validation, missing-value profiling, statistical analysis, and generates comprehensive PDF audit reports — streamlining the data quality workflow for analysts and researchers.",
    highlights: [
      "Published on PyPI — installable via pip install qualiframe",
      "Automated schema validation, outlier detection & statistical profiling",
      "Auto-generates PDF audit reports using ReportLab",
      "Supports multi-format datasets with Pandas & NumPy",
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "ReportLab", "PyPI"],
    pypi: "https://pypi.org/project/qualiframe/",
  },
  {
    id: "stock-prediction",
    name: "Stock Market Predictor",
    category: "Deep Learning · Time Series",
    role: "ML Engineer",
    timeline: "2024 - 2025",
    image: "/images/elara.jpg",
    description:
      "An LSTM-based time-series forecasting model to predict stock closing prices using five years of historical market data. Features an interactive Streamlit web application for data retrieval, preprocessing, model training, evaluation, and real-time visualization.",
    highlights: [
      "LSTM neural network for sequential stock price prediction",
      "5 years of historical data via yFinance API integration",
      "Interactive Streamlit app with real-time charting & evaluation metrics",
      "Scikit-learn preprocessing pipelines with MinMax normalization",
    ],
    tags: ["Python", "TensorFlow", "LSTM", "Streamlit", "yFinance", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Heshva",
  },
  {
    id: "virtual-drag-drop",
    name: "Virtual Drag & Drop",
    category: "Computer Vision · OpenCV",
    role: "Developer",
    timeline: "2023 - 2024",
    image: "/images/musea.jpg",
    description:
      "A real-time gesture-controlled drag-and-drop system built with OpenCV and CVZone hand tracking. The system enables completely mouse-free interaction with virtual objects using webcam-based hand gestures — making computer interaction touchless and intuitive.",
    highlights: [
      "Real-time hand tracking at 30fps using CVZone & MediaPipe",
      "Gesture recognition for drag, drop, and scroll interactions",
      "Fully mouse-free virtual object manipulation",
      "OpenCV-based image processing pipeline for live webcam feed",
    ],
    tags: ["Python", "OpenCV", "CVZone", "NumPy", "Computer Vision", "Gesture Recognition"],
    github: "https://github.com/Heshva",
  },
  {
    id: "soil-moisture",
    name: "Soil Moisture Workflow",
    category: "Research · Geospatial",
    role: "Research Intern @ SAC-ISRO",
    timeline: "June 2026 - Present",
    image: "/images/verve.jpg",
    description:
      "An end-to-end Python workflow for soil-moisture data processing and quality control developed at Space Applications Centre, ISRO. Integrates ground-station observations with ISMN datasets for spatiotemporal analysis and automated generation of analysis-ready datasets.",
    highlights: [
      "End-to-end data pipeline from raw sensor data to analysis-ready datasets",
      "Statistical, correlation, and spatiotemporal analysis of multi-depth observations",
      "Automated outlier detection and quality control for ground-station data",
      "Extending toward soil-moisture modeling using processed in-situ data",
    ],
    tags: ["Python", "Pandas", "NumPy", "Geospatial", "Time Series", "ISRO", "Remote Sensing"],
  },
];

// ─── EXPERIENCE ONLY ─────────────────────────────────────────────────────────

export const experiencesData: ExperienceItem[] = [
  {
    id: "isro",
    company: "Space Applications Centre (ISRO)",
    role: "Research Intern",
    timeline: "June 2026 – Present",
    location: "Ahmedabad, India",
    description:
      "Conducting research at the prestigious Space Applications Centre of ISRO, developing high-impact Python workflows for satellite soil-moisture data and advancing geospatial intelligence.",
    highlights: [
      "Developing an end-to-end Python workflow for soil-moisture data processing and quality control using ground-station and ISMN datasets",
      "Performing data cleaning, outlier detection, statistical, correlation, and spatiotemporal analysis of multi-depth observations",
      "Automating preprocessing, visualization, and generation of analysis-ready datasets for soil-moisture studies",
      "Extending the workflow toward soil-moisture modeling using processed in-situ data",
    ],
    tags: ["Python", "Geospatial", "Time Series", "Data Engineering", "ISRO"],
  },
  {
    id: "infolabz",
    company: "InfoLabz",
    role: "Internship Trainee",
    timeline: "July 2023 – August 2023",
    location: "Ahmedabad, India",
    description:
      "Gained hands-on experience with deep learning architectures and computer vision pipelines during an intensive ML internship at InfoLabz, Ahmedabad.",
    highlights: [
      "Built and evaluated CNN, RNN, and LSTM models for classification tasks",
      "Developed OpenCV-based image-processing pipelines for computer vision",
      "Learned the full ML workflow: preprocessing, training, evaluation, and prediction",
    ],
    tags: ["Python", "CNN", "RNN", "LSTM", "OpenCV", "Machine Learning"],
  },
  {
    id: "techno-it",
    company: "Techno IT Hub",
    role: "Intern",
    timeline: "September 2022 – May 2023",
    location: "Ahmedabad, India",
    description:
      "Completed a 9-month internship focused on web development fundamentals, building practical skills in responsive design and core frontend technologies.",
    highlights: [
      "Built a responsive personal portfolio website using HTML and CSS",
      "Applied fundamental web design and layout principles",
      "Developed understanding of UI responsiveness across device sizes",
    ],
    tags: ["HTML", "CSS", "Web Design", "Responsive Design"],
  },
];
