
import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Contact from './Contact';
import $ from 'jquery'

function Header() {
    function menushow(){
        $(".menudrop").show()
    }
    function menuhide(){
        $(".menudrop").hide()
    }
    return (
        <>
            <div className="header-area">
                <div className="nav-area">
                    <div className="container-fluid g-0">
                        <div className="row g-0">
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line1"></div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line2"></div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line3"></div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line4"></div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line5"></div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2 no-padding">
                                <div className="line6"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="media-icons">
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 "></div>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="container g-0">
                        <div className="row g-0">
                            <div className="col-md-12 col-lg-3 ">
                                <div className="logo">
                                    <img src="/images/logo.png" />
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 notshow"></div>
                            <div className="col-md-6 col-lg-3 col-sm-6">
                                <div className="contact" id='Contact'>
                                    <i class="fa fa-home"></i>
                                    <div className="call">
                                        <h4>+91 88663 02262</h4>
                                        <p>CALL US TODAY</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6">
                                <div className="contact">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="call">
                                        <h4>careerinfoway99@gmail.com</h4>
                                        <p>GET IN TOUCH WITH EMAIL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-area">
                    <div className="container g-0">
                        <Navbar expand="lg" >
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link className='nav-block'>
                                            <Link to="/">HOME</Link>
                                        </Nav.Link>

                                        <NavDropdown title="TRAINING COURSE" id="basic-nav-dropdown" >
                                            <NavDropdown.Item href="#action/3.1" className='menudrop' >
                                                <Link className="dropwhite" to="/php">PHP TRAINING</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2" className='menudrop'>
                                                <Link className="dropwhite" to="/Android">ANDROID TRAINING</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2" className='menudrop'>
                                                <Link className="dropwhite" to="/Seo">SEO & DIGITAL MARKETING TRAINING</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2" className='menudrop'>
                                                <Link className="dropwhite" to="/Design">WEBDESIGN TRAINING</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2" className='menudrop'>
                                                <Link className="dropwhite" to="/Net">ASP.NET TRAINING</Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2" className='menudrop'>
                                                <Link className="dropwhite" to="/Java">JAVA TRAINING</Link>
                                            </NavDropdown.Item>

                                        </NavDropdown>
                                        <Nav.Link>
                                            <Link to="/Contact">CONTACT US</Link>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Header;