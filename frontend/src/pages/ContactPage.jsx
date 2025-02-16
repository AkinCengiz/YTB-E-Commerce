import ContactBottom from "../components/contacts/ContactBottom";
import ContactTop from "../components/contacts/ContactTop";

function ContactPage() {
  return (
    <>
      <section className="contact">
        <ContactTop />
        <ContactBottom />
      </section>
    </>
  );
}

export default ContactPage;
