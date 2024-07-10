import './Footer.css'

export default function Footer(){
    return(
        <div className="footer-bg flex flex-col flex-wrap items-center justify-center py-12">
            <p className='txt text-5xl'>Shishir & Co.</p>
            <p className='txt text-3xl'>Chartered Accountant</p>
            <p className='txt text-xl'>Financial Advisors</p>
            <p className='txt text-base'><a href="#mailto: shishir.co.in" className='bh'>Email: shishir.co.in</a></p>
            <div className="social-medias flex flex-wrap justify-center items-center text-3xl">
                <div className="fb mr-4"><a href="" className='bh'><i class="fa-brands fa-facebook"></i></a></div>
                <div className="insta mr-4"><a href="" className='bh'><i class="fa-brands fa-instagram"></i></a></div>
                <div className="linked-in mr-4"><a href="" className='bh'><i class="fa-brands fa-linkedin"></i></a></div>
                <div className="twitter mr-4"><a href="" className='bh'><i class="fa-brands fa-x-twitter"></i></a></div>
            </div>
        </div>
    )
}