import MainContainer from "../../../core/hoc/MainContainer";

const SecondSection = () => {
    return (
        <MainContainer className="h-auto pt-15">
            <div className="top-head-second rounded-full">
                <p className="p-header-sec text-center text-black font-medium text-lg">
                    Just one minute a day will make your skin look healthier and younger
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center pt-15">
                <div className="space-y-8">
                    <h2 className="second-text-section text-5xl lg:text-6xl font-black text-gray-900 leading-tight font-['Inter']">
                        A SIMPLE
                        <br />
                        ROUTINE THAT
                        <br />
                        WORKS
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-md font-['Roboto_Mono']">
                        Say goodbye to complicated skincare routines. Our mens' skincare line is designed for simplicity and effectiveness. With our lightweight formulas, you can achieve healthier and younger-looking skin with minimal effort. Perfect for guys who are new to skincare or just want to keep it simple.
                    </p>
                    <hr />
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src="/img/check.png" alt="check" />
                            <span className="text-gray-800 font-medium">Lightweight formulas</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <img src="/img/check.png" alt="check" />
                            <span className="text-gray-800 font-medium">Easy to use formats</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <img src="/img/check.png" alt="check" />
                            <span className="text-gray-800 font-medium">Clean Ingredients</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <img src="/img/check.png" alt="check" />
                            <span className="text-gray-800 font-medium">Everything you need, nothing you don't</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        <img src="/img/second-image.png" alt="second-section-image" />
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default SecondSection;