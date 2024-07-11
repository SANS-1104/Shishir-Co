import CardHoverEffectDemo from "./Hover-effect";
import './Team.css'

export default function Services(){
    return(
        <div className="Services-cont Team-cont flex flex-col flex-wrap justify-center items-center">
        <div className="head text-5xl font-bold flex flex-wrap items-center justify-center px-4" id="services">
            <div className="mr-4">Our</div>
            <div className="">Services</div>
        </div>
        <CardHoverEffectDemo />
    </div>
    )
}