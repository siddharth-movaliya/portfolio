import WorkTagline from './work-tagline';
import WorkBgBubble from './work-bg-bubble';
import AboutMeButton from './about-me-button';
import Work from './work';
import WorkFooter from './work-footer';

const WorkSection = () => {
  return (
    <div className="text-background bg-foreground relative mt-64 overflow-x-clip p-12">
      <WorkTagline />
      <WorkBgBubble />
      <AboutMeButton />
      <Work />
      <WorkFooter />
    </div>
  );
};

export default WorkSection;
