import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-auto">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* School Info with Logo */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                            <img
                                src="/img/e99d54cd-6fcb-424f-9042-55047a2e447a copy.jpeg"
                                alt="Starway International School Logo"
                                className="w-16 h-16 object-contain rounded-full"
                            />
                            <h3 className="text-xl font-bold">Starway International School</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Est. 2008 | Affiliated to CBSE, New Delhi<br />
                            Empowering minds, shaping futures.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Admissions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Academics</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info with Correct Email */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
                        <div className="space-y-3 text-sm text-gray-300">
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <span className="text-yellow-400 text-base">📍</span>
                                <span>Dinara, Rohtas District, Bihar - 802213</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <span className="text-yellow-400 text-base">📞</span>
                                <span className="text-white font-bold text-base">+91 88096 17265</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <span className="text-yellow-400 text-base">✉️</span>
                                <span className="text-white font-medium">rajeshkumarverma95818@gmail.com</span>
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <span className="text-yellow-400 text-base">🌐</span>
                                <span>www.starwayinternational.com</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-300">
                    <p>&copy; {currentYear} Starway International School. All rights reserved.</p>
                    <p className="mt-1">Est. 2008 | Affiliated to CBSE, New Delhi | Dinara, Rohtas District, Bihar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;