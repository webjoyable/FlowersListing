import React from "react";
import Container from "../components/layout/Container.component";
import FacebookLogin from "../components/facebook-login/FacebookLogin.component";
import styled from "styled-components";

const Strikethrough = styled.div`
  text-decoration: line-through;
`;

const Login = (props) => {
  return (
    <Container width="400px" center>
      <h2>Login</h2>
      <div>
        Please login with your Facebook account{" "}
        <Strikethrough>
          since the app requires user posts data as collections.
        </Strikethrough>
        <br />
        Unfortunately, due to COVID-19 pandemic, Facebook didn't approve my
        'user_posts' app permissions in time, so I had to replace the feed with
        some random API, but the login method is still using facebook API
      </div>
      <FacebookLogin />
    </Container>
  );
};

export default Login;
