import WorkTagline from './work-tagline';
import WorkBgBubble from './work-bg-bubble';
import AboutMeButton from './about-me-button';
import Work from './work';
import WorkFooter from './work-footer';

const WorkSection = () => {
  return (
    <div className="text-background bg-foreground relative mt-18 overflow-x-clip p-6 sm:mt-36 md:p-12 lg:mt-64">
      <WorkTagline />
      <WorkBgBubble />
      <AboutMeButton />
      <Work />
      <WorkFooter />
    </div>
  );
};

export default WorkSection;
