import MainContainer from "../../../core/hoc/MainContainer";

const HeroSection = () => {
    return (
        <MainContainer className="hero-section" backgroundImage="/img/hero-bg.png">
            <div className="grid lg:grid-cols-2 gap-12 items-center pt-25">
                <div className="text-white space-y-8">
                    <div className="space-y-6">
                        <h1 className="hero-title text-5xl lg:text-6xl font-bold leading-tight">
                            SKINCARE FOR GUYS
                            <br />
                            <span className="text-4xl lg:text-5xl">THAT AREN'T INTO</span>
                            <br />
                            <span>SKINCARE</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-md">
                            TRY THE ONE MINUTE SKINCARE ROUTINE
                        </p>
                    </div>
                    <button className="try-today-btn bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
                        TRY TODAY!
                    </button>
                    <div className="relative space-y-4 pt-20">
                        <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        
                        <blockquote className="text-lg text-gray-300">
                            "I LOVE THIS STUFF, IT TOTALLY
                            <br />
                            CHANGED THE GAME FOR ME"
                        </blockquote>
                        
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-600">
                                <span className="text-black font-bold text-sm">P.S</span>
                            </div>
                            <span className="text-gray-300 font-medium">PETER S.</span>
                        </div>
                    </div>
                </div>
                <div className="relative lg:h-96">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <img className="hero-image" src="/img/hero-image.png" alt="hero-product" />
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default HeroSection;