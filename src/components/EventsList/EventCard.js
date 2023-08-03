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
      <PositionWrap>
        <Mark>{category}</Mark>
        <Mark>{priority}</Mark>
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
              {date} at {time}
            </TextInfo>
            <TextInfo>{location}</TextInfo>
          </FlexWrap>
          <DescWrap>
            <Title>{title}</Title>
            <DescText>{description}</DescText>
          </DescWrap>
        </Action>
        <Button type="button" title="More info" />
      </Wrapper>
    </Card>
  );
};

export default EventCard;
