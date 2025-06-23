import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Advanced JavaScript',
      description: 'The individual assignment is to build a webshop that sells summer toys. The app will be published online.',
      image: 'public/img/Project-WebShop.jpg',
      link: 'https://photsathon-karlsson.github.io/Webbshop_SunnyPlay/'
    },
    {
      id: 2,
      title: 'UX - UI',
      description: 'Individual design project for Cyber Petz, a company developing high-tech pet tools. I created a website concept featuring at least two fictional products, with views for homepage, product list, cart, and checkout.',
      image: 'public/img/Project-CyberPetz.jpg',
      link: 'https://www.figma.com/proto/ADblgz5lvdBt5axYL9cHav/Inl%C3%A4mningsuppgift-UX---Cyber-Petz?node-id=104-4359&starting-point-node-id=104%3A4359'
    },
    {
      id: 3,
      title: 'HTML & CSS',
      description: 'This individual project is about building a website for the annual frontend developer conference, Bättre webb. The site is created using only HTML and CSS. Its purpose is to provide information about the conference and seminars, and to handle participant registrations.',
      image: 'public/img/Project-BetterWeb.jpg',
      link: 'https://photsathon-karlsson.github.io/Better-web/'
    },
    {
      id: 4,
      title: 'JavaScript',
      description: 'Group Project - We built a classic Hangman game where the player guesses a word with as few attempts as possible. Each wrong guess draws part of a stick figure. The game ends when the figure is complete.',
      image: 'public/img/Project-HangmanGame.jpg',
      link: 'https://ritahelwangi.github.io/Hangman/'
    },
    {
      id: 5,
      title: 'HTML & CSS',
      description: 'Group Project - Build a responsive website to showcase a product company, including company info, product details, and contact hours.',
      image: 'public/img/Project-Produktbolag.jpg',
      link: 'https://felix-skorvald.github.io/majestic-rabbits/index.html'
    },
    {
      id: 6,
      title: 'Advanced JavaScrip',
      description: 'Group Project - Restaurant App. Create a React app for a restaurant using an API to save menu data. Use Vite, Zustand, React Router, and Joi. Publish on GitHub Pages. Design before coding. Work agile with daily standups using GitHub and Trello. Start with a team agreement. Host in the class GitHub.',
      image: 'public/img//Project-Chili.jpg',
      link: ' https://ritahelwangi.github.io/chili'
    },
    {
      id: 7,
      title: 'JavaScript',
      description: 'Individual project - Build a web app for the Karlstad food truck "Yum yum gim me sum" to show the menu, manage the cart, and place orders using an API.',
      image: 'public/img/Project-Foodtruck.jpg',
      link: 'https://photsathon-karlsson.github.io/Foodtruck/'
    },
    {
      id: 8,
      title: 'UX - UI',
      description: 'Group Project - We designed a travel app for public transport users in Gothenburg by following the UX process. Through research, user interviews, and design iterations, we developed personas, wireframes, and mockups to improve the travel experience.',
      image: 'public/img/Project-TravelApp.jpg',
      link: 'https://www.figma.com/design/clSaNfammunaLAerbL0prP/Ninja-Kittens?node-id=28-146&p=f&t=GqhhzBVC91o76ga9-0'
    },
    {
      id: 9,
      title: 'Projects with agile methods UX - UI',
      description: 'Group project in Agile UX. - design a Figma prototype for the "Book it!" app, which helps users book meetings, find available times, reserve meeting rooms, and chat or share documents. The focus is to practice Scrum, follow the UX process, and build a creative, user-friendly prototype.',
      image: 'public/img/Project-MeetingApp.jpg',
      link: 'https://www.figma.com/design/8KuBzddwnWVALAMK3YWuAl/Fire-Nerds-agila-metoder?node-id=6-4&p=f&t=nyVSQNvfLKi2PdF7-0'
    },
    {
      id: 10,
      title: 'Testing TDD',
      description: 'Individual assignment focused on learning unit testing with Jest & write tests for webshop logic separated from the UI to practice thinking like a tester.',
      image: 'public/img/Project-Testing TDD.jpg',
      link: 'https://github.com/Photsathon-Karlsson/exam-unit-test'
    },
    {
      id: 11,
      title: 'Testing E2E',
      description: 'Individual assignment focused on writing E2E tests with Playwright for Läslistan, a book list app where users can mark favorite books. ',
      image: 'public/img/Project-testing E2E.jpg',
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

