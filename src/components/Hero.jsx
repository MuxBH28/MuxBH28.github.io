import React from "react";

const Hero = () => {
    return (
        <section className="bg-dark text-light py-5 vh-100" data-aos="fade-up">
            <div className="container d-flex flex-column-reverse flex-md-row align-items-center h-100">
                <div className="col-12 col-md-8 mb-4 mb-md-0">
                    <h1 className="display-4 mb-4 text-danger">
                        Welcome
                    </h1>
                    <blockquote className="blockquote text-center mt-5" data-aos="fade-up">
                        <p className="fs-4 mb-0 fw-bold" style={{ fontStyle: 'italic' }}>
                            Started shaping my digital journey in 2008 with Windows Vista Chess.
                        </p>
                    </blockquote>
                    <a href="#about" className="btn btn-outline-danger btn-lg text-decoration-none w-50 d-block mx-auto" data-aos="fade-up">
                        About Me
                    </a>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center" data-aos="fade-right">
                    <img src="./assets/logo.gif" alt="Logo" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default Hero;