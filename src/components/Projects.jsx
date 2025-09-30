import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);

    useEffect(() => {
        fetch('./assets/projects.json')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error loading projects data:', error));
    }, []);

    const handleCopy = (link, index) => {
        navigator.clipboard.writeText(link);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section className="bg-dark py-5" id="projects">
            <div className="container">
                <h2 className="text-center text-danger mb-5">
                    <i className="bi bi-folder-check me-2"></i> My Projects
                </h2>

                <div className="row g-4">
                    {projects.length === 0 ? (
                        <p className="text-center text-light">Loading projects...</p>
                    ) : (
                        projects.map((project, index) => (
                            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up">
                                <div className="card h-100 border-0 shadow-lg">
                                    <img
                                        src={`./assets/projects/${project.image}`}
                                        alt={project.title}
                                        className="card-img-top"
                                        style={{ height: '200px', objectFit: 'cover' }}
                                        data-aos="zoom-in"
                                    />
                                    <div className="card-body bg-light">
                                        <h5 className="card-title text-danger">
                                            <i className={`bi ${project.icon} me-2`}></i>
                                            {project.title}
                                        </h5>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                    <div className="card-footer bg-light">
                                        <div className="d-flex justify-content-between text-center">
                                            <div>
                                                <i className="bi bi-calendar4-range text-danger fs-5"></i>
                                                <div className="small">{project.development}</div>
                                            </div>
                                            <div>
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
                                                        } fs-5`}
                                                ></i>
                                                <div className="small">{project.status}</div>
                                            </div>
                                            <div>
                                                <i
                                                    className={`bi ${project.category === 'Client'
                                                        ? 'bi-bookmark-star text-warning'
                                                        : 'bi-bookmark-heart text-danger'
                                                        } fs-5`}
                                                ></i>
                                                <div className="small">{project.category}</div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-sm btn-outline-danger flex-grow-1 me-2"
                                            >
                                                <i className="bi bi-box-arrow-up-right me-1"></i> View
                                            </a>
                                            <button
                                                className="btn btn-sm btn-outline-info"
                                                onClick={() => handleCopy(project.link, index)}
                                            >
                                                <i
                                                    className={`bi ${copiedIndex === index
                                                        ? 'bi-clipboard-check text-success'
                                                        : 'bi-share'
                                                        }`}
                                                ></i>
                                            </button>
                                        </div>
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