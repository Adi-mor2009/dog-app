import logo from './logo.svg';
import './App.css';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import Header from './components/Header/Header';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="a-dog">
      <Header></Header>
      <HashRouter>
        <Switch>
          <Route exact path="/" >
            <BreedsPage/>
          </Route>
          <Route exact path="/breed">
            <></>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
