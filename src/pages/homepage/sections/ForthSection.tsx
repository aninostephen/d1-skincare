import MainContainer from "../../../core/hoc/MainContainer";
import RoutineStep from "../../../components/RoutineStep";
import RoutineData from "../../../dummy-data/RoutineData";

const ForthSection = () => {
    return (
        <MainContainer className="h-auto py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
                <div className="mb-12">
                    <p className="small-text-forth text-gray-600 text-lg mb-6">
                        Here's how D1 works
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="w-20 h-20 flex items-center justify-center relative">
                            <img src="/img/clock2.png" alt="clock" />
                        </div>
                    </div>
                    <h2 className="text-5xl lg:text-7xl font-black text-gray-900 abs-2">
                        JUST 1 MINUTE A DAY
                    </h2>
                </div>

                <div className="image-section grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
                    {RoutineData.map((item) => (
                        <RoutineStep key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </MainContainer>
    )
}

export default ForthSection;
