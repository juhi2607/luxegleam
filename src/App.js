
import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getTheme } from "./theme/theme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import About from "./pages/About";

function App() {
  const [mode, setMode] = useState("dark");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={() => setMode(mode === "dark" ? "light" : "dark")} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
<Route path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
