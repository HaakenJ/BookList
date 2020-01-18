import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/books/:id" component={Detail}></Route>
          <Route path="/books" component={Books}></Route>
          <Route exact path="/" component={Books}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
