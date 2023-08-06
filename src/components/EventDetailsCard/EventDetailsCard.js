import Button from 'components/Buttons/Button';
import { useSelector } from 'react-redux';
import { selectEvents } from 'redux/events/selectors';

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
  const events = useSelector(selectEvents);

  //   console.log(id);
  //   const selectedEvent = events.find(event => event.id === id);

  //   console.log(selectedEvent);

  //   const {
  //     picture,
  //     title,
  //     date,
  //     time,
  //     location,
  //     description,
  //     category,
  //     priority,
  //   } = selectedEvent;

  return (
    <>
      <StyledCard>
        <Image
          src={require(`../../images/banquet.jpg`)}
          alt="jhjhj"
          width="272"
          loading="lazy"
        />
        <DescWrap>
          <DescText>description{}</DescText>
          <TextContainer>
            <StyledText>Art{}</StyledText>
            <StyledText>Low{}</StyledText>
            <StyledText>Sumy{}</StyledText>
            <StyledText> 10.08 at 15:00 am</StyledText>
          </TextContainer>
          <ButtonsContainer>
            <Button type="button" title="Edit" />
            <Button option="button" type="button" title="Delete event" />
          </ButtonsContainer>
        </DescWrap>
      </StyledCard>
    </>
  );
};

export default EventDetailsCard;
