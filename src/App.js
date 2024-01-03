import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Components/Store";
import Navbar from "./Components/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-5 pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
