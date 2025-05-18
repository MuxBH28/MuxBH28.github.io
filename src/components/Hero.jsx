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

            <div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-between h-100 position-relative content-wrapper">
                <div className="col-12 col-md-7 hero-text-box">
                    <h1 className="hero-title">
                        Welcome
                    </h1>
                    <blockquote className="blockquote" data-aos="fade-up">
                        <p className="fs-4 fw-semibold hero-quote">
                            It all started in 2008 with a game of Chess on Windows Vista <span className="text-danger">&#9817;</span>
                        </p>
                    </blockquote>
                </div>

                <div className="col-12 col-md-4 mb-5 mb-md-0" data-aos="fade-right">
                    <div className="w-100 d-flex justify-content-center">
                        <img
                            src="./assets/logo.png"
                            alt="Logo"
                            className="hero-logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
