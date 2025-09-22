import type { CommentItem } from "../core/interface/Comments";

interface CommentCardProps {
    item: CommentItem;
}

const CommentCard = ({ item }: CommentCardProps) => {
    const { ratingImage, comment, customerName, customerTitle, customerInitials } = item;

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img src={ratingImage} alt="star" className="mb-4" />
            <blockquote className="comment-text leading-relaxed mb-5">
                {comment}
            </blockquote>
            <div className="flex items-center space-x-4">
                <div className="boxes-comment border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-lg">{customerInitials}</span>
                </div>
                <div>
                    <div className="text-small-style font-bold">{customerName}</div>
                    <div className="comment-text2 uppercase tracking-wide">
                        {customerTitle}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;