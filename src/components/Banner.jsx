import { useRef, useState } from "react";

import bgimage from "../assets/image.png";
import leftArrow from "../assets/Left Arrow.png";
import RightArrow from "../assets/Right Arrow.png";

import { images } from "../data/data";
import Button from "./Button";

export default function Banner() {
    const ref = useRef(null);
    const currentIndex = useRef(0);
    const [bannerIndex, setBannerIndex] = useState(0);
    const scrollToIndex = (index) => {
        if (!ref.current) return;
        ref.current.style.transform = `translateX(-${1280 * index}px)`;
    };

    const handlePrev = () => {
        const newIndex =
            currentIndex.current === 0 ? images.length - 1 : currentIndex.current - 1;

        currentIndex.current = newIndex;
        setBannerIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex =
            currentIndex.current === images.length - 1 ? 0 : currentIndex.current + 1;

        currentIndex.current = newIndex;
        setBannerIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const nextImage = bannerIndex + 1 >= images.length ? 0 : bannerIndex;
    const prevImage = bannerIndex - 1 <= 0 ? images.length : bannerIndex;
    return (
        <section className="w-full overflow-hidden flex relative gap-5">

            <div className="w-[300px] relative">
                <div className="bg-[#F2F4F6] rounded-3xl p-5 flex absolute top-0 right-0">
                    <div
                        style={{ backgroundImage: `url(${bgimage})` }}
                        className=" w-[621px] h-[638px]"
                    >
                        <img
                            className="w-full h-full"
                            src={images[prevImage - 1].image}
                            alt="BannerImage_1"
                        />
                    </div>
                    <div className="w-[619px] flex items-center justify-center ">
                        <div className=" w-[499px] ml-5">
                            <h1 className="text-[#1A1A1A] text-[62px] leading-[72px] font-medium  font-Poppins ">
                                {images[prevImage - 1].title}
                            </h1>
                            <p className="text-[#1A1A1A] text-2xl leading-8 font-Poppins font-normal mt-5 mb-12.5 ">
                                {images[prevImage - 1].details}
                            </p>
                            <Button size="lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={handlePrev}
                className="w-16 h-16 rounded-full flex items-center justify-center
            bg-[#B0DD1D] absolute top-1/2 left-[345px] -translate-x-[75px] z-10 ">
                <img src={leftArrow} alt="left arrow" />
            </div>

            <div className="w-[1280px] overflow-hidden rounded-3xl mx-auto">
                <div
                    ref={ref}
                    className=" flex transition-transform duration-1000 ease-in-out">
                    {images.map((item) => (
                        <div key={item.id} className="flex bg-bgColor p-5">
                            <div
                                style={{ backgroundImage: `url(${bgimage})` }}
                                className="w-[621px] h-[638px] px-[46px] py-[47px] "
                            >
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt={`BannerImage_${item.id}`}
                                />
                            </div>

                            <div className="w-[619px] flex items-center justify-center">
                                <div className="w-[499px] ml-5">
                                    <h1 className="text-[#1A1A1A] text-[62px] leading-[72px] font-medium font-Poppins">
                                        {item.title}
                                    </h1>
                                    <p className="text-[#1A1A1A] text-2xl leading-8 font-Poppins font-normal mt-5 mb-12">
                                        {item.details}
                                    </p>
                                    <Button size="lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div
                onClick={handleNext}
                className="w-16 h-16 rounded-full flex items-center justify-center
            bg-[#B0DD1D] absolute top-1/2 right-[345px] translate-x-[75px] z-10 "
            >
                <img src={RightArrow} alt="left arrow" />
            </div>

            <div className="w-[300px] relative">
                <div className="bg-[#F2F4F6] rounded-3xl p-5 flex absolute top-0 left-0">
                    <div
                        style={{ backgroundImage: `url(${bgimage})` }}
                        className=" w-[621px] h-[638px]"
                    >
                        <img
                            className="w-full h-full"
                            src={images[nextImage + 1].image}
                            alt="BannerImage_1"
                        />
                    </div>
                    <div className="w-[619px] flex items-center justify-center ">
                        <div className=" w-[499px] ml-5">
                            <h1 className="text-[#1A1A1A] text-[62px] leading-[72px] font-medium  font-Poppins ">
                                {images.title}
                            </h1>
                            <p className="text-[#1A1A1A] text-2xl leading-8 font-Poppins font-normal mt-5 mb-12.5 ">
                                {images.details}
                            </p>
                            <Button size="lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
