//Navbar

import Image from "next/image"
import logo from "@/app/assets/Logo.png"

const Navbar=()=>{
    return(
        <>
            <div className="w-[1920px] h-[92px] px-[220px] py-4 bg-[#043873] flex justify-between items-center" >
                {/* Navbar Section */}
                <div className="w-[191px] h-[34px]">
                    <Image src={logo} alt="Logo"></Image>
                </div>
                <div className="w-[737.5px] h-[60px] flex justify-between items-center">
                    <div className="w-[549px] h-[23px]">
                        <ul className="flex flex-row justify-between text-[#ffffff]">
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    {/* Button Section */}
                    <div className="w-[126px] h-[60px]">
                        <button className="bg-[#ffe492] px-[40px] py-[16px] rounded-lg">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar