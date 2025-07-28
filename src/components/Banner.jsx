import BannerImg_1 from "../assets/Group 507.png"
export default function Banner() {
    return (
        <div className="w-full overflow-hidden">
            <div className=" w-[1280px] bg-[#F2F4F6] mx-auto rounded-3xl p-5
            flex">
                <div className=" w-[621px] h-[638px]">
                    <img
                        className="w-full h-full"
                        src={BannerImg_1}
                        alt="BannerImage_1"
                    />
                </div>
                <div className="w-[619px] flex items-center justify-center ">
                    <div className=" w-[499px] ml-5">
                        <h1 className="text-[#1A1A1A] text-[62px] leading-[72px] font-medium  font-Poppins ">
                            JF Privezy Grass Wall
                        </h1>
                        <p className="text-[#1A1A1A] text-2xl leading-8 font-Poppins font-normal mt-5 mb-12.5">
                            The perfact Blend of Greenery
                        </p>
                        <button className=" bg-[#B0DD1D] rounded-[100px] px-8 py-4 text-[#1A1A1A] text-[18px]
                        font-DM font-medium leading-[100%] capitalize flex justify-center items-center gap-[5px]">
                            <span> Shop </span>
                            <span>now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}