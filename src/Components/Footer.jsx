import React from "react";
import { FacebookFilled, LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 pt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left: Logo/Name */}
                <h2 className="text-lg font-bold text-blue-600 mb-4 md:mb-0">Visa Portal</h2>

                {/* Center: Menu Links */}
                <nav className="flex gap-6 mb-4 md:mb-0">
                    <Link to="/" className="hover:text-blue-600">Home</Link>
                    <Link to="/services" className="hover:text-blue-600">Services</Link>
                    <Link to="/my-application" className="hover:text-blue-600">Application</Link>
                </nav>

                {/* Right: Social Links */}
                <div className="flex gap-4 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <FacebookFilled className="hover:text-blue-600" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <GithubFilled className="hover:text-blue-600" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <LinkedinFilled className="hover:text-blue-600" />
                    </a>
                </div>
            </div>

            {/* Bottom small text */}
            <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Visa Portal. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
