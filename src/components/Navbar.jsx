import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-danger shadow-lg" data-aos="fade-down" data-aos-duration="1500">
            <div className="container">
                <Link className="navbar-brand text-danger fw-bold" to="/">
                    <i className="bi bi-code-slash me-2 fs-3"></i>msehic
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <Link
                            className="nav-link text-light fs-5 px-3 py-2 rounded-3 hover-underline-animation"
                            to="/"
                            data-aos="fade-left"
                            data-aos-duration="1200"
                        >
                            <i className="bi bi-house-door me-2"></i>Home
                        </Link>
                        <Link
                            className="nav-link text-light fs-5 px-3 py-2 rounded-3 hover-underline-animation"
                            to="/projects"
                            data-aos="fade-left"
                            data-aos-duration="1300"
                        >
                            <i className="bi bi-folder-check me-2"></i>Projects
                        </Link>
                        <Link
                            className="nav-link text-light fs-5 px-3 py-2 rounded-3 hover-underline-animation"
                            to="/contact"
                            data-aos="fade-left"
                            data-aos-duration="1400"
                        >
                            <i className="bi bi-envelope me-2"></i>Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
