import Image from "next/image"
import arrow from "@/app/assets/arrow.png"
import workimg from "@/app/assets/workimg.png" 
import sponsor from "@/app/assets/sponsors.png"
import logo from "@/app/assets/Logo.png"

const WorkManagment=()=>{
    return(

        <>
            <div className="w-[1920px] h-auto top-[921px] left-[1px] gap-[100px]  border border-blue-900 ">
                {/* first Section */}
                <div className="w-[1480px] h-[547px]  py-[140px] px-[220px] flex flex-row justify-between items-center">
                    <div className="w-[672px] h-[411px]">
                        <div className="w-[672px] h-[288px] text-[#212529]">
                            <h1 className=" w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[2%]">Project Management</h1>
                            <p className="font-normal w-[672px] h-[90px] text-[18px] leading-[30px] tracking-[-2%] ">Images, videios, pdfs and audio files are supported. Create math expressions and diagrams directly from the app take photos with the mobile app and save them to a note.</p>
                        </div>
                        <div className="w-[201px] h-[63px] rounded-md py-[20px] px-[40px] bg-[#4f9cf9] flex flex-row items-center">
                            <p className="w-[97px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#ffffff]">Get Started</p>
                            <Image src={arrow} alt="Arrow" className="w-[14px] h-[14px] "></Image>
                        </div>
                    </div>
                    <div className="w-[748px] h-[547px] bg-[#c4defd]"></div>
                </div>
                {/* Second Section */}
                <div className="w-[1480px] h-[661px] mt-28  py-[140px] px-[220px] flex flex-row justify-between items-cente"> 
                    <div className="w-[720px] h-[661px] text-[#a7cefc]">
                        <Image src={workimg} alt="WorkTogether Image"></Image>
                    </div>
                    <div className="w-[670px] h-[294px] gap-[60px] text-[#212529]  items-center">
                            <div className="w-[670px] h-[171px] gap-6">
                                <h1 className=" w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[2%]">Work together</h1>
                                <p className="font-normal w-[670px] h-[60px] text-[18px] leading-[30px] tracking-[-2%] ">With whitepace, share your notes with your colleagues and collaborate on them. you cna also publish a note to the internet  and share the URL with others.</p>
                            </div>
                            <div className="w-[186px] h-[63px] rounded-md py-[20px] px-[40px] bg-[#4f9cf9] gap-[10px] flex flex-row justify-between items-center">
                                <p className="w-[82px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#ffffff]">Try it now</p>
                                <Image src={arrow} alt="Arrow" className="w-[14px] h-[14px] border-[1px]"></Image>
                            </div>
                    </div>
                </div>
                {/* third section */}
                <div className="top-[2509px] w-[1921px] flexs flex-row justify-between items-center h-[759px] py-[140px] px-[220px] flex bg-[#043873] ">
                    <div className="w-[697px] h-[294px] ">
                        <div className="w-[697px] h-[171px] ">
                             <h1 className=" w-[697px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[2%]">Use Extension</h1>
                             <p className="font-normal w-[670px] h-[60px] text-[18px] leading-[30px] tracking-[-2%] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                        </div>
                        <div className="w-[186px] h-[63px] rounded-md py-[20px] px-[40px] bg-[#4f9cf9] gap-[10px] flex flex-row justify-center items-center">
                            <p className="w-[82px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#ffffff]">Let's Go</p>
                            <Image src={arrow} alt="Arrow" className="w-[14px] h-[14px] border-[1px]"></Image>
                        </div>
                    </div>
                    <div className="w-[748px] h-[547px] bg-[#c4defd]"></div>
                </div>
                {/* Fourth Section */}

                <div className="top-[3268px] w-[1921px] flexs flex-row justify-between items-center h-[812.09px] py-[140px] px-[220px] flex bg-[#f8fafb] ">
                    <div className="w-[714px] h-[532.09px] gap-1 bg-[#c4defd]"></div>
                    <div className="w-[669px] h-[411px] gap-[60px] ">
                        <div className="w-[669px] h-[288px] ">
                             <h1 className=" w-[669px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[2%]">Customise it to your needs</h1>
                             <p className="font-normal w-[669px] h-[90px] text-[18px] leading-[30px] tracking-[-2%] ">Customise the app with plugins, custom themes and multiple text editiors (Rich Text or Markdown). Or create your ouwn scripts and plugins using the Extension API.</p>
                        </div>
                        <div className="w-[171px] h-[63px] rounded-lg py-[20px] px-[40px] bg-[#4f9cf9] gap-[10px] flex flex-row justify-center items-center">
                            <p className="w-[67px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#ffffff]">Let's Go</p>
                            <Image src={arrow} alt="Arrow" className="w-[14px] h-[14px] border-[1px]"></Image>
                        </div>
                    </div>
                </div>

                {/* Fifth Section */}

                <div className="top-[4080px] w-[1921px] flexs flex-row justify-between items-center h-[574px] py-[140px] px-[220px] flex bg-[#043873]">
                    <div className="w-[1481px] h-[294px] gap-[60px]">
                        <div className="w-[1064px] h-[171px] gap-[24px] text-[#ffffff]">
                            <h1 className="w-[1078px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Your work, Everywhere you are</h1>
                            <p className="w-[1064px] h-[60px] font-[400px] text-[18px] text-center leading-[30px] tracking-[-2%]">Access your notes fromj your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A Terminal app is also available!</p>
                        </div>
                        <div className="w-[195px] h-[63px] rounded-lg py-[20px] px-[40px] bg-[#4f9cf9] gap-[10px]  flex flex-row justify-center items-center">
                            <p className="w-[91px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#ffffff]">Try Taskey</p>
                            <Image src={arrow} alt="Arrow" className="w-[7px] h-[14px] left-[7px] text-center border-[1px]"></Image>
                        </div>

                    </div>

                </div>
                {/* sixth Section */}
                <div className="w-[1922px] h-[538px] top-[4654px] py-[140] px-[220px] gap-[100px] ">
                <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-center">Our Sponsors</h1>
                <Image src={sponsor} alt="Sponsors" className="w-[1482px] h-[71px] mt-10 flex justify-between"></Image>
                </div>

                {/* Footer Section */}
                <div className="w-[1920px] h-[461px] gap-[200px] py-[140] px-[220px] bg-[#043873]">
                    <div className="w-[1480px] h-[289px]">
                        <div className="w-[1480px] h-[169px] flex flex-row justify-between items-center">
                            <div className="w-[295px] h-[169px]">
                                <Image src={logo} alt="Logo" className="left-[47px]"></Image>
                                <p className="w-[240px] h-[120] text-[#f7f7ee] mt-2">Whitepace was created for the new ways we live and work. We make a better workspace around the world.</p>

                            </div>
                            <div className="w-[295px] h-[127px]">
                                <p className="w-[68px] h-[22px] font-bold text-[#ffffff] text-[18px] text-center leading-[30px] tracking-[-2%]">Product</p>
                                <p className="w-[70px] h-[20px] font-normal text-[#ffe492] text-[16px] lading-[20px] tracking-[-2%]">Overview</p>
                                <p className="w-[50px] h-[220px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Pricing</p>
                                <p className="w-[177px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Customer Stories</p>
                            </div>
                            <div className="w-[295px] h-[130px]">
                                <p className="w-[91px] h-[22px] font-bold text-[#ffffff] text-[18px] leading-[21.78px] tracking-[-2%]">Company</p>
                                <p className="w-[33px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Blog</p>
                                <p className="w-[128px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Guides & tutorial</p>
                                <p className="w-[91px] h-[22px] font-bold text-[#ffffff] text-[18px] leading-[21.78px] tracking-[-2%]">Help Center</p>
                            </div>
                            <div className="w-[295] h-[130]">
                            <p className="w-[83px] h-[22px] font-bold text-[#ffffff] text-[18px] leading-[21.78px] tracking-[-2%]">Company</p>
                            <p className="w-[66px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">About us</p>
                            <p className="w-[62px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Careers</p>
                            <p className="w-[99px] h-[20px] font-normal text-[#ffffff] text-[16px] leading-[20px] tracking-[-2%]">Media kit</p>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WorkManagment