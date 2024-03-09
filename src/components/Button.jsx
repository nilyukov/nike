import PropTypes from "prop-types"

const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth ? "w-full" : ""} ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : `bg-coral-red text-white border-coral-red`}`}>
            {label}
            {iconUrl && <img
                src={iconUrl}
                alt="Arrow right Icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    iconUrl: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    fullWidth: PropTypes.bool
}

export default Button