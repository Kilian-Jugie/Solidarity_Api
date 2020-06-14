import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function hlRouter(data) {
  const testfile = require("./"+data.match.params[0])
  
  return (
    <div>
     <tr />
    {testfile.constante}
  </div>
  )
}

/** 
  @brief High-Level Router Component
  @description Used only to convert annoying component format to a functional format
*/
const hlRouterComponent = (data) => (
  hlRouter(data)
)

function pathGenerator() {
  let ret = "/api";
  let argCount = (window.location.pathname).split("/").length-2;
  for(let n = 0; n<argCount; n++) {
    ret+="/:"+n;
  }
  return ret
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path={pathGenerator()} component={hlRouterComponent} />
      </Switch>
    </Router>
  )

}

export default App;
