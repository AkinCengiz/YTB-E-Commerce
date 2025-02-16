function ContactInfo() {
  return (
    <>
      <div className="contact-info">
        <div className="contact-info-item">
          <div className="contact-info-texts">
            <strong> Clotya Store</strong>
            <p className="contact-street">
              Clotya Store Germany — 785 15h Street, Office 478/B Green Mall
              Berlin, De 81566
            </p>
            <a href="tel:Phone: +1 1234 567 88">Phone: +1 1234 567 88</a>
            <a href="mailto:Email: contact@example.com">
              Email: contact@example.com
            </a>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-texts">
            <strong> Opening Hours</strong>
            <p className="contact-date">Monday - Friday : 9am - 5pm</p>
            <p>Weekend Closed</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
