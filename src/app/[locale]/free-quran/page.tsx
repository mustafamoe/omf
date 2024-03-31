import Image from "next/image";
import { quranTranslations } from "~/data/quran-translations";
import { Link } from "~/navigation";

export default function Page() {
  return (
    <div className="min-h-screen pt-28">
      <div className="container m-auto">
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-center text-4xl mb-4">
            A simple, clear and easy to read modern translation of the Quran.{" "}
          </p>
          <p className="text-center text-4xl mb-4">
            Order your Free Quran today!
          </p>
          <p className="text-center text-xl">
            (We are currently limiting orders to non-Muslims only due to high
            demand)
          </p>
        </div>
        <div className="grid grid-cols-2 gap-14">
          {quranTranslations.map((quranTranslation, i) => (
            <Link href={`/free-quran/${quranTranslation.slug}`} key={i}>
              <div>
                <div className="w-full shadow-md rounded-md overflow-hidden mb-2">
                  <Image
                    src={quranTranslation.thumbnail}
                    alt={quranTranslation.name}
                    height={500}
                    width={500}
                    className="w-full"
                  />
                </div>
                <p className="text-xl text-center">{quranTranslation.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
