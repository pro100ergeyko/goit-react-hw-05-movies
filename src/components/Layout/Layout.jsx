import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from 'components/Loader/Loader';
import { Container, NavItem, NavList } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
      </NavList>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </Container>
  );
};
