import { EventsView } from "~/components/events-view";

export default function Page() {
  return (
    <div className="min-h-screen pt-28 container">
      <p className="text-4xl">Events</p>
      <p className="text-xl mb-4">
        Stay Updated on Workshops, Seminars, and Networking Opportunities
      </p>
      <EventsView />
    </div>
  );
}
