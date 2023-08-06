import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'components/Button/Button';
import { selectEvents } from 'redux/events/selectors';
import { deleteEvent } from 'redux/events/eventsSlice';

import {
  StyledCard,
  Image,
  DescWrap,
  DescText,
  TextContainer,
  StyledText,
  ButtonsContainer,
} from './EventDetailsCard.styled';

const EventDetailsCard = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const events = useSelector(selectEvents);
  const locationProp = useLocation();

  const selectedEnent = events.find(item => item.id === id);

  const {
    picture,
    title,
    date,
    time,
    location,
    description,
    category,
    priority,
  } = selectedEnent;

  const onDeleteClick = () => {
    dispatch(deleteEvent(id));
    navigate('/', { replace: true });
  };

  return (
    <>
      <StyledCard>
        <Image
          src={require(`../../${picture}`)}
          alt={title}
          width="272"
          loading="lazy"
        />
        <DescWrap>
          <DescText>{description}</DescText>
          <TextContainer>
            <StyledText weight="bold">{category}</StyledText>
            <StyledText type={priority} weight="bold">
              {priority}
            </StyledText>
            <StyledText weight="bold">{location}</StyledText>
            <StyledText>
              {' '}
              {date} at {time} am
            </StyledText>
          </TextContainer>
          <ButtonsContainer>
            <Button
              to={`/edit`}
              location={locationProp}
              type="button"
              title="Edit"
            />
            <Button
              option="button"
              type="button"
              title="Delete event"
              onClick={onDeleteClick}
            />
          </ButtonsContainer>
        </DescWrap>
      </StyledCard>
    </>
  );
};

export default EventDetailsCard;
