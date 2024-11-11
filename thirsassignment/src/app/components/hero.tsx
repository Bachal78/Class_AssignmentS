//Hero Section  

import Image from "next/image"
import arrow from "@/app/assets/arrow.png"
const Hero=()=>{
    return(
        <>
           <div className="w-[1920px] h-[100%]">
                <div className="flex  justify-between items-center  px-[220px] py-[140px] top-[92px] left-[1px] bg-[#043873] text-[#ffffff] border border-b-8">
                        <div className="w-[656px] h-[361px] ">
                            <div className="w-[656px] h-[238px] ">
                                <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.2px] mb-6">Get More Done With Whitespace</h2>
                                <p className="font-normal text-lg leading-[30px] tracking-[-0.2%]">Project Management Software that enabless your teams to collaborate, plan, analyze and manage everyday tasks</p>
                            </div>
                            <div className="w-[219px] h-[63px] rounded-lg p-20px bg-[#4f9cf9] mt-10 flex flex-row items-center">
                                <p className="font-medium text-[16px] leading-[23px] tracking-[-2%] w-[159px] h-[23px]">Try Whitespace Free</p>
                                <Image src={arrow} alt="Arrow" className="w-[10px] h-[10px] border-[1px]"></Image>
                            </div>
                        </div>
                    <div className="w-[824px] h-[549px] bg-[#c4defd]"></div>
                </div>
           </div>
        </>
    )
}

export default Hero