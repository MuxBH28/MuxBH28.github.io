import React from "react";

const Card = ({ title, items, linkTitle, linkUrl }) => {
    return (
        <div className="col-6 col-md-3 mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="card text-black py-5 rounded shadow-sm h-100">
                <div className="card-body">
                    <h4 className="card-title text-danger">
                        <i className={`bi ${title.icon}`} /> {title.name}
                    </h4>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.url ? (
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
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
        <section className="py-5">
            <article className="container">
                <h2 className="mb-4 text-center text-danger" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out">
                    <i className="bi bi-lightbulb" /> Skills
                </h2>
                <div className="row">
                    <Card
                        title={{ name: 'Programming', icon: 'bi-laptop' }}
                        items={[
                            { name: 'Node.js' },
                            { name: 'React' },
                            { name: 'Python' },
                            { name: 'SQL, MongoDB' },
                            { name: 'C++' },
                            { name: 'C' },
                            { name: 'PHP' },
                            { name: 'Pascal' },
                            { name: '...' },
                        ]}
                    />

                    <Card
                        title={{ name: 'Photo', icon: 'bi-camera' }}
                        items={[
                            { name: 'Adobe Photoshop' },
                            { name: 'GIMP' },
                            { name: 'Inkscape' },
                            { name: 'Canva' },
                            { name: 'MS Paint' },
                        ]}
                    />

                    <Card
                        title={{ name: 'Video', icon: 'bi-film' }}
                        items={[
                            { name: 'Vegas' },
                            { name: 'Filmora', url: 'https://youtu.be/_bmK4C8KEkE' },
                            { name: 'Adobe Premiere Pro' },
                            { name: 'Canva' },
                        ]}
                    />

                    <Card
                        title={{ name: 'Other', icon: 'bi-gear' }}
                        items={[
                            { name: 'AC/DC projects' },
                            { name: 'Arduino', url: 'https://vatrodojava.rf.gd/' },
                            { name: 'Adobe InDesign', url: './src/assets/nove_iskre_49.pdf' },
                            { name: 'GDevelop', url: 'https://sehic.itch.io/' },
                            { name: 'Electron', url: 'https://github.com/MuxBH28/volim-te-app' },
                            { name: 'Delphi/Lazarus' },
                            { name: 'Figma' },
                            { name: 'Wordpress' },
                            { name: 'Browser Extensions', url: 'https://github.com/MuxBH28/web-widgetizer/' },
                        ]}
                    />
                </div>
            </article>
        </section>
    );
};

export default Skills;
