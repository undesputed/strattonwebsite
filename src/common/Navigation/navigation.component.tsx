import * as React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo/Logo.png';

interface Props { }

const Navigation: React.FC<Props> = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md justify-content-center shadow-sm mb-0">
            <div className="container-fluid navbar-section">
                <a href="./index.html" className="navbar-brand d-flex w-50 me-auto">
                    <Link to='/'><img src={logo} className="logo-img" alt="" width="400" height="110" /></Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav navbar-nav ms-auto w-100 justify-content-end">
                        <li className="nav-item">
                            {/* <a className="nav-link text-uppercase fw-bolder" href="./services.html">Packages & Services</a> */}
                            <Link className="nav-link text-uppercase fw-bolder" to='/PackageAndServices'>Packages & Services</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link text-uppercase fw-bolder" href="./aboutus.html">About Us</a> */}
                            <Link className="nav-link text-uppercase fw-bolder" to='/about-us'>About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link text-uppercase fw-bolder" href="./bookstore.html">Bookstore</a> */}
                            <Link className="nav-link text-uppercase fw-bolder" to='/'>Library</Link>
                        </li>
                        {/* <li className="nav-item">
                                <a className="nav-link text-uppercase fw-bolder" href="#">|</a>
                            </li> */}
                        {/* <li className="nav-item">
                                <a className="nav-link text-uppercase fw-bolder" href="#"><img src={userIcon}
                                    className="profile" width="25" height="25" /></a>
                            </li> */}
                        {/* <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle my-dropdown-toggle"
                                    data-bs-target="#navbarScrollingDropdown" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false" aria-controls="navbarToggleExternalContent">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-right" id="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="#">Item</a></li>
                                    <li><a className="dropdown-item" href="#">Item</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Item</a></li>
                                </ul>
                            </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;