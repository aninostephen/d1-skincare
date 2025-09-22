import type { FansSayItem } from "../core/interface/Fansays";

interface VideoCardsProps {
    item: FansSayItem;
}

const VideoCards = ({ item }: VideoCardsProps) => {
    const { productName, price, videoThumbnail, rating } = item;

    return (
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer" style={{ height: '558px' }}>
            <img className="fans-say-video" src={videoThumbnail} alt={productName} />
            
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="/img/playbutton.png" alt="play button" />
            </div>
            
            <div className="absolute top-4 right-4">
                <img src="/img/mute.png" alt="mute button" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex flex-row justify-between items-center bg-white rounded-2xl p-3">
                    <div className="flex flex-col items-left">
                        <div className="flex items-center">
                            {[...Array(rating)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <div>
                            <div className="font-bold text-gray-800" style={{ fontSize: '15px' }}>
                                {productName}
                            </div>
                            <div className="text-gray-600 text-sm" style={{ fontSize: '14px' }}>
                                {price}
                            </div>
                        </div>
                    </div>
                    <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCards;