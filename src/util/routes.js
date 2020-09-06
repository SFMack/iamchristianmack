// Views
import Home from "../components/home";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";

// `routes` object passed to NavBar component
const routes = [
  { path: "/", name: "HOME", Component: Home },
  { path: "/about", name: "ABOUT", Component: About },
  { path: "/skills", name: "SKILLS", Component: Skills },
  { path: "/projects", name: "PROJECTS", Component: Projects },
  { path: "/contact", name: "CONTACT", Component: Contact },
];

export default routes;
