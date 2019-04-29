import React from "react";
import { Dropdown, Form, Button, Header, Card, Grid } from "semantic-ui-react";

const options = [
  { key: "1 Star", text: "1 Star", value: "1" },
  { key: "2 Star", text: "2 Star", value: "2" },
  { key: "3 Star", text: "3 Star", value: "3" },
  { key: "4 Star", text: "4 Star", value: "4" },
  { key: "5 Star", text: "5 Star", value: "5" }
];

class Rating extends React.Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
                Select Rating Range:
              </Header>
              <Dropdown
                style={{ marginTop: "25%" }}
                onChange={this.props.handleChange("radius")}
                label="Restaurant Rating - Minimum"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Minimum Rating"
              />
              <Dropdown
                style={{ marginTop: "10px" }}
                onChange={this.props.handleChange("rating_max")}
                label="Restaurant Rating - Maximum"
                selection
                fluid
                search
                options={options}
                values={values}
                placeholder="Maximum Rating"
              />
              <Button onClick={this.back}>Back</Button>
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

export default Rating;
