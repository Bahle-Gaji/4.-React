import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./TodoApp";

class App extends React.Component {

  render() {
    return (
      <div>
        <TodoApp />
      </div>
    )
  }
}

export default App;
