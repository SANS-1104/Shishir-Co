import './Team.css'
import LayoutGridDemo from "./GridLayout"

export default function Team(){
    return(
        <div className="Team-cont flex flex-col flex-wrap justify-center items-center">
            <div className="head text-5xl mt-20 font-bold flex flex-wrap justify-center items-center" id='team'>
                <div className="mr-4">Meet</div>
                <div className="mr-4">Our</div>
                <div className="mr-4">Team</div>
            </div>
            <div className="grid-img-cont w-full flex flex-wrap items-center justify-center">
                <div className="grid-img">
                    <LayoutGridDemo />
                </div>
            </div>
           
            
        </div>
    )
}