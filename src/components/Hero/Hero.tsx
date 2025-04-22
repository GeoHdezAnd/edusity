import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero" id="inicio">
            <div className="hero-text">
                <h1>
                    Nosotros tenemos la mejor educación para crear un mundo
                    mejor
                </h1>
                <p>
                    Nuestros planes de estudios están diseñados para sumergir a
                    nuestros estudiantes de conocimiento, habilidades y
                    experiencia que necesitan para enfrentarse al mundo real
                </p>
                <button className="btn">
                    Conocer más<img src={dark_arrow}  alt="icon-arrow"></img>
                </button>
            </div>
        </div>
    );
};

export default Hero;
