import {BrowserRouter , Routes, Route} from 'react-router-dom';
import { DataProvider } from './components/Context';
import Products from "./components/Products"
import Header from './components/Header';
import Details from './components/Details';
import Cart from "./components/Cart"

function App() {
  return (
   <DataProvider>
      <div className="main-website">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
           
          </Routes>

        </BrowserRouter>
      </div>
    </div>
   </DataProvider>
  );
}

export default App;
