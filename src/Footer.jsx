import './Footer.css'

export default function Footer(){
    return(
        <div className="footer-bg flex flex-col flex-wrap items-center justify-center py-12">
            <p className='txt text-5xl'>Shishir & Co.</p>
            <p className='txt text-3xl'>Chartered Accountant</p>
            <p className='txt text-xl'>Financial Advisors</p>
            <p className='txt text-base'><a href="#mailto: shishir.co.in">Email: shishir.co.in</a></p>
        </div>
    )
}