// Login.js
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { login } from "./AuthAPI";
import styled from "styled-components";

const SignIn = () => {
  // const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isEmailError, setIsEmailError] = useState(false);
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const checkEmailForm = () => {
    if (emailRegExp.test(values.email)) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 이메일이 올바른 형태인지 검사
    checkEmailForm();
    if (isEmailError === true) {
      alert("로그인 실패 (시유: 이메일 형태가 올바르지 않음)");
      return;
    }

    // 비밀번호가 공란인지 검사
    if (values.password === "") {
      alert("로그인 실패 (시유: 비밀번호 혹은 닉네임이 공란임)");
    }

    login(values)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("tokenType", response.tokenType);
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        window.location.href = `/`;
      })
      .catch((error) => {
        console.log(error);
        alert(
          "로그인 실패 (이메일 혹은 비밀번호가 존재하지 않거나 올바르지 않음)"
        );
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="이메일"
        value={values.email}
        onChange={async (e) =>
          setValues((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={values.password}
        onChange={async (e) =>
          setValues((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
      />
      <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 40px;
`;

const Input = styled.input`
  width: 450px;
  height: 40px;
  margin-top: 10px;
  border: 1px solid #a7bdc2;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;

  &::placeholder {
    font-size: 15px;
  }
`;

const LoginBtn = styled.button`
  width: 450px;
  height: 40px;
  margin-top: 20px;
  background-color: #08dfd9;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
`;

export default SignIn;
