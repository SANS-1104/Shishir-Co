import './About.css'

export default function About(){
    return(
        <div className="abt-cont text-white w-full mb-20">
            <div className="about flex flex-wrap justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
                <div className="abt-head mb-8 text-4xl font-bold flex flex-wrap items-center justify-center" id='about'>
                    <div className=" mr-4">About</div>
                    <div className="">Shishir & Co</div>
                </div>
                <div className="abt-desc pl-16 pr-16 text-left text-xl font-medium">
                    <p>Welcome to Shishir & Co., a pillar of excellence in chartered accountancy for over two decades. We specialize in audit and assurance, tax planning, financial advisory, and business consultancy services. Our client-centric approach ensures personalized solutions, fostering enduring relationships based on transparency and reliability. </p>
                    <br />
                    <p className='p2'>At Shishir & Co., we combine innovation with industry best practices to address complex financial challenges. Serving small businesses, multinationals, and individuals, we provide accurate, efficient, and insightful services.</p>
                </div>
            </div>
        </div>
        
    )
}