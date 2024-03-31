import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { quranTranslations } from "~/data/quran-translations";

export function OrderSummary({
  quranTranslation,
}: {
  quranTranslation: (typeof quranTranslations)[number];
}) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="min-w-[80px]">
                <Image
                  src={quranTranslation.thumbnail}
                  alt={quranTranslation.slug}
                  width={80}
                  height={80}
                  className="rounded-md shadow-md border"
                />
              </div>
              <div className="flex gap-4">
                <div>
                  <p className="text-sm">{quranTranslation.name}</p>
                </div>
                <div>
                  <p className="font-semibold">$0.00</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p>$0.00</p>
                </div>
              </div>
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
