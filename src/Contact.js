import "./Caldata.css";
import Header from "./components/Header";

function Contact() {
  return (
    <div className="App">
      <Header />
      <div className="c-wrapper">
        <h1 className="c">Contact Me</h1>
        <p className="c">
          If you wish to reach me, please send me a message on{" "}
          <a
            href="https://www.linkedin.com/in/quinn-patwardhan-3b32441b4/"
            target="_blank"
            rel="noreferrer"
            className="error-link"
          >
            LinkedIn.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
