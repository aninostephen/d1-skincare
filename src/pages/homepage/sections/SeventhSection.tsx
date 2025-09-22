import MainContainer from "../../../core/hoc/MainContainer";

const SeventhSection = () => {
    return (
        <MainContainer className="h-auto py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="primary-bg-color text-black px-6 py-3 rounded-full text-sm font-medium">
                                Start your 1 minute routine
                            </span>
                        </div>
                        <h2 className="header-text-sixth text-5xl lg:text-6xl font-black leading-tight font-['Inter']">
                            GET THE SET
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed font-['Roboto_Mono'] max-w-lg">
                            Experience the ultimate simplicity and effectiveness with our complete skincare set. Designed for men who want great skin without the hassle, our set includes everything you need for a daily routine that takes just one minute.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <img src="/img/check.png" alt="check" />
                                <span className="text-default-style">$10 Off Each Pouch</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                            <img src="/img/check.png" alt="check" />
                                <span className="text-default-style">Never Run Out</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <img src="/img/check.png" alt="check" />
                                <span className="text-default-style">No Commitment. Cancel Anytime</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <img src="/img/check.png" alt="check" />
                                <span className="text-default-style">Pause, Delay, or Change Frequency</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300 inline-flex items-center space-x-4">
                                <span>ADD TO CART — $58.99</span>
                                <span className="text-gray-400 line-through text-base">$10.99</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="relative">
                            <img src="/img/g1.png" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default SeventhSection;