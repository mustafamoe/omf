import { quranTranslations } from "~/data/quran-translations";
import { OrderDataCollection } from "./order-data-collection";
import { OrderSummary } from "./order-summary";
import { notFound } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams: { product: string };
}) {
  const quranTranslation = quranTranslations.find(
    (qt) => qt.slug === searchParams.product
  );
  if (!quranTranslation) notFound();

  return (
    <div className="min-h-screen pt-28">
      <div className="flex gap-4 container">
        <div className="w-[70%]">
          <OrderDataCollection quranTranslation={quranTranslation} />
        </div>
        <div className="w-[30%]">
          <OrderSummary quranTranslation={quranTranslation} />
        </div>
      </div>
    </div>
  );
}
