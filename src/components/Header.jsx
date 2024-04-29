import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LogoArea>
        <img src="/images/logo/3355_logo.png" width="100px" />
      </LogoArea>
      <NavBar>
        <NavButton>홈</NavButton>
        <NavButton>커뮤니티</NavButton>
        <NavButton>코스추천</NavButton>
      </NavBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;

const LogoArea = styled.div`
  margin: 0px 15px;
`;

const NavBar = styled.div`
  display: flex;
`;

const NavButton = styled.div`
  margin: 10px;
  font-family: Freesentation-9Black;
  font-size: 18px;
  color: #3f3d3d;
`;

export default Header;
