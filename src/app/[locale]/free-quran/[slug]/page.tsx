import Image from "next/image";
import { notFound } from "next/navigation";
import { AuroraBackground } from "~/components/ui/aurora-background";
import { Button } from "~/components/ui/button";
import { quranTranslations } from "~/data/quran-translations";

export default function Page({ params }: { params: { slug: string } }) {
  const quranTranslation = quranTranslations.find(
    (qt) => qt.slug === params.slug
  );
  if (!quranTranslation) notFound();

  return (
    <AuroraBackground className="bg-gray-900 pt-28">
      <div className="container h-full flex items-center">
        <div className="w-1/2">
          <div className="relative w-[80%] aspect-[2/2]">
            <Image
              src={quranTranslation.image}
              alt={quranTranslation.name}
              fill
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-6 text-white whitespace-pre-wrap">
          <p className="text-4xl font-bold">{quranTranslation.name}</p>
          <p className="text-xl">$0.00</p>
          <div
            dangerouslySetInnerHTML={{
              __html: quranTranslation.shortDescription,
            }}
          />
          <p className="">
            <span className="underline font-bold">NOTE:</span> We are limiting
            orders to one Quran per order (non-Muslims only) due to high demand.
          </p>
          <Button className="w-full" variant={"secondary"} size={"lg"}>
            Order now!
          </Button>
        </div>
      </div>
    </AuroraBackground>
  );
}
