// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const checkEmailForm = () => {
    if (emailRegExp.test(email)) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 이메일이 올바른 형태인지 검사
    checkEmailForm();
    if (isEmailError === true) {
      alert("로그인 실패 (시유: 이메일 형태가 올바르지 않음)");
      return;
    }

    // 비밀번호가 공란인지 검사
    if (password === "") {
      alert("로그인 실패 (시유: 비밀번호 혹은 닉네임이 공란임)");
    }

    // 백엔드와 통신
    fetch("http://서버주소/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("TOKEN", data.accessToken);
          navigate("/");
        } else {
          alert(
            "로그인 실패 (이메일 혹은 비밀번호가 존재하지 않거나 올바르지 않음)"
          );
        }
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default SignIn;
