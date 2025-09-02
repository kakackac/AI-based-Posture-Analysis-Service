import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background: var(--color-white);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--header-h, 64px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const LogoButton = styled.button`
  font-weight: 700;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;

  /* NavLink가 활성화되면 자동으로 active 클래스가 추가됩니다. */
  &.active {
    border-bottom: 2px solid black;
  }
`;

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <Header>
            <LogoButton onClick={() => navigate("/")}>로고</LogoButton>
            <Nav>
                <StyledLink to="/live">실시간 자세교정</StyledLink>
                <StyledLink to="/photo">사진 분석</StyledLink>

                {/* 수정된 부분. */}
                <StyledLink to="/report">리포트</StyledLink>
                <StyledLink to="/chatbot">챗봇</StyledLink>
                {/* 수정된 부분. */}

                <StyledLink to="/rank">업적</StyledLink>
                <StyledLink to="/mypage">마이페이지</StyledLink>
            </Nav>
        </Header>
    );
}