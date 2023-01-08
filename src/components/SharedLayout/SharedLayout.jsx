import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import {ThreeDots} from 'react-loader-spinner';

const SharedLayout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/movies"> Movies</Link>
          </nav>
        </Header>
        <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
      </Container>
    );
  };
 export default SharedLayout;