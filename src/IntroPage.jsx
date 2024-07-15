import './IntroPage.css'
import heroImg from './assets/heroImg.png'
import AuroraBackgroundDemo from './HeroTextBg'

export default function IntroPage(){
    return(
        <div className="Intro-cont w-screen flex flex-wrap justify-center items-center pt-40 mb-20">
            <AuroraBackgroundDemo />
        </div>
    )
}