import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  programmingPathshala,
  physicsWallah,
  carrent,
  jobit,
  tripguide,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer Trainee",
    company_name: "Programming Pathshala",
    icon: programmingPathshala, 
    iconBg: "#383E56",
    date: "April 2023 - August 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Working on Real time applications and building Realtime applications",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Trainee Engineer",
    company_name: "Physics Wallah",
    icon: physicsWallah,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Acquiring hands-on experience in developing, implementing, and maintaining internalweb applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Enhancing the technologies with integration of DevOps",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website, but Jafer proved me wrong.",
    name: "Jessica Jasyleen",
    designation: "Associate Software Engineer",
    company: "LTTS",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've met a web developer who truly loves development' like Jafer Ali.",
    name: "Naveen Arun Jaswanth",
    designation: "SDE",
    company: "Accenture",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFlDkYZeNTJFA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1706512585877?e=1739617200&v=beta&t=cDlqEafjsT616aAILpVzWCxexzSID0EC7XFqVgdJlmk",
  },
  {
    testimonial:
      "After Jafer Joined with me, We are now ready to bring new change in Development",
    name: "Raju",
    designation: "Software Engineer",
    company: "Tech Mahindra",
    image: "https://media.licdn.com/dms/image/v2/D5603AQERMvLc4fc9Dg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1730916161363?e=1744848000&v=beta&t=mBHWwafjq9JTZKqeojRVz4YLT0FxLYotFGL3uxqm7oc",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/jaferalilpu",
  },
  {
    name: "Health Application",
    description:
      "Web application that enables users to Book appointments with doctor, view patients who booked appointments, and for patients it allows to check appointments with doctors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/jaferalilpu",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/jaferalilpu",
  },
];

export { services, technologies, experiences, testimonials, projects };
