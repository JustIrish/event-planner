import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'styles/GlobalStyle';
import {
  Layout,
  Header,
  SelectStyled,
  SelectWrap,
  FlexWrap,
  HeaderTitle,
  Main,
  Container,
} from './SharedLayout.styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import Spinner from 'components/Spinner/Spinner';
import Search from 'components/Search/Search';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <Container>
          <FlexWrap>
            <HeaderTitle>Event Planner</HeaderTitle>
            <SelectWrap>
              <RiArrowDownSLine size="24" color="#3f3f3f" />
              <SelectStyled>
                <option value="High">UK</option>
                <option value="Medium">EN</option>
              </SelectStyled>
            </SelectWrap>
            <Search />
          </FlexWrap>
        </Container>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default SharedLayout;
