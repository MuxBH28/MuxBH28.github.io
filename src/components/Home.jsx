import Hero from "./Hero";
import Latest from "./Latest";
import About from "./About";
import Skills from "./Skills";
import ProjectsShowcase from "./ProjectsShowcase";
import FAQ from "./FAQ";
import Recommedations from "./Recommedations";

const Home = () => {
    return (
        <div>
            <Hero />
            <Latest />
            <About />
            <Skills />
            <ProjectsShowcase />
            <FAQ />
            <Recommedations />
        </div>
    );
};

export default Home;
