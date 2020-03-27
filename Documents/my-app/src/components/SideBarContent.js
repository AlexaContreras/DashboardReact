import React from 'react';


function SideBarContent (props) {
    return ( 

             <li className="nav-item">
                <a className={`nav-link ${props.collapsed}`} href="/">
                  <i className={`fas fa-fw ${props.icon} `}></i>
                    <span>{props.title}</span>
                </a>
              </li>
    )
}

export default SideBarContent; 