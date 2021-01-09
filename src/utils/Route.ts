import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Portfolio from "../components/Portfolio/Portfolio";

export default [
  {
    path: "/Home",
    exact: true,
    component: Home
  },
  {
    path: "/About",
    exact: true,
    component: About
  },
  {
    path: "/Portfolio",
    exact: true,
    component: Portfolio
  },
  {
    path: "/Contact",
    exact: true,
    component: Contact
  }
];
