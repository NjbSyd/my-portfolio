import React, {useEffect} from "react";
import {Helmet} from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
      <React.Fragment>
        <Helmet>
          <title>{`Projects | ${INFO.main.title}`}</title>
          <meta name="description" content={currentSEO.description}/>
          <meta
              name="keywords"
              content={currentSEO.keywords.join(", ")}
          />
        </Helmet>

        <div className="page-content">
          <NavBar active="projects"/>
          <div className="content-wrapper">
            <div className="projects-logo-container">
              <div className="projects-logo">
                <Logo width={46}/>
              </div>
            </div>
            <div className="projects-container">
              <div className="title projects-title">
                Crafting my mark in the cosmos, one creation at a time.
              </div>

              <div className="subtitle projects-subtitle">
                Throughout my journey, I've embarked on diverse projects that signify my growth. Many of these projects
                remain open-source, inviting exploration and collaboration. If you share an interest in my ventures,
                don't hesitate to dive into the code and propose enhancements. Embracing collective creativity is how I
                evolve, and I welcome novel ideas and feedback with open arms
              </div>

              <div className="projects-list">
                <AllProjects/>
              </div>
            </div>
            <div className="page-footer">
              <Footer/>
            </div>
          </div>
        </div>
      </React.Fragment>
  );
};

export default Projects;
