import type { RoutineStepItem } from "../core/interface/Routine";

interface RoutineStepProps {
    item: RoutineStepItem;
}

const RoutineStep = ({ item }: RoutineStepProps) => {
    const { stepNumber, stepImage, productImage, instruction } = item;

    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full">
                <div className="img-circle absolute -top-4 -left-4 w-10 h-10 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center z-10">
                    <span className="text-gray-800 font-bold text-lg">{stepNumber}</span>
                </div>
                <img className="pics" src={stepImage} alt={`step${stepNumber}`} />
            </div>
            <div className="flex items-start space-x-4 max-w-sm">
                <img src={productImage} alt={`step${stepNumber}`} style={{ width: '87px' }} />
                <div className="text-left mt-6">
                    <p className="text-gray-800 font-medium text-sm leading-relaxed">
                        {instruction}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RoutineStep;