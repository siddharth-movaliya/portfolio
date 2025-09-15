import FooterSection from '@/components/footer/footer-section';
import HeroSection from '@/components/hero/hero-section';
import TechStackSection from '@/components/tech-stack/tech-stack-section';
import WorkSection from '@/components/work/work-section';

export const metadata = {
  title: 'Siddharth Movaliya',
};

export default function Home() {
  return (
    <div className="flex flex-col pt-28 lg:pt-32">
      <HeroSection />
      <WorkSection />
      <TechStackSection />
      <FooterSection />
    </div>
  );
}
