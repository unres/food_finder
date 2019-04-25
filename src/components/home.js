import React from "react";

import Unsplash from "../api/cloud";
import Footer from "../components/footer.js";
import Form from "../components/form.js";
import "../css/App.css";

class Home extends React.Component {
  state = { images: [] };

  onSearchSumbit = async term => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term }
    });
    /*.then(response => {
        console.log(response.data.results);
      });
      ^one way to make the  program wait
      */
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSearchSumbit} />
        <Footer />
      </div>
    );
  }
}

export default Home;
