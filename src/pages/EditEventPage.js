import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEvents } from 'redux/events/selectors';

import BackLink from 'components/BackLink/BackLink';
import MainTitle from 'components/MainTitle/MainTitle';
import EventForm from 'components/EventForm/EventForm';

const EditEvent = () => {
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  const events = useSelector(selectEvents);
  const selectedEnent = events.find(item => item.id === id);

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <MainTitle>Edit event</MainTitle>
      <EventForm event={selectedEnent} btnTitle="Save" />
    </>
  );
};

export default EditEvent;
