import Customer_Image_1 from "../assets/customer_Image_1.png"
import LeftArrow from "../assets/Left Arrow.png"
import Quote from "../assets/Quote.png"
import bgImage from "../assets/reveiw bg.png"
import RightArrow from "../assets/Right Arrow.png"

const Review = () => {
    return (
        <section>
            <h1 className="mb-7.5 font-Poppins font-medium text-[42px] leading-[100%] text-primary text-center">
                Why Customers Love ❤️ Us?
            </h1>
            <div className=" flex gap-10 mt-10">
                <div className="w-[881px] bg-bgColor rounded-3xl">
                    <div className="p-15">
                        <div className=" flex gap-2">
                            <img
                                src={Quote}
                                alt="quote_Icon"
                            />
                            <img
                                src={Quote}
                                alt="quote_Icon"
                            />
                        </div>
                        <p className=" font-Poppins font-normal text-[28px] leading-[150%] text-primary mt-10.5">
                            I had initial issue with stock availability and delivery.
                            Once the product arrived on site the work has completed
                            very fast(400ft.) Value for money and easy to install.
                            Happy with the product
                        </p>
                    </div>
                    <div className="p-5 mt-10">
                        <div style={{ backgroundImage: `url(${bgImage})` }}
                            className="p-10 bg-cover bg-center w-full rounded-3xl flex items-center justify-between">
                            <h1 className=" text-primary font-Poppins font-semibold text-[32px] leading-[150%]">
                                - Samuel Varughese
                            </h1>
                            <div className="flex gap-5">
                                <div className="w-[51px] h-[51px] rounded-full border border-primary flex items-center justify-center">
                                    <img
                                        src={LeftArrow}
                                        alt="Left Arrow"
                                    />
                                </div>
                                <div className="w-[51px] h-[51px] rounded-full border border-primary flex items-center justify-center">
                                    <img
                                        src={RightArrow}
                                        alt="Right Arrow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-[359px] bg-bgColor p-5 rounded-3xl">
                    <img className="w-full h-full rounded-3xl"
                        src={Customer_Image_1}
                        alt="customer_image_1"
                    />
                </div>
            </div>
        </section>
    )
}

export default Review