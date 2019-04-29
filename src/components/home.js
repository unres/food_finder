import React from "react";

import Unsplash from "../api/cloud";

import Type from "../components/type";
import Radius from "../components/radius";
import Price from "../components/price";
import Rating from "../components/rating";

import "../css/App.css";

class Home extends React.Component {
  state = {
    step: 1,
    type: "",
    radius: "",
    price_min: "",
    price_max: "",
    rating_min: "",
    rating_max: "",
    long: this.props.lat,
    lat: this.props.long
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      ...this.state,
      step: step - 1
    });
  };

  handleChange = input => (e, { value }) => this.setState({ [input]: value });

  render() {
    const { step } = this.state;
    const {
      type,
      radius,
      price_min,
      price_max,
      rating_min,
      rating_max,
      long,
      lat
    } = this.state;
    const values = {
      type,
      radius,
      price_min,
      price_max,
      rating_min,
      rating_max,
      long,
      lat
    };
    switch (step) {
      case 1:
        return (
          <Type
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Radius
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Price
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Rating
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <div />;
    }
  }
}

export default Home;
