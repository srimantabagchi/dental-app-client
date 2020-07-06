import { Tooltip, Button } from "@material-ui/core";
import React from "react";
import "./AuthPanel.scss";
import { get } from "lodash";

const submitIssue = (user) => {
  const data = {
    name: get(user, "name"),
    email: get(user, "email"),
    subject: "Dental App: ",
    platform: process.env.REACT_APP_ENV || "",
    userAgent: navigator.userAgent,
  };

  const body =
    `Issue Description: \n` +
    `\n` +
    `\n` +
    `Steps to Reproduce: \n` +
    `\n` +
    `\n` +
    `Additional Details or Comments: \n` +
    `\n` +
    `\n` +
    `----\n` +
    `(!) Do not edit the information below!\n` +
    `||Name|${data.name.trim()}|\n` +
    `||Email|${data.email.trim()}|\n` +
    `||Environment|${data.platform.trim()}|\n` +
    `||User Agent|${data.userAgent.trim()}|\n`;

  const mailUrl = `mailto:offersjira@loyalty.com?cc=things@loyalty.com,offervaluestream@loyalty.com&subject=${encodeURIComponent(
    data.subject
  )}&body=${encodeURIComponent(body)}`;

  return mailUrl;
};

const AuthPanel = ({ user, logout }) => {
  //if (user) {
  return (
    <section className="user-profile">
      <Tooltip
        title={
          <>
            <p>
              <small>email: </small>
              srimantabagchi@gmail.com
            </p>
            <p>
              <small>role: </small>
              Admin
            </p>
          </>
        }
      >
        <div className="user">
          {/* <img
              className="avatar"
              alt="avatar"
              src={require("../assets/images/bb8-person_outline-24px.svg")}
            /> */}
          <span className="user-name">Srimanta Bagchi</span>
        </div>
      </Tooltip>
      <div className="actions">
        <Button
          id="bb8-btn-auth-submit-issue"
          color="primary"
          size="small"
          onClick={() => {
            const mailURL = submitIssue(user);
            window.open(mailURL, "_self");
          }}
        >
          Submit Issue
        </Button>
      </div>
      <div className="actions">
        <Button
          id="bb8-btn-auth-signout"
          color="primary"
          size="small"
          onClick={logout}
        >
          Signout
        </Button>
      </div>
    </section>
  );
  // } else {
  //   return (
  //     <section className="user-profile">
  //       <div className="actions">
  //         <Button id="bb8-btn-auth-signin" color="primary" size="small">
  //           Signin
  //         </Button>
  //       </div>
  //     </section>
  //   );
  // }
};

export default AuthPanel;
