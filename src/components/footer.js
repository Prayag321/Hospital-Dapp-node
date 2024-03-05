import React from 'react';
import footerStyles from "../style/footer.module.css";

function Footer() {
    return (
        <footer className="site-footer bg-black bg-gradient text-white p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <p>Pillai HOC College</p>
                        <p>Phone: +91 93261 73967</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#" className="link-info">Home</a></li>
                            <li><a href="/#services" className="link-info">Services</a></li>
                            <li><a href="/#contactus" className="link-info">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Connect With Us</h3>
                        <ul className="social-icons">
                            <li><a href="mailto:adityana20it@student.mes.ac.in" className="link-info">@student.mes.ac.in</a></li>
                            <li><a href="mailto:prayagmb20it@student.mes.ac.in" className="link-info">@student.mes.ac.in</a></li>
                            <li><a href="mailto:rohanmk20it@student.mes.ac.in" className="link-info">@student.mes.ac.in</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Customer Support: +91 8369204930 | Email: <span><a href="mailto:rohanmk20it@student.mes.ac.in" className="link-info">rohanmk20it@student.mes.ac.in</a></span>
                        </p>
                        <p>
                            &copy; 2024 Hospital Management System. All Rights Reserved | Designed by <span className="font-monospace text-info">AirSheild</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
