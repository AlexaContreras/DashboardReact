import React from 'react';

function NavBar (){
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
    ​
              {/* <!-- Sidebar Toggle (Topbar) --> */}
              <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
              </button>
    ​
              {/* <!-- Topbar Navbar --> */}
              <ul className="navbar-nav ml-auto">
    ​
                {/* <!-- Nav Item - Alerts --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw"></i>
                    {/* <!-- Counter - Alerts --> */}
                    <span className="badge badge-danger badge-counter">1+</span>
                  </a>
                </li>
    ​
                {/* <!-- Nav Item - Messages --> */}
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                    <i className="fas fa-envelope fa-fw"></i>
                    {/* <!-- Counter - Messages --> */}
                    <span className="badge badge-danger badge-counter">0</span>
                  </a>
                </li>
    ​
                <div className="topbar-divider d-none d-sm-block"></div>
    ​
                {/* <!-- Nav Item - User Information --> */}
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Sportwear</span>
                    <img className="img-profile rounded-circle" src="/images/dummy-avatar.jpg" width="60" alt = ''/>
                  </a>
                </li>
    ​
              </ul>
    ​
            </nav>
    );
}

export default NavBar; 