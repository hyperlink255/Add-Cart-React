
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className=" mt-5 section bg-footer bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">
                                    Company
                                </h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li>
                                        <a href="">About Us</a>
                                    </li>
                                    <li>
                                        <a href="">Carrers</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">
                                    Shop
                                </h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li>
                                        <a href="">New Arrivals</a>
                                    </li>
                                    <li>
                                        <a href="">Accessories</a>
                                    </li>
                                    <li>
                                        <a href="">Mens</a>
                                    </li>
                                    <li>
                                        <a href="">Womens</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">Help</h6>
                                <ul className="list-unstyled footer-link mt-4">
                                    <li>
                                        <a href="">Sign Up </a>
                                    </li>
                                    <li>
                                        <a href="">Login</a>
                                    </li>
                                    <li>
                                        <a href="">Terms of Services</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="">
                                <h6 className="footer-heading text-uppercase text-white">
                                    Contact Us
                                </h6>
                                <p className="contact-info mt-4">
                                    Contact us if need help withanything
                                </p>
                                <p className="contact-info">+01 123-456-7890</p>
                                <div className="mt-5">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab facebook footer-social-icon fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab twitter footer-social-icon fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab google footer-social-icon fa-google" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fab apple footer-social-icon fa-apple" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </footer>

        </>


    )
}
