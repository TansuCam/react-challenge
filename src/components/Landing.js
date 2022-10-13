import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./img/tesodev.png";
import FooterImg from "./img/footerImg.png";
import Slider from "./Slider";
import SearchResult from "./SearchResult";
import "./styles/Landing.css";

function Landing() {
  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-row-reverse me-5">
        <Link to="/addlink">
          <Button type="button">Add new record</Button>
        </Link>
      </div>
      <div
        className="d-flex justify-content-center align-items-center logo mt-5"
        style={{ flexDirection: "column", flexWrap: "wrap" }}
      >
        <img alt="logo" src={Logo} width="280" />
        <p className="search-app-text">Search app</p>
      </div>
      <div className="search-div">
        <h3 className="bold-text-1">Find in records</h3>
        <SearchResult placeholder="Search"></SearchResult>
      </div>
      <p className="top-news">Top News</p>
      <div className="d-flex justify-content-center ">
        <Slider></Slider>
      </div>

      <footer>
        <div className="d-flex justify-content-between align-items-center pt-4 px-5">
          <div className="d-flex">
            <img alt="footer-img" src={FooterImg} />
            <p className="footer-info">
              <strong>İletişim Adres:</strong>
              <br /> Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
              Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
              <br />
              <br />
              <strong>Email: bilgi@tesodev.com</strong>
            </p>
          </div>
          <div className="me-2">
            <iframe
              title="TesodevMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.279562038667!2d28.888759415673352!3d41.01913932670472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1665666063022!5m2!1str!2str"
              width="470"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Landing;
