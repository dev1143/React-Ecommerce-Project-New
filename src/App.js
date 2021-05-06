
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from "./Navbar/Home";
import Cart from "./Cart/Cart";
import Products from './Products/Products';
import Singleitem from './Products/Singleitem';
import Category from './Products/Category';
import Login from "./Forms/LoginForm";
import Registration from './Forms/RegistrationForm';
import Address from "./Address/Address";
import Payment from "./Address/Payment"
import Profile from "./Navbar/Profile"
import OrderSummary from './Navbar/OrderSummary';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/product/category" component={Category}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/address" component={Address}/>
          <Route exact path="/payment" component={Payment}/>
          <Route exact path="/OrderSummary" component={OrderSummary}/>
          <Route exact path="/product/category/:detail" component={Products}/>
          <Route exact path="/productdetails/:single" component={Singleitem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
