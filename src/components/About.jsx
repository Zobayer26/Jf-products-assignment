import InnovativeIcon from "../assets/Frame-7.png"
import userCentric from "../assets/Frame-8.png"
import UnmatchIcon from "../assets/Group 480.png"
import Button from "./Button"


export default function About() {
    return (
        <section>
            <div className=" w-[840px] mx-auto text-center text-primary mb-[110px] ">
                <h1 className="mb-7.5 font-Poppins font-medium text-[42px] leading-[42px]">
                    Why Us?
                </h1>
                <p className=" font-Poppins font-normal text-xl leading-7.5">We specialize in delivering durable and innovative fencing solution
                    built to last. With a focus on quality and trust, we help secure
                    spaces across industries and communities.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 text-primary">
                <div className=" px-10 pt-7.5 pb-5 rounded-3xl bg-bgColor relative">
                    <div className="h-[70px]">
                        <img
                            className="w-auto h-full bg-cover bg-center"
                            src={UnmatchIcon} alt=""
                        />
                    </div>
                    <h3 className=" font-Poppins font-medium text-[26px] leading-[130%] mb-5 mt-7.5">
                        Unmatched Durability with Corrosion-Free Technology
                    </h3>
                    <p className="font-Poppins font-normal text-[17px] leading-[150%]">
                        Our JF-270 barbed wire features a robust 270 GSM zinc coating,
                        ensuring superior resistance against rust and corrosion. Paired
                        with stainless steel binding wire, our fencing solutions are designed
                        to withstand harsh environmental conditions, offering longevity and reliability.
                    </p>
                    <div className="w-[340px] h-[340px] bg-[#1B7FE1] opacity-50 blur-[250px] absolute -top-[170px] left-[225px] rounded-full ">

                    </div>
                </div>
                <div className=" px-10 pt-7.5 pb-5 rounded-3xl bg-BLUE text-white relative">
                    <div className="h-[70px]">
                        <img
                            className="w-auto h-full bg-cover bg-center"
                            src={userCentric} alt="Icon"
                        />
                    </div>
                    <h3 className=" font-Poppins font-medium text-[26px] leading-[130%] mb-5 mt-7.5">
                        Customer-Centric Approach
                    </h3>
                    <p className="font-Poppins font-normal text-[17px] leading-[150%]">
                        At JF Products, customer satisfaction is paramount. We pride ourselves
                        on delivering timely services, maintaining transparent communication,
                        and ensuring a seamless purchasing experience. Our commitment to excellence
                        is reflected in the positive feedback from our valued clients.
                    </p>
                    <div className="w-[340px] h-[340px] bg-[#1B7FE1] opacity-50 blur-[250px] absolute -top-[170px] left-[225px] rounded-full ">

                    </div>
                </div>
                <div className=" px-10 pt-7.5 pb-5 rounded-3xl bg-bgColor relative">
                    <div className="h-[70px]">
                        <img
                            className="w-auto h-full bg-cover bg-center"
                            src={InnovativeIcon} alt="Icon"
                        />
                    </div>
                    <h3 className=" font-Poppins font-medium text-[26px] leading-[130%] mb-5 mt-7.5">
                        Innovative and Diverse Product Range
                    </h3>
                    <p className="font-Poppins font-normal text-[17px] leading-[150%]">
                        We offer a wide array of fencing solutions, including Polyhex Mesh,
                        Australian Trellis, and GI Poultry Mesh, catering to various needs
                        from agricultural to residential applications. Our products combine
                        functionality with aesthetic appeal, ensuring both security and style.
                    </p>
                    <div className="w-[340px] h-[340px] bg-[#1B7FE1] opacity-50 blur-[250px] absolute -top-[170px] left-[225px] rounded-full ">

                    </div>
                </div>

            </div>
            <div className="w-[160px] mx-auto mt-7.5">
                <Button
                    size="xl">
                    {["contact", "us"]}
                </Button>
            </div>


        </section>
    )
}