import React from "react";
import { Link } from "react-router-dom";

import '../../styles/footer-module.css';
import { ROUTES } from "../../utils/routes";

import LOGO from '../../styles/images/logo.svg';

const Footer = () => {
    return (
       <section className="footer">
            <div className="logo">
                <Link to={ROUTES.Home}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>
       </section>
    ) 
}

export default Footer;