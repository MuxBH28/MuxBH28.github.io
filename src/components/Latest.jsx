import React, { useEffect, useState } from "react";

const Latest = () => {
    const [latestProject, setLatestProject] = useState(null);

    useEffect(() => {
        fetch("./assets/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setLatestProject(data[data.length - 1]);
            })
            .catch((error) => console.error("Error loading project data:", error));
    }, []);

    if (!latestProject) {
        return;
    }

    return (
        <section className="text-light py-5" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="container text-center">
                <h2 className="mb-4 text-danger">
                    <i className="bi bi-code-slash"></i> Latest Project
                </h2>
                <div className="row justify-content-center">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out">
                        <div className="card bg-light text-dark shadow-sm rounded">
                            <img
                                src={latestProject.image}
                                alt={latestProject.title}
                                className="w-75 h-auto mx-auto mt-3"
                                style={{ maxHeight: '300px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <h4 className="card-title">
                                    <i className={`bi ${latestProject.icon}`}></i> {latestProject.title}
                                </h4>
                                <p className="card-text">
                                    <i className="bi bi-info-circle"></i> {latestProject.description}
                                </p>
                                <a
                                    href={latestProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-danger">
                                    <i className="bi bi-link-45deg"></i> Info
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Latest;