// ClassBase component
import React, { Component } from "react";

class Header extends Component {
  render() {
    const mystyles = {
      header: {
        background: "teal",
      },
      logo: {
        color: "white",
        textAlign: "center",
        fontSize: "30px",
      },
    };

    // Render is used
    return (
      <header style={mystyles.header}>
        <div style={mystyles.logo}>React App</div>
        <center>
          <input type="text" />
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
