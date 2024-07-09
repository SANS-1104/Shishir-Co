import './Team.css'
import LayoutGridDemo from "./GridLayout"

export default function Team(){
    return(
        <div className="Team-cont flex flex-col flex-wrap justify-center items-center">
            <div className="head text-5xl mt-20 font-bold">Meet Our Team</div>
            <LayoutGridDemo />
        </div>
    )
}