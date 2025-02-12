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

const Contact = () => (
    <section className="d-flex justify-content-center align-items-center vh-100 bg-dark" data-aos="fade">
        <div className="contact-card p-5 rounded shadow-lg text-center">
            <h1 className="text-danger mb-4 fw-bold"><i className="bi bi-telephone"></i> Contact Me</h1>
            <ul className="list-unstyled mb-0">
                {links.map(({ href, label, icon }, index) => (
                    <li
                        key={index}
                        className="mb-3"
                        data-aos="fade-up"
                    >
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-danger w-100 text-decoration-none"
                        >
                            <i className={`bi ${icon} me-2`}></i> {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Contact;
