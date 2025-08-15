// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import internLogo from './assets/company_logo/intern.png';

// Education Section Logo's
import college from './assets/education_logo/college.png';
import school from './assets/education_logo/school.png';

// Project Section Logo's
import carrentalLogo from './assets/work_logo/carrental.jpeg';
import quickLogo from './assets/work_logo/quick.png';
import sortLogo from './assets/work_logo/sort.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Postgre SQL', logo: postgreLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      
      
      
    ],
  },
];

  export const experiences = [
  {
    id: 0,
    img: internLogo,
    role: "Fullstack Development (Virtual Intern)",
    company: "Academy of Skill Development",
    date: "May 2025 - July 2025",
    desc: "Developed dynamic and scalable Car Rental Platform using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Imagekit.io",
    ],
  
    certificate: "https://drive.google.com/file/d/15mxfczmf3D09LkAN0FqjYEGBknsktfLR/view?usp=sharing", // Replace with actual link
  },
];

  
  export const education = [
    
    {
      id: 0,
      img: college,
      school: " Malaviya National Institute of Technology, Jaipur",
      date: "Nov 2022 - June 2026",
      desc: "I am pursuing my Bachelor of Technology degree in Computer Science And Engineering from  Malaviya National Institute of Technology, Jaipur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at MNIT Jaipur allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science And Engineering)",
    },
    {
      id: 1,
      img: school,
      school: "Govt. Model H.S. School Depalpur, Indore",
      date: "2020 - 2021",
      grade: "Grade:88%",
      desc: "I completed my Senior Secondary Education with (PCM) from Govt. Model H.S. School Depalpur, Indore under the MPBSE board.During my school years I actively participated in both academics and extracurricular activities which helped shape my personality and interests This phase played a crucial role in sparking my curiosity and passion for technology and problem-solving.",

      degree: " Senior Secondary Education- PCM ",
    },
    {
      id: 2,
      img: school,
      school: "Govt. Model H.S. School Depalpur, Indore",
      date: " 2018 - 2019",
      grade: "Grade:89.2%",
      desc: "I completed my High School Education (10th) from Govt. Model H.S. School, Depalpur, Indore under the MPBSE board.Throughout this phase, I remained focused on academics while also engaging in extracurricular activities that enhanced my overall development.These formative years helped build a strong foundation in logical thinking and laid the groundwork for my interest in technology.",
      degree: "Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: " Car Rental Platform",
      description:
        "Developed a full-stack Car Rental Web Application using the MERN stack, enabling users to browse, search, and book cars with secure JWT-based authentication and role-based access control for customers and administrators. Built a responsive, interactive UI with React.js and Tailwind CSS, integrating ImageKit API for optimized image storage, CDN-based delivery, and faster load times.Designed and implemented RESTful APIs in Node.js/Express.js for managing vehicles, bookings, user profiles,and payments, with data stored in MongoDB.",
      image: carrentalLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "MongoDB", "Express.js", "Node.js","Imagekit.io"],
      github: "https://github.com/Gauravkumawat2908/Car-Rental.git",
      webapp: "https://car-rental-lilac-mu.vercel.app",
    },
     {
      id: 1,
      title: "Quick.ai – Full Stack AI SaaS",
      description:
        "Built an AI-powered SaaS platform integrating multiple AI services, Gemini API, Clipdrop API for text generation,image creation, and content editing.Designed a responsive, modern UI using React.js and Tailwind CSS, ensuring smooth across devices performance and accessibility.Implemented authentication and role-based access control using Clerk, integrated Cloudinary for media storage,and developed secure RESTful APIs for AI content processing, with data stored in Neon PostgreSQL.",
        
      image: quickLogo,
      tags: ["React.js", "Node.js", "Express.js", "Neon PostgreSQL", "Clerk", "Cloudinary", "Gemini API"],
      github: "https://github.com/Gauravkumawat2908/Quick.ai",
      webapp: "https://quick-ai-beta-topaz.vercel.app",
    },
    { 
      id: 2,
      title: "Sorting Algorithm Visualizer",
      description:
        "Developed an interactive web application using JavaScript, HTML and CSS to visualize and animate sorting algorithms.Built core functionality to display sorting processes step-by-step, aiding in the understanding of algorithmic behavior.Ensured responsive UI design and smooth animations for an educational, beginner-friendly experience in undstanding sorting concepts.",
        
      image: sortLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Gauravkumawat2908/sorting.git",
      webapp: "https://sorting-henna.vercel.app",
    },
    
    
  ];  