import React from "react";

const Footer = () => {
    return (
        <footer className="py-4 border-top border-danger" data-aos="fade" data-aos-duration="1500">
            <div className="container text-center">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} Muhammed Šehić<br />
                    <a
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-danger text-decoration-none fw-bold"
                    >
                        CC BY 4.0
                    </a>
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="mailto:sehicmuhammed7@proton.me" target="_blank" rel="noopener noreferrer" className="text-danger fs-4">
                        <i className="bi bi-envelope-at"></i>
                    </a>
                    <a href="https://www.instagram.com/m.shc28/" target="_blank" rel="noopener noreferrer" className="text-danger fs-4">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://github.com/MuxBH28" target="_blank" rel="noopener noreferrer" className="text-danger fs-4">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/muhammed-šehić-31a7b6175/" target="_blank" rel="noopener noreferrer" className="text-danger fs-4">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;