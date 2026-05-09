// src/data/portfolio.js

export const personal = {
  greeting: "Hi, I'm",
  name: "Ujjwal Singh",
  titles: [
    "An Electronics and Communication Engineering Student",
    "Deep Learning Enthusiast",
    "Full-Stack Developer",
  ],
  bio: "Third-year ECE-AIML student passionate about neural networks, autoencoders, and building things that learn from data. I love turning research papers into working code.",
  email: "Ujjwalsingh83712@gmail.com",
  github: "https://github.com/ujjwalsingh888",
  linkedin: "https://www.linkedin.com/in/ujjwal-singh-a2a187335/",
  resumeUrl: "/resume.pdf",  // we'll add this later
}

export const skills = {
  heading: "What I love to do",
  subTitle: "Consider me as an enthusiastic developer who's eager to try out every new techstack",

  tech: [
    { name: "java",          icon: "FaJava",            color: "#f89820" },
    { name: "python",        icon: "FaPython",          color: "#3776ab" },
    { name: "html-5",        icon: "FaHtml5",           color: "#e34f26" },
    { name: "css3",          icon: "FaCss3Alt",         color: "#1572b6" },
    { name: "JavaScript",    icon: "SiJavascript",      color: "#f7df1e" },
    { name: "reactjs",       icon: "FaReact",           color: "#61dafb" },
    { name: "nodejs",        icon: "FaNodeJs",          color: "#68a063" },
    { name: "npm",           icon: "FaNpm",             color: "#cb3837" },
    { name: "sql-database",  icon: "FaDatabase",        color: "#4479a1" },
    { name: "stackoverflow", icon: "FaStackOverflow",   color: "#f48024" },
    { name: "kaggle",        icon: "SiKaggle",          color: "#20beff" },
    { name: "overleaf",      icon: "SiOverleaf",        color: "#47a141" },
    { name: "ms office",     icon: "SiMicrosoftoffice", color: "#d83b01" },
  ],

  bullets: [
    "Develop highly interactive Front end / User Interfaces for web applications",
    "Versed with various tools such as NodeJS, ReactJS, Bootstrap and Tailwind",
    "Confident with Database Management Systems, Object-Oriented Programming",
    "Skilled in various MS Office tools such as Excel, Powerpoint, Word, etc.",
  ],
}

export const projects = {
  heading: "Projects",
  subTitle: "Things I've built that I'm proud of — hardware, software, and everything in between",

  items: [
    {
      title: "Personal Portfolio Website",
      description: "A fully responsive portfolio built from scratch with React 19, Tailwind CSS v4, and Framer Motion. Custom hide-on-scroll navbar implemented with a custom React hook (no external library), scroll-triggered animations via whileInView, and a clean component-driven architecture with all content in a single data file. Deployed on Netlify with auto-deploys on every git push.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Netlify"],
      image: "/projects/portfolio.svg",
      // Buttons: each entry becomes a button. Set `primary: true` for the filled blue style.
      buttons: [
        { label: "Visit Website", url: "https://your-site.netlify.app", icon: "FaExternalLinkAlt", primary: true },
      ],
    },
    {
      title: "Semi-Autonomous ADAS Car (Raspberry Pi 5)",
      description: "A working prototype of an Advanced Driver Assistance System on a custom-built RC car. Raspberry Pi 5 runs concurrent threads for live MJPEG video streaming over Flask, real-time obstacle detection across four ultrasonic sensors, automatic emergency braking, and DualShock 4 control over Bluetooth. Differential-drive motor control via L298N with PWM speed capping, plus a TXS0108E logic-level shifter to bridge 3.3V Pi GPIO and 5V sensor logic. Temperature-corrected speed-of-sound for accurate distance readings.",
      tech: ["Raspberry Pi 5", "Python", "Flask", "OpenCV", "GPIO Zero", "L298N", "HC-SR04", "Bluetooth"],
      image: "/projects/adas.jpg",
      buttons: [
        { label: "View Code", url: "https://github.com/ujjwalsingh888/smart-car-adas", icon: "FaGithub", primary: true },
      ],
    },
  ],
}
export const contact = {
  heading: "Contact me",
  subTitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  email: "Ujjwalsingh83712@gmail.com",
  phone: "+91 87094 70900",
  location: "Pune, India",
}
export const achievements = {
  heading: "Achievements & Certifications",
  subTitle: "Industrial training, workshops, and online courses I've completed",

  items: [
    {
      title: "AI & Machine Learning — Industrial Training Programme",
      organization: "International Automobile Centre of Excellence (iACE), in association with MIT-WPU",
      date: "June 2025",
      description: "10-day intensive industrial training covering Automotive Systems, Digital Electronics in Automobiles, LIN & CAN bus communication, Image Processing & Computer Vision for ADAS, Industrial Robotics, Micro-Controllers, Sensorics, and Industry 4.0. Included an Industrial Exposure Visit to factories in Gujarat.",
      icon: "FaCar",
      tags: ["AI/ML", "ADAS", "CAN Bus", "Computer Vision", "Industry 4.0"],
    },
    {
      title: "Workshop on EV Technology",
      organization: "Centre of Excellence — eMobility, MIT-WPU",
      date: "November 2025",
      description: "Two-day workshop conducted by the Department of Electrical & Electronics Engineering and Mechanical Engineering covering electric vehicle architecture, powertrain, and emerging mobility technologies.",
      icon: "FaBolt",
      tags: ["EV", "Powertrain", "Sustainability"],
    },
    {
      title: "Deep Learning Specialization",
      organization: "Infosys Springboard",
      date: "February 2026",
      description: "Completed a Multiple deep learning track: Introduction to Deep Learning, Neural Networks, Convolutional Neural Networks Fundamentals, and Getting Started with Neural Networks (Biological & Artificial). Covers the full foundation from perceptrons to CNNs.",
      icon: "FaBrain",
      tags: ["Deep Learning", "Neural Networks", "CNNs", "PyTorch"],
    },
  ],
}
export const education = {
  heading: "Education",
  items: [
    {
      school: "Maharashtra Institute of Technology, Pune",
      degree: "B.Tech in Electronics & Communication Engineering (AIML)",
      duration: "August 2023 – April 2027",
      summary: "Completing my ongoing degree along with gaining the exposure and experience in both hardware and AI/ML domains.",
      tags: ["ECE", "AI/ML", "Ongoing", "MIT-WPU"],   // ← new
      logo: null,
      logoEmoji: "🎓",
    },
    {
      school: "DAV Public School, Patna",
      degree: "Intermediate in PCM with IP",
      duration: "2021 – 2023",
      summary: "Scored 70% in the Class XII CBSE Board examination. Information Practices was a particular strength.",
      tags: ["CBSE", "PCM", "70%"],
      logo: null,
      logoEmoji: "🏫",
    },
    {
      school: "Radiant International School",
      degree: "Matriculation in Science with Computer",
      duration: "Until 2021",
      summary: "Scored 75% in the Class X CBSE Board examination. Built a strong foundation in science and mathematics.",
      tags: ["CBSE", "Science", "75%"],
      logo: null,
      logoEmoji: "⭐",
    },
  ],
}