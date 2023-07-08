
import './App.css';
import CheckOut from './Components/CheckOut/CheckOut';
import DisplayContent from './Components/DisplayContent/DisplayContent';
import {BrowserRouter as Router,Routes,Route,Link
} from "react-router-dom";
import MainPage from './Components/HomeP/MainPage';
import NavBar from './Components/NavBar/navigation';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import CartContextProvider from './Components/CartContext';



function App() {
  return (
    <Router>
    <div className="App">
      <CartContextProvider>
      <NavBar/>
      
      <Routes>
       
        <Route path="/display">
    <DisplayContent/>
    </Route>
    <Route path="/order:id">
     <PlaceOrder/>
     </Route>
     <Route path="/checkout">
     <CheckOut/>
     </Route>
     <Route path="">
        <MainPage/>
        </Route>
    </Routes>
    
    </CartContextProvider>
     
    </div>
    </Router>
  );
}

export default App;
