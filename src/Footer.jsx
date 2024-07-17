import PropTypes from "prop-types";
import "./Footer.css";


export default function Footer(){
  return (
    <footer className={` main-footer-data bg-lavender overflow-hidden flex flex-row items-start justify-between   px-32 text-left text-darkslateblue ${className}`}>
      <div className="flex flex-col items-start justify-between w-full">
        <div className=" footer-data flex flex-wrap items-center justify-between w-full">
          <div className=" flex flex-col items-start justify-start py-5 px-0 ">
            <div className=" flex flex-col items-start justify-start ">
              <div className="  flex flex-col items-start justify-start ">
                <h2 className="m-0 mb-2  text-9xl font-bold  ">{`SHISHIR & Co.`}</h2>
                <h3 className="m-0   relative text-5xl  font-bold">
                  Chartered Accountants
                </h3>
              </div>
              <b className="  relative text-xl mb-2">
                Financial Advisors
              </b>
            </div>
            <div className="  flex flex-col items-start justify-start  text-base">
              <div className="  flex flex-col items-start justify-start">
                <div className="  flex flex-col items-start justify-start">
                  <div className=" relative font-medium flex items-center shrink-0">
                    <div>
                      <p className="mb-2 mt-2">SHOP NO. 01, KBC TOWER, PAIDLEGANJ</p>
                    </div>
                  </div>
                  <div className=" relative font-medium flex items-center shrink-0 mt-[-8px]">
                    <div>
                      <p className="mb-4">
                        CHOWRAHA, OPP RAJBANSI HOSPITAL, GORAKHPUR
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" relative flex items-center shrink-0">
                  <div className="mb-2">
                    <b>Branches:</b>
                    <div className="font-medium">{` Lucknow, Maharajganj & Deoria`}</div>
                  </div>
                </div>
              </div>
              <div className="  relative text-xs flex flex-wrap font-medium">
                <div className=""><a href="mailto: Shishirandco01@gmail.com">Shishirandco01@gmail.com | </a></div>
                <div className=""><a href="telto: +91-7499264357">&nbsp; +91-7499264357 | </a></div>
                <div className=""><a href="telto: 0551-3561840">&nbsp;0551-3561840</a></div>
                {/* <p className="m-0 whitespace-pre-wrap">
                  Shishirandco01@gmail.com | +91-7499264357, 0551-3561840
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-base mb-4">
            <b className="relative text-xl  mb-4 flex items-center ">
              Solutions
            </b>
            <div className="relative   inline-block ">
              Direct Taxation
            </div>
            <div className="relative   inline-block ">
              Business Advisory
            </div>
            <div className="relative   inline-block">
              GST Filling
            </div>
            <div className="relative   inline-block ">
              Corporate Advisory
            </div>
            <div className="relative   inline-block ">
              Consulting
            </div>
            <div className="relative   font-dm-sans">{`Audit & Assurance`}</div>
          </div>
        </div>
        <div className=" flex flex-col items-start justify-start text-base">
          <img
            className="  relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/vector-9.svg"
          />
          <div className="pb-4 w-full">
            <hr className="w-full" />
            {`© 2024 Shishit & Co. All rights reserved.`}</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

