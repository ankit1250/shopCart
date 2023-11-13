import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';



function App() {
  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={ProductList}/>
        <Route path="/product/:productId"  component={ProductDetails}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
