// Portfolio data configuration - easily editable content

export interface Experience {
  id: string;
  title: string;
  company?: string;
  companyUrl?: string;
  organization?: string;
  organizationUrl?: string;
  projectUrl?: string;
  duration: string;
  description: string;
  technologies?: string[];
  image?: string;
  highlights?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  bio: string;
  profileImage?: string;
}

// Personal Information - Update this with your details
export const personalInfo: PersonalInfo = {
  name: "Ben Young",
  title: "Robotics Software Engineer",
  email: "bengeorgeyoung@gmail.com",
  phone: "+1 (519) 591-3291",
  location: "Waterloo, Ontario, Canada",
  linkedin: "https://linkedin.com/in/ben-g-young",
  github: "https://github.com/B3ngineering",
  bio: "Software engineer from the University of Waterloo specializing in robotics and aerial systems.",
  profileImage: "/images/me.jpg" // Add your profile photo to public/images/
};

// Professional Experience - Add your work experience here
export const professionalExperience: Experience[] = [
  {
    id: "job1",
    title: "Aerial Robotics Software Intern",
    company: "Nightingale Security",
    companyUrl: "https://www.nightingalesecurity.com/",
    duration: "June - Aug 2025",
    description: "Led development of MAVLink integration for the Blackbird drone system.",
    technologies: ["Python", "Javascript", "ROS", "Gazebo", "Mavlink", "Docker"],
    image: "/images/nightingale.png",
    highlights: [
      "Led the design, implementation, and testing of MAVLink-based drone control",
      "Developed and deployed Python software to the drone and base that enables MAVLink control",
      "Configured networking and data pipelines between drone and tablet for operations"
    ]
  },
  {
    id: "job2",
    title: "Software Engineering Intern",
    company: "Jaza Energy",
    companyUrl: "https://jazaenergy.com",
    duration: "Sept - Dec 2024",
    description: "Developed and deployed machine learning models for fraud detection in electric battery distribution systems.",
    technologies: ["Python", "C++", "C", "Tensorflow", "SQL"],
    image: "/images/jaza.png",
    highlights: [
      "Engineered an LSTM neural network to analyze historical battery data and automated continuous retraining to prevent model drift.",
      "Deployed the model to production and integrated with the existing data pipeline to make thousands of predictions daily",
      "Developed firmware in C and C++ for battery pack testing and diagnostics"
    ]
  },
  {
    id: "job3",
    title: "Software Engineering Intern",
    company: "QEYnet Inc",
    companyUrl: "https://qeynet.com",
    duration: "Jan - Apr 2024",
    description: "Developed software for secure quantum key generation and distribution.",
    technologies: ["Python", "C", "C#", ".NET", "OpenCV"],
    image: "/images/qeynet.png",
    highlights: [
      "Developed telescope alignment software the uses computer vision and GPS data for 99% accurate quantum key transmission.",
      "Implemented C/C# firmware and interfaces for signal processing and optical lens manipulation"
    ]
  },
  {
    id: "job4",
    title: "Embedded Software Engineering Intern",
    company: "Teledyne Flir",
    companyUrl: "https://www.teledyneflir.com/browse/government-defense/unmanned-aerial-systems/",
    duration: "May - Aug 2023",
    description: "Developed and maintained flight control software and firmware for UAVs.",
    technologies: ["Python", "C++", "C", "Robot", "MAVLink"],
    image: "/images/teledyne.jpg",
    highlights: [
      "Architected a MAVLink bridge for open-source communication to the R70 SkyRanger drone",
      "Created an automated test suite for development of anti-GPS-blocking features",
      "Debugged and fixed 20+ software and firmware issues prior to major release"
    ]
  },
  {
    id: "job5",
    title: "Quality Engineering Intern",
    company: "VTS Lane",
    companyUrl: "https://vts.com",
    duration: "Sep - Dec 2022",
    description: "Ensured high quality of releases for a commercial real-estate web application.",
    technologies: ["Python", "Javascript", "Cypress", "React", "PostgreSQL"],
    image: "/images/vts.png",
    highlights: [
      "Performed quality assurance testing on new features and bug fixes for improved user experience",
      "Created automated test scripts in Cypress to improve regression testing efficiency"
    ]
  },
  {
    id: "job6",
    title: "Test Systems Development Intern",
    company: "Teledyne Flir",
    companyUrl: "https://www.teledyneflir.com",
    duration: "Jan - Apr 2022",
    description: "Developed test infrastructure for UAVs and camera payloads",
    technologies: ["Python", "C++", "C", "Data Analysis", "SQL"],
    image: "/images/teledyne.jpg",
    highlights: [
      "Developed data analysis tools to visualize UAV test data and identify performance issues",
      "Improved automated test infrastructure and test manufacturing processes"
    ]
  }

];

