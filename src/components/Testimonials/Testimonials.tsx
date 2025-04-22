import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    const slider = useRef<HTMLUListElement>(null);
    let tx = 0;
    const slideForwar = () => {
        if (!slider.current) return;

        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (!slider.current) return;
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };
    return (
        <div className="testimonials" id="testimonios">
            <img
                src={next_icon}
                alt="next-icon"
                className="next-btn"
                onClick={slideForwar}
            />
            <img
                src={back_icon}
                alt="back-icon"
                className="back-btn"
                onClick={slideBackward}
            />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="user-1" />
                                <div>
                                    <h3>Estefania Rivera</h3>
                                    <span>Edusity, México</span>
                                </div>
                            </div>
                            <p>
                                Elegir estudiar en Edusity fue una de las
                                mejores decisiones que he tomado. La comunidad
                                solidaria, las instalaciones de vanguardia y el
                                compromiso con la excelencia académica han
                                superado con creces mis expectativas.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="user-2" />
                                <div>
                                    <h3>Juan Ramirez</h3>
                                    <span>Edusity, México</span>
                                </div>
                            </div>
                            <p>
                                Elegir estudiar en Edusity fue una de las
                                mejores decisiones que he tomado. La comunidad
                                solidaria, las instalaciones de vanguardia y el
                                compromiso con la excelencia académica han
                                superado con creces mis expectativas.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="user-3" />
                                <div>
                                    <h3>Andrea Sosa</h3>
                                    <span>Edusity, México</span>
                                </div>
                            </div>
                            <p>
                                Elegir estudiar en Edusity fue una de las
                                mejores decisiones que he tomado. La comunidad
                                solidaria, las instalaciones de vanguardia y el
                                compromiso con la excelencia académica han
                                superado con creces mis expectativas.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="user-4" />
                                <div>
                                    <h3>Edgar Cervantes</h3>
                                    <span>Edusity, México</span>
                                </div>
                            </div>
                            <p>
                                Elegir estudiar en Edusity fue una de las
                                mejores decisiones que he tomado. La comunidad
                                solidaria, las instalaciones de vanguardia y el
                                compromiso con la excelencia académica han
                                superado con creces mis expectativas.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
