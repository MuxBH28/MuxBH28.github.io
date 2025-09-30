const recommendations = [
    {
        name: "Arch Linux",
        description: "I use Arch, btw.",
        icon: "bi-pc-display",
        link: "https://archlinux.org/",
        color: "text-primary",
    },
    {
        name: "VLC",
        description: "Stands for 'Very Large Cone'. Put any type of video in it and it will play - no matter what!",
        icon: "bi-cone-striped",
        link: "https://www.videolan.org/",
        color: "text-warning",
    },
    {
        name: "qBittorent",
        description: "Best software for downloading Linux ISO or any other files :)",
        icon: "bi-cloud-arrow-down",
        link: "https://www.qbittorrent.org/",
        color: "text-info",
    },
    {
        name: "Floorp",
        description: "Firefox? Well it is, but better!",
        icon: "bi-browser-firefox",
        link: "https://floorp.app/",
        color: "text-primary",
    },
    {
        name: "Bootstrap",
        description: "Powerful CSS framework for building responsive websites quickly.",
        icon: "bi-bootstrap",
        link: "https://getbootstrap.com/",
        color: "text-info",
    },
    {
        name: "Proton.me",
        description: "Email, cloud storage, password manager, calendar, wallet and a VPN! Privacy by default.",
        icon: "bi-envelope-check",
        link: "https://proton.me/",
        color: "text-dark",
    },
    {
        name: "n:point",
        description: "Set up a lightweight JSON endpoint in seconds, then add a schema to edit your data safely at any time.",
        icon: "bi-filetype-json",
        link: "https://www.npoint.io/",
        color: "text-secondary",
    },
    {
        name: "Open Hardware Monitor",
        description: "Free open source software that monitors sensors of a computer.",
        icon: "bi-cpu",
        link: "https://openhardwaremonitor.org/",
        color: "text-secondary",
    }
];

const Recommendations = () => {
    return (
        <section className="py-5 bg-dark text-light" id="recommendations">
            <div className="container">
                <h2 className="text-center text-danger mb-5" data-aos="fade-up">
                    <i className="bi bi-star me-2"></i> Tools I Recommend
                </h2>

                <div className="row g-4">
                    {recommendations.map((tool, index) => (
                        <div key={index} className="col-lg-3 col-md-4" data-aos="zoom-in" data-aos-duration="800">
                            <div className="card h-100 border-0 shadow-lg">
                                <div className="card-body text-center bg-light text-dark d-flex flex-column">
                                    <div className="mb-3">
                                        <i className={`bi ${tool.icon} ${tool.color} display-5`}></i>
                                    </div>
                                    <h5 className="card-title fw-bold">{tool.name}</h5>
                                    <p className="card-text flex-grow-1">{tool.description}</p>
                                    <a
                                        href={tool.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline-danger mt-3"
                                    >
                                        Visit <i className="bi bi-box-arrow-up-right ms-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Recommendations;
