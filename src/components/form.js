import React from "react";
import "../css/App.css";

class Form extends React.Component {
  state = { type: "", radius: "", price: "", rating: "" };

  onFormSubmit = event => {
    console.log("Hi");
  };

  render() {
    return (
      <div
        className="ui middle aligned center aligned grid"
        style={{ marginTop: "10px" }}
      >
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">Food Picker 9000</div>
          </h2>
          <form className="ui large form" onSubmit={this.onFormSubmit}>
            <div className="ui stacked segment">
              <div className="field">
                <label> Type of Food:</label>
                <select
                  className="ui fluid dropdown"
                  onChange={e =>
                    this.setState({
                      ...this.state,
                      price: e.target.value
                    })
                  }
                >
                  <option value="">Food Type</option>
                  <option value="American">American</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>
              <div className="field">
                <label> Radius:</label>
                <input type="text" name="radius" placeholder="Miles" />
              </div>
              <div className="field">
                <label> Price Point:</label>
                <select
                  className="ui fluid dropdown"
                  onChange={e =>
                    this.setState({
                      ...this.state,
                      price: e.target.value
                    })
                  }
                >
                  <option value="">Price</option>
                  <option value="0">$</option>
                  <option value="1">$$</option>
                  <option value="2">$$$</option>
                  <option value="3">$$$$</option>
                </select>
              </div>
              <div className="field">
                <label> Rating:</label>
                <select
                  className="ui fluid dropdown"
                  onChange={e =>
                    this.setState({
                      ...this.state,
                      rating: e.target.value
                    })
                  }
                >
                  <option value="">Rate</option>
                  <option value="0">$</option>
                  <option value="1">$$</option>
                  <option value="2">$$$</option>
                  <option value="3">$$$$</option>
                </select>
              </div>
              <div className="ui teal large button" onClick={this.onFormSubmit}>
                Find Food
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
