import { useState, useEffect } from "react";

const links = [
    {
        href: "mailto:sehicmuhammed7@proton.me",
        label: "Email",
        icon: "bi-envelope-at",
    },
    {
        href: "https://www.instagram.com/m.shc28/",
        label: "Instagram",
        icon: "bi-instagram",
    },
    {
        href: "https://github.com/MuxBH28",
        label: "GitHub",
        icon: "bi-github",
    },
    {
        href: "https://www.linkedin.com/in/muhammed-šehić-31a7b6175/",
        label: "LinkedIn",
        icon: "bi-linkedin",
    },
    {
        href: "https://discord.com/users/455800304059809803",
        label: "Discord",
        icon: "bi-discord",
    },
    {
        href: "https://steamcommunity.com/id/muxbh28",
        label: "Steam",
        icon: "bi-steam",
    }
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [recaptchaToken, setRecaptchaToken] = useState("");

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?render=6Lfkl9UqAAAAAGrrjFG4t3jo5xE9mU2ZzmC82PC8";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.grecaptcha.ready(() => {
                window.grecaptcha.execute("6Lfkl9UqAAAAAGrrjFG4t3jo5xE9mU2ZzmC82PC8", { action: "submit" })
                    .then((token) => {
                        setRecaptchaToken(token);
                    });
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const responseMsg = document.getElementById('responseMsg');

        if (!recaptchaToken) {
            responseMsg.innerText = "Please verify the CAPTCHA.";
            return;
        }

        setIsSubmitting(true);

        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);
        data.append("g-recaptcha-response", recaptchaToken);

        try {
            const response = await fetch("http://etse.atwebpages.com/contact.php", {
                method: "POST",
                body: data,
            });

            const result = await response.text();
            alert(result);

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                setRecaptchaToken("");
            }

        } catch (error) {
            responseMsg.innerText = "Error sending the message. Please try again later.";
        }

        setIsSubmitting(false);
    };

    return (
        <section className="d-flex justify-content-center align-items-center vh-100 bg-dark" data-aos="fade">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                        <div className="contact-card p-5 rounded shadow-lg text-center w-100">
                            <h1 className="text-danger mb-4 fw-bold">
                                <i className="bi bi-telephone"></i> Contact Me
                            </h1>

                            <ul className="list-unstyled mb-4">
                                {links.map(({ href, label, icon }, index) => (
                                    <li key={index} className="mb-3" data-aos="fade-up">
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-danger w-100"
                                        >
                                            <i className={`bi ${icon} me-2`}></i> {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="contact-card p-5 rounded shadow-lg w-100">
                            <h2 className="text-danger mb-4 fw-bold"><i className="bi bi-chat-dots"></i> Or send a Message</h2>
                            <form onSubmit={handleSubmit} className="text-start">
                                <div className="mb-3" data-aos="fade-up" data-aos-duration="1000">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3" data-aos="fade-up" data-aos-duration="1200">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3" data-aos="fade-up" data-aos-duration="1400">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Your Message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <input type="hidden" name="g-recaptcha-response" value={recaptchaToken} />
                                <p id="responseMsg" className="text-danger"></p>
                                <button type="submit" className="btn btn-danger w-100" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;