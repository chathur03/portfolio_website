// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('header nav ul li a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', smoothScroll);
//     });

//     function smoothScroll(event) {
//         event.preventDefault();
//         const targetId = event.currentTarget.getAttribute('href').substring(1);
//         document.getElementById(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//     }
// });

import React from 'react';
import ReactDOM from 'react-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#education">Education</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  </section>
);

const projects = [
  {
    title: "MedScanAI",
    description: "Developed a web application for medical scan analysis using AI and ML models to detect various health conditions.",
    technologies: "HTML, CSS, JavaScript, Python, TensorFlow, Django"
  },
  {
    title: "FilePrintHub",
    description: "Developed a web application for managing orders and user authentication using the Python Flask framework.",
    technologies: "HTML, CSS, JavaScript, Python-Flask, SQL"
  },
  {
    title: "StudyBud",
    description: "Created a Django project allowing users to create virtual rooms based on their topics of interest.",
    technologies: "Django, REST API"
  },
  {
    title: "Data Analysis for Car Sales in R Language",
    description: "Created a dashboard that empowers users to select specific years and companies, facilitating dynamic data filtering.",
    technologies: "R Shiny, Plotly, ggplot2"
  },
  {
    title: "System Resource Monitoring",
    description: "Developed a Python tool that monitors system resources and suggests applications to close for resource optimization.",
    technologies: "Python-Psutil"
  },
  {
    title: "Weather Data Emailer",
    description: "Created a Python script utilizing OpenWeatherMap and Mailjet APIs to automate weather data retrieval and email reporting.",
    technologies: "API Integration-Mailjet, OpenWeatherApp"
  }
];

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Technologies used:</strong> {project.technologies}</p>
        </div>
      ))}
    </div>
  </Section>
);

const App = () => (
  <div>
    <header>
      <div className="container">
        <h1>Chathur BR</h1>
        <NavBar />
      </div>
    </header>

    <Section id="about" title="About Me">
      <p>
        I am a Computer Science and Engineering student at Dayananda Sagar Academy of Technology and Management, with a strong background in web development, data analysis, and software development. My objective is to learn and create a positive impact towards the development of the organization and society by making use of my education and values, and to play an active role in innovation and development of new technology or products.
      </p>
    </Section>

    <Section id="education" title="Education">
      <ul>
        <li>
          <h3>Dayananda Sagar Academy of Technology and Management</h3>
          <p>Bachelor of Science in Computer Science and Engineering (2021 – 2025)</p>
          <p>CGPA: 8.2 Till 5th Sem</p>
        </li>
        <li>
          <h3>Base PU College</h3>
          <p>Department of Pre-University Education (Govt of Karnataka) - April 2021</p>
          <p>87%</p>
        </li>
        <li>
          <h3>Clarence Public School</h>
          <p>Indian Certificate of Secondary Education - April 2019</p>
          <p>88%</p>
        </li>
      </ul>
    </Section>

    <Section id="skills" title="Skills & Abilities">
      <ul>
        <li>Languages: Python, Java, C, C++, HTML, CSS, JavaScript, SQL</li>
        <li>Developer Tools: Git and GitHub, VS Code, Eclipse, NetBeans, Google Colab, PyCharm, ChatGPT, Perplexity AI</li>
        <li>Coursework: Data Structures and Algorithms, Database Management, Artificial Intelligence, Machine Learning</li>
      </ul>
    </Section>

    <Projects />

    <Section id="contact" title="Contact">
      <p>Email: <a href="mailto:brchathur2003@gmail.com">brchathur2003@gmail.com</a></p>
      <p>Phone: 9742226527</p>
      <p>
        <a href="https://www.linkedin.com/in/chathurbr">LinkedIn</a> |
        <a href="https://github.com/chathur03">GitHub</a>
      </p>
    </Section>

    <footer>
      <div className="container">
        <p>&copy; 2024 Chathur BR. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
