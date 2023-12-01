import { useSelector } from 'react-redux';
import EventCard from 'components/EventsList/EventCard';

import {
  selectEvents,
  selectFilter,
  selectSort,
  selectQuery,
} from 'redux/events/selectors';
import { CardList } from './EventsList.styled';

const priorities = { Low: 1, Medium: 2, High: 3 };

const EventsList = () => {
  const events = useSelector(selectEvents);
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const query = useSelector(selectQuery);

  let visibleEvents;

  if (!filter && !sort && !query) {
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
          case 'by name ↑':
            return a.title.localeCompare(b.title);
          case 'by name ↓':
            return b.title.localeCompare(a.title);
          case 'by date ↑':
            return dateA - dateB;
          case 'dy date ↓':
            return dateB - dateA;
          case 'by priority ↑':
            return priorityB - priorityA;
          case 'by priority ↓':
            return priorityA - priorityB;
          default:
            return a - b;
        }
      })
      .filter(
        event =>
          event.title.toLocaleLowerCase().includes(query) ||
          event.description.toLocaleLowerCase().includes(query)
      );
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
