import CardHoverEffectDemo from "./Hover-effect";
import './Team.css'

export default function Services(){
    return(
        <div className="Services-cont Team-cont flex flex-col flex-wrap justify-center items-center">
        <div className="head text-5xl font-bold" id="services">Our Services</div>
        <CardHoverEffectDemo />
    </div>
    )
}