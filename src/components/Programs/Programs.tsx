import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
    return (
        <div className="programs " id="programas">
            
            <div className="program">
                <img src={program_1} alt="program-1" />
                <div className="caption">
                    <img src={program_icon_1} alt="icon-1" />
                    <p>Licenciaturas</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="program-2" />
                <div className="caption">
                    <img src={program_icon_2} alt="icon-2" />
                    <p>Maestrias</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="program-3" />
                <div className="caption">
                    <img src={program_icon_3} alt="icon-3" />
                    <p>Postgrados</p>
                </div>
            </div>
        </div>
    );
};

export default Programs;
