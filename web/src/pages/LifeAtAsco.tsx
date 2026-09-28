import Banner from "@/components/common/Banner";
import JoinOurTeam from "@/widgets/life-at-asco/JoinOurTeam";
import LifeAsco from "@/widgets/life-at-asco/LifeAsco";
import MomentAtAsco from "@/widgets/life-at-asco/MomentAtAsco";
import TeamVoice from "@/widgets/life-at-asco/TeamVoice";

export default function Home() {
  return (
    <>
      <Banner
        title="Life At Asco"
        description="A glimpse into the people, moments, and experiences that shape everyday life at ASCO."
        bgImage="/life-at-asco/life-at-asco-banner.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Life at Asco", href: "/life-at-asco" },
        ]}
      />

      <LifeAsco />
      <MomentAtAsco />
      <TeamVoice />
      <JoinOurTeam />
    </>
  );
}
