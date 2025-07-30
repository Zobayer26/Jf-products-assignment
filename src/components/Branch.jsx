import locationIcon from "../assets/location-frame.svg";
import bgImage from "../assets/map.png";
import { branchData } from "../data/data";
import Button from "./Button";

export default function Branch() {
    return (
        <section style={{ border: '1px solid rgba(0, 43, 85, 0.2)' }}
            className="p-2.5 border  my-[100px] rounded-3xl relative">
            <div className="w-[143px] absolute -top-[18px] left-1/2 -translate-x-1/2 ">
                <button
                    className="bg-[#B0DD1D] w-full rounded-[100px] p-2.5  text-primary 
                        font-Poppins font-medium text-[16px] leading-4  uppercase flex justify-center items-center 
                        gap-[5px]">

                    <span> our</span>
                    <span> branches</span>
                </button>
            </div>
            <div className="w-[811px] mx-auto grid grid-cols-6 gap-15 mb-5 mt-9.5">
                {branchData.map((item) => (
                    < div key={item.id}
                        className="flex flex-col items-center justify-center w-20 gap-2.5 h-[83px]">
                        <div className=" px-2.5 py-[5px] h-14 ">
                            <img className="w-full h-full bg-center bg-cover"
                                src={item.image} alt="Coimbatore" />
                        </div>
                        <h3 className=" uppercase font-Poppins font-medium text-sm leading-[120%] text-primary">
                            {item.title}</h3>
                    </div>
                ))}

            </div>
            <div className="flex gap-5">
                <div className="w-[540px] rounded-3xl bg-BLUE p-12.5 text-white">
                    <h1 className="font-Poppins font-medium text-[38px] leading-[38px] mb-7.5">Contact Us</h1>
                    <div className="w-full mb-5">
                        <input
                            className="w-full h-[60px] px-7.5 py-5 text-xl leading-5 rounded-3xl
                                         bg-inputColor border-none focus:outline-none focus:ring-0 "
                            type="text"
                            name="name"
                            placeholder="Your name"
                            autoComplete="off"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <input
                            className="w-full h-[60px] px-7.5 py-5 text-xl leading-5 rounded-3xl
                                         bg-inputColor border-none focus:outline-none focus:ring-0"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <input
                            className="w-full h-[60px] px-7.5 py-5 text-xl leading-5 rounded-3xl
                                         bg-inputColor border-none focus:outline-none focus:ring-0"
                            type="text"
                            name="phone"
                            placeholder="Phone *"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <textarea
                            className="w-full min-h-[134px] px-7.5 py-5 text-xl leading-5 rounded-3xl
                                         bg-inputColor border-none focus:outline-none focus:ring-0"

                            name="message"
                            placeholder="Write message"
                            autoComplete="off"

                        />
                    </div>
                    <div className="w-[126px] mt-11">
                        <Button
                            size="xl"
                        >
                            {['submit']}
                        </Button>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${bgImage})` }}
                    className="w-[700px] rounded-3xl px-2.5 py-2 flex items-end">

                    <div className=" w-full p-7.5 bg-white rounded-3xl flex items-center gap-7.5">
                        <div className="w-14 h-14 flex items-center justify-center">
                            <img className="w-[46.67px] h-[46.67px]"
                                src={locationIcon} alt="location_Icon" />

                        </div>
                        <div className=" font-Poppins text-lg #1A1A1A w-[491px]">
                            <p className="font-normal leading-[18px]">
                                <span className="font-semibold leading-[36px]">JRR Towers</span>
                                (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

} 