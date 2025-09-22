import MainContainer from "../../../core/hoc/MainContainer";
import DailyBenefitsCard from "../../../components/DailyBenefitsCard";
import DailyBenefitsData from "../../../dummy-data/DailyBenefitsData";

const SixthSection = () => {
    return (
        <MainContainer className="h-auto py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="mb-16">
                    <h2 className="header-text-sixth text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                        DAILY BENEFITS.
                        <br />
                        LONG-TERM RESULTS
                    </h2>
                    
                    <p className="text-gray-700 text-lg font-['Roboto_Mono'] max-w-md">
                        We started D1 beacuse....
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {DailyBenefitsData.map((item) => (
                        <DailyBenefitsCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </MainContainer>
    )
}

export default SixthSection;