// Personal Projects & Experiences - Add your side projects, education, etc.
export const personalExperience: Experience[] = [
  {
    id: "education1",
    title: "Bachelor of Systems Design Engineering",
    organization: "University of Waterloo",
    duration: "2021 - 2026",
    description: "Computing Option with a specialization in Intelligent and Autonomous Systems.",
    image: "/images/uw.jpg",
    highlights: [
      "Engineering Orientation Leader",
      "SYDE 2026 Engineering Society Representative",
      "SYDE Lounge Mariokart Champion"
    ]
  },
  {
    id: "project1",
    title: "Perception Team Lead",
    organization: "University of Waterloo RoboSub Team",
    duration: "Aug 2024 – March 2025",
    description: "Architecting perception and SLAM software for cameras and IMUs on an autonomous underwater vehicle.",
    technologies: ["Python", "OpenCV", "YOLOv8", "ROS", "SLAM", "Computer Vision"],
    image: "/images/uw.jpg",
    highlights: [
      "Leading research and implementation of computer vision algorithms and software with Python, OpenCV, and YoloV8",
      "Developing identification and analysis systems for underwater targets and obstacles"
    ]
  },
  {
    id: "project2",
    title: "Maze Solving Robot",
    organization: "IEEE Micromouse Competition",
    projectUrl: "https://github.com/B3ngineering/Micromouse-V2",
    duration: "Oct 2024 – Dec 2024",
    description: "Developed a simulated environment to test pathfinding algorithms for the IEEE Micromouse competition.",
    technologies: ["Python", "C++", "ROS2", "Gazebo"],
    image: "/images/micromouse.png",
    highlights: [
      "Implemented random maze generation with recursive backtracking",
      "Developed a differential drive robot with ROS2 integration and simulation in Gazebo",
      "Created LiDAR-based state traversal and mapping system in C++",
      "Implemented flood fill and A* pathfinding algorithms for optimal navigation"
    ]
  },
  {
    id: "project3",
    title: "AI Lifeguarding Assistant",
    organization: "MY HOUSE",
    projectUrl: "https://github.com/B3ngineering/PoolSafe",
    duration: "June 2023 – Aug 2023",
    description: "Developed a computer vision system to assist lifeguards in monitoring swimmers.",
    technologies: ["Python", "YoloV8", "OpenCV", "Raspberry Pi"],
    image: "/images/pool.jpg",
    highlights: [
      "Constructed a waterproof Raspberry Pi camera system to monitor swimmers",
      "Used YoloV8, OpenCV, and Roboflow to detect and track swimmers in real-time",
      "Implemented an alert system with Python to notify lifeguards of potential drowning incidents"
    ]
  }
];

// Skills categories
export const skills = {
  languages: ["Python", "C++", "C", "C#", "Rust", "JavaScript", "TypeScript", "SQL"],
  libraries: ["TensorFlow", "PyTorch", "OpenCV", "YOLOv8", "MAVLINK", "NumPy", "Pandas"],
  frameworks: [".NET", "ROS", "ROS2", "Node.js", "React", "Next.js", "Gazebo", "Docker", "ROBOT"],
  tools: ["Git", "Linux", "Windows", "MATLAB", "Simulink", "RTOS", "PostgreSQL", "MongoDB"]
};
