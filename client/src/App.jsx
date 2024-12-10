import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import Forget from "./pages/Forget";
import Login from "./pages/Login";

function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Homepage />

    //   {/* footer */}
    //   <Footer />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;