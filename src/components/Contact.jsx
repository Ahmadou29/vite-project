

const Contact = () => {
  return (
    <section className=" py-5 w-full">
      <div className="container">
        <h1 className="text-center text-dark">CONTACT US</h1>
        <hr />

        {/* Chat Section */}
        <div className="text-center text-dark mt-4">
          <i className="bi bi-chat-text" style={{ fontSize: "24px", color: "#e09f9f" }}></i>
          <p>
            Need an ASAP answer? Contact us via chat, 24/7! For existing furniture
            orders, please call us.
          </p>
          <button className="btn btn-dark m-auto d-flex align-items-center justify-content-center">
            CHAT WITH US
          </button>
        </div>

        {/* Text Section */}
        <div className="text-center text-dark mt-4">
          <i className="bi bi-envelope-paper" style={{ fontSize: "24px", color: "#e09f9f" }}></i>
          <p>
            You can text us at 800-309-2622 – or click on the “text us” link below
            on your mobile device. <br />
            Please allow the system to acknowledge a simple greeting (even “Hi”
            will do!) before providing your question/order details. <br />
            Consent is not required for any purchase. Message and data rates may
            apply. Text messaging may not be available via all carriers.
          </p>
          <button className="btn btn-dark m-auto d-flex align-items-center justify-content-center">
            TEXT US
          </button>
        </div>

        {/* Social Section */}
        <div className="text-center text-dark mt-4">
          <i className="bi bi-twitter" style={{ fontSize: "24px", color: "#e09f9f" }}></i>
          <p>
            To send us a private or direct message, like @Open Fashion on Facebook or
            follow us on Twitter. <br />
            We’ll get back to you ASAP. Please include your name, <br />
            order number, and email address for a faster response!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
