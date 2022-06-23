import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from './createBlog';
import BlogDetails from './blog-details';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/CreateBlog">
              <CreateBlog />
            </Route>
            <Route path="/BlogDetails/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
