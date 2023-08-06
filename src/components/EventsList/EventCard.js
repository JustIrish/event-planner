import { useLocation } from 'react-router-dom';

import Button from 'components/Button/Button';
import {
  Card,
  Image,
  Wrapper,
  Action,
  FlexWrap,
  TextInfo,
  PositionWrap,
  Mark,
  DescWrap,
  Title,
  DescText,
} from './EventsList.styled';

const EventCard = ({
  event: {
    id,
    picture,
    title,
    date,
    time,
    location,
    description,
    category,
    priority,
  },
}) => {
  const locationProp = useLocation();

  const formatDate = date.slice(5).split('-').reverse().join('.');

  return (
    <Card>
      <PositionWrap>
        <Mark>{category}</Mark>
        <Mark type={priority}>{priority}</Mark>
      </PositionWrap>
      <Wrapper>
        <Image
          src={require(`../../${picture}`)}
          alt={title}
          width="272"
          loading="lazy"
        />
        <Action>
          <FlexWrap>
            <TextInfo>
              {formatDate} at {time}
            </TextInfo>
            <TextInfo>{location}</TextInfo>
          </FlexWrap>
          <DescWrap>
            <Title>{title}</Title>
            <DescText>{description}</DescText>
          </DescWrap>
        </Action>
        <Button
          to={`/details/${id}`}
          location={locationProp}
          type="button"
          title="More info"
        />
      </Wrapper>
    </Card>
  );
};

export default EventCard;
