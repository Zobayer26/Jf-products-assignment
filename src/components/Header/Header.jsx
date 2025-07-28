import UserIcon from "../../assets/Frame-1.svg"
import SearchIcon from "../../assets/Frame-2.svg"
import GroupIcon from "../../assets/Group 409.svg"

import Container from "../Container"


const Header = () => {
    return (
        <Container>
            <div
                className="h-[18px] flex justify-between items-center  py-[35px] 
                 font-normal capitalize font-Poppins text-[18px] text-[#1A1A1A] leading-[100%] ">
                <ul
                    className="flex justify-items-start items-center
                        gap-x-[50px] cursor-pointer">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                    <li>contact</li>
                </ul>
                <ul className="flex justify-items-start items-center gap-x-[54px] cursor-pointer">
                    <li className="flex items-center justify-center gap-[10px]">
                        <span>Login</span>
                        <span className="w-6 h-6">
                            <img
                                className="h-full"
                                src={UserIcon}
                                alt="Login_Icon"
                            />
                        </span>
                    </li>
                    <li>
                        <img
                            className="w-6 h-6"
                            src={SearchIcon}
                            alt="Search_Icon"
                        />
                    </li>
                    <li className="relative">
                        <img
                            className="w-6 h-6"
                            src={GroupIcon}
                            alt="Group_Icon"
                        />
                        <div className=" h-[18px] w-[18px] bg-[#1A1A1A] text-center absolute 
                           -top-1 -right-2 rounded-full ">
                            <span className="font-medium text-[#FFFFFF] text-[12px]">
                                0
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </Container >
    )
}
export default Header