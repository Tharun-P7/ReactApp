import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import JSON from "./db.json";
import NewsList from "../src/component/NewsList";
class App extends Component {
  constructor() {
    super();

    this.state = {
      news: JSON,
      filtered: JSON,
    };
  }

  filterNews(userInput) {
    let output = this.state.news.filter((item) => {
      // console.log(userInput, item.title.toLowerCase().indexOf(userInput));
      return (
        item.title.toLowerCase().indexOf(userInput) > -1 ||
        item.body.toLowerCase().indexOf(userInput) > -1
      );
    });
    this.setState({ filtered: output });
  }
  render() {
    // console.log(this.state.news);
    return (
      <React.Fragment>
        <Header
          newsSearch={(data) => {
            this.filterNews(data);
          }}
        />
        <NewsList newsData={this.state.filtered}></NewsList>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
