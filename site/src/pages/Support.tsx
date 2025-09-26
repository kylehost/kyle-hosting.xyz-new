
import SupportHero from "@/components/support/SupportHero";
import SupportChannels from "@/components/support/SupportChannels";
import SupportStats from "@/components/support/SupportStats";
import SupportKnowledgeBase from "@/components/support/SupportKnowledgeBase";
import SupportTestimonials from "@/components/support/SupportTestimonials";
import SupportCTA from "@/components/support/SupportCTA";
import { supportConfig, getEnabledItems } from "../../siteconfig";

const Support = () => {
  const enabledChannels = getEnabledItems(supportConfig.channels);
  const enabledFaqCategories = getEnabledItems(supportConfig.faqCategories);
  const enabledTestimonials = getEnabledItems(supportConfig.testimonials);
  const enabledStats = getEnabledItems(supportConfig.stats);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <SupportHero hero={supportConfig.hero} />
      <SupportChannels channels={enabledChannels} />
      <SupportStats stats={enabledStats} />
      <SupportKnowledgeBase faqCategories={enabledFaqCategories} />
      <SupportTestimonials testimonials={enabledTestimonials} />
      <SupportCTA />
    </div>
  );
};

export default Support;
