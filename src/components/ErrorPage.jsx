import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <section className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light text-center">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h1 className="display-1 text-danger">404</h1>
                <h2 className="mb-4">Page Not Found</h2>
                <p className="lead mb-4">Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-outline-danger btn-lg">
                    <i className="bi bi-house-door me-2"></i> Go to Homepage
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
