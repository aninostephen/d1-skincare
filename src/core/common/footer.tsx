import Input from "../../components/common/input";

const Footer = () => {
    return (
        <footer className="footer-container text-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 mb-16">
                    
                    {/* Left Side - Newsletter Signup */}
                    <div className="space-y-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">JOIN THE D1 CLUB</h2>
                                <p className="h2-small-text text-gray-300 text-lg">
                                    Subscribe for deals, and tips on mens skincare
                                </p>
                            </div>
                            <div className="text-right w-12 h-12">
                                <img src="/img/white-lg.png" alt="D1" />
                            </div>
                        </div>
                        
                        {/* Email Signup Form */}
                        <div className="flex relative">
                            <Input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 text-gray-500 bg-white focus:outline-none"
                            />
                            <button className="button-dt bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-r-lg font-medium transition-colors absolute right-0 top-0">
                                SUBMIT
                            </button>
                        </div>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-2 social-media">
                            <div className="bg-white rounded-full flex items-center justify-center">
                                <img src="/img/ins.png" alt="Facebook" />
                            </div>
                            <div className="bg-white rounded-full flex items-center justify-center">
                                <img src="/img/tiktok.png" alt="Instagram" />
                            </div>
                            <div className="bg-white rounded-full flex items-center justify-center">
                                <img src="/img/fb.png" alt="X" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    {/* Support Column */}
                    <div className="footer-links">
                        <h3 className="text-lg font-bold mb-6">SUPPORT</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQS</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="footer-links">
                        <h3 className="text-lg font-bold mb-6">COMPANY</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            @D1 2025 — site by manufactur
                        </div>
                        
                        {/* Disclaimer */}
                        <div className="text-gray-400 text-xs max-w-md leading-relaxed footer-statement">
                            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;