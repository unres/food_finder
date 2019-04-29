import "../css/ErrorMessage.css";
import React from "react";

const ErrorMessage = props => {
  return (
    <div className="ui active dimmer">
      <i className="massive x icon icon red" />
      <h1 className="style-text">{props.errorMessage}</h1>
    </div>
  );
};

ErrorMessage.props = {
  errorMessage: "Unknown Problem"
};

export default ErrorMessage;
