import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbarapp from './page/Navbar';
import Home from './page/Home';
import SingleBook from './page/SingleBook';
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

               </Switch>
         </div>
            
    </div>
    </Router>
  );
}

export default App;
