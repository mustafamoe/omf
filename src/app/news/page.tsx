import { EventsView } from "~/components/events-view";

export default function Page() {
  return (
    <div className="min-h-screen pt-28 container">
      <p className="text-4xl">News</p>
      <p className="text-xl mb-4">Stay Informed with Our Latest News</p>
      <EventsView />
    </div>
  );
}
