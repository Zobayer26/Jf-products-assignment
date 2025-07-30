import Facebook from "../../assets/facebook.png";
import Instgram from "../../assets/Instagram.svg";
import LogoIcon from "../../assets/logo.png";
import Youtube from "../../assets/Youtube.png";
import { navLinks, quickLinks } from "../../data/data";
import Button from "../Button";
import Container from "../Container";

export default function Footer() {
    return (
        <footer className=" w-full px-12.5">
            <div className="bg-BLUE rounded-3xl text-white">
                <Container>
                    <div className="pt-[104px] pb-[120px]">
                        <div className="flex items-center justify-between font-Poppins">
                            <div className="w-[550px]">
                                <h1 className=" font-medium text-[32px] leading-[100%]">
                                    Join Our JF Products
                                </h1>
                                <p className=" font-normal text-xl leading-5 mt-4 mb-10">
                                    We’ll tell you about store updates and discounts
                                </p>
                                <div className="w-full">
                                    <input
                                        className="w-full h-[60px] px-7.5 py-5 text-xl leading-5 rounded-3xl
                                         bg-inputColor border-none focus:outline-none focus:ring-0"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className=" flex items-center gap-3.5 mt-6 mb-10">
                                    <input
                                        className="w-6 h-6 border border-white rounded-md bg-BLUE appearance-none 
                                        checked:appearance-auto checked:border-none checked:rounded-md "
                                        type="checkbox"
                                        id="checkBox"

                                    />
                                    <label
                                        htmlFor="checkBox"
                                        className="font-normal text-lg leading-4.5 py-[3px] ">
                                        Yes, subscribe me to your newsletter.
                                    </label>
                                </div>
                                <Button
                                    size="xl"
                                    bgColor="bg-white">
                                    {["join", "now"]}
                                </Button>
                            </div>
                            <div className="w-[189px]">
                                <h1 className="font-medium text-[32px] leading-[100%] mb-10">
                                    Information
                                </h1>
                                <ul className="capitalize flex flex-col justify-items-start gap-7.5">

                                    {
                                        navLinks.map((item) => (
                                            <li
                                                key={item.id}
                                                className=" font-normal text-xl leading-5">
                                                {item.title}
                                            </li>
                                        ))
                                    }
                                </ul>

                            </div>
                            <div className="w-[195px]">
                                <h1 className="font-medium text-[32px] leading-[100%] mb-10">
                                    Helpful
                                </h1>
                                <ul className="capitalize flex flex-col items-start gap-7.5">
                                    {
                                        quickLinks.map((item) => (
                                            <li
                                                key={item.id}
                                                className=" font-normal text-xl leading-5">
                                                {item.title}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="mt-[120px] flex items-center justify-between">
                            <div className="flex gap-12.5 items-center">
                                <div className=" w-[132px] h-[150px]">
                                    <img
                                        className="w-full h-full"
                                        src={LogoIcon}
                                        alt="Logo_Icon"
                                    />
                                </div>
                                <div className=" font-Poppins text-xl leading-[150%]">
                                    <p className=" font-semibold">
                                        Our Branches
                                    </p>
                                    <p className=" font-normal">
                                        Coimbatore, Chennai, Hyderabad, Goa, Kochi
                                    </p>
                                </div>
                            </div>
                            <div className="w-[160px]">
                                <Button
                                    size="xl">
                                    {["contact", "us"]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className=" flex items-center justify-between py-7.5">
                    <p className=" font-Poppins font-normal text-[18px] leading-4.5">
                        Copyright © 2025 JF Products. All rights reserved
                    </p>
                    <div className=" flex items-center gap-4 ">
                        <div className=" w-[38px] h-[38px] rounded-full bg-bgColor flex items-center justify-center">
                            <img
                                src={Facebook}
                                alt="Facebook_icon"
                            />
                        </div>
                        <div className=" w-[38px] h-[38px] rounded-full">
                            <img
                                className="w-full h-full"
                                src={Youtube}
                                alt="Youtube_Icon"
                            />
                        </div>

                        <div className=" w-[38px] h-[38px] rounded-full">
                            <img
                                className="w-full h-full"
                                src={Instgram}
                                alt="Instagram_Icon"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
