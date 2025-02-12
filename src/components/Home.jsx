import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import About from "./About";
import Skills from "./Skills";
import ProjectsShowcase from "./ProjectsShowcase";

const Home = () => {
    return (
        <div>
            <Hero />
            <Latest />
            <About />
            <Skills />
            <ProjectsShowcase />
        </div>
    );
};

export default Home;
