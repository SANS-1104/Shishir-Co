import Navbar from "./Navbar"
import Footer from "./Footer"
import Team from "./Team"
import Commit from "./Commit"

export default function TeamPage(){
    return(
        <>
        <Navbar />
        <div className="mt-20">
            <Team />
        </div>
        
        <Commit />
        {/* <Footer /> */}
        </>
    )
}