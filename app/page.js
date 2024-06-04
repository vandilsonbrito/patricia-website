import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from "@/components/Banner/Banner";
import SectionIntro from "@/components/SectionIntro/SectionIntro";
import SectionPresentation from "@/components/SectionPresentation/SectionPresentation";
import SectionSocialProof from "@/components/SectionSocialProof/SectionSocialProof";

export default function Home() {
  return (
    <main className="w-full h-full">
        <Banner/>
        <SectionIntro/>
        <SectionPresentation/>
        <SectionSocialProof/>
      </main>
  );
}
