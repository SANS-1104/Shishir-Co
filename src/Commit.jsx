import './About.css'

export default function Commit(){
    return (
        <div className="abt-cont text-white mb-20">
            <div className="about flex flex-wrap justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
                <div className="abt-head mb-8 text-3xl font-bold">Chartered accountants committed to your financial growth and prosperity</div>
                <div className="abt-desc pl-16 pr-16 text-justify text-xl font-medium">
                    <a href="#"><button type="submit" className='underline bg-white commit-btn px-8 py-2'>Contact Now</button></a>
                </div>
            </div>
        </div>
    )
}