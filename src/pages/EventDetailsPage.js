import { useLocation, useParams } from 'react-router-dom';

import BackLink from 'components/BackLink/BackLink';
import MainTitle from 'components/MainTitle/MainTitle';
import EventDetailsCard from 'components/EventDetailsCard/EventDetailsCard';

import { Wrap } from './pagesStyles/EventDetailsPage.styled';

const EventDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <Wrap>
        <MainTitle>Galery Opening</MainTitle>
        <EventDetailsCard id={id} />
      </Wrap>
    </>
  );
};

export default EventDetails;
