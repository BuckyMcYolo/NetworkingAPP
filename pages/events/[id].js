import { Fragment } from "react"
import EventContent from "../../components/eventComponents/event-detail/event-content"
import EventLogistics from "../../components/eventComponents/event-detail/event-logistics"
import EventSummary from "../../components/eventComponents/event-detail/event-summary"
import { getFeaturedEvents } from "../../helpers/api-utils"
import { getEventById } from "../../helpers/api-utils"
import Head from "next/head"
import Comments from "../../components/eventComponents/input/comments"

const EventsForUser = ({ event }) => {
  if (!event) {
    return <p>No event found!</p>
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content="Find a lot of networking events that allow you to meet interesting people"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="networking, meet people, find friends" />
      </Head>
      <EventSummary title={event.title} />

      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event._id} />
    </Fragment>
  )
}

export default EventsForUser

export async function getStaticProps(context) {
  const eventId = context.params.id
  const event = await getEventById(eventId)

  return {
    props: {
      event: event,
    },
    revalidate: 30,
  }
}

//We need a getStaticPaths here bc [id] is a dynamic route
export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({ params: { id: event.id } }))

  return {
    paths: paths,
    fallback: "blocking",
  }
}
