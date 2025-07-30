import deliveryIcon from "../assets/delivery.png"
import FaceIcon from "../assets/face.png"
import premiumIcon from "../assets/premium.png"


export default function Customer() {
    return (
        <section className=" bg-BLUE rounded-3xl py-20 my-[100px] relative">
            <div className="w-[925px] mx-auto font-Poppins text-white">
                <h1 className=" text-center font-medium text-[42px] leading-[42px] mb-12.5">Trusted by over 6K+ customers</h1>
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-bgColor flex justify-center items-center">
                            <img src={premiumIcon} alt="Icon" />
                        </div>
                        <div>
                            <p className=" font-medium text-[28px] leading-[28px] mb-2 ">Premium</p>
                            <p className=" font-normal text-[22px] leading-[22px] ">Products</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-bgColor flex justify-center items-center">
                            <img src={FaceIcon} alt="Icon" />
                        </div>
                        <div>
                            <p className=" font-medium text-[28px] leading-[28px] mb-2 ">4000+</p>
                            <p className=" font-normal text-[22px] leading-[22px] ">Google Review</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div className="w-20 h-20 rounded-full bg-bgColor flex justify-center items-center">
                            <img src={deliveryIcon} alt="Icon" />
                        </div>
                        <div>
                            <p className=" font-medium text-[28px] leading-[28px] mb-2 ">Delivery</p>
                            <p className=" font-normal text-[22px] leading-[22px] ">Across India</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[497] h-[497px] bg-[#1B7FE1] opacity-40 blur-[200px] absolute -top-[1310px] left-[392px] rounded-full z-10 ">

            </div>
        </section>
    )
}