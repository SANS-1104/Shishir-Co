import './Footer.css'

export default function Footer(){
    return(
        <div className="footer-bg flex flex-col flex-wrap items-center justify-center py-12">
            <p className='txt text-5xl font1'>Shishir & Co.</p>
            <p className='txt text-3xl font3'>Chartered Accountant</p>
            <p className='txt text-xl font4 leading-loose'>Financial Advisors</p>
            <p className='txt text-base font5'><a href="#mailto: shishir.co.in" className='bh e'>Email: shishir.co.in</a></p>
            <div className="social-medias flex flex-wrap justify-center items-center text-3xl">
                <div className="fb mr-4"><a href="" className='bh f'><i class="fa-brands fa-facebook"></i></a></div>
                <div className="insta mr-4"><a href="" className='bh i'><i class="fa-brands fa-instagram"></i></a></div>
                <div className="linked-in mr-4"><a href="" className='bh l'><i class="fa-brands fa-linkedin"></i></a></div>
                <div className="twitter mr-4"><a href="" className='bh x'><i class="fa-brands fa-x-twitter"></i></a></div>
            </div>
        </div>
    )
}