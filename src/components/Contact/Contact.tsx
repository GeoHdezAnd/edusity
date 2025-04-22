import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Enviando...");

        const formElement = event.currentTarget; // Store the form reference

        try {
            const formData = new FormData(formElement);
            formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Formulario enviado con éxito");
                formElement.reset();
            } else {
                console.error("Error", data);
                setResult(data.message || "Error al enviar el formulario");
            }
        } catch (error) {
            console.error("Error de red:", error);
            setResult("Error de conexión. Intente nuevamente.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact" id="contacto">
            <div className="contact-col">
                <h3>
                    Envíanos un mensaje <img src={msg_icon} alt="email" />
                </h3>
                <p>
                    No dude en contactarnos a través del formulario de contacto
                    o consultar nuestra información de contacto a continuación.
                    Sus comentarios, preguntas y sugerencias son importantes
                    para nosotros, ya que nos esforzamos por brindar un servicio
                    excepcional a nuestra comunidad universitaria.
                </p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="mail-icon" />
                        correo@correo.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="phone-icon" /> +52
                        234-123-98-76
                    </li>
                    <li>
                        <img src={location_icon} alt="location-icon" /> Puebla,
                        México
                    </li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Tu nombre</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        required
                    />
                    <label htmlFor="phone">Número de teléfono</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Ingresa tu número de teléfono"
                        pattern="[0-9]{10}"
                        title="Por favor ingresa un número de 10 dígitos"
                    />
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo electrónico"
                        required
                    />
                    <label htmlFor="message">Escribe un mensaje</label>
                    <textarea
                        name="message"
                        rows={6}
                        placeholder="Ingresa tu mensaje"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="btn dark-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                        <img src={white_arrow} alt="arrow" />
                    </button>
                </form>
                <span className="result-message">{result}</span>
            </div>
        </div>
    );
};

export default Contact;
