// ClassBase component
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My React App",
      keywords: "User Input Here",
    };
  }

  inputChange(event) {
    // console.log(event.target.value);
    this.setState({ keywords: event.target.value });
    this.props.newsSearch(event.target.value);
  }
  render() {
    // Render is used
    return (
      <header>
        <div className="logo" onClick={() => console.log("Clicked")}>
          {this.state.title}
        </div>
        <center>
          <input type="text" onChange={this.inputChange.bind(this)} />
          <p>{this.state.keywords}</p>
        </center>
        <hr />
      </header>
    );
  }
}

export default Header;
//Functional Based components
// import React from "react";

// const Header = () => {
//   return (
//     <div>
//       <center>
//         <h1>This is the header</h1>
//       </center>
//     </div>
//   );
// };

// export default Header;
