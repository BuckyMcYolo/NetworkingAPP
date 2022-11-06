import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/eventComponents/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
