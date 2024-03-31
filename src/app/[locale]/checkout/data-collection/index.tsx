"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Form } from "~/components/ui/form";
import { quranTranslations } from "~/data/quran-translations";
import { cn } from "~/lib/utils";
import { EmailStep } from "./email";
import { MessageStep } from "./message";
import { ReviewStep } from "./review";
import { DeliveryStep } from "./delivery";

const formSchema = z.object({
  email: z.string().email(),
});

export function OrderDataCollection({
  quranTranslation,
}: {
  quranTranslation: (typeof quranTranslations)[number];
}) {
  const methods = useForm({
    defaultValues: {
      country: "us",
    },
    resolver: zodResolver(formSchema),
  });
  const [step, setStep] = useState(0);

  const handleSubmit = methods.handleSubmit((data) => {});

  const stepProps = (s: number) => ({
    step: s,
    activeStep: step,
    onStepChange: (step) => setStep(step),
  });

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <EmailStep {...stepProps(0)} />
          <DeliveryStep {...stepProps(1)} />
          <MessageStep {...stepProps(2)} />
          <ReviewStep {...stepProps(3)} />
        </div>
      </form>
    </Form>
  );
}

export function Step({
  title,
  preview,
  children,
  step,
  activeStep,
  onStepChange,
  disabled,
  onNext,
}) {
  return (
    <div>
      <Card className={cn(disabled && "opacity-50 pointer-events-none")}>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}

            {step !== activeStep && (
              <Button
                variant={"outline"}
                size={"sm"}
                onClick={() => onStepChange(step)}
              >
                <Edit className="w-4 h-4 mr-2" /> Edit
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        {step === activeStep ? (
          <CardContent>{children}</CardContent>
        ) : preview ? (
          <CardContent>{preview}</CardContent>
        ) : null}
        {step === activeStep && (
          <CardFooter>
            {activeStep === 3 ? (
              <Button className="w-full">Submit Order!</Button>
            ) : (
              <Button className="w-full" onClick={onNext}>
                Continue
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
