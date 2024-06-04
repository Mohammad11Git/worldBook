import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbarapp from './page/Navbar';
import Home from './page/Home';
import SingleBook from './page/SingleBook';
import MyFooter from './page/MyFooter';
import Shop from './page/Shop';
function App() {
  return (
    <Router>
    <div className="App">
        <Navbarapp/>
         <div className='content'>
               <Switch>
                <Route exact path="/">
                   <Home/>
                </Route>
                <Route path="/book/:_id">
                    <SingleBook/>
                </Route>
                <Route path="/shop">
                      <Shop/>
                </Route>
               </Switch>
               <MyFooter/>
         </div>         
    </div>
    </Router>
  );
}

export default App;
