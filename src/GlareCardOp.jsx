import GlareCard from "./components/ui/GlareCard";
import imageOne from './assets/emp1.jpg'
import './Team.css'

export default function GlareCardDemo() {
  return (
    <GlareCard className="team-mem flex flex-col px-2 justify-center">
    <img className="h-2/5 w-full absolute inset-0 bg-contain"
      src={imageOne} />
      <p className="pt-4"><b> Name: </b> CA Pawan Kumar Mishra (ACA, M.com. (Marketing & Finance), B.com.)</p>
      <p><b> Designation:</b> Partner</p>
      <p><b>Experience:</b> In Practice Since 2021</p>
      <p><b> Area of Expertise:</b> Direct Taxation, Indian GAAP & Ind AS Consultant, Financial Reporting and Accounting.</p>
    </GlareCard>
  );
}


