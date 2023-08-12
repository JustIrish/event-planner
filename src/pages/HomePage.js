import ActionBar from 'components/ActionBar/ActionBar';
import EventsList from 'components/EventsList/EventsList';
import MainTitle from 'components/MainTitle/MainTitle';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { TitleWrap } from './pagesStyles/HomePage.styled';

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <TitleWrap>
        <ActionBar />
        {width > 767 && <MainTitle>My events</MainTitle>}
      </TitleWrap>
      <EventsList />
    </>
  );
};

export default Home;
