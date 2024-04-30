import styled from "styled-components";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <Container>
      <HeaderLeftArea>
        <LogoArea>
          <img src="/images/logo/3355_logo.png" width="100px" />
        </LogoArea>
        <NavBar>
          <NavButton>
            <a href="/">홈</a>
          </NavButton>
          <NavButton>
            <a href="/community">커뮤니티</a>
          </NavButton>
          <NavButton>
            <a href="course-recommendation">코스추천</a>
          </NavButton>
        </NavBar>
      </HeaderLeftArea>
      <HeaderRightArea>
        <LoginArea>
          {token ? (
            <>
              <LogoutBtn>로그아웃</LogoutBtn>
              <MyPageBtn>마이페이지</MyPageBtn>
            </>
          ) : (
            <>
              <LoginBtn>
                <a href="/sign-in">로그인</a>
              </LoginBtn>
              <SignUpBtn>
                <a href="/sign-up">회원가입</a>
              </SignUpBtn>
            </>
          )}
        </LoginArea>
      </HeaderRightArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const HeaderLeftArea = styled.div`
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

  a {
    color: #3f3d3d;
  }

  a:hover {
    color: blue;
  }
`;

const HeaderRightArea = styled.div`
  margin: 0px 10px;
`;

const LoginArea = styled.div`
  display: flex;
`;

const LogoutBtn = styled.div`
  margin-right: 15px;
`;

const MyPageBtn = styled.div`
  margin-right: 15px;
`;

const LoginBtn = styled.div`
  margin-right: 15px;
`;

const SignUpBtn = styled.div`
  margin-right: 15px;
`;

export default Header;
