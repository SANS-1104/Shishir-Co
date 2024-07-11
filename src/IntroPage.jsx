import './IntroPage.css'
import heroImg from './assets/heroImg.png'

export default function IntroPage(){
    return(
        <div className="Intro-cont flex flex-wrap justify-center items-center pt-40 mb-20">
            <div className="intro-content w-11/12 flex flex-wrap items-center justify-between">
                <div className="data flex flex-col flex-wrap items-center justify-center ">
                    <div className="heading-desig text-color">
                        <div className="heading text-5xl font-bold">SHISHIR & Co.</div>
                        <div className="desig text-3xl font-bold">CHARTERED ACCOUNTANTS</div>
                    </div>
                    <div className="quote text-base text-color mb-2">"Trusted advisors helping you navigate the <br /> complexities of finance”</div>
                    <div className="contact"><a href="#"><button type="submit" className='s-btn btn-bg text-white pt-2 pb-2 pl-4 pr-4'>Contact Now!</button></a></div>
                </div>
                <div className="hero-img px-4 flex flex-wrap items-center justify-center">
                    <img src={heroImg} alt="" className='' />
                </div>
            </div>
        </div>
    )
}