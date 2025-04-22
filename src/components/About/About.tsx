import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

interface AboutProps {
    setPlayState: (state: boolean) => void;
}

const About: React.FC<AboutProps> = ({ setPlayState }) => {
    return (
        <div className="about" id="nosotros">
            <div className="about-left">
                <img src={about_img} alt="about-us" className="about-img" />
                <img
                    src={play_icon}
                    alt="play"
                    className="play-icon"
                    onClick={() => {
                        setPlayState(true);
                    }}
                />
            </div>
            <div className="about-right">
                <h3>Sobre la universidad</h3>
                <h2>Nutriendo a los lideres del mañana</h2>
                <p>
                    Embárcate en un viaje educativo transformador con los
                    programas educativos integrales de nuestra universidad.
                    Nuestro innovador currículo está diseñado para dotar a los
                    estudiantes de los conocimientos, las habilidades y las
                    experiencias necesarias para destacar en el dinámico campo
                    de la educación.{" "}
                </p>{" "}
                <p>
                    Con un enfoque en la innovación, el aprendizaje práctico y
                    la mentoría personalizada, nuestros programas preparan a los
                    futuros educadores para generar un impacto significativo en
                    las aulas, las escuelas y las comunidades.{" "}
                </p>{" "}
                <p>
                    Ya sea que aspires a convertirte en docente, administrador,
                    consejero o líder educativo, nuestra diversa gama de
                    programas te ofrece la vía perfecta para alcanzar tus metas
                    y desarrollar todo tu potencial para forjar el futuro de la
                    educación.
                </p>
            </div>
        </div>
    );
};

export default About;
