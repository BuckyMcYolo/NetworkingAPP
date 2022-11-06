import { useRouter } from "next/router";
import { Fragment } from "react";
import EventContent from "../../components/eventComponents/event-detail/event-content";
import EventLogistics from "../../components/eventComponents/event-detail/event-logistics";
import EventSummary from "../../components/eventComponents/event-detail/event-summary";

import { getEventById } from "../../dummy-data";

const EventsForUser = () => {
  const router = useRouter();
  console.log(router.query);

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!eventId) {
    return <p>No event Found</p>;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default EventsForUser;
