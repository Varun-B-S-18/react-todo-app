import React from "react";
import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import "./style.css";

function App() {
  return (
    <div className="todo-container">
      <Header element="Todo"/>
      <Todoitem text="Eat" />
      <Todoitem completed={false} text="Code" />
      <Todoitem text="Sleep" />
      <Todoitem text="Repeat" />
      <Button />
    </div>
  );
}

export default App;