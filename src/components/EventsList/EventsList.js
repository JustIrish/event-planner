import { useSelector } from 'react-redux';
import EventCard from 'components/EventsList/EventCard';

import { selectEvents, selectFilter, selectSort } from 'redux/events/selectors';
import { CardList } from './EventsList.styled';

const priorities = { Low: 1, Medium: 2, High: 3 };

const EventsList = () => {
  const events = useSelector(selectEvents);
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);

  let visibleEvents;

  if (!filter && !sort) {
    visibleEvents = events;
  } else {
    visibleEvents = events
      .filter(event => event.category.includes(filter))
      .sort((a, b) => {
        const dateA = new Date(a.date + ' ' + a.time);
        const dateB = new Date(b.date + ' ' + b.time);

        const priorityA = priorities[a.priority];
        const priorityB = priorities[b.priority];

        switch (sort) {
          case 'Name to Z':
            return a.title.localeCompare(b.title);
          case 'Name to A':
            return b.title.localeCompare(a.title);
          case 'Date soon':
            return dateA - dateB;
          case 'Date far':
            return dateB - dateA;
          case 'Priority to low':
            return priorityB - priorityA;
          case 'Priority to high':
            return priorityA - priorityB;
          default:
            return a - b;
        }
      });
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
