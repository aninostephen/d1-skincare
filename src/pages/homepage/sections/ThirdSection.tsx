import MainContainer from "../../../core/hoc/MainContainer";

const ThirdSection = () => {
    return (
        <MainContainer className="h-auto py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-8 third-container-sec max-w-7xl mx-auto">
                <div className="flex flex-row items-start space-y-4">
                    <img className="third-image" src="/img/cloud.png" alt="third-image" />
                    <div className="space-y-2 pl-5">
                        <h3 className="text-lg font-bold third-text-section">
                            Cutting-edge<br />
                            Korean Skincare<br />
                            Technology
                        </h3>
                    </div>
                </div>
                <div className="flex flex-row items-start space-y-4">
                    <img className="third-image" src="/img/water.png" alt="third-image" />
                    <div className="space-y-2 pl-5">
                        <h3 className="text-lg font-bold third-text-section">
                            Science-backed Ingredients
                        </h3>
                    </div>
                </div>
                <div className="flex flex-row items-start space-y-4">
                    <img className="third-image" src="/img/leaves.png" alt="third-image" />
                    <div className="space-y-2 pl-5">
                        <h3 className="text-lg font-bold third-text-section">
                            Dematologically Tested
                        </h3>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}

export default ThirdSection;