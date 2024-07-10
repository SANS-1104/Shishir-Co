import './About.css'
import imagebg from './assets/img.png'


export default function Commit(){
    return (
        <div className="abt-cont text-white mb-20 flex flex-wrap justify-between items-center px-20" id='contact'>
            <div className="about flex flex-wrap justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
                <div className="abt-head mb-8 text-3xl font-bold flex flex-wrap items-center justify-center flex-col">
                    <div className="">Chartered accountants committed to </div>
                    <div className="">your financial growth and prosperity</div>
                </div>
                <div className="abt-desc pl-16 pr-16 text-justify text-xl font-medium">
                    <a href="#"><button type="submit" className='underline bg-white commit-btn px-8 py-2'>Contact Now</button></a>
                </div>
            </div>
            <div className="commit-side-img">
                <img src={imagebg} alt="" />
            </div>
        </div>
    )
}