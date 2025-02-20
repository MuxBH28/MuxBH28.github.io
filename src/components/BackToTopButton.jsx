import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`btn btn-danger position-fixed bottom-0 end-0 m-3 fs-4 ${isVisible ? "d-block" : "d-none"}`}
            style={{ zIndex: 1000 }}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
        >
            <i className="bi bi-chevron-double-up"></i>
        </button>
    );
};

export default BackToTopButton;
