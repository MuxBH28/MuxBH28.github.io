import React from "react";

const About = () => {
    return (
        <section id="about" className="p-5 bg-dark" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="row d-flex text-light">
                <div className="col-lg-9" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out">
                    <h2 className="mb-4 text-danger"><i className="bi bi-file-earmark-person"></i> About Me</h2>

                    <p>👋 Hi, my name is Muhammed Šehić, a first-year student at the <a href="https://www.etf.unsa.ba/" target="_blank" >Faculty of Electrical Engineering, Sarajevo</a>, Software Development. I was born in 2003 in a cold December, so every year in the same month I have to listen to <a href="https://youtu.be/lqvYdYlSC64" target="_blank" >this song</a>.</p>
                    <p>👀 I have been interested in technology, electricity, electronics, and video games from a young age! All these factors, and a few more, influenced my decision to attend <a href="https://etssa.edu.ba/" target="_blank" >this high school</a> - a decision I have never regretted.</p>
                    <p>🌱 Currently, in addition to my regular college duties, I am learning and improving skills such as programming, video editing, Photoshop, playing video games, and creating them as well.</p>
                    <p>💻 I am a big fan of movies and <b>American</b> TV shows, so in my free time I enjoy watching them.</p>
                    <p title="This sentence has remained since the very beginning of my portfolio text, so let it stay">🎵 Although I was born after certain musical hits, it doesn't stop me from listening to and enjoying them. Most of them are artists who had contracts with the Yugoslav giant called <a href="https://youtu.be/tvHfGBrrUVE" target="_blank" >Studio MMI - Južni Vetar</a>. <br />But if you ask for my favourite artist, it is definitely this <a href="https://youtu.be/loV30grvx4I" target="_blank">Legend</a>.</p>
                    <p>🚕 At the time of my birth, <a href="https://youtu.be/4XvoXmcmVyQ" target="_blank" >this popular single</a> was out. Ironically, I was born during the same time.</p>
                    <p>📫 If you'd like to get in touch, you can do so in several ways depending on what you need! Contact links are available at the <a href="/contact" >contact page</a>.</p>

                    <blockquote className="blockquote text-center mt-5" data-aos="fade-up" data-aos-duration="1400" data-aos-easing="ease-in-out">
                        <p className="fs-4 mb-0 fw-bold" style={{ fontStyle: 'italic' }}>
                            When you're alone, you're not really alone, the devil is with you.
                        </p>
                        <footer className="blockquote-footer mt-2">
                            Random r/bih comment
                        </footer>
                    </blockquote>
                </div>

                <div className="col-lg-3 text-center d-flex flex-column" data-aos="fade-up" data-aos-duration="1600" data-aos-easing="ease-in-out">
                    <img
                        src="./assets/muhammed.jpg"
                        alt="Muhammed Šehić in December of 2022"
                        className="img-fluid rounded mb-4"
                    />
                    <div className="bg-light text-black p-3 rounded">
                        <h5 className="mb-3 text-danger">
                            <i className="bi bi-info-circle"></i> Basic Info
                        </h5>
                        <ul className="list-unstyled text-start">
                            <li>
                                <strong><i className="bi bi-person"></i> Full Name: </strong> Muhammed Šehić
                            </li>
                            <li>
                                <strong><i className="bi bi-envelope"></i> Email: </strong>
                                <a href="mailto:sehicmuhammed7@proton.me" className="text-dark">
                                    sehicmuhammed7@proton.me
                                </a>
                            </li>
                            <li>
                                <strong><i className="bi bi-geo-alt"></i> Location: </strong> Bosnia and Herzegovina
                            </li>
                            <li>
                                <strong><i className="bi bi-chat-left-text"></i> Languages: </strong> Bosnian, English
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
