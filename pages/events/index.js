import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/eventComponents/event-list";
import EventsSearch from "../../components/eventComponents/events-search";
import { useRouter } from "next/router";
import Head from "next/head";

const Events = ({ events }) => {
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Find a lot of networking events that allow you to meet interesting people"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="networking, meet people, find friends" />
      </Head>
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
