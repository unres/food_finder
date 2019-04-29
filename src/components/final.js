import React from "react";
import axios from "axios";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

class Final extends React.Component {
  callAPI() {
    axios
      .post("localhost:8000", { data: this.state })
      .then(data => {
        console.log(data);
        console.log("Success!");
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { values } = this.props;
    console.log(this.props);
    return (
      <Button onClick={this.callAPI} style={{ marginTop: "10px" }}>
        Save And Continue{" "}
      </Button>
    );
  }
}

export default Final;
