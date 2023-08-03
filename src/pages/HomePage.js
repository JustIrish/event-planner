import EventsList from 'components/EventsList/EventsList';
import MainTitle from 'components/MainTitle/MainTitle';
import useWindowDimensions from 'hooks/useWindowDimensions';

const Home = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      {width > 767 && <MainTitle>My events</MainTitle>}
      <EventsList />
    </>
  );
};

export default Home;
