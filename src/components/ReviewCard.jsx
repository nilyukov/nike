import PropTypes from "prop-types";
import {star} from "../assets/icons/index.js";

const ReviewCard = ({customerName, imgURL, rating, feedback}) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]"/>
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} alt="rating" width={24} height={24} className="object-contain m-0"/>
            </div>
            <p className="text-xl font-montserrat text-slate-gray">({rating}</p>
            <h3 className="mt-1 font-palanquin text-3l text-center font-bold">{customerName}</h3>
        </div>
    )
}

ReviewCard.propTypes = {
    customerName: PropTypes.string,
    imgURL: PropTypes.string,
    rating: PropTypes.number,
    feedback: PropTypes.string
}

export default ReviewCard