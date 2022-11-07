import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/eventComponents/event-list";

export default function Home({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: { events: featuredEvents },
    revalidate: 3600,
  };
}
