// import "../css/About.css";
import './About.css'
// import imagebg from "../../assets/img.png";

<<<<<<< HEAD
export default function Commit() {
  return (
    <div
      className="abt-cont text-white mb-20 flex flex-wrap justify-between items-center px-20"
      id="contact"
    >
      <div className="about flex flex-wrap w-full justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
        <div className="abt-head mb-8 text-3xl font-bold text-center flex flex-wrap items-center justify-center ">
          <div className=" mr-2">Chartered accountants committed to </div>
          <div className="">your financial growth and prosperity</div>
=======

export default function Commit(){
    return (
        <div className="abt-cont text-white mb-20 flex flex-wrap justify-between items-center px-20" id='contact'>
            <div className="about flex flex-wrap w-full justify-center items-center flex-col pt-12 pb-12 pl-8 pr-8">
                <div className="abt-head mb-8 text-3xl font-bold text-center flex flex-wrap items-center justify-center ">
                    <div className=" mr-2">Chartered accountants committed to </div>
                    <div className="">your financial growth and prosperity</div>
                </div>
                <div className="abt-desc  text-justify text-xl font-medium">
                    <a href="#"><button type="submit" className='underline bg-white commit-btn px-8 py-2'>Contact Now</button></a>
                </div>
            </div>
            {/* <div className="commit-side-img">
                <img src={imagebg} alt="" />
            </div> */}
>>>>>>> acc567fb8820d557b150bf6a4d79af5f5db251dd
        </div>
        <div className="abt-desc  text-justify text-xl font-medium">
          <a href="#">
            <button
              type="submit"
              className="underline bg-white commit-btn px-8 py-2"
            >
              Contact Now
            </button>
          </a>
        </div>
      </div>
      {/* <div className="commit-side-img">
                <img src={imagebg} alt="" />
            </div> */}
    </div>
  );
}