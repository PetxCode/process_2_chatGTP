import { Outlet } from "react-router-dom";
import Sider from "../static/Sider";
import styled from "styled-components";

export interface iProps {
  id: number;
  title: string;
  description: string;
}

const Layout = () => {
  return (
    <div>
      <Container>
        <Sider />
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;

const Container = styled.main`
  display: flex;
`;
