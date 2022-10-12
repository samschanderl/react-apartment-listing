// import modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import pages
import Home from './pages/home/Home';
import Navbar from './components/Navbar';
import Create from './pages/create/Create';
import SearchBar from './pages/searchBar/SearchBar';
import Listing from './pages/listing/Listing';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/listing:id">
            <Listing />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
