import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const containerRef = useRef(null);
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const texts = ["Welcome", "Innovate", "Create", "Develop"];
    const fullText = texts[currentIndex];

    const icons = useRef(
        [
            "bi-code-slash", "bi-laptop", "bi-terminal", "bi-hdd",
            "bi-cpu", "bi-cloud", "bi-server", "bi-motherboard",
            "bi-hammer", "bi-shield-lock"
        ].map(icon => ({
            class: icon,
            top: Math.random() * 100,
            left: Math.random() * 100,
            fontSize: 2 + Math.random() * 3,
            duration: 2.5 + Math.random() * 2
        }))
    );

    useEffect(() => {
        if (!isAnimating) return;

        const timeout = setTimeout(() => {
            if (typedText.length < fullText.length) {
                setTypedText(fullText.substring(0, typedText.length + 1));
            } else {
                setIsAnimating(false);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                    setTypedText('');
                    setIsAnimating(true);
                }, 2000);
            }
        }, 150);

        return () => clearTimeout(timeout);
    }, [typedText, isAnimating, fullText]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 3 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        top: ${posY}%;
        left: ${posX}%;
        background: rgba(255, ${Math.random() * 55 + 200}, ${Math.random() * 55 + 200}, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        animation: float ${Math.random() * 5 + 5}s ease-out forwards;
        z-index: 1;
      `;

            container.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 5000);
        };

        for (let i = 0; i < 30; i++) createParticle();
        const particleInterval = setInterval(createParticle, 300);

        return () => clearInterval(particleInterval);
    }, []);

    useEffect(() => {
        const animateNumber = (el, target, duration = 2000) => {
            let start = 0;
            const step = () => {
                const progress = Math.min(1, start / duration);
                el.innerText = Math.floor(progress * target);
                if (progress < 1) {
                    start += 30;
                    requestAnimationFrame(step);
                } else {
                    el.innerText = target;
                }
            };
            requestAnimationFrame(step);
        };

        const statElements = document.querySelectorAll('.stat-number');
        statElements.forEach((el) => {
            const target = +el.getAttribute('data-count');
            animateNumber(el, target);
        });
    }, []);

    return (
        <section
            className="hero-section bg-dark text-light position-relative overflow-hidden d-flex flex-column justify-content-center px-3 py-5"
            style={{ height: isLarge ? '100vh' : 'auto' }}
            ref={containerRef}
        >


            {icons.current.map((icon, index) => (
                <i
                    key={index}
                    className={`bi ${icon.class} floating-icon`}
                    style={{
                        fontSize: `${icon.fontSize}rem`,
                        top: `${icon.top}%`,
                        left: `${icon.left}%`,
                        animationDuration: `${icon.duration}s`,
                    }}
                />
            ))}


            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between h-100 position-relative z-2 gap-4 text-center text-md-start">
                <div className="col-12 col-md-7 mb-4 mb-md-0">
                    <h1 className="hero-title fs-1 mb-3">
                        <span className="typed-text">{typedText}</span>
                        <span className="cursor-blink">|</span>
                    </h1>

                    <blockquote className="blockquote glitch-text" data-aos="fade-up">
                        <p
                            className="fs-5 fw-semibold hero-quote glitch-text"
                            data-text="It all started in 2008 with a game of Chess on Windows Vista"
                        >
                            It all started in 2008 with a game of Chess on Windows Vista <span className="text-danger">&#9817;</span>
                        </p>

                    </blockquote>

                    <div className="stats-counter d-flex flex-wrap justify-content-center justify-content-md-start mt-4 gap-4">
                        <div className="stat">
                            <div className="stat-number" data-count="20">0</div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number" data-count="3">0</div>
                            <div className="stat-label">Years</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number" data-count="10">0</div>
                            <div className="stat-label">Clients</div>
                        </div>
                    </div>
                </div>

                <div className="position-relative text-center">
                    <img
                        src="./assets/logo.png"
                        alt="Logo"
                        className="position-relative z-2 img-fluid"
                        style={{ maxWidth: "150px" }}
                    />

                </div>

            </div>

            {isLarge && <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="arrow-down"></div>
            </div>}
        </section>
    );
};

export default Hero;
