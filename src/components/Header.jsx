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
            <a href="/course-recommendation">코스추천</a>
          </NavButton>
        </NavBar>
      </HeaderLeftArea>
      <HeaderRightArea>
        <LoginArea>
          {token ? (
            <>
              <LogoutBtn>
                <a
                  href={"/sign-in"}
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  로그아웃
                </a>
              </LogoutBtn>
              <MyPageBtn>
                <a href="/my-page">마이페이지</a>
              </MyPageBtn>
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
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
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
  /* font-family: Freesentation-9Black; */
  font-size: 15px;

  a {
    color: #3f3d3d;
  }

  a:hover {
    color: #04dfd9;
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
  font-size: 14px;
`;

const MyPageBtn = styled.div`
  margin-right: 15px;
  font-size: 14px;
`;

const LoginBtn = styled.div`
  margin-right: 15px;
  font-size: 14px;
`;

const SignUpBtn = styled.div`
  margin-right: 15px;
  font-size: 14px;
`;

export default Header;
