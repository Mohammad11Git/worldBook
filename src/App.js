import {Outlet} from 'react-router-dom';
import Navbarapp from '../src/page/Navbar' ;
import MyFooter from '../src/page/MyFooter';
function App() {
  return (
     <>
       <Navbarapp/>
        <div className='min-h-screen'>
           <Outlet/>
        </div>
       <MyFooter/>
     </>
  );
}

export default App;
