import React from "react";

import Home from "../components/home";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorMessage errorMessage={this.state.errorMessage} />;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Home lat={this.state.lat} long={this.state.long} />;
    }

    return <Spinner message="Please Accept Location Request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
