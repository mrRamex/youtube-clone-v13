import './App.css';
import Header from './Components/Header/Header'
import Header2 from './Components/Header2/Header2'
import Sidebar from './Components/Sidebar/Sidebar';
import MainPage from './Components/MainPage/MainPage';
import Channel from './Components/Channel/Channel';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path='/channel'>
              <Header/>
              <Sidebar/>
              <Channel/>
            </Route>
            <Route path="/">
              <Header/>
              <Header2/>
              <Sidebar/>
              <MainPage/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
