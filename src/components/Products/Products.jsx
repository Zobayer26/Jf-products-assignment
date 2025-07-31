import PropTypes from 'prop-types';
import { useRef } from "react";
import leftArrow from "../../assets/Left Arrow.png";
import RightArrow from "../../assets/Right Arrow.png";
import Button from '../Button';

const Products = ({ heading, data }) => {

    const ref = useRef(null)

    let x = 0;

    const handlePrev = () => {
        if (!ref.current) return
        x -= 325;
        ref.current.style.transform = `translateX(${x}px)`;

    }

    const handleNext = () => {
        if (!ref.current) return
        x += 325
        ref.current.style.transform = `translateX(${x}px)`;
    }
    return (
        <section className="mt-[100px]">
            <h1 className="mb-7.5 font-Poppins font-medium text-[42px] leading-[100%] text-primary">
                {heading}
            </h1>
            <div className="relative">
                <div className="overflow-hidden">
                    <div ref={ref} className="flex gap-5 transition-transform duration-1000 ease-in-out">
                        {data.map((item) => (
                            <div key={item.id}
                                className=" w-[305px] shrink-0  bg-bgColor px-2.5 pt-2.5 pb-5 rounded-[17px]">
                                <div className=" flex items-center justify-center cursor-pointer">
                                    <img
                                        className=" bg-center bg-cover"
                                        src={item.imageSrc}
                                        alt={item.title}

                                    />

                                </div>
                                <div>

                                    <h1 className=" text-primary font-Poppins font-semibold text-[18px] leading-[140%] mt-5 ">
                                        {item.title}
                                    </h1>
                                    <p className="text-primary font-Poppins font-medium text-[14px] leading-[140%] mt-2.5 mb-5 h-5">
                                        {item.price}
                                    </p>
                                    <Button

                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    onClick={handlePrev}
                    className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-white
                       border absolute top-[168px] left-12 -translate-x-[75px] z-10 border-[#1A1A1A]">
                    <img src={leftArrow} alt="left arrow" />
                </div>

                <div
                    onClick={handleNext}
                    className="w-[47px] h-[47px] rounded-full flex items-center justify-center bg-white
                        border border-[#1A1A1A] absolute top-[168px] right-12 translate-x-[75px] z-10 "
                >
                    <img src={RightArrow} alt="left arrow" />
                </div>
            </div>


        </section>
    )
}

export default Products
Products.propTypes = {
    heading: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired

}