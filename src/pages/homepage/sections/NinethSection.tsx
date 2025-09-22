import MainContainer from "../../../core/hoc/MainContainer";
import CommentCard from "../../../components/CommentCard";
import CommentsData from "../../../dummy-data/CommentsData";

const NinethSection = () => {
    return (
        <MainContainer className="h-auto py-30 nineth-bg-section">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-20">
                    <div className="inline-block mb-8">
                        <span className="primary-bg-color text-default-style px-6 py-3 rounded-full text-sm font-medium">
                            Just 1 minute a day
                        </span>
                    </div>

                    <h2 className="second-text-section font-black leading-tight mb-6 text-white">
                        THREE PERFECT FORMULAS
                    </h2>
                    
                    <p className="text-gray-300 text-lg font-['Roboto_Mono']">
                        A <span className="underline decoration-white decoration-2">game changer</span> for your skin
                    </p>
                </div>
                <div className="space-y-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-5">
                        <div className="space-y-8 tfix-w t-left">
                            <h3 className="text-third-style font-black text-white leading-tight">
                                CHARCOAL
                                <br />
                                FACE WASH
                            </h3>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus.
                            </p>
                        </div>
                        
                        <img src="/img/b1.png" alt="nineth-section-1" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-5">
                        <img src="/img/b2.png" alt="nineth-section-1" className="tfix-w t-img" />
                        
                        <div className="space-y-8 order-1 lg:order-2 tfix-w t-right">
                            <h3 className="text-third-style font-black text-white leading-tight">
                                ALL DAY FACE
                                <br />
                                MOISTURIZER
                            </h3>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-5">
                        <div className="space-y-8 tfix-w t-left">
                            <h3 className="text-third-style font-black text-white leading-tight">
                                DAILY EYE
                                <br />
                                CREAM
                            </h3>
                            
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Omne animal, simul atque haec putat, ut labore et impetus quo voluptas nulla pariatur? at magnum periculum adiit in quo quaerimus.
                            </p>
                        </div>
                        
                        <img src="/img/b3.png" alt="nineth-section-1" />
                    </div>

                </div>
            </div>
             <div className="customer-comment py-20">
                 <div className="max-w-7xl mx-auto px-4 lg:px-8">
                     {/* Header */}
                     <div className="text-center mb-16">
                         <h3 className="comment-title text-2xl lg:text-3xl">
                             Here is what our customers say
                         </h3>
                     </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CommentsData.map((item) => (
                            <CommentCard key={item.id} item={item} />
                        ))}
                    </div>
                 </div>
             </div>
        </MainContainer>
    )
}

export default NinethSection;
