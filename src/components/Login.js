import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import "../css/Login.css";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../Reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
