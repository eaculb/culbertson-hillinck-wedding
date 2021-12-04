import { theme } from "@/src/theme";
import Section from "@/components/Section";

import GoToRsvpSection from "@/sections/home/GoToRsvpSection";
import ScheduleSection from "@/sections/home/ScheduleSection";
import SubtitleSection from "@/sections/home/SubtitleSection";
import TitleSection from "@/sections/home/TitleSection";

export default function HomePage() {
  return (
    <Section
      containerSx={{
        mb: 3,
        alignItems: "center",
        height: `calc(100vh-${theme.appBarHeight})`,
      }}
    >
      <TitleSection />
      <SubtitleSection />
      <ScheduleSection />
      <GoToRsvpSection />
    </Section>
  );
}
