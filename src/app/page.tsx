import { AuroraBackground } from "~/components/ui/aurora-background";

export default function Home() {
  return (
    <main>
      <div className="h-40">
        <AuroraBackground>
          <div className="container">
            <p className="text-4xl h-14 font-bold">
              ”And I created not the jinn and mankind except that they worship
              me.” - Quran 51:56
            </p>
          </div>
        </AuroraBackground>
      </div>
      <div className="h-[200vh]" />
    </main>
  );
}
