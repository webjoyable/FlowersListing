import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUser.context";
import Button from "../button/Button.component";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const UserHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WelcomeNote = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const UserHeader = ({ history }) => {
  const { userData } = useContext(CurrentUserContext);
  const handleLogout = () => {
    if (window && window.FB) {
      window.FB.logout(function (response) {
        history.push("/");
      });
    } else {
      history.push("/");
    }
  };

  return (
    <UserHeaderWrapper>
      <WelcomeNote>Welcome, {userData.name}</WelcomeNote>
      <Button margin="0" onClick={handleLogout}>
        Logout
      </Button>
    </UserHeaderWrapper>
  );
};

export default withRouter(UserHeader);
