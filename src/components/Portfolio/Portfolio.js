import React from "react";
import Project from "../Project/Project";

const projects = [
  {
    id: 0,
    title: "bookSearchEngineMERN",
    languages: "MERN stack, Apollo Server and GraphQL",
    image: "",
    repo: "https://github.com/kaylaanngrace/bookSearchEngineMERN-byMak",
    live: "https://booksearchenginemern-bymak.herokuapp.com/ ",
  },
  {
    id: 1,
    title: "buggetTrackerPWA",
    languages: "PWA, Web Manifest, Service Worker, IndexedDB, MongoDB Atlas",
    image: "../../assets/images/budgetTracker.png",
    repo: "https://github.com/kaylaanngrace/budgetTrackerPWA-byMakWils",
    live: "https://budgettrackerpwa-bymakwils.herokuapp.com/",
  },
  {
    id: 2,
    title: "TechTalk",
    languages: "Node.js, Express.js, Handlebars.js, mySQL, Sequelize ORM",
    image: "../../assets/images/techTalk.png",
    live: "https://techtalkbymakwils.herokuapp.com/",
    repo: "https://github.com/kaylaanngrace/MVC-TechBlog-ByMakWils",
  },
  {
    id: 3,
    title: "FullStack Jack",
    languages: "Node.js, Express.js, Handlebars.js, mySQL, Sequelize ORM",
    image: "../../assets/images/fullStackJack.png",
    repo: "https://github.com/AcheronandStyx/full_stack_jack",
    live: "https://young-atoll-21457.herokuapp.com/",
  },
  {
    id: 4,
    title: "urlRegexTutorial-ByMakWils",
    languages: "markdown, github gist",
    image: "../../assets/images/matchingURL.png",
    repo: "https://gist.github.com/kaylaanngrace/6f032cd43c0ea9ced5871a234ae9540d",
    live: "https://gist.github.com/kaylaanngrace/6f032cd43c0ea9ced5871a234ae9540d",
  },

];

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
