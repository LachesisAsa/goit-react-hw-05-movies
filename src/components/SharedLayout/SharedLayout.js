import { Notification } from 'components/Notification/Notification';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Notification message="Loading subpage..." />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};