
import Banner from "../../../components/Banner/Banner";
import SectionIntro from "../../../components/SectionIntro/SectionIntro";
import SectionPresentation from "../../../components/SectionPresentation/SectionPresentation";
import SectionSocialProof from "../../../components/SectionSocialProof/SectionSocialProof";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full h-full relative">
        <Banner/>
        <SectionIntro/>
        <SectionPresentation/>
        <SectionSocialProof/>
    </div>
  )
}