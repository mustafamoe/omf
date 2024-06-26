import { EventsView } from "~/components/events-view";
import { AuroraBackground } from "~/components/ui/aurora-background";

export default function Home() {
  return (
    <main>
      <div>
        <AuroraBackground>
          <div className="container">
            <p className="text-4xl h-14 font-bold">
              ”And I created not the jinn and mankind except that they worship
              me.” - Quran 51:56
            </p>
          </div>
        </AuroraBackground>
      </div>
      <div className="container">
        <p className="text-3xl mb-4">Latest Events</p>
        <EventsView />
      </div>
    </main>
  );
}
