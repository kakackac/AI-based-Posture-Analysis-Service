import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../NavBar";

const Main = styled.main`
    padding-top: var(--header-h);
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 24px;
    padding-right: 24px;
`;

const Footer = styled.footer`
    background: var(--color-green-dark);
    color: white;
    text-align: center;
    padding: 40px 0;
    margin-top: 80px;
    font-size: 14px;
`;

export default function CommonLayout() {
    return (
    <>
      <NavBar />
      <Main>
        <Outlet /> 
      </Main>
      <Footer>꼼딱핑 2025</Footer>
    </>
  );
}
