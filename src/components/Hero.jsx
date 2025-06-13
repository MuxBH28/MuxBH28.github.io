import React from "react";

const Hero = () => {
    const icons = [
        "bi-code-slash",
        "bi-laptop",
        "bi-terminal",
        "bi-hdd",
        "bi-cpu",
        "bi-cloud",
        "bi-server",
        "bi-motherboard",
        "bi-hammer",
        "bi-shield-lock"
    ];


    return (
        <section className="hero-section bg-dark text-light vh-100 position-relative overflow-hidden d-flex align-items-center" data-aos="fade-up">
            {icons.map((icon, index) => (
                <i
                    key={index}
                    className={`bi ${icon} floating-icon`}
                    style={{
                        fontSize: `${2 + Math.random() * 3}rem`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${2.5 + Math.random() * 2}s`,
                    }}
                />
            ))}

            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between h-100 position-relative content-wrapper">
                <div className="col-12 col-md-7 hero-text-box text-center text-md-start mb-4 mb-md-0">
                    <h1 className="hero-title fs-3 fs-md-1">
                        Welcome
                    </h1>
                    <blockquote className="blockquote" data-aos="fade-up">
                        <p className="fs-5 fw-semibold hero-quote">
                            It all started in 2008 with a game of Chess on Windows Vista <span className="text-danger">&#9817;</span>
                        </p>
                    </blockquote>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center" data-aos="fade-right">
                    <img
                        src="./assets/logo.png"
                        alt="Logo"
                        className="img-fluid"
                        style={{ maxWidth: "150px" }}
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
