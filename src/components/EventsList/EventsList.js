import { useSelector } from 'react-redux';
import EventCard from 'components/EventsList/EventCard';

import { selectEvents } from 'redux/events/selectors';
import { CardList } from './EventsList.styled';

const EventsList = () => {
  const events = useSelector(selectEvents);

  return (
    <CardList>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </CardList>
  );
};

export default EventsList;
