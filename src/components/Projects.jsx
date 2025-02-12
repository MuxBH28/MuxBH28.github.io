import React, { useEffect, useState } from 'react';
const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/src/assets/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error loading projects data:', error));
    }, []);

    return (
        <section className="bg-dark py-5" id="projects">
            <div className="container">
                <h2 className="text-center text-danger mb-4"><i className="bi bi-folder-check"></i> Projects</h2>
                <div className="row">
                    {projects.length === 0 ? (
                        <p className="text-center text-light">Loading projects...</p>
                    ) : (
                        projects.map((project, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 mb-4"
                                data-aos="fade-up"
                            >
                                <div className="card text-dark shadow-lg rounded h-100">
                                    <div className="card-header">
                                        <h5 className="card-title text-danger">
                                            <i className={`bi ${project.icon}`}></i> {project.title}
                                        </h5>
                                    </div>
                                    <img
                                        src={`/src/assets/projects/${project.image}`}
                                        alt={project.title}
                                        className="card-img rounded-bottom w-100"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        data-aos="zoom-in"
                                    />
                                    <div className="card-body">
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                    <div className="card-footer">
                                        <article className="d-flex justify-content-around text-center mt-3">
                                            <div className="d-flex flex-column align-items-center">
                                                <i className="bi bi-calendar4-range text-danger fs-3"></i>
                                                <span>{project.development}</span>
                                            </div>
                                            <div className="d-flex flex-column align-items-center">
                                                <i
                                                    className={`bi ${project.status === 'Completed'
                                                        ? 'bi-check-circle-fill text-success'
                                                        : project.status === 'On hold'
                                                            ? 'bi-pause-circle-fill text-warning'
                                                            : project.status === 'In progress'
                                                                ? 'bi-hourglass text-primary'
                                                                : project.status === 'Abandoned'
                                                                    ? 'bi-x-circle-fill text-danger'
                                                                    : 'bi-hdd-rack text-danger'
                                                        } fs-3`}
                                                ></i>
                                                <span>{project.status}</span>
                                            </div>
                                            <div className="d-flex flex-column align-items-center">
                                                <i
                                                    className={`bi ${project.category === 'Client' ? 'bi-bookmark-star text-warning' : 'bi-bookmark-heart text-danger'} fs-3`}
                                                ></i>
                                                {project.category}
                                            </div>
                                        </article>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-danger w-100 mt-2 text-decoration-none"
                                        >
                                            <i className="bi bi-box-arrow-up-right"></i> View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;