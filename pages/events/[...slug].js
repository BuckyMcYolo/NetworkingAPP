import { useRouter } from "next/router";
import EventList from "../../components/eventComponents/event-list";
import ResultsTitle from "../../components/eventComponents/results-title";
import { getFilteredEvents } from "../../dummy-data";
import Button from "../../ui/button";

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router.query.slug);

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

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
    return (
      <div>
        <h2 className="center">Invalid Filter. Please adjust your values!</h2>;
        <div className="center">
          {" "}
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }
  const getTheFilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (getTheFilteredEvents.length === 0 || !getTheFilteredEvents) {
    return (
      <div>
        <h2 className="center">No events found</h2>;
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={getTheFilteredEvents} />
    </div>
  );
};

export default FilteredEvents;
