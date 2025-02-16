import ContactElements from "./ContactElements"
import ContactTitle from "./ContactTitle"

function ContactBottom() {
  return (
    <>
        <div className="contact-bottom">
          <div className="container">
            <ContactTitle />
            <ContactElements />
          </div>
        </div>
    </>
  )
}

export default ContactBottom