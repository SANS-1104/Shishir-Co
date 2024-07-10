import './IntroPage.css'
export default function IntroPage(){
    return(
        <div className="Intro-cont flex items-center justify-center w-full h-max mb-32 pt-28">
            <div className="intro-content-cont w-screen pt-20 px-16 flex flex-wrap items-center justify-between">
                <div className="data w-fit flex flex-col flex-wrap justify-start items-start mr-4">
                    <div className="heading-desig text-color mb-2">
                        <div className="heading text-5xl font-bold">SHISHIR & Co.</div>
                        <div className="desig text-3xl font-bold">CHARTERED ACCOUNTANTS</div>
                    </div>
                    <div className="quote text-base text-color mb-2">"Trusted advisors helping you navigate the <br /> complexities of finance”</div>
                    <div className="contact"><a href="#"><button type="submit" className='s-btn btn-bg text-white pt-2 pb-2 pl-4 pr-4'>Contact Now!</button></a></div>
                </div>
                <div className="support-img-cont mt-8 ">
                    <div class="grid grid-cols-4 gap-4 si ">
                        <div class=" each">
                            <div className="title">Corporate Advisory</div>
                            <div className="img"><img src="https://shi-shir-co.vercel.app/frame-40586@2x.png" alt="" /></div>
                        </div>
                        <div class="each">
                            <div className="title">Direct Taxation</div>
                            <div className="img"><img src="https://shi-shir-co.vercel.app/stilllifebusinessroleswithvariouspawns--1-removebgpreview-1@2x.png" alt="" /></div>
                        </div>
                        <div class="each">
                            <div className="title">Consulting</div>
                            <div className="img"><img src="https://shi-shir-co.vercel.app/chatbot-flat-vectorphotoroom-1@2x.png" alt="" /></div>
                        </div>
                        <div class="each">  
                            <div className="title">GST Filing</div>
                            <div className="img"><img src="	https://shi-shir-co.vercel.app/frame-40600.svg" alt="" /></div>
                        </div>
                        <div className=""></div>
                        <div class="each">
                            <div className="title"> Audit & <br />Insurance</div>
                            <div className="img"><img src="https://shi-shir-co.vercel.app/-icon-paper-plane-o.svg" alt="" /></div>
                        </div>
                        <div class="each col-span-2">
                            <div className="title">Company Pipeline Management</div>
                            <div className="img flex flex-wrap items-center justify-center">
                                <div className="a">194</div>
                                <div className="a">129</div>
                                <div className="a">170</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}