import { useLocation } from 'react-router-dom';

import BackLink from 'components/BackLink/BackLink';
import MainTitle from 'components/MainTitle/MainTitle';
import EventForm from 'components/EventForm/EventForm';

const CreateEvent = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <MainTitle>Create new event</MainTitle>
      <EventForm btnTitle="Add event" />
    </>
  );
};

export default CreateEvent;
