import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import Button from "../button/Button.component";
import { CurrentUserContext } from "../../contexts/currentUser.context";

const FacebookLogin = ({ history }, ...props) => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    /* load Facebook API */
    loadFbAPI();
  }, []);

  const loadFbAPI = () => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "284408176105761",
        cookie: true,
        xfbml: true,
        version: "v6.0",
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const handleResponse = (res) => {
    if (res) {
      if (window.FB) {
        window.FB.api("/me", { fields: "id, name, email" }, (profileData) => {
          const fbProfileData = {
            ...res,
            ...profileData,
          };
          /* put this in the global context */
          setCurrentUser(fbProfileData);

          /* redirect to dashboard */
          history.push("/dashboard");
        });
      }
    }
  };

  const statusChangeCallback = (res) => {
    if (res.status === "connected") {
      const { userID, accessToken, expiresIn } = res.authResponse;
      handleResponse({
        userID,
        accessToken,
        expiresIn,
      });
    } else if (res.status === "not_authorized") {
      handleResponse(false);
    } else {
      handleResponse(false);
    }
  };

  const checkLoginState = () => {
    if (window && window.FB) {
      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    } else {
      console.log("Facebook API not ready");
    }
  };

  const handleLogin = () => {
    if (window && window.FB) {
      window.FB.login(
        function (response) {
          checkLoginState();
        },
        {
          scope: "email, public_profile",
        }
      );
    } else {
      console.log("Cannot login! Facebook API not ready");
    }
  };

  const handleClick = () => {
    handleLogin();
  };
  return (
    <Button align="center" onClick={handleClick}>
      Facebook login
    </Button>
  );
};

export default withRouter(FacebookLogin);
