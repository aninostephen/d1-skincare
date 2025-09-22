import MainContainer from "../../../core/hoc/MainContainer";

const EigthSection = () => {
    return (
        <MainContainer className="h-auto py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-16">
                    <h2 className="header-text-sixth text-5xl lg:text-6xl font-black leading-tight font-['Inter'] mb-8">
                        BEST-IN-CLASS
                        <br />
                        INGREDIENTS THAT WORK
                    </h2>
                    <div className="mb-12">
                        <button className="primary-bg-color text-gray-900 px-8 py-4 rounded-full text-lg cursor-pointer">
                            FULL INGREDIENT LIST
                        </button>
                    </div>
                </div>

                {/* Ingredients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r1.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Hyaluronic Acid
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                ALL DAY MOISTURIZER
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r2.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Niacinamide
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                ALL DAY MOISTURIZER
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r3.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Bamboo Charcoal
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                ALL DAY MOISTURIZER
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r4.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Centella Asiatica
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                CHARCOAL CLEANSER
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r5.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Rose Oil
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                CHARCOAL CLEANSER
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 rounded-2xl">
                        <img src="/img/r6.png" alt="h1" />
                        <div className="flex-grow">
                            <h3 className="text-default-style text-xl font-black mb-1">
                                Bamboo Charcoal
                            </h3>
                            <p className="text-secondary-style uppercase tracking-wide">
                                CHARCOAL CLEANSER
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </MainContainer>
    )
}

export default EigthSection;