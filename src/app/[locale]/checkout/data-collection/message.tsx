import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Step } from ".";
import { useFormContext } from "react-hook-form";
import { Textarea } from "~/components/ui/textarea";

export function MessageStep(props) {
  const methods = useFormContext();

  return (
    <Step title={"3. Special instructions for seller"} {...props}>
      <FormField
        control={methods.control}
        name="Message"
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              Please let us know of any special instructions for your order.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Step>
  );
}
