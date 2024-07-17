import PropTypes from "prop-types";

const GSTInfo = ({ className = "" }) => {
  return (
    <div className={` flex flex-col flex-wrap items-center justify-center text-center text-21xl w-4/5 text-midnightblue  ${className}`}>
      <div className="  flex flex-col  flex-wrap items-start justify-start mb-8 ">
        <h1 className="mb-8 flex items-center justify-center flex-wrap w-full font-bold ">
          Let’s Know More About GST
        </h1>
        <div className="   text-xl  text-justify ">
          <p className="m-0">
            <b>GST: A Comprehensive Indirect Tax Reform</b>
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            The Goods and Services Tax (GST) is a comprehensive, multi-stage,
            destination-based tax levied on the supply of goods and services in
            India. Introduced on July 1, 2017, GST replaced multiple indirect
            taxes levied by the central and state governments. GST aims to
            create a common national market, improve tax compliance, and reduce
            the overall tax burden on consumers. It has simplified the tax
            structure, making it easier for businesses to comply with tax laws.
          </p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 font-medium">
            The GST Council, chaired by the Union Finance Minister and
            comprising state finance ministers, is responsible for making
            recommendations on various aspects of GST, including tax rates,
            exemptions, and rules.
          </p>
        </div>
      </div>
      <div className="  flex flex-col  flex-wrap items-start justify-start">
        <h1 className="mb-8 mt-8 flex items-center justify-center flex-wrap w-full font-bold ">
          Is Your Organisation GST Ready?
        </h1>
        <div className="    text-xl font-medium text-left">
          <p className="m-0">{`Such a significant tax overhaul would change how business has traditionally been conducted in India. The implementation of the new law would present your organization with additional obstacles. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            In addition to requiring individuals to comprehend the law, the
            corporations would also need to devote a great deal of time and
            effort to their information technology department.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Your cash flow, profitability, and tax compliance will all be
            impacted by GST.
          </p>
        </div>
      </div>
      <div className="  flex flex-col flex-wrap  items-start justify-start mb-8">
        <h1 className="mb-12 mt-16 flex items-center justify-center flex-wrap w-full font-bold ">
          How We Help You In Your GST Matters
        </h1>
        <div className="  text-xl font-medium text-justify mb-12">
          <p className="m-0">{`The Goods and Services Tax (GST) marks a significant shift for Indian businesses. While it promises a more streamlined business environment, it also brings new hurdles to navigate. At Shishir & Co., we can help you navigate this transition seamlessly.`}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            Our team of experienced Chartered Accountants, Company
            Secretaries, and Lawyers are well-versed in the ever-changing
            complexities of the GST law. We offer comprehensive training for
            your employees and can assist with any necessary IT upgrades to
            ensure your business is fully compliant.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Let Shishir & Co. be your partner in maximizing the benefits of GST and minimizing disruption. Focus on your core business while we handle the tax complexities.`}</p>
        </div>
      </div>
    </div>
  );
};

GSTInfo.propTypes = {
  className: PropTypes.string,
};

export default GSTInfo;
