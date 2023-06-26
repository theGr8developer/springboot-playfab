
import Header from './component/header';
import { Navigate, useNavigate } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from "./component/register";
import Login from "./component/login";
import Home from './component/home';
import Logout from './component/logout';


function App() {
 
  return(
<>
<BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>

  </Routes>

</BrowserRouter>
</>

  );

  
  
}

export default App;
