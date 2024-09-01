
import { NavLink } from 'react-router-dom';
export const Navbar = ({ count }) => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-dark w-100">
                <div className="container">
                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>

                    </button>
                    < NavLink to="/"> <span className="navbar-brand" >
                        Ecommerce
                    </span>
                    </NavLink>
                   
                    <div id="navbarCollapse" className="d-inline-flex">
                        <ul className="navbar-nav ms-auto d-sm-none d-md-inline-flex d-lg-inline-flex d-none">
                            <li className="nav-item">
                                <a href="" className="nav-link active">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link active">
                                    Blog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link active">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link active">
                                    Contact
                                </a>
                            </li>

                        </ul>
                        <ul className='navbar-nav d-sm-inline-flex d-md-inline-flex d-lg-inline-flex d-inline-flex'>
                            <li className="nav-item">
                                <NavLink to="/cart"> <button href="" className="btn  py-2  text-warning ">

                                    <i className="fa-solid fa-bag-shopping shopping-bag fs-5 position-relative">
                                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                                            {count}
                                        </span>
                                    </i>

                                </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    

                    <div className="offcanvas offcanvas-start bg-dark" id="navbarOffcanvas" tabIndex="-1"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel"></h5>
                            <button type="button" className="btn-close  btn-close-white text-reset"
                                data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <a className="menu-item m-3" aria-current="page" href="#">Home</a>
                                <a className="menu-item m-3" href="#">About</a>
                                <a className="menu-item m-3" href="#">Blog</a>
                                <a className="menu-item m-3" href="#">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
