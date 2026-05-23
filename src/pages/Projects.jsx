import React from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 13,
      title: 'FirstStep',
      description: 'FirstStep is a school onboarding web application developed as a group MVP project to help private schools manage student information, enrollment progress, and onboarding status in one centralized system. [✉️:admin@test.com 🔑: 12345678]',
      image: `${import.meta.env.BASE_URL}img/Project-FirstStep.jpg`,
      link: 'https://lnkd.in/gW-ep64e',
    },
    {
      id: 12,
      title: 'Chappy-Chat-App',
      description: 'Chappy is a small full-stack chat application developed as an individual school assignment. The project demonstrates my ability to build both the frontend and backend, connect them to a database, and deploy the application online.',
      image: `${import.meta.env.BASE_URL}img/Project-ChappyChatApp.jpg`,
      link: 'https://chappy-chat-app-fullstack.onrender.com/'
    },
    {
      id: 1,
      title: 'Advanced JavaScript',
      description: 'The individual assignment is to build a webshop that sells summer toys. The app will be published online.',
      //image: 'public/img/Project-WebShop.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-WebShop.jpg`,
      link: 'https://photsathon-karlsson.github.io/Webbshop_SunnyPlay/'
    },
    {
      id: 2,
      title: 'UX - UI',
      description: 'Individual design project for Cyber Petz, a company developing high-tech pet tools. I created a website concept featuring at least two fictional products, with views for homepage, product list, cart, and checkout.',
      //image: 'public/img/Project-CyberPetz.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-CyberPetz.jpg`,
      link: 'https://www.figma.com/proto/h0AOGTG7yqtktfOJev90dt/Inl%C3%A4mningsuppgift-UX---Cyber-Petz?node-id=104-4359&p=f&t=T68YKmFeXj59pKrs-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A167&starting-point-node-id=104%3A4359'
    },
    {
      id: 3,
      title: 'HTML & CSS',
      description: 'This individual project is about building a website for the annual frontend developer conference, Bättre webb. The site is created using only HTML and CSS. Its purpose is to provide information about the conference and seminars, and to handle participant registrations.',
      //image: 'public/img/Project-BetterWeb.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-BetterWeb.jpg`,
      link: 'https://photsathon-karlsson.github.io/Better-web/'
    },
    {
      id: 4,
      title: 'JavaScript',
      description: 'Group Project - We built a classic Hangman game where the player guesses a word with as few attempts as possible. Each wrong guess draws part of a stick figure. The game ends when the figure is complete.',
      //image: 'public/img/Project-HangmanGame.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-HangmanGame.jpg`,
      link: 'https://ritahelwangi.github.io/Hangman/'
    },
    {
      id: 5,
      title: 'HTML & CSS',
      description: 'Group Project - Build a responsive website to showcase a product company, including company info, product details, and contact hours.',
      //image: 'public/img/Project-Produktbolag.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-Produktbolag.jpg`,
      link: 'https://felix-skorvald.github.io/majestic-rabbits/index.html'
    },
    {
      id: 6,
      title: 'Advanced JavaScrip',
      description: 'Group Project - Restaurant App. Create a React app for a restaurant using an API to save menu data. Use Vite, Zustand, React Router, and Joi. Publish on GitHub Pages. Design before coding. Work agile with daily standups using GitHub and Trello. Start with a team agreement. Host in the class GitHub.',
      //image: 'public/img//Project-Chili.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-Chili.jpg`,
      link: ' https://ritahelwangi.github.io/chili'
    },
    {
      id: 7,
      title: 'JavaScript',
      description: 'Individual project - Build a web app for the Karlstad food truck "Yum yum gim me sum" to show the menu, manage the cart, and place orders using an API.',
      //image: 'public/img/Project-Foodtruck.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-Foodtruck.jpg`,
      link: 'https://photsathon-karlsson.github.io/Foodtruck/'
    },
    {
      id: 8,
      title: 'UX - UI',
      description: 'Group Project - We designed a travel app for public transport users in Gothenburg by following the UX process. Through research, user interviews, and design iterations, we developed personas, wireframes, and mockups to improve the travel experience.',
      //image: 'public/img/Project-TravelApp.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-TravelApp.jpg`,
      link: 'https://www.figma.com/design/N1IuVPjwyX29Di64YNI51L/Ninja-Kittens?node-id=28-146&t=Ykz87mX05D4vPpva-1'
    },
    {
      id: 9,
      title: 'Projects with agile methods UX - UI',
      description: 'Group project in Agile UX. - design a Figma prototype for the "Book it!" app, which helps users book meetings, find available times, reserve meeting rooms, and chat or share documents. The focus is to practice Scrum, follow the UX process, and build a creative, user-friendly prototype.',
      //image: 'public/img/Project-MeetingApp.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-MeetingApp.jpg`,
      link: 'https://www.figma.com/design/809dcjkY3JO4tWzC2AN2ve/Grupparbete-agil-UX?node-id=0-1&t=ZGoTdLfzN49FkR98-1'
    },
    {
      id: 10,
      title: 'Testing TDD',
      description: 'Individual assignment focused on learning unit testing with Jest & write tests for webshop logic separated from the UI to practice thinking like a tester.',
      //image: 'public/img/Project-Testing TDD.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-Testing TDD.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/exam-unit-test'
    },
    {
      id: 11,
      title: 'Testing E2E',
      description: 'Individual assignment focused on writing E2E tests with Playwright for Läslistan, a book list app where users can mark favorite books. ',
      //image: 'public/img/Project-testing E2E.jpg',
      image: `${import.meta.env.BASE_URL}img/Project-testing E2E.jpg`,
      link: 'https://github.com/Photsathon-Karlsson/ReadListE2E'
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>{t('projects')}</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View Project
            </a>
          )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

