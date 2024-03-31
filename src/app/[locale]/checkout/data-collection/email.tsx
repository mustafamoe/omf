import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Step } from ".";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export function EmailStep(props) {
  const methods = useFormContext();
  const [validated, setValidated] = useState(false);

  const handleNext = async () => {
    const success = await methods.trigger("email");
    if (success) {
      setValidated(true);
      props.onStepChange(1);
    }
  };

  return (
    <Step
      title={"1. Email"}
      onNext={handleNext}
      {...props}
      preview={
        <div>
          <p>{methods.getValues().email}</p>
        </div>
      }
    >
      <div className="space-y-4">
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>
                You'll receive receipts and notifications at this email address.
                Already have an account? Sign in
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="notify"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notify" {...field} />
                  <label
                    htmlFor="notify"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Sign up to receive news and updates.
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Step>
  );
}
