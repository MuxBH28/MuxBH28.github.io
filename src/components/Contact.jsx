import { useState } from "react";
import axios from 'axios';

const emailPart = "contact";
const proton = "msehic.com";

const links = [
    {
        href: `mailto:${emailPart}@${proton}`,
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
    },
];


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const responseMsg = document.getElementById('responseMsg');

        try {
            const response = await axios({
                url: "https://nocodeform.io/f/6829f64f366a22e619fdc271",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                data: {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }
            });

            responseMsg.innerText = "Message sent successfully!";
            setFormData({ name: "", email: "", message: "" });

        } catch (error) {
            console.error(error);
            responseMsg.innerText = "Error sending the message. Please try again later.";
        }

        setIsSubmitting(false);
    };

    return (
        <section
            className="d-flex justify-content-center align-items-center bg-dark py-5"
            data-aos="fade"
        >
            <div className="container">
                <div className="row gy-4">
                    {/* Lijeva kolona */}
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-stretch">
                        <div className="contact-card p-4 p-md-5 rounded shadow-lg text-center w-100">
                            <h1 className="text-danger mb-4 fw-bold">
                                <i className="bi bi-telephone"></i> Contact Me
                            </h1>

                            <ul className="list-unstyled mb-0">
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

                    {/* Desna kolona */}
                    <div className="col-12 col-md-6 d-flex align-items-stretch">
                        <div className="contact-card p-4 p-md-5 rounded shadow-lg w-100">
                            <h2 className="text-danger mb-4 fw-bold">
                                <i className="bi bi-chat-dots"></i> Or send a Message
                            </h2>
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

                                <p id="responseMsg" className="mt-2 text-white"></p>

                                <button
                                    type="submit"
                                    className="btn btn-danger w-100"
                                    disabled={isSubmitting}
                                >
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
