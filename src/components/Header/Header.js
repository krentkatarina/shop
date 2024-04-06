import React from "react";
import { Link } from "react-router-dom"

import styles from '../../styles/Header.module.css';

import { ROUTES } from '../../utils/routes';
import LOGO from '../../styles/images/logo.svg'
import AVATAR from '../../styles/images/avatar.png'

const Header = () => {
    return (
        <section className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.Home}>
                    <img src={LOGO} alt="logo" />
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{ backgroundImage: `url(${AVATAR})`}} />
                    <div className={styles.username}>Guest</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.icon}>
                        <svg className="icon">
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
                        </svg>
                    </div>
                    <div className={styles.input}>
                        <input type="search" 
                            name="search" 
                            placeholder="Search for anything..." 
                            autoComplete="off"
                            onChange={() => {}}
                            value=""
                        />
                    </div>

                    {/* <div className={styles.box}></div> */}
                </form>
                <div className={styles.account}>
                    <Link to={ROUTES.Home} className={styles.favourites}>
                    <svg className={styles["icon-fav"]}>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
                    </svg>
                    </Link>

                    <Link to={ROUTES.Cart} className={styles.cart}>
                        <svg className={styles["icon-cart"]}>
                            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
                        </svg>
                        <span className={styles.count}>2</span>
                    </Link>
                </div>
            </div>
       </section> 
    ) ;
};
export default Header;