import './IntroPage.css'

export default function IntroPage(){
    return(
        <div className="Intro-cont flex items-center justify-center w-full h-max mb-32">
            <div className="intro-content-cont w-4/5 pt-20">
                <div className="data w-fit flex flex-col flex-wrap justify-start items-start">
                    <div className="heading-desig text-color mb-2">
                        <div className="heading text-5xl font-bold">SHISHIR & Co.</div>
                        <div className="desig text-3xl font-bold">CHARTERED ACCOUNTANTS</div>
                    </div>
                    <div className="quote text-base text-color mb-2">"Trusted advisors helping you navigate the <br /> complexities of finance”</div>
                    <div className="contact"><a href="#"><button type="submit" className='s-btn btn-bg text-white pt-2 pb-2 pl-4 pr-4'>Contact Now!</button></a></div>
                </div>
                <div className="support-img"></div>
            </div>
        </div>
    )
}