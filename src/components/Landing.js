import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./tesodev.png";
import FooterImg from "./footerImg.png";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import "./Landing.css";

function Landing() {
  return (
    <div className="container-fluid mt-5">
      <div className="d-flex flex-row-reverse me-5">
        <Link to="/addlink">
          <Button type="button">Add new record</Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center logo mt-5">
        <img alt="logo" src={Logo} />
      </div>
      <div className="search-div">
        <h3 className="bold-text-1">Find in records</h3>
        <SearchBar placeholder="Search"></SearchBar>
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
              title="AkinonMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.281307874507!2d28.887040115673273!3d41.01910112670717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabae205ad09c9%3A0x1044360e0f062f8c!2sAkinon!5e0!3m2!1str!2str!4v1665557340358!5m2!1str!2str"
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
