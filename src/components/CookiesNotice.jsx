import { useState, useEffect } from "react";

const CookiesNotice = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const cookieAccepted = localStorage.getItem("cookieAccepted");
        if (!cookieAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem("cookieAccepted", "true");
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div
                className="cookies-notice fixed-bottom bg-dark text-light p-3 text-center border-top border-danger"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p className="mb-0">
                    <strong>Note:</strong> This website does not collect any personal data. By using this site, you consent to the use of cookies for basic functionality only.
                    <button
                        className="btn btn-danger d-inline-block ms-2"
                        onClick={handleClose}
                    >
                        Got it!
                    </button>
                </p>
            </div>
        )
    );
};

export default CookiesNotice;
