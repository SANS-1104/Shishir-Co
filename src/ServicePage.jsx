import Navbar from "./Navbar"
import Footer from "./Footer"
import Services from "./Services"
import Commit from "./Commit"

export default function ServicePage(){
    return(
        <>
        <Navbar />
        <div className="mt-40">
             <Services />
        </div>
        <Commit />
        {/* <Footer /> */}
        </>
    )
}