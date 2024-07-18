import GSTInfo from "./GSTInfo";
import Commit from "./Commit";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GST () {
  return (
    <>
    <Navbar />
    <div className="w-full relative bg-white overflow-hidden flex-wrap flex flex-col items-center justify-center  mt-36 ">
      <section className="flex flex-col flex-wrap items-start justify-start ">
        <div className="flex flex-row items-center flex-wrap justify-center py-0 pr-[21px] pl-5 ">
          <GSTInfo />
        </div>
      </section>
      <section className="w-full ">
        <Commit />
        {/* <FrameComponent /> */}
      </section>
    </div>
    {/* <Footer /> */}
    </>
  );
};


