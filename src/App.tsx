import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
    const [playState, setPlayState] = useState(false);
    return (
        <>
            <NavBar />
            <Hero />
            <div className="container">
                <Title title="Nuestros programas" subTitle="Lo que ofrecemos" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title title="Galeria" subTitle="Fotos del campus" />
                <Campus />
                <Title
                    title="Testimonios"
                    subTitle="Lo que opinan nuestros estudiantes"
                />
                <Testimonials />
                <Title
                    title="Contacto"
                    subTitle="Contactanos a nuestro email"
                />
                <Contact />
                <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        </>
    );
}

export default App;
