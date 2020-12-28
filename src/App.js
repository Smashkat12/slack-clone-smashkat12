import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* React-Router -> Chat screen */}
          <Switch>
            <Route path="/room/:roomId">
              <h1>Chat Screen</h1>
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
              {/* <Chat /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
