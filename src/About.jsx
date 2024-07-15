import './About.css'

export default function About(){
    return(
        <div className="abt-cont text-white w-full mb-20">
            <div className="about flex flex-wrap justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
                <div className="abt-head mb-8 text-4xl font-bold flex flex-wrap items-center justify-center font1" id='about'>
                    <div className=" mr-4">About</div>
                    <div className="">Shishir & Co</div>
                </div>
                <div className="abt-desc pl-16 pr-16 text-left text-2xl font-medium">
                    <p className='p1 font5'>Shishir & Co. is a leading Chartered Accountancy firm established in 2012. The company provides a wide range of professional services to clients across various industries, including GST filing, business advisory, auditing, and consulting. </p>
                    <br />
                    <p className='p2 font5'>Shishir & Co. is committed to delivering high-quality, personalized services to its clients. The firm's team of experienced Chartered Accountants and financial experts work closely with clients to understand their unique needs and provide tailored solutions to help them achieve their business goals.</p>
                </div>
            </div>
        </div>
        
    )
}