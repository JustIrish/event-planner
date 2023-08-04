import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'styles/GlobalStyle';
import {
  Layout,
  Header,
  HeaderTitle,
  Main,
  Container,
} from './SharedLayout.styled';
import Spinner from 'components/Spinner/Spinner';
import Search from 'components/Search/Search';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <HeaderTitle>Event Planner</HeaderTitle>
        <Search />
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
