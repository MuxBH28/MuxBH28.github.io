import React from "react";

const faqData = [
    {
        question: "What services do you offer?",
        answer: "I specialize in web and software development, UI/UX design, and project management. My goal is to create clean, modern, and functional websites and applications, tailored to your specific business needs. Whether it's a simple landing page or a complex web application, I try to ensure top-notch quality in every project.",
    },
    {
        question: "How long does it take to complete a project?",
        answer: "The timeline depends on the size and complexity of the project. For smaller projects, such as a landing page or a simple app, it can take around one to two weeks. Larger, more intricate projects may take a few months. I always aim to deliver on time while ensuring that every detail meets your expectations.",
    },
    {
        question: "What technologies do you use?",
        answer: "I work with a wide range of modern technologies, with a focus on React, Node.js, Vite, Bootstrap, Tailwind CSS, and Electron for cross-platform applications. For backend development, I primarily use Express, along with databases like MongoDB, SQL, NeDB, or other local databases based on project needs. I select the best tools based on your requirements for performance, scalability, and maintainability.",
    },
    {
        question: "Do you work alone?",
        answer: "I consider myself a 'one-man army' and in about 90% of the cases, I work solo. However, that doesn't mean I can't collaborate with others when needed. I'm always open to teamwork if the project requires it!",
    },
    {
        question: "Do I need to have a hosting server?",
        answer: "No, you don't need to have a hosting server to start the project. I can handle the hosting setup for you. However, if you already have a hosting provider, we can work with that as well.",
    },
    {
        question: "What is your pricing model?",
        answer: "My pricing model depends on the complexity and scope of the project. For smaller projects, I offer fixed pricing based on the requirements, while larger projects may be charged on an monthly or milestone basis. I always provide an upfront estimate after our initial discussion, so you know what to expect.",
    },
    {
        question: "Do you offer support after the project is completed?",
        answer: "Absolutely! Post-launch support is a key part of my services. If we agree on the terms, I will assist with bug fixes, updates, and any necessary improvements. I also offer ongoing maintenance services to ensure that your project remains secure and functional as technologies evolve.",
    },
    {
        question: "How do we get started?",
        answer: "Getting started is simple! Reach out to me via the 'Contact' section on my website. After a brief discussion about your project goals, I will send you a detailed proposal and an estimated timeline. From there, we can move forward with planning and development, making sure everything aligns with your vision and objectives.",
    }
];

const FAQ = () => {
    return (
        <section className="py-5 bg-dark text-light" id="faq">
            <div className="container">
                <h2 className="text-center text-danger mb-4" data-aos="fade-up">
                    <i className="bi bi-question-circle"></i> FAQ
                </h2>
                <div className="accordion" id="faqAccordion">
                    {faqData.map((item, index) => (
                        <div key={index} className="accordion-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className="accordion-button text-danger"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;