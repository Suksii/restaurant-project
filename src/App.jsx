import MainPage from "./pages/MainPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import MenuPage from "./pages/MenuPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {useState} from "react";

function App() {

    const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage showModal={showModal} setShowModal={setShowModal}/>} />
            <Route path="/menu" element={<MenuPage/>} />
            <Route path="/about-us" element={<AboutUsPage/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/contact" element={<ContactPage showModal={showModal} setShowModal={setShowModal}/>} />
        </Routes>
        <Footer />
    </div>

  )
}

export default App
