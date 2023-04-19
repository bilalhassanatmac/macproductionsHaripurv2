import "./contactCard.css";
import contactImage from "../../images/contactCard/contact.svg"

const ContactCard = () => {
  return (
    <div className="contact-card" >
        <form className="contact-card-left">
        <h2>Get In Touch</h2>
            <div className="contact-card-inputs" >
                <div className="input-field" >
                    <input formAction="https://formsubmit.co/your@email.com" method="POST" type="text" placeholder="Your Name" />
                </div>
                <div className="input-field" >
                    <input type="Email" placeholder="Email" />
                </div>
            </div>
            <div className="contact-card-inputs" >
                <div className="input-field" >
                    <input type="text" placeholder="Your Phone" />
                </div>
                <div className="input-field" >
                    <input type="Email" placeholder="Website" />
                </div>
            </div>
            <div className="contact-card-inputs" >
                <div className="input-field-big" >
                    <textarea cols="10" rows="4" aria-invalid="false" placeholder="Let us know what you need." name="message"></textarea>
                </div>
            </div>
        <div className="button button-blue button-big" >
            Send Message
        </div>
        </form>
        <img src={contactImage} alt="contact image" />
    </div>
  )
}

export default ContactCard;