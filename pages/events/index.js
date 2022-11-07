import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/eventComponents/event-list";
import EventsSearch from "../../components/eventComponents/events-search";
import { useRouter } from "next/router";

const Events = ({ events }) => {
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

export async function getStaticProps() {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
//We dont need a getStaticPaths here bc we are not using a dynamic route
