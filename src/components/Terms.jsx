const Terms = () => {
    return (
        <section className="p-5 max-w-4xl mx-auto text-gray-900 bg-white rounded-md shadow-md">
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold text-danger">
                    <i className="bi bi-file-earmark-text me-2"></i> Terms and Conditions
                </h1>
                <p className="text-muted mt-2">Updated: September 2025</p>
            </header>

            {[
                {
                    title: '1. Scope of Services',
                    icon: 'bi-globe',
                    content:
                        'I provide services related to the development of websites and digital projects, including design and maintenance. Consultations are always free of charge. This document outlines the terms governing the cooperation between the Developer (myself) and the Client.',
                },
                {
                    title: '2. Ownership and Intellectual Property',
                    icon: 'bi-shield-lock',
                    content:
                        'The Client receives the final delivered product upon completion. The underlying source code, design assets, and development resources remain the sole property of the Developer. Direct access to source code is not granted unless agreed in writing.',
                },
                {
                    title: '3. Support and Maintenance',
                    icon: 'bi-tools',
                    content:
                        'Support is free for the first year. Afterward, an annual fee applies. Support is available Monday to Friday, 9:00 AM - 5:00 PM CET.',
                },
                {
                    title: '4. Disclaimer of Warranties',
                    icon: 'bi-exclamation-triangle',
                    content:
                        'The product is provided "as is" without warranties. The Developer does not guarantee uninterrupted availability or error-free performance.',
                },
                {
                    title: '5. Limitation of Liability',
                    icon: 'bi-slash-circle',
                    content:
                        'The Developer is not liable for indirect or consequential damages, including loss of profits, data, or business interruptions.',
                },
                {
                    title: '6. Client Responsibilities',
                    icon: 'bi-person-check',
                    content:
                        'Clients must use services ethically, protect credentials, and report issues promptly.',
                },
                {
                    title: '7. Termination of Service',
                    icon: 'bi-door-closed',
                    content:
                        'Clients may terminate cooperation by notifying the Developer. Data will be handled securely.',
                },
                {
                    title: '8. Dispute Resolution',
                    icon: 'bi-exclamation-circle',
                    content:
                        'Disputes will be resolved amicably or in a competent court within the Developer’s jurisdiction.',
                },
                {
                    title: '9. Final Provisions',
                    icon: 'bi-pencil-square',
                    content:
                        'Both parties must sign a Cooperation Agreement before any project begins.',
                },
            ].map((section, idx) => (
                <div key={idx} className="mx-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <i className={`bi ${section.icon} me-2 text-danger`}></i>
                        {section.title}
                    </h3>
                    <p className="text-gray-700">{section.content}</p>
                </div>
            ))}
        </section>
    );
};

export default Terms;
