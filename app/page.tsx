import FooterSection from '@/components/footer/footer-section';
import HeroSection from '@/components/hero/hero-section';
import NavigationMenu from '@/components/navigation/navigation-menu';
import TechStackSection from '@/components/tech-stack/tech-stack-section';
import WorkSection from '@/components/work/work-section';

export const metadata = {
  title: 'Siddharth Movaliya',
};

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <HeroSection />
      <WorkSection />
      <TechStackSection />
      <FooterSection />
    </>
  );
}
