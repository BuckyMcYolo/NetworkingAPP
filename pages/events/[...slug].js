import EventList from "../../components/eventComponents/event-list";
import ResultsTitle from "../../components/eventComponents/results-title";
import { getFilteredEvents } from "../../helpers/api-utils";
import Button from "../../ui/button";
import Head from "next/head";

const FilteredEvents = (props) => {
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${props.date.month}/${props.date.year}`}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content="networking, meet people, find friends" />
    </Head>
  );

  if (props.hasError) {
    return (
      <div>
        {pageHeadData}
        <h2 className="center">Invalid Filter. Please adjust your values!</h2>;
        <div className="center">
          {" "}
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }

  if (props.events.length === 0 || !props.events) {
    return (
      <div>
        {pageHeadData}
        <h2 className="center">No events found</h2>;
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }
  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </div>
  );
};

export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params } = context;

  const filteredData = params.slug;

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const getTheFilteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: getTheFilteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
