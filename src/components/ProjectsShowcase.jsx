import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./assets/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error loading projects data:', error));
    }, []);

    const randomProjects = projects
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    return (
        <section className="bg-dark py-5" id="projects">
            <div className="container">
                <h2
                    className="text-center text-danger mb-4"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                >
                    <i className="bi bi-folder-check"></i> Projects
                </h2>
                <div className="row">
                    {projects.length === 0 ? (
                        <p className="text-center text-light">Loading projects...</p>
                    ) : (
                        <>
                            {randomProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="col-lg-4 col-md-6 mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                >
                                    <div className="card text-dark shadow-lg rounded h-100">
                                        <img
                                            src={`./assets/projects/${project.image}`}
                                            alt={project.title}
                                            className="card-img-top rounded-top w-100"
                                            style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-danger">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-danger w-100 mt-auto"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="card text-dark shadow-lg rounded h-100">
                                    <div className="card-body text-center d-flex flex-column justify-content-center">
                                        <img
                                            src="./assets/logo.png"
                                            alt="Logo"
                                            className="card-img-top rounded-top w-100"
                                            style={{
                                                height: '200px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <h5 className="card-title text-danger">See More Projects</h5>
                                        <p className="card-text">Explore all the other projects I've worked on.</p>
                                        <Link className="btn btn-danger w-100 mt-auto" to="/projects">
                                            View All Projects
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsShowcase;
