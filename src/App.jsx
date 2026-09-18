import {useEffect,useState} from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import {translations} from "./data/translations";

export default function App(){
 const [lang,setLang]=useState(()=>localStorage.getItem("amp-lang")||"fr");
 useEffect(()=>{localStorage.setItem("amp-lang",lang);document.documentElement.lang=lang},[lang]);
 const t=translations[lang];
 return <div className="min-h-screen bg-ink text-white"><Navbar t={t} lang={lang} setLang={setLang}/><Routes>
   <Route path="/" element={<Home t={t}/>}/><Route path="/about" element={<About t={t}/>}/><Route path="/services" element={<Services t={t}/>}/><Route path="/gallery" element={<Gallery t={t} lang={lang}/>}/><Route path="/book" element={<Booking t={t} lang={lang}/>}/><Route path="/contact" element={<Contact t={t}/>}/>
 </Routes><Footer t={t}/><WhatsAppButton/></div>
}