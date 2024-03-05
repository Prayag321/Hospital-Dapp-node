import React from 'react';
import footerStyles from "../style/footer.module.css";

function Footer() {
    return (
<footer className={footerStyles.footerContainer}>
    <div className={footerStyles.footerWrapper}>
        <div className={footerStyles.footerRow}>
            <div className={footerStyles.footerColumn}>
                <h3 className={footerStyles.footerTitle}>Contact Us</h3>
                <p className={footerStyles.footerText}>Pillai HOC College</p>
                <p className={footerStyles.footerText}>Phone: +91 93261 73967</p>
            </div>
            <div className={footerStyles.footerColumn}>
                <h3 className={footerStyles.footerTitle}>Quick Links</h3>
                <ul className={footerStyles.footerLinks}>
                    <li><a href="#" className={footerStyles.footerLink}>Home</a></li>
                    <li><a href="#data" className={footerStyles.footerLink}>Info</a></li>
                    <li><a href="#manual" className={footerStyles.footerLink}>How It Fits</a></li>
                    <li><a href="#contact" className={footerStyles.footerLink}>Contact</a></li>
                </ul>
            </div>
            <div className={footerStyles.footerColumn}>
                <h3 className={footerStyles.footerTitle}>Connect With Us</h3>
                <ul className={footerStyles.socialIcons}>
                    <li className={footerStyles.socialIcon}><a href="mailto:adityana20it@student.mes.ac.in" className={footerStyles.footerLink}>adityana20it@student.mes.ac.in</a></li>
                    <li className={footerStyles.socialIcon}><a href="mailto:prayagmb20it@student.mes.ac.in" className={footerStyles.footerLink}>prayagmb20it@student.mes.ac.in</a></li>
                    <li className={footerStyles.socialIcon}><a href="mailto:rohanmk20it@student.mes.ac.in" className={footerStyles.footerLink}>rohanmk20it@student.mes.ac.in</a></li>
                </ul>
            </div>
        </div>
        <div className={footerStyles.footerRow}>
            <div className={footerStyles.footerColumn}>
                <p className={`${footerStyles.footerText} text-center`}>
                    Customer Support: +91 8369204930 | Email: <span><a href="mailto:rohanmk20it@student.mes.ac.in" className={footerStyles.footerLink}>rohanmk20it@student.mes.ac.in</a></span>
                </p>
            </div>
        </div>
        <div className={footerStyles.footerRow}>
            <div className={footerStyles.footerColumn}>
                <p className={`${footerStyles.footerText} text-center`}>
                    &copy; 2024 Hospital Management System. All Rights Reserved | Designed by <span className="font-monospace text-info">AirSheild</span>
                </p>
            </div>
        </div>
    </div>
</footer>

    );
}

export default Footer;
