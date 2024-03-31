import { Step } from ".";
import { useFormContext } from "react-hook-form";

export function ReviewStep(props) {
  const methods = useFormContext();

  return (
    <Step title={"4. Review & Order"} {...props}>
      <div className="space-y-4">
        <p>Review your information and order when you're ready.</p>
      </div>
    </Step>
  );
}
