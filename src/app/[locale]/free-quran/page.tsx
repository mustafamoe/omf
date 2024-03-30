import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex">
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
            <div key={i}>
              <div className="w-full shadow-md rounded-md overflow-hidden mb-2">
                <Image
                  src={quranTranslation.image}
                  alt={quranTranslation.alt}
                  height={500}
                  width={500}
                  className="w-full"
                />
              </div>
              <p className="text-xl text-center">{quranTranslation.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const quranTranslations = [
  {
    image: "/quran-en.jpeg",
    alt: "quran-en",
    title: "The Quran (English)",
  },
  {
    image: "/quran-es.jpeg",
    alt: "quran-es",
    title: "The Quran (Spanish)",
  },
];
