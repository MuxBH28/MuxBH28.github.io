import React from "react";

const Card = ({ title, items, linkTitle, linkUrl }) => {
    return (
        <div className="col-12 col-md-4 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="card text-black py-5 rounded shadow-sm h-100">
                <div className="card-body">
                    <h4 className="card-title text-danger">
                        <i className={`bi ${title.icon}`} /> {title.name}
                    </h4>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.url ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-danger">
                                        {item.name}
                                    </a>
                                ) : (
                                    item.name
                                )}
                            </li>
                        ))}
                    </ul>
                    {linkTitle && linkUrl && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-danger">
                            {linkTitle}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2
                    className="mb-5 text-center text-danger fw-bold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <i className="bi bi-lightbulb me-2" />
                    My Skillset
                </h2>

                <div className="row g-4">
                    {[
                        {
                            title: 'Programming',
                            icon: 'bi-laptop',
                            items: ['Node.js', 'React', 'Python', 'SQL, MongoDB', 'C++', 'C', 'PHP', 'Pascal', '...'],
                        },
                        {
                            title: 'Photo & Video',
                            icon: 'bi-camera',
                            items: [
                                'Adobe Photoshop',
                                'GIMP',
                                'Inkscape',
                                'Canva',
                                'MS Paint',
                                'Vegas',
                                { name: 'Filmora', url: 'https://youtu.be/_bmK4C8KEkE' },
                                'Adobe Premiere Pro',
                            ],
                        },
                        {
                            title: 'Other',
                            icon: 'bi-gear',
                            items: [
                                'AC/DC projects',
                                { name: 'Arduino', url: 'https://vatrodojava.rf.gd/' },
                                { name: 'Adobe InDesign', url: './src/assets/nove_iskre_49.pdf' },
                                { name: 'GDevelop', url: 'https://sehic.itch.io/' },
                                { name: 'Electron', url: 'https://github.com/MuxBH28/volim-te-app' },
                                'Delphi/Lazarus',
                                'Figma',
                                'Wordpress',
                                { name: 'Browser Extensions', url: 'https://github.com/MuxBH28/web-widgetizer/' },
                            ],
                        },
                    ].map((category, idx) => (
                        <div className="col-md-4" key={idx}>
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <h5 className="card-title text-center text-secondary">
                                        <i className={`bi ${category.icon} me-2`} />
                                        {category.title}
                                    </h5>
                                    <ul className="list-unstyled mt-3">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="mb-2">
                                                {typeof item === 'string' ? (
                                                    <i className="bi bi-check-circle me-2 text-success" />
                                                ) : (
                                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                        <i className="bi bi-link-45deg me-2" />
                                                        {item.name}
                                                    </a>
                                                )}
                                                {typeof item === 'string' ? item : null}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
