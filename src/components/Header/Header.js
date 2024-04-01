import React from "react";
import { Link } from "react-router-dom"

import  '../../styles/header-module.css';

import { ROUTES } from '../../utils/routes';
import LOGO from '../../styles/images/logo.svg'
import AVATAR from '../../styles/images/avatar.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to={ROUTES.Home}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className="info">
                <div className="user">
                    <div className="avatar" style={{ backgroundImage: `url(${AVATAR})`}} />
                    <div className="username">Guest</div>
                </div>
                <form className="form">
                    <div className="icon">
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className="input">
                        <input type="search" 
                            name="search" 
                            placeholder="Search for anything..." 
                            autoComplete="off"
                            // onChange={() => {}}
                            value=""
                        />
                    </div>

                    {false && <div className="box"></div>}
                </form>
                <div className="account">
                    <Link to={ROUTES.Home} className="favourites">
                    <svg className="icon-fav">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                    </svg>
                    </Link>

                    <Link to={ROUTES.Cart} className="cart">
                        <svg className="icon-cart">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        <span className="count">2</span>
                    </Link>
                </div>
            </div>
       </div> 
    ) 
}

export default Header;