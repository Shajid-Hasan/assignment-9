import React from 'react';
import MyContainer from '../Components/MyContainer';
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div>
            <MyContainer>
                <footer className="footer footer-horizontal footer-center bg-[linear-gradient(-60deg,#16a085_0%,#f4d03f_100%)] text-base-content rounded p-10 text-white">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </nav>

                    {/* ✅ Social Media Links */}
                    <nav>
                        <div className="grid grid-flow-col gap-4 text-2xl">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition-colors">
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors">
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-600 transition-colors">
                                <FaPinterestP />
                            </a>
                        </div>
                    </nav>

                    <aside>
                        <p>© {new Date().getFullYear()} - GreenNest. All rights reserved.</p>
                    </aside>
                </footer>
            </MyContainer>
        </div>
    );
};

export default Footer;
