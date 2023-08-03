import {
  Card,
  Image,
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
  return (
    <Card>
      <Image
        src={require(`../../${picture}`)}
        alt={title}
        width="272"
        loading="lazy"
      />
      <FlexWrap>
        <TextInfo>
          {date} at {time}
        </TextInfo>
        <TextInfo>{location}</TextInfo>
      </FlexWrap>
      <DescWrap>
        <Title>{title}</Title>
        <DescText>{description}</DescText>
      </DescWrap>

      <PositionWrap>
        <Mark>{category}</Mark>
        <Mark>{priority}</Mark>
      </PositionWrap>
    </Card>
  );
};

export default EventCard;
