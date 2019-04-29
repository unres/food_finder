import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

const options = [
  { key: "American", text: "American", value: "american" },
  { key: "Chinese", text: "Chinese", value: "chinese" },
  { key: "Greek", text: "Greek", value: "greek" },
  { key: "Japanese", text: "Japanese", value: "japanese" },
  { key: "Korean", text: "Korean", value: "korean" },
  { key: "Indian", text: "Indian", value: "indian" }
];

class Type extends React.Component {
  saveAndContinue = e => {
    console.log(this.props.values);
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Grid
        verticalAlign="middle"
        centered
        style={{ height: "25vh", marginTop: "25vh" }}
      >
        <Card>
          <Card.Header as="h1" textAlign="center">
            Select Data
          </Card.Header>
          <Card.Content>
            <Form color="green">
              <Header as="h2" style={{ marginTop: "15%" }}>
                Type of Food:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("type")}
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Type of Food"
              />

              <Button
                onClick={this.saveAndContinue}
                style={{ marginTop: "10px" }}
              >
                Save And Continue{" "}
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Grid>
    );
  }
}

export default Type;
