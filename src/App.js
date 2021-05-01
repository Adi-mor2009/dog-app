import logo from './logo.svg';
import './App.css';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import Header from './components/Header/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BreedPage from './pages/BreedPage/BreedPage';

function App() {
  return (
    <div className="a-dog">
      <Header></Header>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <BreedsPage/>
          </Route>
          <Route exact path="/Breeds"><BreedsPage/></Route>
          <Route exact path="/breeds/:breed">
            <BreedPage/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
