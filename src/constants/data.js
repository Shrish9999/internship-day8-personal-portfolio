// src/constants/data.js

// 1. PERSONAL DETAILS
export const personalDetails = {
    name: "Shrish Tiwari",
    email: "shirishtiwari2006@gmail.com",
    phone: "+91 73409 06481",
    location: "India",
    linkedin: "https://linkedin.com/in/shrish-tiwari", // Apna real link daal dena
    github: "https://github.com/Shrish9999",
    bio: "I am an entry-level software developer with a strong foundation in MERN Stack and Django. I focus on building scalable web applications and solving complex problems with clean code.",
    currentStatus: "Working at Kuchoriya TechSoft Pvt. Ltd."
};

// 2. EXPERIENCE (From Offer Letter)
export const experienceData = [
    {
        company: "Kuchoriya TechSoft Pvt. Ltd.",
        role: "Full Stack Developer Intern",
        duration: "Nov 2025 - Present",
        description: "Currently working as a Full Stack Developer Intern. Handling frontend and backend tasks, maintaining professionalism, and contributing to project-specific guidelines.",
        type: "Internship",
        location: "Jaipur (Onsite)"
    }
];

// 3. EDUCATION (From CV)
export const educationData = [
    {
        institution: "Hindustan College of Science & Technology, Mathura",
        degree: "B.Tech | Computer Engineering",
        duration: "July 2020 – Aug 2024",
    },
    {
        institution: "Govt. Sr. Secondary School, Ludhiana",
        degree: "Class XII (PSEB)",
        duration: "2019",
    }
];

// 4. SKILLS (From CV)
export const skillsData = [
    "C++", "Python", "JavaScript", "SQL",
    "Node.js", "Express.js", "React.js", "Django",
    "MongoDB", "Docker", "Git", "RESTful APIs"
];

// 5. PROJECTS (From CV)
export const projectsData = [
    {
      id: "ai-code-reviewer",
      name: "AI Code Reviewer",
      category: "MERN Stack",
      // Placeholder image use kar raha hu, tum screenshot laga lena baad mein
      image: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png", 
      detailImage: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1102.png",
      description: "A MERN stack web application built from scratch that uses AI to review code snippets, providing optimization suggestions and error detection.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AI API"],
      github: "https://github.com/Shrish9999/ai-powered-code-reviewer"
    },
    {
      id: "office-ems",
      name: "Office EMS",
      category: "Django Full Stack",
      image: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      detailImage: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1102.jpg",
      description: "An Employee Management System built with Django to track employee records, attendance, and payroll efficiently.",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      github: "https://github.com/Shrish9999/office-employee-management-system"
    },
    {
      id: "food-app",
      name: "FOOD-APP",
      category: "JavaScript Web App",
      image: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
      detailImage: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1102.jpg",
      description: "A responsive food ordering application built using vanilla JavaScript focusing on DOM manipulation and local storage.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shrish9999/FOOD-APP"
    },
    {
      id: "bike-rental",
      name: "Bike Rental",
      category: "Python OOP",
      image: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
      detailImage: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1102.png",
      description: "A console-based object-oriented application for managing bike rentals, stock tracking, and billing.",
      tech: ["Python", "OOP"],
      github: "https://github.com/Shrish9999/bike-rental-system"
    }
];

export const servicesData = [
    { title: "Full Stack Dev", description: "Building complete web solutions using MERN & Django.", icon: "💻" },
    { title: "Backend Logic", description: "Robust API development with Python and Node.js.", icon: "⚙️" },
    { title: "Database Mgmt", description: "Efficient data handling with MongoDB and SQL.", icon: "🗄️" },
    { title: "Problem Solving", description: "DSA implementation in C++ and Python.", icon: "🧩" },
];