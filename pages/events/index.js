import Link from "next/link";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/eventComponents/event-list";
import EventsSearch from "../../components/eventComponents/events-search";
import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        All Events:
      </h1>
      <EventList items={events} />
    </div>
  );
};

export default Events;
