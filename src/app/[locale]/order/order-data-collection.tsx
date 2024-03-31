"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Globe } from "lucide-react";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

const formSchema = z.object({});

export function OrderDataCollection() {
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
          <Step title={"1. Email"} {...stepProps(0)}>
            <FormField
              control={methods.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    You'll receive receipts and notifications at this email
                    address. Already have an account? Sign in
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Step>
          <Step title={"2. Shipping Address"} {...stepProps(1)}>
            <div className="space-y-4">
              <div className="grid gap-4 grid-cols-2">
                <FormField
                  control={methods.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={methods.control}
                name="address1"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address 1</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="address2"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Address 2</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CountrySelect />
              <div className="grid grid-cols-3 gap-4">
                <FormField
                  control={methods.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>ZIP Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={methods.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <StateSelect />
              </div>
            </div>
          </Step>
          <Step title={"3. Special instructions for seller"} {...stepProps(2)}>
            <FormField
              control={methods.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    You'll receive receipts and notifications at this email
                    address. Already have an account? Sign in
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Step>
          <Step title={"4. Review"} {...stepProps(3)}>
            <FormField
              control={methods.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    You'll receive receipts and notifications at this email
                    address. Already have an account? Sign in
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Step>
        </div>
      </form>
    </Form>
  );
}

function Step({
  title,
  preview,
  children,
  step,
  activeStep,
  onStepChange,
  disabled,
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
            <Button className="w-full">Continue</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

function CountrySelect() {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name="country"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select {...field}>
              <SelectTrigger>
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"us"}>United States</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function StateSelect() {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name="state"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select {...field}>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"AL"}>AL</SelectItem>
                <SelectItem value={"AL"}>AL</SelectItem>
                <SelectItem value={"AL"}>AL</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
