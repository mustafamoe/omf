import Image from "next/image";
import { Link } from "~/navigation";

export function EventsView() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {[...Array(5)].map((_, i) => (
        <EventItem key={i} />
      ))}
    </div>
  );
}

function EventItem() {
  return (
    <Link href={`/events/1`}>
      <div className="rounded-md shadow-md border">
        <div className="relative aspect-video overflow-hidden rounded-md">
          <Image
            src={"/events/event1.jpeg"}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="px-4 py-5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xl font-bold">Tour to florida</p>
            <div className="rounded-full border px-2 border-primary text-primary bg-primary/5">
              <p className="text-sm">April 4 - 5</p>
            </div>
          </div>
          <p className="line-clamp-2">
            🗓️ شارك معنا افتراضيًا، ابتداءً من الساعة السادسة مساءً في 4 ابريل
            وحتى الساعة السادسة مساءً في 6 ابريل واكتشف الإمكانيات الجديدة. 🚀
            قم بتطوير مهاراتك وفهمك للتقنيات الحديثة في مجال الذكاء الاصطناعي
            عبر يومين من العمل المكثف. 🏆 أمامك الفرصة لتكون جزءًا من برنامج
            "GAIA" لتسريع نمو الشركات الناشئة. ⏩ تفاعل مع مجموعة من أفضل خبراء
            الذكاء الاصطناعي في المجتمع. ⏳ لدينا مقاعد محدودة جدًا ، فلا تتأخر
            في التسجيل!
          </p>
        </div>
      </div>
    </Link>
  );
}
