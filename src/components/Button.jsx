import PropTypes from "prop-types"


const buttonSize = {
    sm: "h-9.5 w-[128px] text-sm py-3",
    lg: "w-[150px] text-lg py-4 ",
    xl: "w-full text-lg py-4 "
}

const Button = ({
    children = ["Shop", "now"],
    size = "sm",
    bgColor = "bg-[#B0DD1D]",
    onClick
}) => {
    return (
        <button onClick={onClick}
            className={`${bgColor} rounded-[100px] px-8  text-primary ${buttonSize[size]} cursor-pointer
                        font-DM font-medium leading-[100%] capitalize flex justify-center items-center 
                        gap-[5px]`}>
            <span> {children[0]} </span>
            <span>{children[1]}</span>
        </button>
    )
}

export default Button
Button.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    bgColor: PropTypes.string,
    onClick: PropTypes.func
}