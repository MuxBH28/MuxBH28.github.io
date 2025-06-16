import { useEffect, useState } from "react";

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
                    <div className="col-lg-6" data-aos="zoom-in" data-aos-duration="1200">
                        <div className="latest-card glass-card p-4 rounded shadow-lg">
                            <h4 className="mb-3 text-danger fw-bold">
                                <i className={`bi ${latestProject.icon} me-2`}></i>
                                {latestProject.title}
                            </h4>
                            <p className="mb-4 text-light-emphasis fs-5">
                                <i className="bi bi-info-circle me-2"></i>
                                {latestProject.description}
                            </p>
                            <a
                                href=`https://latestProject.link`
                            target="_blank"
                            rel="noopener noreferrer"
                                className="btn btn-outline-danger px-4">
                            <i className="bi bi-link-45deg me-1"></i> View More
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section >
    );
};

export default Latest;