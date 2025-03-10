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
        link: "https://floorp.app/en",
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
        description: "Free open source software that monitors temperature sensors, fan speeds, voltages, load and clock speeds of a computer.",
        icon: "bi-cpu",
        link: "https://openhardwaremonitor.org/",
        color: "text-secondary",
    }
];

const Recommendations = () => {
    return (
        <section className="py-5 bg-dark text-light" id="recommendations">
            <div className="container">
                <h2 className="text-center text-danger mb-4" data-aos="fade-up">
                    <i className="bi bi-star"></i> What I use?
                </h2>
                <div className="row">
                    {recommendations.map((tool, index) => (
                        <div key={index} className="col-lg-3 col-md-4 mb-4">
                            <div className="card bg-light text-dark shadow-sm border-0 rounded h-100" data-aos="zoom-in" data-aos-duration="800">
                                <div className="card-body text-center">
                                    <i className={`bi ${tool.icon} ${tool.color} display-4 mb-3`}></i>
                                    <h5 className="card-title">{tool.name}</h5>
                                    <p className="card-text">{tool.description}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-danger w-100">
                                        Visit <i className="bi bi-box-arrow-up-right"></i>
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
