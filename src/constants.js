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
import canteen from './assets/work_logo/canteen.jpg';
import sortLogo from './assets/work_logo/sort.png';
import tracker from './assets/work_logo/tracker.png';


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
      { name: 'Microsoft Excel'},
      { name: 'PowerBI'},
      { name: 'Canva'},
      
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
      title: "Attendance Tracker ",
      description:
        "Developed a secure attendance management 4system with JWT-based authentication and encrypted passwords for teachers and students.Built RESTful APIs using Express.js and MongoDB to manage classes, subjects, enrollments, and attendance records.Created teacher and student dashboards for class management, attendance marking, and viewing detailed records.Implemented full CRUD operations with real-time updates and subject-wise attendance analytics for transparency.",
        
      image: tracker,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Tailwind CSS"],
      github: "https://github.com/Gauravkumawat2908/Attendance-Tracker-",
      webapp: " ",
    },
     {
      id: 1,
      title: "Canteen Management",
      description:
        "Architected a full-stack web application to automate canteen operations, including ordering, billing, and inventory management.Engineered RESTful APIs with Express.js and managed data persistence using MongoDB.Implemented secure user authentication, session handling, and role-based access for admins and customers",
        
      image: canteen,
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      github: " ",
      webapp: " ",
    },
    { 
      id: 2,
      title: "Sorting Algorithm Visualizer",
      description:
        "Developed an interactive web application using JavaScript, HTML and CSS to visualize and animate sorting algorithms.Built core functionality to display sorting processes step-by-step, aiding in the understanding of algorithmic behavior.Ensured responsive UI design and smooth animations for an educational, beginner-friendly experience in understanding sorting concepts.",
        
      image: sortLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Gauravkumawat2908/sorting.git",
      webapp: " ",
    },
    
    
  ];  