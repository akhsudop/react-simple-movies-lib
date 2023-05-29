import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link, Loader } from "./SharedLayout.styled";
import { Suspense } from "react";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            🎬
          </span>{" "}
          mOVies
        </Logo>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
