// Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AGE_LIST = ["10", "20", "30", "40", "50", "60", "70", "80", "90"];
const GENDER_LIST = [
  [0, "male", "남자"],
  [1, "female", "여자"],
];
const COUNTRY_LIST = [
  [0, "south-korea", "대한민국"],
  [1, "america", "미국"],
  [2, "china", "중국"],
  [3, "japan", "일본"],
  [4, "england", "영국"],
  [5, "france", "프랑스"],
  [6, "germany", "독일"],
  [7, "italy", "이탈리아"],
  [8, "india", "인도"],
  [9, "brazil", "브라질"],
  [10, "canada", "캐나다"],
  [11, "australia", "호주"],
];

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("10");
  const [gender, setGender] = useState("남자");
  const [nationality, setNationality] = useState("대한민국");

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

  const handleSignup = (e) => {
    e.preventDefault();

    // 이메일이 올바른 형태인지 검사
    checkEmailForm();
    if (isEmailError === true) {
      alert("회원가입 실패 (시유: 이메일 형태가 올바르지 않음)");
      return;
    }

    // 비밀번호, 닉네임이 공란인지 검사
    if (password === "" || nickname === "") {
      alert("회원가입 실패 (시유: 비밀번호 혹은 닉네임이 공란임)");
    }

    // 체크 리스트를 모두 골랐는지 검사
    // if (age === "" || gender === "" || nickname == "") {
    //   alert("회원가입 실패 (사유: 체크 리스트에 체크가 모두 되어있지 않음)")
    // }

    // 백엔드와 통신
    fetch("http://서버주소/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        nickname: nickname,
        age: age,
        gender: gender,
        nationality: nationality,
      }),
    }).then((response) => {
      // if (response.status === 201) {
      if (response.ok === true) {
        alert("회원가입을 축하합니다!");
        navigate("/sign-in");
      } else {
        alert(
          "회원가입 실패 (시유: 이메일 혹은 비밀번호 중복, 닉네임이 이미 사용 중)"
        );
      }
    });
    // .then(data => {
    //   if (data.message === 'success') {
    //     navigate('/login');
    //   } else {
    //     alert('회원가입 실패');
    //   }
    // });
  };

  return (
    <Container onSubmit={handleSignup}>
      <Title>회원가입</Title>
      <SubTitle>필수 입력사항</SubTitle>
      <UpperBody>
        <Input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </UpperBody>
      <LowerBody>
        <Select
          name="age"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        >
          {AGE_LIST.map((age) => (
            <Option key={age} value={age}>
              {age}대
            </Option>
          ))}
        </Select>
        <Select
          name="gender"
          placeholder="성별"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          {GENDER_LIST.map(([key, gender, genderKor]) => (
            <Option key={key} value={gender}>
              {genderKor}
            </Option>
          ))}
        </Select>
        <Select
          name="nationality"
          placeholder="국적"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          {COUNTRY_LIST.map(([key, country, countryKor]) => (
            <Option key={key} value={country}>
              {countryKor}
            </Option>
          ))}
        </Select>
      </LowerBody>
      <SignUpBtn onClick={handleSignup}>회원가입</SignUpBtn>
      {/* <h4>아직 회원이 아니신가요?</h4> */}
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 50px;
`;

const SubTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 10px;
`;

const UpperBody = styled.div`
  display: flex;
  flex-direction: column;
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

const LowerBody = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Select = styled.select`
  width: 140px;
  height: 40px;
  margin-top: 20px;
  border: 1px solid #a7bdc2;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;

const Option = styled.option``;

const SignUpBtn = styled.button`
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

export default SignUp;
