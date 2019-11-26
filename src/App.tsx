import React from "react";
const UmdLoader = require("react-umd-loader-uni").default;

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <UmdLoader
          url="http://devd.io:8000/lib/hello.min.js"
          name="__module_hello"
          props={{ title: "good" }}
        >
          <p>Loading remote component...</p>
        </UmdLoader>{" "}
      </div>
    );
  }
}

export default App;
