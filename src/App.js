import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/notFound/NotFound';
import PlaceOrder from './components/placeOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop></Shop>}>
          </Route>
          <Route exact path="/" element={<Shop></Shop>}>
          </Route>
          <Route path="/review" element={<OrderReview></OrderReview>}>
          </Route>
          <Route path="/inventory" element={<Inventory></Inventory>}>
          </Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
