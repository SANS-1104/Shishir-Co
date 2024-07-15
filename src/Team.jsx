import './Team.css';
import TeamGrid from './TeamGrid'

export default function Team(){
    return(
        <div id='team'>
        <div className="Team-cont flex flex-col flex-wrap justify-center items-center mt-8"> 
            <div className="head text-5xl mt-20 mb-32 px-8 font-bold flex flex-wrap justify-center items-center font1" >
                <div className="mr-4">Meet</div>
                <div className="mr-4">Our</div>
                <div className="mr-4">Team</div>
            </div>
            <div>
                <TeamGrid />
            </div>
            </div>
        </div>
    )
}