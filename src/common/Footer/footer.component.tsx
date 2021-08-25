import * as React from 'react';
import logo from "../../assets/images/logo/Logo_Plain.png";

interface Props { }

const FooterComponent: React.FC<Props> = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="footer-logo">
                            <a href="index.html"><img src={logo} className="img-fluid"
                                alt="logo" /></a>
                        </div>
                    </div>

                    <div className="col-xs-6 col-md-3 footer-nav">
                        {/* <h6>Categories</h6> */}
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">Free Publishing Guide</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">Publish Your Book</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">About Us</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3 footer-nav">
                        {/* <h6>Quick Links</h6> */}
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">Bookstore</a></li>
                            <li><a href="http://scanfcode.com/contact/">FAQs</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container-fluid copyright-section">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2021 Stratton Press Publishing
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;