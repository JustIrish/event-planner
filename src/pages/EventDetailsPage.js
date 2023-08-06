import { useLocation, useParams } from 'react-router-dom';

import BackLink from 'components/BackLink/BackLink';
import MainTitle from 'components/MainTitle/MainTitle';
import EventDetailsCard from 'components/EventDetailsCard/EventDetailsCard';

const EventDetails = () => {
  const location = useLocation();
  const { eventId } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  console.log(eventId);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <MainTitle>Galery Opening</MainTitle>
      <EventDetailsCard id={eventId} />
    </>
  );
};

export default EventDetails;
