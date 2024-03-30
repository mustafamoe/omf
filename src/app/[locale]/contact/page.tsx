import { Map } from "~/components/map";
import { mediaLinks } from "~/lib/constants";
import { ContactForm } from "./contact-form";

export default function Page() {
  return (
    <div className="min-h-screen pt-28">
      <div className="container py-14">
        <div className="flex space-x-14">
          <div className="w-[30%]">
            <p className="text-4xl mb-4">Contact us</p>
            <p>
              <span className="font-bold">Email:</span>{" "}
              info@onemessagefoundation.com
            </p>
            <p>
              <span className="font-bold">Phone: </span> 858-523-8546
            </p>
            <p>You can also send us an inquiry using the form.</p>
          </div>
          <div className="w-[70%]">
            <ContactForm />
          </div>
        </div>
      </div>
      <Map
        src={mediaLinks.googleMaps}
        className="shadow-md overflow-hidden aspect-[4/1]"
      />
    </div>
  );
}
