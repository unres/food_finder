import React from "react";
import axios from "axios";
import { Button, Header, Card, Grid } from "semantic-ui-react";

class Final extends React.Component {
  state = { name: null, address: null };
  //calls the backend on the cloud to obtain plae info
  callAPI = props => {
    axios
      .post(process.env.REACT_APP_API_ENDPOINT, {
        data: this.props.values
      })
      .then(data => {
        this.setState({ name: this.data.name, address: this.data.address });
        console.log(data);
        console.log("Success!");
      })
      .catch(err => {
        console.error(err);
      });
  };

  //renders the button or the address/name
  renderContent() {
    if (!this.state.name) {
      return (
        <Grid
          verticalAlign="middle"
          centered
          style={{ height: "25vh", marginTop: "25vh" }}
        >
          <Card>
            <Card.Header as="h1" textAlign="center">
              Find Food
            </Card.Header>
            <Card.Content>
              <Button onClick={this.callAPI()} style={{ marginTop: "10px" }}>
                Find Food!
              </Button>
            </Card.Content>
          </Card>
        </Grid>
      );
    }
    return (
      <Grid
        verticalAlign="middle"
        centered
        style={{ height: "25vh", marginTop: "25vh" }}
      >
        <Card>
          <Card.Header as="h1" textAlign="center">
            Find Food
          </Card.Header>
          <Card.Content>
            <Header as="h2" style={{ marginTop: "15%" }}>
              {this.state.name}
            </Header>
            <Card.Description>{this.state.address}</Card.Description>
          </Card.Content>
        </Card>
      </Grid>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Final;
