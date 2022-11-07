import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/eventComponents/event-list";
import Head from "next/head";

export default function Home({ events }) {
  return (
    <div>
      <Head>
        <title>Networking App</title>
        <meta
          name="description"
          content="Find a lot of networking events that allow you to meet interesting people"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="networking, meet people, find friends" />
      </Head>
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
