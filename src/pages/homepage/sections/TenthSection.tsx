import MainContainer from "../../../core/hoc/MainContainer";
import VideoCards from "../../../components/VideoCards";
import FansSay from "../../../dummy-data/FansSay";

const TenthSection = () => {
    return (
        <MainContainer className="h-auto py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 font-['Inter']">
                            WHAT OUR FANS SAY
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {FansSay.map((item) => (
                            <VideoCards key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="text-black">
                            Start your 1 minute routine
                        </span>
                        
                        <h2 className="header-text-sixth text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            GET THE SET
                        </h2>
                        
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-800 font-medium font-['Roboto_Mono']">$10 Off Each Pouch</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-800 font-medium font-['Roboto_Mono']">Never Run Out</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-800 font-medium font-['Roboto_Mono']">No Commitment. Cancel Anytime</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-800 font-medium font-['Roboto_Mono']">Pause, Delay, or Change Frequency</span>
                            </div>
                        </div>
                        
                        <div className="pt-4">
                            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-300">
                                ADD TO CART — $58.99
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img src="/img/g2.png" alt="d1" />
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default TenthSection;
