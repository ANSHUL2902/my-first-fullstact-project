
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddUser from './user/AddUser';
import EditUser from './user/EditUser'; 
import ViewUser from './user/ViewUser';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar></Navbar>

     <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/adduser" element={<AddUser></AddUser>}></Route>
      <Route exact path="/edituser/:userId" element={<EditUser></EditUser>}></Route>
      <Route exact path='/viewuser/:userId' element={<ViewUser></ViewUser>}></Route>
     </Routes>
     </Router>

    </div>
  );
}

export default App;
