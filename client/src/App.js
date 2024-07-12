import Home from "./Pages/Home";
import "./assets/styles/main.css";
import Products from './Pages/Products'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FarmerInfo from "./components/FarmerInfo";
import LoginF from "./Pages/LoginF";
import RegisterF from "./Pages/RegisterF";
import LoginC from "./Pages/LoginC";
import RegisterC from "./Pages/RegisterC";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/farmer/:id" element={<FarmerInfo />} />
        <Route path="/farmer/login" element={<LoginF />} />
        <Route path="/customer/login" element={<LoginC />} />
        <Route path="/farmer/register" element={<RegisterF />} />
        <Route path="/customer/register" element={<RegisterC />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-stocks" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
