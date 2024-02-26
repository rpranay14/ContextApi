import logo from './logo.svg';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AddNewTodo from './Components/AddNewTodo';
import { UserContextProvider } from './context/UserContext';


function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path="/addnew" element={<AddNewTodo/>}/>
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
