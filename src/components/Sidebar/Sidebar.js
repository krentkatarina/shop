import React from "react";

import '../../styles/sidebar-module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const Sidebar = () => {
const {list} = useSelector(({categories}) => categories)
console.log("list", list);
    return (
       <section className="sidebar">
            <div className="title">CATEGORIES</div>
            <nav>
                <ul className="menu">
                    {list.map(({id, name, }) =>(
                        <li key={id}>
                            <NavLink 
                            className={({isActive}) => `link ${isActive ? 'active' : ''}`}
                             to={`/categories/${id}`}>{name}</NavLink>
                        </li>
                    ))}
                    
                </ul>
            </nav>
            <div className="footer">
                <a href="/help" className="link">
                    Help
                </a>
                <a href="/terms" className="link" style={{textDecoration: "underline"}}>
                    Terms & Conditions
                </a>
            </div>
       </section> 
    ) 
}

export default Sidebar;