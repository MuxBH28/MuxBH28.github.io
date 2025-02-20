import React from "react";

const Hero = () => {
    return (
        <section className="bg-dark text-light vh-100" data-aos="fade-up">
            <div className="container d-flex flex-column-reverse flex-md-row align-items-center h-75">
                <div className="col-12 col-md-8 mt-4 mx-2">
                    <h1 className="display-1 mb-2 text-danger">
                        Welcome
                    </h1>
                    <blockquote className="blockquote" data-aos="fade-up">
                        <p className="fs-3 mb-0 fw-bold" style={{ fontStyle: 'italic' }}>
                            Started shaping my digital journey in 2008 with Windows Vista Chess.
                        </p>
                    </blockquote>
                </div>
                <div className="col-12 col-md-4" data-aos="fade-right">
                    <img src="./assets/logo.png" alt="Logo" className="img-fluid w-75 d-block mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;