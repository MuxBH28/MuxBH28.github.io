import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true);

    useEffect(() => {
        // Zatvori navbar kad se ruta promijeni
        setIsCollapsed(true);
    }, [location]);

    const handleToggle = () => setIsCollapsed(!isCollapsed);

    const navItems = [
        { to: "/", label: "Home", icon: "bi-house-door", delay: 1200 },
        { to: "/projects", label: "Projects", icon: "bi-folder-check", delay: 1300 },
        { to: "/terms", label: "Terms", icon: "bi-briefcase", delay: 1300 },
        { to: "/contact", label: "Contact", icon: "bi-envelope", delay: 1400 },
    ];

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-danger shadow-lg"
            data-aos="fade-down"
            data-aos-duration="1500"
        >
            <div className="container">
                <Link className="navbar-brand text-danger fw-bold" to="/">
                    <i className="bi bi-code-slash me-2 fs-3"></i> msehic
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item, idx) => (
                            <li key={idx} className="nav-item">
                                <Link
                                    to={item.to}
                                    className={`nav-link fs-5 px-3 py-2 rounded-3 hover-underline-animation ${location.pathname === item.to ? "active text-danger fw-bold" : "text-light"
                                        }`}
                                    onClick={() => setIsCollapsed(true)}
                                    data-aos="fade-left"
                                    data-aos-duration={item.delay}
                                >
                                    <i className={`bi ${item.icon} me-2`}></i> {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
