import { useFormContext } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Checkbox } from "~/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Step } from ".";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function DeliveryStep(props) {
  const methods = useFormContext();

  return (
    <Step title={"2. Delivery"} {...props}>
      <div className="space-y-4">
        <Alert>
          <AlertTitle className="text-sm mb-2">DELIVERY OPTION</AlertTitle>
          <AlertDescription className="flex">
            <Checkbox defaultChecked disabled />
            <span className="ml-2">Free shipping</span>
            <span className="ml-auto font-bold">FREE</span>
          </AlertDescription>
        </Alert>
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
          <FormLabel>State</FormLabel>
          <FormControl>
            <Select {...field}>
              <SelectTrigger>
                <SelectValue />
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
          <FormLabel>State</FormLabel>
          <FormControl>
            <Select {...field}>
              <SelectTrigger>
                <SelectValue />
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
