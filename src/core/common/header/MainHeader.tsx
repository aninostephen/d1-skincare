const MainHeader = () => {
    return (
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="flex items-center">
                    <img src="/img/lg.png" alt="logo" />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="get-statrted bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                    GET STARTED
                </button>
                <div className="relative">
                    <button className="text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 p-2">
                        <img className="cart-icon" src="/img/cart-icon.png" alt="cart" />
                        <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                            1
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainHeader;