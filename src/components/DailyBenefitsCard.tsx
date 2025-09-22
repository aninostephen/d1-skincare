import type { DailyBenefitItem } from "../core/interface/DailyBenefits";

interface DailyBenefitsCardProps {
    item: DailyBenefitItem;
}

const DailyBenefitsCard = ({ item }: DailyBenefitsCardProps) => {
    const { image, title, description } = item;

    return (
        <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl">
                <img src={image} alt="daily-benefit" className="w-full" />
            </div>
            <div className="space-y-4">
                <h3 className="benefit-title text-2xl font-black text-gray-900 font-['Inter'] leading-tight">
                    {title.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < title.split('\n').length - 1 && <br />}
                        </span>
                    ))}
                </h3>
                
                <p className="text-gray-700 font-['Roboto_Mono'] text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default DailyBenefitsCard;