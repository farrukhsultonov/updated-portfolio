import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like JavaScript, React and Next.js, as well as back-end technologies like Java, Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including JavaScript, Java, React, Node.js, MySQL, PostgreSQL, MongoDB and Next.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "DigitalVertex Enterprises",
    description: `Collaborated with a team to develop a CRM project, an all-in-one solution for small and medium-sized businesses. CRM includes features such as finance, schedule, inventory, client management, telephony calls and messages, planning, and more.`,
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
      "Docker",
      "Next.js",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Web Development Instructor",
    company: "Codeup",
    description: `Deliver custom web development curriculum through lectures, code walk-throughs, and exercises. Provided tailored support to individual students in 1:1s and oﬃce hours. Contributed to improving the lives of 200+ students through education in a fast-paced and team-oriented environment`,
    technologies: [
      "JavaScript",
      "Java",
      "HTML",
      "CSS",
      "Spring",
      "Thymeleaf",
      "Bootstrap",
    ],
  },
  {
    year: "2021 - 2022",
    role: "Software Engineer",
    company: "General Assembly Software Engineering Immersive",
    description: `Completed 500+ hours of expert-led instruction in JavaScript, Python, MongoDB, Node, React, and hands-on
learning of web and mobile application fundamentals using the industry's most in demand technologies. Gained experience in contemporary front and backend programming languages, tools, and methodologies. Developed 10+ projects using MERN stack, CRUD operations, and RESTful API’s. Developed clean, standards-based code, emphasizing advocacy for end-users for high quality software operation`,
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Node",
      "MongoDB",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    year: "2020 - 2022",
    role: "Web Developer",
    company: "TJ Transportation LLC",
    description: `Built a website that grew company revenue 15% and automated all the manual work. Added new features for fleet management, record keeping, invoicing, expense tracking, driver tracking. Maintained website and its server components, fixing bugs and improving UI`,
    technologies: ["JavaScript", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Chatty",
    image: project7,
    description:
      "A real-time chat web application with features including user account creation, secure authentication, instant messaging with Socket.io integration, dynamic UI updates, and Cloudinary-powered image upload for seamless media sharing.",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Socket.io",
    ],
    link: "https://chatty-wszf.onrender.com/",
  },
  {
    title: "GrabIt",
    image: project6,
    description:
      "Developed GrabIt, a full-stack application that enables users to create, edit, and delete item postings for sale, featuring a seamless user interface, robust backend integration, and efficient data management for an intuitive marketplace experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chakra-UI"],
    link: "https://grabit-nuhq.onrender.com/",
  },
  {
    title: "Restaura",
    image: project1,
    description:
      "Designed and developed a modern, user-friendly front-end UI for a restaurant application, featuring intuitive navigation, responsive design, and dynamic menu displays to enhance customer engagement.",
    technologies: ["React", "Tailwind"],
    link: "https://restaura-delta.vercel.app/",
  },
  {
    title: "Team5 Restaurant",
    image: project2,
    description:
      "A web application that enables restaurant customers to book a table, order their favorite meal, receive confirmation of their reservation and their order via email with the option of modifying or canceling.",
    technologies: ["React", "Bootstrap", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Team5Go",
  },
  {
    title: "Watch Store",
    image: project3,
    description:
      "Online Store for watch lovers, that allows user to have CRUD ability to view, add, edit and delete product. Users have to create an account and sign in before being able to access all the features of the web.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Express",
      "NodeJS",
      "MongoDB",
      "Mongoose",
    ],
    link: "https://github.com/farrukhsultonov/Watch-Store",
  },
  {
    title: "Simon Game",
    image: project4,
    description:
      "Do you love challenging yourself? This game tests your intelligence and ability to remember by remembering and repeating a sequence of colors.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://farrukhsultonov.github.io/simon-game/",
  },
  {
    title: "Tic Tac Toe",
    image: project5,
    description:
      "It's you against the computer 😲! You have to beat the computer in a tic tac toe game to win!",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://farrukhsultonov.github.io/Tic-Tac-Toe/",
  },
];

export const CONTACT = {
  email: "farruhsultanov1998@gmail.com",
  linkedIn: "LinkedIn",
};
