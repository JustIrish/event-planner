import { useSelector } from 'react-redux';
import EventCard from 'components/EventsList/EventCard';

import { selectEvents, selectFilter } from 'redux/events/selectors';
import { CardList } from './EventsList.styled';

const EventsList = () => {
  const events = useSelector(selectEvents);
  const filter = useSelector(selectFilter);

  let visibleEvents;

  if (!filter) {
    visibleEvents = events;
  } else {
    visibleEvents = events.filter(event => event.category.includes(filter));
  }

  return (
    <CardList>
      {visibleEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </CardList>
  );
};

export default EventsList;
