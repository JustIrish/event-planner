import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'styles/GlobalStyle';
import { Layout, Header, HeaderTitle } from './SharedLayout.styled';
import Spinner from 'components/Spinner/Spinner';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <HeaderTitle>Event Planner</HeaderTitle>
      </Header>
      <Suspense fallback={<Spinner />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default SharedLayout;
